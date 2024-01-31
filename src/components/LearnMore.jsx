function LearnMore() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div
          className={`bg-[#adff48]
              w-7 sm:grid place-content-center h-7 p-2 rounded-full`}
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
        <span className={` ml-4 text-[#adff48] `}>Learn more</span>
      </div>
    </div>
  );
}

export default LearnMore;
