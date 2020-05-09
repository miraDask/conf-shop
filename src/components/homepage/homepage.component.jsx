import React from "react";
import MenuItem from "../menu-item/menu-item.component";

const HomePage = (props) => (
  <div className="homepage">
    <div className="directory-menu">
      {props.categories.map((category) => (
        <MenuItem title={category} subtitle='Shop Now' />
      ))}
    </div>
  </div>
);

export default HomePage;
