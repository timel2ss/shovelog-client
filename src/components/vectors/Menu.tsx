import type { SVGProps } from "react";
import * as React from "react";

const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      d="M32 8H0V2.667h32zm0 5.333H0v5.334h32zM32 24H0v5.333h32z"
    />
  </svg>
);
export default SvgMenu;
