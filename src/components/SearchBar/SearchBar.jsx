import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const queryInput = form.elements.query; // Зберегти посилання на елемент вводу
    if (!queryInput) {
      toast.error("Search input element not found"); // Перевірка, чи елемент існує
      return;
    }
    const query = queryInput.value.trim().toLowerCase(); // Використовувати збережене посилання
    if (query === "") {
      toast.error("Please enter your query");
      return;
    }
    onSubmit(query);
    form.reset();
  };

  return (
    <header className={styles["search-header"]}>
      <form className={styles["search-form"]} onSubmit={handleSubmit}>
        <input
          className={styles["search-input"]}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query" // Додати атрибут name для забезпечення доступу до form.elements
        />
        <button type="submit" className={styles["search-button"]}>
          Search
        </button>
      </form>
      <Toaster
        position="top-center"
        containerStyle={{
          position: "relative",
          top: 20,
        }}
      />
    </header>
  );
};

export default SearchBar;
