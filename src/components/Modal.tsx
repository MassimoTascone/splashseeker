import React, { useEffect, useState } from "react";
import { ImageData } from "../Images.type";
import { Loading } from "./Loading";

interface ModalProps {
  display: boolean;
  selectedInfo: ImageData;
  closeModal: React.MouseEventHandler<HTMLButtonElement>;
}

const formatDate = (uglyDate: string) => {
  const date = new Date(uglyDate);
  const readableDate = date.toLocaleDateString();
  return readableDate;
};

export function Modal({ display, selectedInfo, closeModal }: ModalProps) {
  const [showDownloadSelect, setShowDownloadSelect] = useState(false);

  useEffect(() => {
    display
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [display]);

  if (display === false) return null;
  return (
    <div className="bg-modal-bg fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 font-sans">
      <div className="flex items-start justify-center ">
        <div className="bg-white rounded-lg shadow relative">
          <div className="flex justify-between items-center p-4 rounded-t ">
            <div>
              <h3 className=" text-xl font-semibold text-gray-900 truncate max-w-[800px]">
                {selectedInfo.description ?? "Untitled"}
              </h3>
              <div className="flex items-center">
                <img
                  className="rounded-full mr-2"
                  src={selectedInfo.user.profile_image.small}
                  alt={selectedInfo.username}
                />
                <h4 className="text-sm hover:underline">
                  <a
                    href={selectedInfo.user.links.html}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {selectedInfo.user.username}
                  </a>
                </h4>
              </div>
            </div>

            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-4 right-4 inline-flex items-center"
              onClick={closeModal}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-modal mx-8 px-4 p-6 space-y-6">
            <div className="flex justify-center items-center">
              {!selectedInfo ? (
                <Loading />
              ) : (
                <a
                  href={selectedInfo.urls.regular}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    className="max-h-[30rem]"
                    src={selectedInfo.urls.regular}
                    alt={selectedInfo.alt_description}
                  />
                </a>
              )}
            </div>
            <div className="ml-9 grid">
              <div>
                <h3 className="text-md font-bold">Description</h3>
                <p>{selectedInfo.alt_description}</p>
              </div>
              <div>
                <h3 className="text-md font-bold">Created</h3>
                <p>{formatDate(selectedInfo.created_at)}</p>
              </div>
              <div>
                <h3 className="text-md font-bold">Format</h3>
                <p>
                  {selectedInfo.width} x {selectedInfo.height}
                </p>
              </div>
              <div className="items-center justify-center">
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-white bg-splash-pink hover:bg-splash-pink-dark focus:outline-none font-medium text-lg rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                  type="button"
                  onClick={() =>
                    setShowDownloadSelect((prevState) => !prevState)
                  }
                >
                  Download
                  <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {showDownloadSelect && (
                  <div
                    id="dropdown"
                    className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 max-w-[115px]"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 "
                      aria-labelledby="dropdownDefaultButton"
                    >
                      {}
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 "
                        >
                          Dashboard
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
