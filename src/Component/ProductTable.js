import React from "react";

const ProductTable = ({ products }) => {
  const prodTab = products.map(
    (el) =>
      (el = ({ products }) => {
        return (
          <React.Fragment>
            <table>
              <tr>
                <th> Name </th>
                <th> Price </th>
                <th> Category </th>
              </tr>
              <tr>
                <td> {el.Name} </td>
                <td> {el.Price} </td>
                <td> {el.Category} </td>
              </tr>
            </table>
          </React.Fragment>
        );
      })
  );
  return prodTab;
};

export default ProductTable;
