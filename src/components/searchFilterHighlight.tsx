import React, { useCallback, useEffect, useState } from "react";

const items = [
  "Apple", "Banana", "Grapes", "Orange", "Pineapple",
  "Mango", "Strawberry", "Watermelon"
];

const SearchFilterHighlight = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const getHighlightedText = (text: string, highlight: string) => {
    // 🔧 TODO: Highlight the matching part
    // You can use a RegExp or split/map logic
    if (!highlight.trim()) return text;

    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);

    return (
        <>
        {parts.map((part, index) =>
            regex.test(part) ? <mark key={index}>{part}</mark> : part
        )}
        </>
    );
    // return text;
  };
    // Debounce with useCallback
    const debounceInput = useCallback((value: string) => {
        const timeout = setTimeout(() => {
            setDebouncedQuery(value);
        }, 500); // 500ms debounce

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const clear = debounceInput(query);
        return clear;
    }, [query, debounceInput]);

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(debouncedQuery.toLowerCase())
    );


  return (
    <div>
      <input
        type="text"
        placeholder="Search fruits..."
        value={query}
        onChange={handleInputChange}
      />
      <ul>
        {filteredItems.length ? (
          filteredItems.map((item, index) => (
            <li key={index}>{getHighlightedText(item, debouncedQuery)}</li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilterHighlight;
