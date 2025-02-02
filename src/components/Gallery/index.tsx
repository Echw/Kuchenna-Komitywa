import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
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

/**
 * OverlapImage
 *
 * Each overlapping image uses a portion of the overall scroll progress
 * to animate its vertical position from offscreen at the bottom ("100vh")
 * to its final position ("0vh"). On desktop, images alternate sides; on mobile,
 * the CSS forces all overlapping images to fill the full width.
 */
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
    >
      <Image src={image.img} alt={image.alt} fill />
    </motion.div>
  );
};

/**
 * Gallery
 *
 * - The first two images are rendered as base images on desktop.
 * - On mobile, only the first (left) base image is shown.
 * - Remaining images are rendered as overlapping images that animate upward.
 * - A spacer element below the sticky section provides the extra scroll space needed.
 */
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

  return (
    <div className={styles.gallery_container} ref={containerRef}>
      <div className={styles.sticky_section}>
        <div className={styles.base}>
          <div className={styles.base_left}>
            <Image src={baseLeft.img} alt={baseLeft.alt} fill />
          </div>
          {!isMobile && baseRight && (
            <div className={styles.base_right}>
              <Image
                src={baseRight.img}
                alt={baseRight.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
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
