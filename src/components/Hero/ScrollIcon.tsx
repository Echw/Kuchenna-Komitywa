import { IconArrowDown } from "@tabler/icons-react";

import styles from "./Hero.module.scss";

export const ScrollIcon = () => {
  return (
    <div className={styles.scroll_icon}>
      <svg
        className={styles.scroll_svg}
        id="circular"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="circle"
            d="M 50, 50
            m -50, 0
            a 50,50 0 1,0 100,0
            a 50,50 0 1,0 -100,0"
          ></path>
        </defs>
        <text
          id="brand--text"
          fill="#FAF3E7"
          fontSize="8.5"
          fontFamily="Poppins, sans-serif"
          fontWeight="semibold"
          letterSpacing="3"
          width="100"
        >
          <textPath xlinkHref="#circle">
            • Kuchenna Komitywa • Kuchenna Komitywa
          </textPath>
        </text>
      </svg>
      <p>scroll</p>
      <IconArrowDown
        style={{ width: "100%", position: "relative", bottom: "105px" }}
      />
    </div>
  );
};
