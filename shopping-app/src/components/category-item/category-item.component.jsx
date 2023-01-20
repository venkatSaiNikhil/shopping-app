//import { useState } from "react";
import "./category-item.styles.scss";

const CategoryItems = ({ category }) => {
  //const [category, setCategory] = useState(props);
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h1>{title}</h1>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItems;
