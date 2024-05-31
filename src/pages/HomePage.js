import React, { useState, useEffect } from "react";
import { TextField, Container, Box } from "@mui/material";
import ImageList from "../components/ImageList";
import CustomPagination from "../components/Pagination";
import { fetchSixProducts, fetchAllProducts } from "../services/api";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchSixProducts(page);
      const allProductsList = await fetchAllProducts(page);
      console.log("from home-page:", data);

      if (query === "") {
        setProducts(data.products.filter((product) => product.title));
      } else {
        setProducts(
          allProductsList.products.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
          )
        );
      }
      setTotalPages(Math.ceil(data.total / 6));
    };
    loadProducts();
  }, [query, page]);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <Box my={4}>
        <TextField
          label="Search Products"
          variant="outlined"
          fullWidth
          value={query}
          onChange={handleSearchChange}
        />
      </Box>
      <ImageList images={products} />
      <Box my={4} display="flex" justifyContent="center">
        <CustomPagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          totalProducts={products.length}
        />
      </Box>
    </Container>
  );
};

export default HomePage;
