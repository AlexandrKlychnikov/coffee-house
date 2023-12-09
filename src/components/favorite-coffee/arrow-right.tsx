import * as React from "react";

interface IArrowRight {
  func: () => void;
  state: number;
}

const ArrowRight = ({ func, state }: IArrowRight) => {
  return (
    <div className={`arrow right ${state === 2 && "disabled"}`} onClick={func}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18"
          stroke="#403F3D"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};
export default ArrowRight;
