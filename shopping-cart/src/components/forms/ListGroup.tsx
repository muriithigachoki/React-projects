import { MouseEvent } from "react";

const ListGroup = () => {
  let items = ["Nairobi", "Nakuru", "Kutus", "Thika"];

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <h2>List Items</h2>
      {items.length === 0 && <p> No items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
