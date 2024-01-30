import { useState } from "react";

function Syllabus({ syllabus }) {
  return (
    <div className="syllabus">
      <h3>Syllabus of the course</h3>

      <div className="accordion2">
        {syllabus?.map((el, i) => (
          <AccordionItem
            title={el.topic}
            text={el.content}
            num={i}
            key={el.week}
          />
        ))}
      </div>
    </div>
  );
}

export default Syllabus;

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item2 ${isOpen ? "open2" : ""}`} onClick={handleToggle}>
      <p className="number2">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title2">
        Week {num + 1}
        {" - " + title}
      </p>
      <p className="icon2">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box2">{text}</div>}
    </div>
  );
}
