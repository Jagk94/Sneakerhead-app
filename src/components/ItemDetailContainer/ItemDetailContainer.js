import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/firebaseFetching";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  return (
    <>
      <Header showAs="Shadow" />
      {loading ? (
        <Loader />
      ) : (
        <Item product={{ id, ...product }} showAs={"Detail"} />
      )}
    </>
  );
};

export default ItemDetailContainer;
