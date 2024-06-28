import React from "react";

const ProductComponent = ({ item }) => {
  return (
    <>
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.category}</td>
      </tr>
    </>
  );
};

export default ProductComponent;
