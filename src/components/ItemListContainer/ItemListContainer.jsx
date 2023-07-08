import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ItemList from "../Itemlist/Itemlist";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useAsync } from "../../hooks/useAsync";
import { getProducts } from "../../services/firestore/products";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();

  useEffect(() => {
    document.title = categoryId ? `Categoria: ${categoryId}` : `Todos los productos`;
    return () => {
      document.title = 'Mi ecommerce';
    };
  }, [categoryId]);

  const getProductsWithCategory = () => getProducts(categoryId);

  const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId]);

  if (loading) {
    return (
      <div>
        <h1>Cargando...</h1>
        <ClipLoader color="black" loading={true} size={50} />
      </div>
    );
  }

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>{greeting}</h2>
      <br />
      <div>
        <ItemList key={products.id} products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;
