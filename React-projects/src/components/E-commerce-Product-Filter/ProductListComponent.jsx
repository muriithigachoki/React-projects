import React from "react";
import ProductComponent from "./ProductComponent";

const ProductListComponent = ({ items }) => {
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Product name</th>
            <th>price</th>
            <th>Categories</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ProductComponent key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductListComponent;
