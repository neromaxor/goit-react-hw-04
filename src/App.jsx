import { useState, useEffect } from "react";
import "./App.css";
import fetchPhoto from "./fetchPhotoApi";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [photo, setPhoto] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false); // Змінено назву змінної

  useEffect(() => {
    if (searchText === "") {
      return;
    }

    async function searchSubmit(searchQuery) {
      // Видалив параметр page, оскільки його не використовується
      try {
        setLoader(true);
        const data = await fetchPhoto(searchQuery, 1); // Використовуючи сторінку 1 за замовчуванням
        setPhoto(data);
        setErrorMessage(false); // При кожному успішному запиті помилку приховуємо
      } catch (error) {
        console.log(error);
        setErrorMessage(true); // При помилці встановлюємо стан помилки в true
      } finally {
        setLoader(false);
      }
    }

    searchSubmit(searchText);
  }, [searchText]); // Змінено змінну залежності на searchText

  return (
    <div>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      {loader && <Loader />}
      {errorMessage && <ErrorMessage />}

      {photo.length > 0 && <ImageGallery items={photo} />}
    </div>
  );
}

export default App;
