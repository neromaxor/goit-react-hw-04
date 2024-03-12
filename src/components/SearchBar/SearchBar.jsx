import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit, searchText, setSearchText }) => {
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
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          name="query" // Додати атрибут name для забезпечення доступу до form.elements
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
