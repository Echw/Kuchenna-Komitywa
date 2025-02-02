import { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
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
 * Each overlapping image uses a portion of the overall scroll progress to animate its
 * vertical position from below (100vh) to its final position (0vh).
 */
interface OverlapImageProps {
  image: GalleryItem;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

const OverlapImage: React.FC<OverlapImageProps> = ({
  image,
  index,
  total,
  scrollYProgress,
}) => {
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
 * - The first two images are rendered as the base images.
 * - Any remaining images are rendered as overlapping images that animate upward.
 * - A spacer element below the sticky section provides the extra scroll space needed.
 */
const Gallery = () => {
  const data = (galleryData as GalleryData).gallery;

  const baseLeft = data[0];
  const baseRight = data[1];
  const overlappingImages = data.slice(2);
  const totalOverlap = overlappingImages.length;

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const spacerHeight = totalOverlap * 100;

  if (data.length < 2) return null;

  return (
    <div className={styles.gallery_container} ref={containerRef}>
      <div className={styles.sticky_section}>
        <div className={styles.base}>
          <div className={styles.base_left}>
            <Image src={baseLeft.img} alt={baseLeft.alt} fill />
          </div>
          <div className={styles.base_right}>
            <Image src={baseRight.img} alt={baseRight.alt} fill />
          </div>
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
