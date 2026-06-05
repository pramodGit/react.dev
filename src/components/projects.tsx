import { useState } from "react";
import data from "../data/projects.data";
import { AccordionItem } from "../shared/accordian";


const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.title}
          answer={item.description}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Projects;
