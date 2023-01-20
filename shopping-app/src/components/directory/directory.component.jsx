import CategoryItems from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItems category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
