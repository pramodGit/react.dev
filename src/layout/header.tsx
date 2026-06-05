import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../core/context/searchContext';

export default function Header() {
    const title = 'React Development';
    const { setSearchTerm } = useSearch();
    const [inputValue, setInputValue] = useState('');
    
    useEffect(() => {
        const handler = setTimeout(() => {
            setSearchTerm(inputValue); // Debounced update
        }, 1000);

        return () => clearTimeout(handler); // Cleanup
    }, [inputValue, setSearchTerm]);
    return(
        <header>
            <h1><Link to="/">{title}</Link></h1>
            <nav key="navigation">
                <a href="https://dev.pramod.click/react">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                </a>
            </nav>
            <div className="header-search">
                <input
                    className="main-search-input"
                    type="search"
                    placeholder="Search Here..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
        </header>
    )
}