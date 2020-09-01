import React from "react";
import ProductTable from "./Component/ProductTable";

function App() {
  const products = [
    { Name: "T-shirt", Price: 40, Category: "Vêtements" },
    { Name: "Jean", Price: 80, Category: "Vêtements" },
    { Name: "Sac à mains", Price: 90, Category: "Accessoires" },
    { Name: "Collier", Price: 30, Category: "Accessoires" },
    { Name: "Brodequin", Price: 40, Category: "Chaussures" },
  ];
  return (
    <React.Fragment className="App">
      <ProductTable products={products} />
    </React.Fragment>
  );
}

export default App;
