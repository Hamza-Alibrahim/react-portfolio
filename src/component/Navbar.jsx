const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-3 px-2 w-3/4 m-auto border border-gray-500">
      <h1 className="text-transparent cursor-pointer bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-3xl font-bold">
        J. Doe
      </h1>
      <nav className="w-fit sm:w-1/3 flex justify-between text-gray-300 ">
        <a className="text-sm sm:text-base ml-2 sm:ml-0" href="#about">
          About
        </a>
        <a className="text-sm sm:text-base ml-4 sm:ml-0" href="#work">
          Work
        </a>
        <a className="text-sm sm:text-base ml-4 sm:ml-0" href="#contact">
          Contact
        </a>
      </nav>
    </div>
  );
};
export default Navbar;
