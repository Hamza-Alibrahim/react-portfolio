/* eslint-disable react/no-unescaped-entities */
import profileImage from "../assets/profilepic7.png";
const Main = () => {
  return (
    <div className="my-24 mx-auto w-3/4 flex flex-col justify-left md:flex-row">
      <img className="w-full md:w-1/2" src={profileImage} alt="profilepic" />
      <div className="mt-6 ml-4 text-white">
        <h1 className="text-5xl sm:text-6xl font-bold">
          <span className="text-transparent  bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text">
            I'm a
          </span>
          <br />
          Consultant
        </h1>
        <p className="my-5">
          My name is Jhon Doe and I have +5 years experience in web development
        </p>
        <button className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-md px-4 py-2">
          Download CV
        </button>
        <button className="px-4 py-2 rounded-md border ml-2">Contact</button>
      </div>
    </div>
  );
};
export default Main;
