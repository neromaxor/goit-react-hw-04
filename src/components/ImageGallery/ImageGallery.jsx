import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <div>
            <ImageCard item={item} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
