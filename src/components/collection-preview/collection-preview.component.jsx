import React from "react";
import CollectionItem from '../collection-item/collection-item.component'

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, id }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, indx) => indx < 4)
        .map(({id, ...otherCollectionItemProps}) => (
          <CollectionItem key={id} {...otherCollectionItemProps}/>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
