import { Profiler, useEffect } from "react";
import data from "../data/qa.data";
import { AccordionItem } from "../shared/accordian";
import { useSearch } from "../core/context/searchContext";


const QuestinosAnswers = () => {
  const { searchTerm } = useSearch();

  const filtered = data.filter((item) => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    console.log("QA json length ", data.length);
  }, []);
  function onRender(id: any, phase: any, actualDuration: any, baseDuration: any, startTime: any, commitTime: any) {
    // Aggregate or log render timings...
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime);
  }

  return (
    <Profiler id="QA" onRender={onRender}>
      <div className="container">
        {filtered.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={true}
            onClick={() => {}}
          />
        ))}
      </div>
    </Profiler>
  );
};

export default QuestinosAnswers;
