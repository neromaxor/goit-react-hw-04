import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items, openModal }) => {
  return (
    <div className={styles["gallery-container"]}>
      {items.map((item, index) => (
        <img
          key={index}
          src={item.urls.regular}
          alt={item.alt_description}
          style={{ width: "200px", height: "200px", margin: "10px" }}
          onClick={() => openModal(item)}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
