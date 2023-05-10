export function HeroSearch() {
  return (
    <main>
      <div className="bg-hero-img bg-center w-screen bg-pink-300 min-h-[360px] flex justify-center items-center relative">
        <div className="flex flex-col items-center text-white">
          <h2 className="text-5xl font-black">SplashSeeker</h2>
          <p>Thousands images one click away</p>
        </div>
        <a
          className="text-white absolute bottom-1 right-1 font-sans text-xs"
          href="https://dribbble.com/shots/6727912/attachments/6727912-Postmodernism?mode=media"
        >
          by : Samji_illustrator
        </a>
      </div>
      <input className="" type="input" placeholder="Search your image..." />
    </main>
  );
}
