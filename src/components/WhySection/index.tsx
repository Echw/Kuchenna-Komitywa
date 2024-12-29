import React from "react";
import { Title, Text, Image } from "@mantine/core";

import SectionContainer from "../common/SectionContainer";
import styles from "./WhySection.module.scss";

const WhySection = () => {
  return (
    <SectionContainer
      id="WhySection"
      backgroundColor="var(--mantine-color-white)"
    >
      <Title order={2} c="var(--mantine-color-mainGreen-8)">
        Dlaczego kuchnia roślinna?
      </Title>
      <div className={styles.why_points}>
        <svg
          className={styles.why_path}
          viewBox="0 0 1034 1470"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M546.61 1C554.11 57.5 625.11 78.4745 687.61 73C756.11 67 844.61 68.5188 877.61 91C918.61 118.931 940.61 180.5 940.61 246.5C940.61 262.508 929.45 344.017 847.11 363C673.61 403 417.443 369 224.61 363C198.276 365.5 148.21 358.1 158.61 308.5C171.61 246.5 230.61 322 205.11 445.5C179.61 569 227.554 592.752 257.5 613.5C327.5 662 806.715 608.867 877.61 636C958.61 667 972.909 787.175 918.11 855C857.11 930.5 262.5 858 192 909.5C121.5 961 116.5 1109.2 192 1154C267.5 1198.8 413.023 1176.35 566 1180.5C692 1183.91 898.8 1148.6 946 1231C967.5 1258 970 1396 917 1435.5C841 1492.14 689.5 1438 543 1426.5C502.797 1423.34 309.5 1377.5 168.5 1438C27.5 1498.5 17 1448 1.5 1438"
            stroke="#EBF39D"
            strokeWidth="4"
          />
          <path
            d="M1030.03 1298.27H1016.11V1302.3C1016.72 1301.76 1017.5 1301.33 1018.46 1301.01C1019.46 1300.69 1020.56 1300.53 1021.78 1300.53C1023.95 1300.53 1025.79 1301.04 1027.3 1302.06C1028.8 1303.09 1029.92 1304.46 1030.66 1306.19C1031.39 1307.89 1031.76 1309.78 1031.76 1311.86C1031.76 1315.7 1030.67 1318.69 1028.5 1320.83C1026.35 1322.94 1023.39 1324 1019.62 1324C1016.86 1324 1014.48 1323.52 1012.46 1322.56C1010.48 1321.6 1008.96 1320.27 1007.9 1318.58C1006.88 1316.88 1006.4 1314.94 1006.46 1312.77H1016.83C1016.83 1313.28 1017.01 1313.76 1017.36 1314.21C1017.71 1314.66 1018.29 1314.88 1019.09 1314.88C1019.89 1314.88 1020.48 1314.59 1020.86 1314.02C1021.25 1313.44 1021.44 1312.66 1021.44 1311.66C1021.44 1310.74 1021.22 1310.03 1020.77 1309.55C1020.35 1309.07 1019.74 1308.83 1018.94 1308.83C1018.27 1308.83 1017.76 1308.99 1017.41 1309.31C1017.06 1309.63 1016.88 1310 1016.88 1310.42H1006.51V1288.91H1030.03V1298.27Z"
            fill="#132B13"
          />
          <circle cx="964.5" cy="1303.5" r="20.5" fill="white" />
          <circle cx="964.5" cy="1303.5" r="10.5" fill="#F1753F" />
          <path
            d="M975.48 220.896V210.912H991.752V246H980.568V220.896H975.48Z"
            fill="#132B13"
          />
          <circle cx="940.609" cy="228.5" r="20.5" fill="white" />
          <circle cx="940.609" cy="228.5" r="10.5" fill="#F1753F" />
          <path
            d="M151.344 497.504C155.632 494.304 159.024 491.408 161.52 488.816C164.016 486.192 165.264 483.744 165.264 481.472C165.264 480.704 165.088 480.112 164.736 479.696C164.416 479.28 163.984 479.072 163.44 479.072C162.8 479.072 162.288 479.408 161.904 480.08C161.552 480.72 161.424 481.712 161.52 483.056H151.2C151.296 480.08 151.936 477.632 153.12 475.712C154.336 473.792 155.904 472.384 157.824 471.488C159.744 470.592 161.856 470.144 164.16 470.144C168.256 470.144 171.248 471.136 173.136 473.12C175.056 475.072 176.016 477.584 176.016 480.656C176.016 483.888 174.976 486.928 172.896 489.776C170.848 492.592 168.272 494.976 165.168 496.928H176.16V505.52H151.344V497.504Z"
            fill="#132B13"
          />
          <circle cx="204.5" cy="488.5" r="20.5" fill="white" />
          <circle cx="204.5" cy="488.5" r="10.5" fill="#F1753F" />
          <path
            d="M87.496 1037.72V1028.84L101.8 1008.44H113.272V1028.5H116.728V1037.72H113.272V1043H102.52V1037.72H87.496ZM103.384 1020.58L98.2 1028.5H103.384V1020.58Z"
            fill="#132B13"
          />
          <circle cx="139.5" cy="1025.5" r="20.5" fill="white" />
          <circle cx="139.5" cy="1025.5" r="10.5" fill="#F1753F" />
          <path
            d="M990.16 748.904C990.256 745.096 991.36 742.184 993.472 740.168C995.616 738.152 998.64 737.144 1002.54 737.144C1005.07 737.144 1007.23 737.576 1009.02 738.44C1010.82 739.304 1012.16 740.472 1013.06 741.944C1013.98 743.416 1014.45 745.08 1014.45 746.936C1014.45 749.176 1013.92 750.936 1012.86 752.216C1011.81 753.464 1010.62 754.312 1009.31 754.76V754.952C1013.15 756.392 1015.07 759.064 1015.07 762.968C1015.07 765.016 1014.59 766.824 1013.63 768.392C1012.67 769.96 1011.3 771.176 1009.5 772.04C1007.74 772.904 1005.65 773.336 1003.22 773.336C999.056 773.336 995.792 772.344 993.424 770.36C991.056 768.376 989.84 765.272 989.776 761.048H1000.14C1000.08 762.2 1000.24 763.08 1000.62 763.688C1001.04 764.264 1001.74 764.552 1002.74 764.552C1003.31 764.552 1003.79 764.344 1004.18 763.928C1004.56 763.48 1004.75 762.904 1004.75 762.2C1004.75 761.304 1004.45 760.632 1003.84 760.184C1003.26 759.704 1002.27 759.464 1000.86 759.464H999.088V750.872H1000.82C1002.99 751 1004.08 750.136 1004.08 748.28C1004.08 747.48 1003.9 746.888 1003.55 746.504C1003.23 746.12 1002.82 745.928 1002.3 745.928C1001.12 745.928 1000.53 746.92 1000.53 748.904H990.16Z"
            fill="#132B13"
          />
          <circle cx="950.5" cy="752.5" r="20.5" fill="white" />
          <circle cx="950.5" cy="752.5" r="10.5" fill="#F1753F" />
        </svg>
        <Text className={styles.why_point}>
          <span>100% roślinne i naturalne składniki</span>
          <br />
          Wszystkie nasze produkty są w pełni wegańskie, bez sztucznych
          dodatków, konserwantów i barwników. Tworzymy je z najwyższej jakości
          składników, które są zdrowe i odżywcze.
        </Text>
        <Text className={styles.why_point}>
          <span>Zrównoważona produkcja</span>
          <br />
          Działamy z myślą o środowisku, wykorzystując lokalne, sezonowe
          produkty i ograniczając zużycie plastiku.
        </Text>
        <Text className={styles.why_point}>
          <span>Doskonały smak i różnorodność</span>
          <br />
          Nasze menu oferuje unikalne połączenia smaków, które zadowolą zarówno
          miłośników kuchni roślinnej, jak i tych, którzy dopiero odkrywają
          wegańskie jedzenie.
        </Text>
        <Text className={styles.why_point}>
          <span>Korzystne ceny</span>
          <br />
          Oferujemy wegański catering w przystępnych cenach, bez kompromisów na
          jakości. Dzięki temu możesz cieszyć się zdrowymi, roślinnymi daniami
          bez nadwyrężania budżetu.
        </Text>
        <Text className={styles.why_point}>
          <span>Wygoda i oszczędność czasu</span>
          <br />
          Nasze dania w słoikach są idealne dla osób, które chcą zdrowo jeść,
          ale nie mają czasu na codzienne gotowanie. Wystarczy je podgrzać i
          cieszyć się pełnowartościowym posiłkiem w kilka minut.
        </Text>
      </div>
      <Image
        src={`/assets/why_1.png`}
        alt="leafs"
        w={135}
        className={styles.why_img}
      />
      <Image
        src={`/assets/why_2.png`}
        alt="leafs"
        w={305}
        className={styles.why_img}
      />
      <Image
        src={`/assets/why_3.png`}
        alt="leafs"
        w={116}
        className={styles.why_img}
      />
      <Image
        src={`/assets/why_4.png`}
        alt="leafs"
        w={166}
        className={styles.why_img}
      />
      <Image
        src={`/assets/why_5.png`}
        alt="leafs"
        w={285}
        className={styles.why_img}
      />
      <Image
        src={`/assets/why_6.png`}
        alt="leafs"
        w={423}
        className={styles.why_img}
      />
    </SectionContainer>
  );
};

export default WhySection;
