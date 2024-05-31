import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export const fetchAllProducts = async (page) => {
  const response = await axios.get(API_URL, {
    params: {
      limit: -1, // To gel all the products
      skip: (page - 1) * 6,
    },
  });
  return response.data;
};

export const fetchSixProducts = async (page) => {
  const response = await axios.get(API_URL, {
    params: {
      limit: 6, // Number of products per page
      skip: (page - 1) * 6,
    },
  });
  return response.data;
};
