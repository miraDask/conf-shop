import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'

class Directory extends React.Component {
  constructor(props) {
    super();
    this.state = {
      categories: [
        {
          title: "skincare",
          imageUrl: "https://i.ibb.co/Vg2vw1W/skincare.jpg",
          id: 1,
          linkUrl: "shop/skincare",
        },
        {
          title: "haircare",
          imageUrl: "https://i.ibb.co/K0cpsDz/haircare.png",
          id: 2,
          linkUrl: "shop/haircare",
        },
        {
          title: "accessories",
          imageUrl: "https://i.ibb.co/gmPkYGN/accessories.jpg",
          id: 3,
          linkUrl: "shop/accessories",
        },
        {
          title: "tools",
          imageUrl: "https://i.ibb.co/7KQN0JT/tools.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/tools",
        },
        {
          title: "makeup",
          imageUrl: "https://i.ibb.co/LngMfgq/makeup.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/makeup",
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.categories.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps}/>
        ))}
      </div>
    );
  }
}

export default Directory;
