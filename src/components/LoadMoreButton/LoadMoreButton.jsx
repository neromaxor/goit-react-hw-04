import styles from "./LoadMoreButton.module.css";

const LoadMoreButton = ({ loadMore }) => {
  return (
    <div className={styles["load-more-button"]}>
      <button onClick={loadMore}>Load More</button>
    </div>
  );
};

export default LoadMoreButton;
