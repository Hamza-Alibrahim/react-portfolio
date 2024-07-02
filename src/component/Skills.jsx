import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";

const Skills = () => {
  let skills = [
    { name: "html", img: html },
    { name: "css", img: css },
    { name: "javascript", img: javascript },
    { name: "tailwind", img: tailwind },
    { name: "react", img: react },
  ];
  return (
    <div className="w-3/4 pt-5 text-white m-auto border border-gray-500 sm:py-2 sm:pl-5">
      <ul className="flex justify-between items-center flex-col text-center sm:flex-row">
        <li className="text-left mb-10 sm:mb-0">
          <h1 className="text-xl">My Tech Stack</h1>
        </li>
        {skills.map((e, i) => {
          return (
            <li key={i} className="mb-10 sm:mb-0">
              <img className="w-1/2 m-auto mb-2" src={e.img} alt="" />
              <p className="text-lg xl:text-2xl">{e.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Skills;
