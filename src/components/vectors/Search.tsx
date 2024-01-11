import type { SVGProps } from "react";
import * as React from "react";

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#search_svg__a)">
      <path
        fill="currentColor"
        d="m31.745 28.861-8.273-8.273a12.9 12.9 0 0 0 2.476-7.615C25.948 5.82 20.128 0 12.973 0 5.82 0 0 5.82 0 12.973c0 7.155 5.82 12.974 12.973 12.974 2.712 0 5.231-.836 7.316-2.264L28.607 32zM3.805 12.973c0-5.056 4.114-9.169 9.17-9.169s9.169 4.113 9.169 9.17c0 5.055-4.113 9.169-9.17 9.169s-9.169-4.114-9.169-9.17"
      />
    </g>
    <defs>
      <clipPath id="search_svg__a">
        <path fill="#fff" d="M0 0h32v32H0z"/>
      </clipPath>
    </defs>
  </svg>
);
export default SvgSearch;
