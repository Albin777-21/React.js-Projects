import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { addNewProduct, fetchListOfProducts } from "./api";

const ReactQueryDemo = () => {
  const [productTitle, setProductTitle] = useState("");
  const { data: productList, isLoading } = useQuery({
    queryKey: ["productList"],
    queryFn: () => fetchListOfProducts(),
  });

  const getQueryClient=useQueryClient()

  const {mutateAsync:handleAddNewProductMutation}=useMutation({
    mutationFn:addNewProduct,
    onSuccess:()=>{
        getQueryClient.invalidateQueries(['productList'])
    }

  })

  async function handleAddNew(){
   await handleAddNewProductMutation(productTitle)
    setProductTitle('')
  }

  if (isLoading) return <h2>Loading Products ! please Wait</h2>;
  return (
    <div>
      <h2>React query demo</h2>
      <div>
        <input
          type="name"
          value={productTitle}
          onChange={(event) => setProductTitle(event.target.value)}
          placeholder="Enter product title"
        />
        <button onClick={handleAddNew} disabled={productTitle.trim()===''}type="button">Add new product</button>
      </div>
      <ul>
        {productList.length > 0 ? (
          productList.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        ) : (
          <h2>Product not Found</h2>
        )}
      </ul>
    </div>
  );
};

export default ReactQueryDemo;
