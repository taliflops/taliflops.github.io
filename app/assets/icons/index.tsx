import styles from "./particles.module.scss";
import type { ReactNode, JSX } from "react";

const Icon = ({
  opacity,
  title = "",
  className,
  side = 16,
  children,
  ...rest
}: {
  opacity?: number;
  title?: string;
  className?: string;
  side?: number;
  children: ReactNode;
}) => (
  <svg
    opacity={opacity ?? 1}
    className={`${className} icon`}
    height={side}
    width={side}
    viewBox="0 0 16 16"
    strokeLinejoin="round"
    {...rest}
  >
    <title>{`${title} icon`}</title>
    {children}
  </svg>
);

export const Pencil = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="sunset"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2803 0.719661L11.75 0.189331L11.2197 0.719661L1.09835 10.841C0.395088 11.5442 0 12.4981 0 13.4926V15.25V16H0.75H2.50736C3.50192 16 4.45575 15.6049 5.15901 14.9016L15.2803 4.78032L15.8107 4.24999L15.2803 3.71966L12.2803 0.719661ZM9.81066 4.24999L11.75 2.31065L13.6893 4.24999L11.75 6.18933L9.81066 4.24999ZM8.75 5.31065L2.15901 11.9016C1.73705 12.3236 1.5 12.8959 1.5 13.4926V14.5H2.50736C3.1041 14.5 3.67639 14.2629 4.09835 13.841L10.6893 7.24999L8.75 5.31065Z"
      fill="currentColor"
    />
  </Icon>
);

export const User = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="sunset"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.75 0C5.95507 0 4.5 1.45507 4.5 3.25V3.75C4.5 5.54493 5.95507 7 7.75 7H8.25C10.0449 7 11.5 5.54493 11.5 3.75V3.25C11.5 1.45507 10.0449 0 8.25 0H7.75ZM6 3.25C6 2.2835 6.7835 1.5 7.75 1.5H8.25C9.2165 1.5 10 2.2835 10 3.25V3.75C10 4.7165 9.2165 5.5 8.25 5.5H7.75C6.7835 5.5 6 4.7165 6 3.75V3.25ZM2.5 14.5V13.1709C3.31958 11.5377 4.99308 10.5 6.82945 10.5H9.17055C11.0069 10.5 12.6804 11.5377 13.5 13.1709V14.5H2.5ZM6.82945 9C4.35483 9 2.10604 10.4388 1.06903 12.6857L1 12.8353V13V15.25V16H1.75H14.25H15V15.25V13V12.8353L14.931 12.6857C13.894 10.4388 11.6452 9 9.17055 9H6.82945Z"
      fill="currentColor"
    />
  </Icon>
);

export const Settings = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="sunset"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.75 5.5C11.7165 5.5 12.5 4.7165 12.5 3.75C12.5 2.7835 11.7165 2 10.75 2C9.7835 2 9 2.7835 9 3.75C9 4.7165 9.7835 5.5 10.75 5.5ZM10.75 0.75C12.1479 0.75 13.3225 1.70608 13.6555 3H15.25H16V4.5H15.25H13.6555C13.3225 5.79392 12.1479 6.75 10.75 6.75C9.35212 6.75 8.17754 5.79392 7.84451 4.5H0.75H0V3H0.75H7.84451C8.17754 1.70608 9.35212 0.75 10.75 0.75ZM15.25 13H16V11.5H15.25L8.15549 11.5C7.82245 10.2061 6.64788 9.25 5.25 9.25C3.85212 9.25 2.67755 10.2061 2.34451 11.5H0.75H0V13H0.75H2.34451C2.67755 14.2939 3.85212 15.25 5.25 15.25C6.64788 15.25 7.82246 14.2939 8.15549 13L15.25 13ZM7 12.2513C7 12.2509 7 12.2504 7 12.25C7 12.2496 7 12.2491 7 12.2487C6.99929 11.2828 6.21606 10.5 5.25 10.5C4.2835 10.5 3.5 11.2835 3.5 12.25C3.5 13.2165 4.2835 14 5.25 14C6.21606 14 6.99929 13.2172 7 12.2513Z"
      fill="currentColor"
    />
  </Icon>
);

export const Sunset = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="sunset"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      strokeLinejoin="round"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.8095 13.5C14.2386 13.0469 14.6152 12.5437 14.9297 12H1.07026C1.38476 12.5437 1.76141 13.0469 2.1905 13.5H13.8095ZM15.9381 9C15.851 9.69864 15.6738 10.3693 15.4185 11H0.581517C0.326218 10.3693 0.149013 9.69864 0.0618937 9H15.9381ZM15.9997 8.06438C15.9999 8.04294 16 8.02148 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8H15.9997V8.06438ZM3.33528 14.5C4.64841 15.444 6.25928 16 8 16C9.74072 16 11.3516 15.444 12.6647 14.5H3.33528Z"
      fill="currentColor"
    />
  </Icon>
);

export const Sun = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="sun"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      strokeLinejoin="round"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.75 0.75V0H7.25V0.75V2V2.75H8.75V2V0.75ZM11.182 3.75732L11.7123 3.22699L12.0659 2.87344L12.5962 2.34311L13.6569 3.40377L13.1265 3.9341L12.773 4.28765L12.2426 4.81798L11.182 3.75732ZM8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12ZM13.25 7.25H14H15.25H16V8.75H15.25H14H13.25V7.25ZM0.75 7.25H0V8.75H0.75H2H2.75V7.25H2H0.75ZM2.87348 12.0659L2.34315 12.5962L3.40381 13.6569L3.93414 13.1265L4.28769 12.773L4.81802 12.2426L3.75736 11.182L3.22703 11.7123L2.87348 12.0659ZM3.75735 4.81798L3.22702 4.28765L2.87347 3.9341L2.34314 3.40377L3.4038 2.34311L3.93413 2.87344L4.28768 3.22699L4.81802 3.75732L3.75735 4.81798ZM12.0659 13.1265L12.5962 13.6569L13.6569 12.5962L13.1265 12.0659L12.773 11.7123L12.2426 11.182L11.182 12.2426L11.7123 12.773L12.0659 13.1265ZM8.75 13.25V14V15.25V16H7.25V15.25V14V13.25H8.75Z"
      fill="currentColor"
    />
  </Icon>
);

export const MoonAndStar = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    title="moon"
    {...rest}
    {...{ opacity }}
    {...{ className }}
  >
    <path
      strokeLinejoin="round"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 8.00005C1.5 5.53089 2.99198 3.40932 5.12349 2.48889C4.88136 3.19858 4.75 3.95936 4.75 4.7501C4.75 8.61609 7.88401 11.7501 11.75 11.7501C11.8995 11.7501 12.048 11.7454 12.1953 11.7361C11.0955 13.1164 9.40047 14.0001 7.5 14.0001C4.18629 14.0001 1.5 11.3138 1.5 8.00005ZM6.41706 0.577759C2.78784 1.1031 0 4.22536 0 8.00005C0 12.1422 3.35786 15.5001 7.5 15.5001C10.5798 15.5001 13.2244 13.6438 14.3792 10.9921L13.4588 9.9797C12.9218 10.155 12.3478 10.2501 11.75 10.2501C8.71243 10.2501 6.25 7.78767 6.25 4.7501C6.25 3.63431 6.58146 2.59823 7.15111 1.73217L6.41706 0.577759ZM13.25 1V1.75V2.75L14.25 2.75H15V4.25H14.25H13.25V5.25V6H11.75V5.25V4.25H10.75L10 4.25V2.75H10.75L11.75 2.75V1.75V1H13.25Z"
      fill="currentColor"
    />
  </Icon>
);

export const Moon = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    title="moon"
    {...rest}
    {...{ opacity }}
    {...{ className }}
  >
    <g clipPath="url(#clip0_174_19363)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.88067 14.5 2.27454 12.3027 1.64496 9.37151C1.81218 9.77621 2.05228 10.1443 2.36758 10.4596C4.04598 12.138 7.21941 11.6857 9.45566 9.44949C11.6919 7.21325 12.1441 4.03981 10.4657 2.36142C10.1601 2.05583 9.80498 1.82087 9.41495 1.65445C12.3244 2.30033 14.5 4.8961 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_174_19363">
        <rect
          width="16"
          height="16"
          fill="white"
        />
      </clipPath>
    </defs>
  </Icon>
);

export const Target = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="target"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      strokeLinejoin="round"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11ZM8 12.5C10.4853 12.5 12.5 10.4853 12.5 8C12.5 5.51472 10.4853 3.5 8 3.5C5.51472 3.5 3.5 5.51472 3.5 8C3.5 10.4853 5.51472 12.5 8 12.5ZM8 9C8.55229 9 9 8.55229 9 8C9 7.44772 8.55229 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55229 7.44772 9 8 9Z"
      fill="currentColor"
    />
  </Icon>
);

export const Attribute = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="attribute"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      strokeLinejoin="round"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0.154663L8.34601 0.334591L14.596 3.58459L15 3.79466V4.25V11.75V12.2053L14.596 12.4154L8.34601 15.6654L8 15.8453L7.65399 15.6654L1.40399 12.4154L1 12.2053V11.75V4.25V3.79466L1.40399 3.58459L7.65399 0.334591L8 0.154663ZM2.5 11.2947V5.44058L7.25 7.81559V13.7647L2.5 11.2947ZM8.75 13.7647L13.5 11.2947V5.44056L8.75 7.81556V13.7647ZM8 1.84534L12.5766 4.22519L7.99998 6.51352L3.42335 4.2252L8 1.84534Z"
    >
      {" "}
    </path>
  </Icon>
);

export const Collection = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="collection"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      strokeLinejoin="round"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 5.25C7.5 6.2165 6.7165 7 5.75 7C4.7835 7 4 6.2165 4 5.25C4 4.2835 4.7835 3.5 5.75 3.5C6.7165 3.5 7.5 4.2835 7.5 5.25ZM7.5 10.75C7.5 11.7165 6.7165 12.5 5.75 12.5C4.7835 12.5 4 11.7165 4 10.75C4 9.7835 4.7835 9 5.75 9C6.7165 9 7.5 9.7835 7.5 10.75ZM10.25 9.75C11.2165 9.75 12 8.9665 12 8C12 7.0335 11.2165 6.25 10.25 6.25C9.2835 6.25 8.5 7.0335 8.5 8C8.5 8.9665 9.2835 9.75 10.25 9.75Z"
      fill="currentColor"
    />
  </Icon>
);

export const Sample = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="Sample"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      strokeLinejoin="round"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.25 9.75C12.2165 9.75 13 8.9665 13 8C13 7.0335 12.2165 6.25 11.25 6.25C10.2835 6.25 9.5 7.0335 9.5 8C9.5 8.9665 10.2835 9.75 11.25 9.75ZM6.75 12.5C7.7165 12.5 8.5 11.7165 8.5 10.75C8.5 9.7835 7.7165 9 6.75 9C5.7835 9 5 9.7835 5 10.75C5 11.7165 5.7835 12.5 6.75 12.5Z"
      fill="currentColor"
    />
  </Icon>
);

export const Menu = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="Menu"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      strokeLinejoin="round"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.75 4H1V5.5H1.75H14.25H15V4H14.25H1.75ZM1.75 10.5H1V12H1.75H14.25H15V10.5H14.25H1.75Z"
      fill="currentColor"
    />
  </Icon>
);

export const Pause = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="Pause"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      strokeLinejoin="round"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 2.5V1.75H4V2.5V13.5V14.25H5.5V13.5V2.5ZM12 2.5V1.75H10.5V2.5V13.5V14.25H12V13.5V2.5Z"
      fill="currentColor"
    />
  </Icon>
);

export const Null = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="Null"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      strokeLinejoin="round"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5303 1.53032L16.0607 0.999991L15 -0.0606689L14.4697 0.469661L12.3911 2.54823C11.1902 1.57978 9.66282 0.999991 7.99999 0.999991C4.134 0.999991 0.999991 4.134 0.999991 7.99999C0.999991 9.66282 1.57978 11.1902 2.54823 12.3911L0.469661 14.4697L-0.0606689 15L0.999991 16.0607L1.53032 15.5303L3.60889 13.4517C4.80975 14.4202 6.33716 15 7.99999 15C11.866 15 15 11.866 15 7.99999C15 6.33716 14.4202 4.80975 13.4517 3.60889L15.5303 1.53032ZM11.3226 3.61669C10.3996 2.91589 9.24835 2.49999 7.99999 2.49999C4.96243 2.49999 2.49999 4.96243 2.49999 7.99999C2.49999 9.24834 2.91589 10.3996 3.61669 11.3226L11.3226 3.61669ZM4.67735 12.3833L12.3833 4.67735C13.0841 5.60042 13.5 6.75164 13.5 7.99999C13.5 11.0376 11.0376 13.5 7.99999 13.5C6.75164 13.5 5.60042 13.0841 4.67735 12.3833Z"
      fill="currentColor"
    />
  </Icon>
);

export const Book = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="Bookmark"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      strokeLinejoin="round"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 1H0.75H5C6.2267 1 7.31583 1.58901 8 2.49963C8.68417 1.58901 9.7733 1 11 1H15.25H16V1.75V13V13.75H15.25H10.7426C10.1459 13.75 9.57361 13.9871 9.15165 14.409L8.53033 15.0303H7.46967L6.84835 14.409C6.42639 13.9871 5.8541 13.75 5.25736 13.75H0.75H0V13V1.75V1ZM7.25 4.75C7.25 3.50736 6.24264 2.5 5 2.5H1.5V12.25H5.25736C5.96786 12.25 6.65758 12.4516 7.25 12.8232V4.75ZM8.75 12.8232V4.75C8.75 3.50736 9.75736 2.5 11 2.5H14.5V12.25H10.7426C10.0321 12.25 9.34242 12.4516 8.75 12.8232Z"
      fill="currentColor"
    />
  </Icon>
);

export const Bookmark = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="Bookmark"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      strokeLinejoin="round"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 1.5H5C4.44772 1.5 4 1.94772 4 2.5V13.4732L7.16201 11.7485C7.68434 11.4635 8.31566 11.4635 8.83799 11.7485L12 13.4732V2.5C12 1.94772 11.5523 1.5 11 1.5ZM13.5 14.2914V2.5C13.5 1.11929 12.3807 0 11 0H5C3.61929 0 2.5 1.11929 2.5 2.5V14.2914V16L4 15.1818L7.88029 13.0653C7.95491 13.0246 8.04509 13.0246 8.11971 13.0653L12 15.1818L13.5 16V14.2914Z"
      fill="currentColor"
    />
  </Icon>
);

export const Histogram = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="Barchart"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      strokeLinejoin="round"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.75 1V1.75V14.25V15H7.25V14.25V1.75V1H8.75ZM3.5 9V9.75V14.25V15H2V14.25V9.75V9H3.5ZM14 6.75V6H12.5V6.75V14.25V15H14V14.25V6.75Z"
      fill="currentColor"
    />
  </Icon>
);

export const Barchart = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="Barchart"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1 1v11.75A2.25 2.25 0 0 0 3.25 15H15v-1.5H3.25a.75.75 0 0 1-.75-.75V1H1Zm8.5 2.75V3H8v9h1.5V3.75ZM6 8v4H4.5V8H6Zm7-1.25V6h-1.5v6H13V6.75Z"
      clipRule="evenodd"
    />
  </Icon>
);

export const Certified = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="Barchart"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z"
      fill="currentColor"
    />
  </Icon>
);

export const Followup = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="Barchart"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.75 0C3.95507 0 2.5 1.45507 2.5 3.25V3.75C2.5 5.54493 3.95507 7 5.75 7H6.25C8.04493 7 9.5 5.54493 9.5 3.75V3.25C9.5 1.45507 8.04493 0 6.25 0H5.75ZM4 3.25C4 2.2835 4.7835 1.5 5.75 1.5H6.25C7.2165 1.5 8 2.2835 8 3.25V3.75C8 4.7165 7.2165 5.5 6.25 5.5H5.75C4.7835 5.5 4 4.7165 4 3.75V3.25ZM15.8107 5.75L15.2803 6.28033L12.5303 9.03033C12.2374 9.32322 11.7626 9.32322 11.4697 9.03033L10.4697 8.03033L9.93934 7.5L11 6.43934L11.5303 6.96967L12 7.43934L14.2197 5.21967L14.75 4.68934L15.8107 5.75ZM1.5 13.1709V14.5H10.5V13.1709C9.68042 11.5377 8.00692 10.5 6.17055 10.5H5.82945C3.99308 10.5 2.31958 11.5377 1.5 13.1709ZM0.0690305 12.6857C1.10604 10.4388 3.35483 9 5.82945 9H6.17055C8.64517 9 10.894 10.4388 11.931 12.6857L12 12.8353V13V15.25V16H11.25H0.75H0V15.25V13V12.8353L0.0690305 12.6857Z"
      fill="currentColor"
    />
  </Icon>
);

export const Academy = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="Barchart"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 1.5H5C4.44772 1.5 4 1.94772 4 2.5V13.4732L7.16201 11.7485C7.68434 11.4635 8.31566 11.4635 8.83799 11.7485L12 13.4732V2.5C12 1.94772 11.5523 1.5 11 1.5ZM13.5 14.2914V2.5C13.5 1.11929 12.3807 0 11 0H5C3.61929 0 2.5 1.11929 2.5 2.5V14.2914V16L4 15.1818L7.88029 13.0653C7.95491 13.0246 8.04509 13.0246 8.11971 13.0653L12 15.1818L13.5 16V14.2914Z"
      fill="currentColor"
    />
  </Icon>
);

export const Piechart = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="Barchart"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.4572 8.75C14.0853 11.9866 11.3362 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.66381 4.01342 1.91465 7.25 1.5428V7.75C7.25 8.30229 7.69772 8.75 8.25 8.75H14.4572ZM14.4572 7.25H8.75V1.5428C11.7405 1.88638 14.1136 4.2595 14.4572 7.25ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
      fill="currentColor"
    />
  </Icon>
);

export const Chart = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="Chart"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      strokeLinejoin="round"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.51324 3.62367L3.76375 8.34731C3.61845 8.7396 3.24433 8.99999 2.826 8.99999H0.75H0V7.49999H0.75H2.47799L4.56666 1.86057C4.88684 0.996097 6.10683 0.988493 6.43776 1.84891L10.5137 12.4463L12.2408 8.1286C12.3926 7.74894 12.7604 7.49999 13.1693 7.49999H15.25H16V8.99999H15.25H13.5078L11.433 14.1868C11.0954 15.031 9.8976 15.023 9.57122 14.1744L5.51324 3.62367Z"
      fill="currentColor"
    />
  </Icon>
);

export const FunctionIcon = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="Function"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.75 4C8.75 2.61929 9.86929 1.5 11.25 1.5H12V0H11.25C9.04086 0 7.25 1.79086 7.25 4V6H4.75H4V7.5H4.75H7.25V12C7.25 13.3807 6.13071 14.5 4.75 14.5H4V16H4.75C6.95914 16 8.75 14.2091 8.75 12V7.5H11.25H12V6H11.25H8.75V4Z"
      fill="currentColor"
    />
  </Icon>
);

export const Lambda = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="Lambda"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 0H2V1.5H2.75C3.6834 1.5 4.5339 2.03586 4.93683 2.87781L6.37319 5.87924L6.31873 5.99756L2.31873 14.6864L2.00509 15.3676L3.36764 15.9949L3.68127 15.3136L7.21486 7.63798L10.7173 14.9567C11.3304 16.2379 13.1112 16.3502 13.8805 15.1562L14.2867 14.5257L13.0257 13.7133L12.6195 14.3438C12.486 14.5511 12.1768 14.5316 12.0703 14.3091L6.28987 2.2303C5.63765 0.867411 4.26092 0 2.75 0Z"
      fill="currentColor"
    />
  </Icon>
);

export const Enter = ({
  opacity,
  className,
  ...rest
}: {
  opacity?: number;
  className?: string;
}): JSX.Element => (
  <Icon
    {...rest}
    title="Enter"
    {...{ opacity }}
    {...{ className }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.52,1.37v9.94c0,0.31-0.25,0.55-0.55,0.55H4.36l2.37,2.37c0.22,0.22,0.22,0.57,0,0.78c-0.22,0.22-0.57,0.22-0.78,0
	L2.64,11.7c-0.22-0.22-0.22-0.57,0-0.78c0,0,0,0,0,0l3.31-3.31c0.22-0.22,0.57-0.22,0.78,0c0.22,0.22,0.22,0.57,0,0.78l-2.37,2.37
	h8.06V1.37c0-0.31,0.25-0.55,0.55-0.55S13.52,1.07,13.52,1.37z"
      fill="currentColor"
    />
  </Icon>
);

export const Particles = ({ isLoading = false }: { isLoading?: boolean }) => (
  <div className={styles.wrap}>
    <div className={styles[`container${isLoading ? "_loading" : ""}`]}>
      <div className={isLoading ? styles.particle : styles.slice} />
      <div className={isLoading ? styles.particle : styles.slice} />
      <div className={isLoading ? styles.particle : styles.slice} />
      <div className={isLoading ? styles.particle : styles.slice} />
      <div className={isLoading ? styles.particle : styles.slice} />
      <div className={isLoading ? styles.particle : styles.slice} />
      <div className={isLoading ? styles.particle : styles.hide} />
      <div className={isLoading ? styles.particle : styles.hide} />
      <div className={isLoading ? styles.particle : styles.hide} />
      <div className={isLoading ? styles.particle : styles.hide} />
      <div className={isLoading ? styles.particle : styles.hide} />
      <div className={isLoading ? styles.particle : styles.hide} />
      <div className={isLoading ? styles.particle : styles.hide} />
    </div>
  </div>
);
