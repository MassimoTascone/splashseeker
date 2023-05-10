export function Header() {
  return (
    <header className="flex justify-between items-center bg-indigo px-8 py-5 text-[#404040]">
      <a href="">
        <h1 className="font-mono font-bold items-center">
          SplashSeeker<span className="text-2xl">.</span>
        </h1>
      </a>
      <div className="font-sans hidden sm:block text-base">
        Find your image quicker
      </div>
    </header>
  );
}
