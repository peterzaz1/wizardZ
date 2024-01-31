import { heroImg } from "../assets";

function CTA() {
  return (
    <div className="flex justify-between bg-[#f3f3f3] p-8 my-32 rounded-3xl md:flex-row flex-col-reverse">
      <div>
        <h2 className="text-[22px] font-semibold">
          Let&#39;s make things happen
        </h2>{" "}
        <p className="text-gray-600 mt-6 max-w-[470px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          voluptas assumenda illo nemo, voluptate recusandae?
        </p>
        <button className="py-4 px-5  text-white rounded-lg mt-6 bg-neutral-900">
          Get your free proposal
        </button>
      </div>
      <div>
        <img src={heroImg} className="w-80" alt="img" />
      </div>
    </div>
  );
}

export default CTA;
