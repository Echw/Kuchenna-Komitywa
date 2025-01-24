import SectionContainer from "../common/SectionContainer";
import { Group, Image } from "@mantine/core";
import galleryData from "../../data/gallery-data.json";

import styles from "./Gallery.module.scss";

interface GalleryItem {
  img: string;
  alt: string;
}

interface GalleryData {
  gallery: GalleryItem[];
}

const Gallery = () => {
  return (
    <Group className={styles.gallery_wrapper}>
      {(galleryData as GalleryData).gallery.map((item, index) => (
        <Image src={item.img} alt={item.alt} key={index} fit="cover" height={"100%"} />
      ))}
    </Group>
  );
};

export default Gallery;
