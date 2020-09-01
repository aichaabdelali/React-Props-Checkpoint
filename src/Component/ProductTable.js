import React from "react";
import PropTypes from "prop-types";

const ProductTable = ({ products }) => {
  // console.log(props);

  return (
    <React.Fragment>
      <table>
        <tr>
          <th> Name </th>
          <th> Price </th>
          <th> Category </th>
        </tr>
        {products.map((produit) => (
          <tr>
            <td> {produit.Name} </td>
            <td> {produit.Price} </td>
            <td> {produit.Category} </td>
          </tr>
        ))}
      </table>
    </React.Fragment>
  );
};

export default ProductTable;
