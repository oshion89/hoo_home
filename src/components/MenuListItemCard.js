import React from "react";




function MenuListItemCard(props) {

  return (
    <li key={props.key}>
      <p>
        <span>{props.name}</span>
      </p>
      <p>
        <span>{props.priority}</span>
      </p>
    </li>
  );
}
export default MenuListItemCard;