import React, { useEffect } from "react";
import { ImageData } from "../Images.type";
import { Loading } from "./Loading";
import { DownloadButton } from "./DownloadButton";

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
    <div className="bg-modal-bg fixed top-0 left-0 right-0 z-50  w-full h-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 font-sans">
      <div className="flex items-start justify-center">
        <div className="bg-white rounded-lg shadow relative max-w-[90vw]">
          <div className="flex justify-between items-center pt-4 px-4 rounded-t ">
            <div>
              <h3 className=" text-xl font-semibold text-gray-900 truncate max-w-[345px] md:max-w-[800px]">
                {selectedInfo.description ?? "Untitled"}
              </h3>
            </div>
            <div className="flex justify-between ml-2 gap-3">
              <DownloadButton url={selectedInfo.urls.small} />
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  top-4 right-4 inline-flex items-center"
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
          </div>
          <div className="flex items-center pl-4">
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

          <div className="mx-8 px-4 p-6 space-y-6">
            <div className="flex justify-center items-center">
              {selectedInfo ? (
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
              ) : (
                <Loading />
              )}
            </div>
            <div className="flex text-sm justify-between text-gray-600">
              <div>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  {formatDate(selectedInfo.created_at)}
                </p>
              </div>
              <div className="mb-2">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                  {selectedInfo.width} x {selectedInfo.height}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
