export function HeroSearch() {
  return (
    <main>
      <div className="bg-hero-img bg-center w-screen bg-pink-300 min-h-[360px] flex justify-center items-center relative">
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
      <div className="max-w-[628px] w-full mx-auto">
        <input
          className="shadow-xl h-[65px] w-full rounded-lg translate-y-[-50%] text-base px-8 bg-white  focus:outline-splash-pink placeholder:italic placeholder:text-slate-400 relative"
          type="input"
          placeholder="Search your image..."
        />
      </div>
    </main>
  );
}
