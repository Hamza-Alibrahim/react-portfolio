import about from "../assets/about.jpg";
const About = () => {
  return (
    <div
      className="text-white my-20 w-3/4 m-auto flex flex-col sm:flex-row justify-between items-center"
      id="about"
    >
      <div>
        <h1 className="w-fit text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-3xl font-bold">
          About me
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          enim et veritatis modi incidunt ad nisi, dolores facere nam? Magnam
          cumque error velit quos aut animi omnis quaerat vero nemo.Lorem ipsum
          dolor sit amet,Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Corporis, sit delectus maiores veniam voluptatem consectetur
          numquam dignissimos laborum vero assumenda iste, rerum velit nihil
          maxime est laboriosam facilis. Fugit, aspernatur.
        </p>
      </div>
      <img
        className="w-full sm:w-1/3 mt-10 sm:mt-0  sm:ml-12 rounded-md"
        src={about}
        alt="aboutpic"
      />
    </div>
  );
};
export default About;
