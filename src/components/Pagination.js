import React from "react";
import { Pagination } from "@mui/material";

const CustomPagination = ({ count, page, onChange, totalProducts }) => {
  return (
    totalProducts > 5 && (
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        color="primary"
      />
    )
  );
};

export default CustomPagination;
