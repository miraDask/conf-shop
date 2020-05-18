import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewContainer, CollectionTitle, ItemPreviewContainer } from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
	<CollectionPreviewContainer>
		<CollectionTitle>{title.toUpperCase()}</CollectionTitle>
		<ItemPreviewContainer>
			{items.filter((item, indx) => indx < 4).map((item) => <CollectionItem key={item.id} item={item} />)}
		</ItemPreviewContainer>
	</CollectionPreviewContainer>
);

export default CollectionPreview;
