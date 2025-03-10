import { useMemo, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  Variants,
} from "motion/react";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";

import galleryData from "../../data/gallery-data.json";
import styles from "./Gallery.module.scss";

interface GalleryItem {
  img: string;
  alt: string;
}

interface GalleryData {
  gallery: GalleryItem[];
}

const ANIMATIONS: Record<string, Variants> = {
  baseImage: {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.2 },
    }),
  },
  overlapImage: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
};

interface OverlapImageProps {
  image: GalleryItem;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

const OverlapImage = ({
  image,
  index,
  total,
  scrollYProgress,
}: OverlapImageProps) => {
  const segmentLength = 1 / total;
  const segmentStart = index * segmentLength;
  const segmentEnd = (index + 1) * segmentLength;

  const y = useTransform(
    scrollYProgress,
    [segmentStart, segmentEnd],
    ["100vh", "0vh"],
  );

  const sideClass = index % 2 === 0 ? styles.left : styles.right;

  return (
    <motion.div
      className={`${styles.overlap_image} ${sideClass}`}
      style={{ y }}
      variants={ANIMATIONS.overlapImage}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Image src={image.img} alt={image.alt} fill />
    </motion.div>
  );
};

const Gallery = () => {
  const data = (galleryData as GalleryData).gallery;

  const isMobile = useMediaQuery("(max-width: 992px)");

  const { baseLeft, baseRight, overlappingImages } = useMemo(() => {
    if (isMobile) {
      return {
        baseLeft: data[0],
        baseRight: undefined,
        overlappingImages: data.slice(1),
      };
    }
    return {
      baseLeft: data[0],
      baseRight: data[1],
      overlappingImages: data.slice(2),
    };
  }, [isMobile, data]);

  const totalOverlap = overlappingImages.length;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const spacerHeight = totalOverlap * 100;

  if (!baseLeft) return null;

  return (
    <div className={styles.gallery_container} ref={containerRef}>
      <div className={styles.sticky_section}>
        <div className={styles.base}>
          <motion.div
            className={styles.base_left}
            variants={ANIMATIONS.baseImage}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image src={baseLeft.img} alt={baseLeft.alt} fill />
          </motion.div>
          {!isMobile && baseRight && (
            <motion.div
              className={styles.base_right}
              variants={ANIMATIONS.baseImage}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              style={{ objectFit: "cover" }}
            >
              <Image src={baseRight.img} alt={baseRight.alt} fill />
            </motion.div>
          )}
        </div>
        {overlappingImages.map((image, i) => (
          <OverlapImage
            key={i}
            image={image}
            index={i}
            total={totalOverlap}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
      <div className={styles.spacer} style={{ height: `${spacerHeight}vh` }} />
    </div>
  );
};

export default Gallery;
