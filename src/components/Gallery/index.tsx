import SectionContainer from "../common/SectionContainer";
import { Group, Image } from "@mantine/core";
import galleryData from "../../data/gallery-data.json";

import styles from "./Gallery.module.scss";
import sectionContainerStyles from "../common/SectionContainer/SectionContainer.module.scss";

interface GalleryItem {
  img: string;
  alt: string;
}

interface GalleryData {
  gallery: GalleryItem[];
}

const Gallery = () => {
  return (
    <SectionContainer
      className={sectionContainerStyles.box_gallery}
      id="gallery"
      backgroundColor="var(--mantine-color-mainGreen-8)"
    >
      <Group className={styles.gallery_wrapper}>
        {(galleryData as GalleryData).gallery.map((item, index) => (
          <Image
            src={item.img}
            alt={item.alt}
            key={index}
            fit="cover"
            height={"100%"}
          />
        ))}
      </Group>
    </SectionContainer>
  );
};

export default Gallery;
