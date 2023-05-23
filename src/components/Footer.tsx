export function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2b2f54"
          fill-opacity="1"
          d="M0,192L48,208C96,224,192,256,288,250.7C384,245,480,203,576,186.7C672,171,768,181,864,197.3C960,213,1056,235,1152,245.3C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <footer className="w-full bg-splash-purple pb-8 flex items-center justify-around text-white  text-xs md:text-sm">
        <a href="#" className="flex justify-center items-center">
          <h1 className="font-mono font-bold">
            SplashSeeker<span className="text-2xl text-splash-pink">.</span>
          </h1>
        </a>
        <p className="font-normal flex justify-center items-center">
          &copy; 2023 SplashSeeker.
        </p>
        <p className="flex justify-center items-center">
          Made by Massimo Tascone
        </p>
      </footer>
    </>
  );
}
