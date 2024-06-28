import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../../App";

const useData = (requestConfig?: AxiosRequestConfig) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<Product[]>("http://localhost:3000/data", {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { error, isLoading, products };
};

export default useData;
