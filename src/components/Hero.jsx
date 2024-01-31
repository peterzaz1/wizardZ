import { heroImg } from "../assets";

function Hero() {
  return (
    <section className="flex md:flex-row md:justify-between items-center flex-col mt-10 sm:mt-20">
      <div>
        <h1 className="xs:text-[42px] font-semibold text-[32px] leading-[50px] text-black  w-full">
          Navigating the <br className="hidden sm:block" />
          digital landscape <br className="hidden sm:block" /> for success
        </h1>
        <p className="mt-6 max-w-[470px] text-gray-500 text-[18px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          praesentium corrupti, dolorem, vitae debitis unde et similique amet
          recusandae nam possimus
        </p>
        <button className="py-4 px-5  text-white rounded-lg mt-6 bg-neutral-900">
          Book a consultation
        </button>
      </div>
      <div className=" flex justify-end  md:mt-0 mt-10">
        <img src={heroImg} className=" h-full w-[600px] " alt="hero img" />
      </div>
    </section>
  );
}

export default Hero;
