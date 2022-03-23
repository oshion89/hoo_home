import React from "react";
import MenuListItemCard from "./MenuListItemCard";




export default function MenuList(props) {


  return (
    <ul className="list__itemview">
        <MenuListItemCard
          key={props.key}
          name={props.name}
          priority={props.priority}
        />
    </ul>
  );

}