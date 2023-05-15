import React, { useEffect } from "react";

interface ModalProps {
  display: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const formatDate = (uglyDate) => {
  const date = new Date(uglyDate);
  const readableDate = date.toLocaleDateString();
  return readableDate;
};

export function Modal({ display, handleClick, selectedInfo }: ModalProps) {
  console.log(selectedInfo);
  useEffect(() => {
    display
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");

    // Cleanup function to restore scrolling on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [display]);

  if (display === false) return null;
  return (
    <div className=" bg-modal-bg fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 flex items-start justify-between ">
      <div className=" w-full max-h-full">
        <div className="bg-white rounded-lg shadow ">
          <div className="flex justify-between p-4 border-b rounded-t ">
            <div>
              <h3 className=" text-xl font-semibold text-gray-900 ">
                {selectedInfo.description ?? "Untitled"}
              </h3>
              <h4>{selectedInfo.user.username}</h4>
            </div>

            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center d "
              onClick={handleClick}
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

          <div className="grid grid-cols-2 mx-8 px-4 p-6 space-y-6">
            <div className="flex justify-center items-center">
              <a href={selectedInfo.urls.regular}>
                <img
                  className="max-h-[38rem]"
                  src={selectedInfo.urls.regular}
                  alt={selectedInfo.alt_description}
                />
              </a>
            </div>
            <div>
              <h3>Description</h3>
              <p>{selectedInfo.alt_description}</p>
              <h3>Created</h3>
              <p>{formatDate(selectedInfo.created_at)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
