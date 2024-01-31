// eslint-disable-next-line react/prop-types
function StartSec({ title, paragraph }) {
  return (
    <div className="flex flex-col md:flex-row items-center sm:text-left text-center gap-8">
      <h3 className="text-3xl bg-[#adff48] inline rounded-md p-1">{title}</h3>
      <p className="max-w-[470px] md:max-w-none text-center">{paragraph}</p>
    </div>
  );
}

export default StartSec;
