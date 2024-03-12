import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={styles["error-message"]}>
      <p> Please try again</p>
    </div>
  );
};

export default ErrorMessage;
