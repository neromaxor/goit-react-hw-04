import axios from "axios";

const API_KEY = "_DrLqnl3WbxuMpRhhkSbWuPOk6GpjPiDPVi5j6z5Hbw";

const fetchPhoto = async (searchQuery, page) => {
  const response = await axios.get("/search/photos", {
    baseURL: "https://api.unsplash.com/",
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
      Accept: "application/json",
    },
    params: {
      query: searchQuery,
      per_page: 10,
      page,
      orientation: "landscape",
    },
  });
  return response.data.results;
};

export default fetchPhoto;
