import React from "react";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";
import products from "../data/products.json";

const ProductGrid = () => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "1fr 1fr",
        md: "repeat(4, 1fr)", // 4 equal columns
      },
      gap: 14,  // ⬅ this is the spacing (similar to MUI spacing={6})
      width: "100%",
    }}
  >
    {products.map((product) => (
      <Box key={product.id} sx={{ height: "100%" }}>
        <ProductCard product={product} />
      </Box>
    ))}
  </Box>
);

export default ProductGrid;