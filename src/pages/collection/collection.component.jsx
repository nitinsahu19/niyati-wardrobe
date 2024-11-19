import React from "react";
import { useParams } from "react-router-dom";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { useSelector } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

const CollectionPage = () => {
  const { categoryId } = useParams(); // Get categoryId from URL
  const collection = useSelector((state) =>
    selectCollection(categoryId)(state) // Use categoryId to fetch collection from Redux store
  );

  console.log(collection); // Check if the collection is properly selected from the state

  // Ensure collection exists before destructuring
  if (!collection) {
    return <div>Collection not found</div>;
  }

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.length === 0 ? (
          <p>No items available in this collection.</p>
        ) : (
          items.map((item) => <CollectionItem key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
};

export default CollectionPage;
