import { useState } from "react";

export function Card(props) {
  const [displayInfo, setDisplayInfo] = useState(false);

  return (
    <div className="pb-5">
      <div
        className="relative"
        onMouseEnter={() => setDisplayInfo(true)}
        onMouseLeave={() => setDisplayInfo(false)}
        onClick={() => props.ModalClick(props.info)}
      >
        <img
          className="rounded-md cursor-pointer hover:brightness-75"
          src={props.info.urls.small}
          alt={props.info.alt_description}
        />
        {displayInfo && (
          <>
            <div className="text-white absolute top-2 left-0 ml-2 font-semibold truncate max-w-[19rem]">
              {props.info.description ?? "Untitled"}
            </div>
            <div className="flex items-center px-3 absolute bottom-2 left-0 text-white w-full">
              <img
                className="rounded-full"
                src={props.info.user.profile_image.small}
                alt={props.info.username}
              />
              <span className="font-sans pl-2 font-semibold">
                {props.info.user.username}
              </span>
              <span className="text-white ml-auto flex items-center justify-center text-xs">
                {props.info.likes}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 ml-[2px]"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
