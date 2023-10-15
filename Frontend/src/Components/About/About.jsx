import img from "../../assets/about.jpg";

export default function About() {
  return (
    <div className="py-4 flex justify-between items-center">
      <div className="info ms-5 w-1/2">
        <h3 className="capitalize ps-12 relative text-black dark:text-slate-100 after:absolute after:top-1/2 after:-translate-1/2 after:left-0 after:w-10 after:h-1 after:bg-red-600 ">
          about
        </h3>
        <h3 className="mt-3 text-black dark:text-white hover:text-white hover:dark:text-white text-3xl">
          Access, Read, Practice & Engage with Digital Content (eBook)
        </h3>
        <p className="mt-3 leading-7 text-black dark:text-white hover:text-white hover:dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
          magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <form action="" className="mt-4">
          <input
            type="text"
            className="p-2 rounded focus:outline-none placeholder:text-black placeholder:dark:text-white w-2/4"
            placeholder="Enter Your Email Address"
          />
          <button
            type="submit"
            className="bg-red-600 ms-2 p-2 w-20 hover:bg-red-500 transition-all"
          >
            login
          </button>
        </form>
      </div>
      <div className="img w-1/2">
        <img src={img} alt="" className="w-full " loading="lazy" />
      </div>
    </div>
  );
}
