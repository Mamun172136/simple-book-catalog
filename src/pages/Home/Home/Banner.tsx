import book1 from "../../../assets/book1.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        {/* <img src={chair} className="max-w-sm rounded-lg shadow-2xl" /> */}

        <img
          src={book1}
          className="w-full lg:w-3/4 xl:w-1/2 max-w-screen-xl  rounded-lg shadow-2xl"
          data-aos="fade-up-right"
          data-aos-delay="100"
          data-aos-duration="1800"
        />

        {/* <img
            src={chair}
            className="w-full lg:w-1/2 max-w-screen-xl rounded-lg shadow-2xl"
          /> */}
        <div
          data-aos="fade-up-left"
          data-aos-delay="100"
          data-aos-duration="1800"
        >
          <h1 className="text-5xl font-bold">
            There is no Friend as Loyal as Book
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className=" uppercase text-white btn btn-primary font-bold bg-gradient-to-r from-secondary-500 to-primary-500">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
