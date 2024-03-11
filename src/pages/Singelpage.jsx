import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart, singelProduct,  } from "../Redux/Action";

const Singelpage = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  console.log(singelProduct.id);
  useEffect(() => {
    dispatch(singelProduct(id));
  }, []);
  let data = useSelector((store) => store.Product);
  console.log(singelProduct);
  const handleCart = () => {
    dispatch(
      addCart({
        img:data.singelProduct .img,
        title:data.singelProduct.title,
        price: data.singelProduct.price,
      })
    );
  };
  return (
    <div>
      <img src={data.singelProduct.img} alt="" />
      <p>{data.singelProduct.title}</p>
      <p>{data.singelProduct.price}</p>
      <button onClick={handleCart}>ADD TO CART</button>
    </div>
  );
};

export default Singelpage;