interface SearchProps {
  searchValue: (value: string) => void;
}

export function HeroSearch({ searchValue }: SearchProps) {
  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = e.currentTarget.value;
      searchValue(value);
    }
  };

  return (
    <main>
      <div className="bg-hero-img bg-center  w-screen  min-h-[260px] sm:min-h-[360px] flex justify-center items-center relative">
        <div className="flex flex-col items-center text-white">
          <h2 className="text-5xl font-black">SplashSeeker</h2>
          <p className="text-xl">Thousands images one click away</p>
        </div>
        <a
          className="text-white absolute bottom-1 right-1 font-sans text-xs"
          href="https://dribbble.com/shots/6727912/attachments/6727912-Postmodernism?mode=media"
        >
          by : <span className="underline">Samji_illustrator</span>
        </a>
      </div>
      <div className="max-w-[628px] w-full mx-auto relative">
        <input
          className="shadow-xl h-[65px] w-full rounded-lg translate-y-[-50%] text-base px-9 bg-white  focus:ring-4 focus:ring-splash-pink focus:outline-none placeholder:italic placeholder:text-slate-400"
          type="input"
          placeholder="Search your image..."
          onKeyDown={handleChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="rgb(148 163 184)"
          className="w-5 h-5 absolute left-3 bottom-[3.5rem] "
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </main>
  );
}
