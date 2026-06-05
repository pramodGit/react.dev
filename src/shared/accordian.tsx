import { useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../assets/accordian.css";
import { Link } from "react-router-dom";

interface AccordionItemProps {
  question: string;
  answer: string | string[];
  isOpen: boolean;
  onClick: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="wrapper">
      <button
        className={`question-container ${isOpen ? 'active' : ''}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} />
      </button>

      <div
        ref={contentRef}
        className="answer-container"
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          overflow: 'hidden',
          transition: 'height 0.3s ease',
        }}
      >
        <div className="answer-content">
          {Array.isArray(answer) ? (
            <ul>
              {answer.map((item: string, idx: number) => {
                // Check if item is a link
                const linkMatch = item.match(/<a\s+href=['"]([^'"]+)['"]>(.*?)<\/a>/i);
                if (linkMatch) {
                  const [, href, text] = linkMatch;
                  return (
                    <li key={idx}>
                      <Link to={href}>{text}</Link>
                    </li>
                  );
                }

                // Check if it's a <pre> or other raw HTML
                if (item.includes('<pre') || item.includes('<code')) {
                  return (
                    <li key={idx}>
                      <div dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  );
                }

                // Fallback plain text
                return <li key={idx}>{item}</li>;
              })}
            </ul>
          ) : typeof answer === 'string' ? (
            // Single string answer
            (() => {
              const linkMatch = answer.match(/<a\s+href=['"]([^'"]+)['"]>(.*?)<\/a>/i);
              if (linkMatch) {
                const [, href, text] = linkMatch;
                return <Link to={href}>{text}</Link>;
              }

              if (answer.includes('<pre') || answer.includes('<code')) {
                return <div dangerouslySetInnerHTML={{ __html: answer }} />;
              }

              return <p>{answer}</p>;
            })()
          ) : null}
        </div>

      </div>
    </div>
  );
};