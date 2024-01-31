import LearnMore from "./LearnMore";
import StartSec from "./StartSec";

function CaseStudy() {
  return (
    <div>
      <StartSec
        title={"Case Study"}
        paragraph={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          \n Animi  `}
      />
      <div className="flex justify-between bg-neutral-900 text-white  p-8 my-32 rounded-3xl md:flex-row flex-col">
        <div className="md:border-r-2 gap-6 md:border-b-0 border-b-2 border-white p-8  flex flex-col  ">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel error
            aperiam aliquid, possimus deleniti assumenda, perspiciatis hic
            quibusdam aliquam.
          </p>
          <LearnMore />
        </div>
        <div className="md:border-r-2 gap-6 md:border-b-0 border-b-2 border-white p-8 flex flex-col justify-between ">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel error
            aperiam aliquid, possimus deleniti assumenda, perspiciatis hic
            quibusdam aliquam.
          </p>
          <LearnMore />
        </div>
        <div className=" p-8 flex flex-col gap-6 justify-between">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel error
            aperiam aliquid, possimus deleniti assumenda, perspiciatis hic
            quibusdam aliquam.
          </p>
          <LearnMore />
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
