import getProduct from "@/actions/getProduct";
import React from "react";
import ProductGallery from "../components/ProductGallery";
import ProductDescription from "../components/ProductDescription";

export const revalidate = 0;

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await getProduct(params.id);

  return (
    <section className="md:px-10 py-10 px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-20">
      <ProductGallery product={product} />
      <ProductDescription product={product} />
    </section>
  );
};

export default ProductPage;
