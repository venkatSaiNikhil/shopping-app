import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component.jsx";

const Shop = () => {
  return <h1>This is Shop component</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};
export default App;
