import useUrlDownload from "../hooks/useUrlDownload";

interface ButtonProps {
  url: string;
}

export function DownloadButton({ url }: ButtonProps) {
  const download = useUrlDownload();

  return (
    <button
      className="text-white bg-splash-pink hover:bg-splash-pink-dark focus:outline-none font-medium text-lg rounded-lg text-sm p-1.5 text-center inline-flex items-center"
      onClick={(e) => {
        e.stopPropagation();
        download(url);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
    </button>
  );
}
