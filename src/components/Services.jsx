import { heroImg, bikeImg } from "../assets";
import StartSec from "./StartSec";

function Services() {
  return (
    <section id="services" className="mt-32">
      <StartSec
        title={"Services"}
        paragraph={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          \n Animi vitae iste ipsum ipsa ea eum quis quibusdam `}
      />
      <div className="flex flex-1 mt-10 flex-col sm:flex-row  items-center gap-16 flex-wrap">
        <Card title={"Search engine \n optimiztio"} img={heroImg} />
        <Card
          title={"pay per click \n advartising"}
          img={bikeImg}
          dark={true}
        />
        <Card title={"Social media \n marketing"} img={bikeImg} dark={true} />
        <Card title={"E-mail \n marketing"} img={heroImg} />
      </div>
    </section>
  );
}

// eslint-disable-next-line react/prop-types
function Card({ title, img, dark }) {
  return (
    <div
      className={`flex flex-1 md:flex-row justify-between gap-4
       rounded-3xl p-4 md-p8 border-2 border-b-8 border-neutral-900
       flex-col-reverse max-w-[500px] min-w-[330px] md:min-w-[400px] ${
         dark ? "bg-neutral-900" : ""
       }  `}
    >
      <div className="flex flex-row md:flex-col justify-between items-center sm:items-stretch  ">
        <h3
          className={`text-xl ${
            dark ? "bg-white" : "bg-[#adff48]"
          }  inline rounded-md p-1`}
        >
          {title}
        </h3>
        <div className="flex items-center gap-4">
          <div
            className={` ${
              dark ? "bg-white" : "bg-[#adff48]"
            } hidden  w-7 sm:grid place-content-center h-7 p-2 rounded-full`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
            </svg>
          </div>
          <span className={` ml-4 ${dark ? "text-white" : "text-black"}`}>
            Learn more
          </span>
        </div>
      </div>
      <div className="md:w-[50%] w-full h-44 bg-blue-50   rounded-lg">
        <img src={img} className="w-full h-full" alt="" />
      </div>
    </div>
  );
}

export default Services;
