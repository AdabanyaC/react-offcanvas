import React from "react";

const OffCanvasMenu = ({
  title,
  description,
  component,
  width,
  postition,
  onRequestClose,
}) => {
  return (
    <div className="absolute right-0 bg-black/[0.65] w-full h-screen">
      <div
        className={`bg-white px-8 py-12 ${width} absolute ${postition} h-screen`}
      >
        <div
          className="flex justify-end items-end mb-4 w-6 ml-auto rounded-full cursor-pointer"
          onClick={onRequestClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM9.17 14.83l5.66-5.66M14.83 14.83 9.17 9.17"
              stroke="#6B6B6B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <h4 className="text-3xl font-bold">{title}</h4>
        <p className="text-black text-opacity-70">{description}</p>
        <div className="mt-12">{component}</div>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
