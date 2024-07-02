const Contact = () => {
  return (
    <div className="w-3/4 mx-auto mb-10" id="contact">
      <h1 className="mx-auto w-fit text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-3xl font-bold mb-7">
        Cotact Me
      </h1>
      <form
        className=" bg-zinc-900 p-5 rounded-md text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col sm:flex-row justify-between">
          <input
            className="flex-1 mb-3 sm:mr-2 bg-transparent border outline-none transition-colors focus:border-orange-500 p-3 rounded-md"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="flex-1 mb-3 sm:ml-2 bg-transparent border outline-none transition-colors focus:border-orange-500 p-3 rounded-md"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <textarea
          className="w-full bg-transparent border focus:border-pink-500 transition-colors mb-3 rounded-md h-32 outline-none p-3"
          placeholder="Your Message"
        ></textarea>
        <button className="w-full rounded-md bg-gradient-to-r from-orange-500 to-pink-500 p-3">
          Send
        </button>
      </form>
    </div>
  );
};
export default Contact;
