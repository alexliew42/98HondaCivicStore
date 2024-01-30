import { useState, useEffect } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  const getProducts = function () {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>

      {products.map((product, index) => (
        <div key={index}>
          <li>{product.productName}</li>
          <li>{product.price}</li>
          <li>{product.description}</li>
          <div>{console.log("hello")}</div>
        </div>
      ))}
    </>
  );
}
export default Product;
