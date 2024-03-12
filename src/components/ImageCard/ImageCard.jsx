import styles from "./ImageCard.module.css";

const ImageCard = ({ item }) => {
  const { urls, likes, alt_description } = item;

  return (
    <div>
      <img src={urls.small} alt={alt_description} />
      <p className={styles.likes}>Likes: {likes}</p>
    </div>
  );
};

export default ImageCard;
