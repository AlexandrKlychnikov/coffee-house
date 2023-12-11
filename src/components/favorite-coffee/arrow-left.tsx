import * as React from "react";

interface IArrowLeft {
  func: () => void;
  state: number;
}

const ArrowLeft = ({ func, state }: IArrowLeft) => {
  return (
    <div className={`arrow left ${state === 0 && "disabled"}`} onClick={func}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.5 12H6M6 12L12 6M6 12L12 18"
          stroke="#403F3D"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export default ArrowLeft;
