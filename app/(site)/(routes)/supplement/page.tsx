import getAllSupplements from "@/actions/getAllSupplements";
import Heading from "./components/Heading";
import ProductCard from "./components/ProductCard";

export const revalidate = 0;

const SupplementPage = async () => {
  const supplements = await getAllSupplements();

  return (
    <section>
      <Heading />
      <div className="lg:px-20 sm:px-10 px-4 pt-24">
        <h1 className="uppercase text-3xl font-bold mb-8">featured products</h1>
        <ProductCard supplements={supplements} />
      </div>
    </section>
  );
};

export default SupplementPage;
