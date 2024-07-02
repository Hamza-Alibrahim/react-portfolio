import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import proj5 from "../assets/proj5.png";
import proj6 from "../assets/proj6.png";
const Work = () => {
  let arr = [
    { img: proj1, id: 1 },
    { img: proj2, id: 2 },
    { img: proj3, id: 3 },
    { img: proj4, id: 4 },
    { img: proj5, id: 5 },
    { img: proj6, id: 6 },
  ];
  return (
    <div className="w-3/4 mx-auto my-40" id="work">
      <h1 className=" bg-gradient-to-r from-orange-500 to-pink-500 w-fit bg-clip-text text-transparent text-3xl font-bold">
        Work
      </h1>
      <p className="text-gray-500 mb-5">Ckeck out some of my recent work</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
        {arr.map((e) => {
          return (
            <div
              key={e.id}
              className=" relative hover:scale-105 transition-transform rounded-md overflow-hidden"
            >
              <img src={e.img} alt={e.img} />
              <div className="w-full h-full bg-light absolute left-0 top-0 opacity-0 transition-opacity hover:opacity-100 flex items-center justify-center flex-col">
                <h1 className="mb-4 text-2xl font-bold text-white">Project</h1>
                <button className=" bg-gray-200 px-3 py-1 rounded-md">
                  Live
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Work;
