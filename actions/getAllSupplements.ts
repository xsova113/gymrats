import { Product } from "@/type";
import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API_URL + "/products";

const getAllSupplements = async (): Promise<Product[]> => {
  const response = await axios({
    baseURL: URL,
  });

  return response.data;
};

export default getAllSupplements;
