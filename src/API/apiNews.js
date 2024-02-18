import axios from "axios";
// Обращение к env
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// СПИСОК ЭНДПОИНТОВ
export const getNews = async ({
  page_number = 1,
  page_size = 10,
  // пагинация - дозированная отрисовка новостей (по страницам)
  category,
  keywords,
}) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        // query параметры
        apiKey: API_KEY,
        page_number,
        page_size,
        category,
        keywords,
      },
    });
    // axios возвращает не промис, а сразу json
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getLatestNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}latest-news`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}available/categories`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
