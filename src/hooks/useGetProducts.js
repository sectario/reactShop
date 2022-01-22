import { useEffect, useState } from "react";
import axios from 'axios';


const useGetProducts = (API) => {
    const [products, setproducts] = useState([]);
    useEffect(async() => {
    const response = await axios(API)
    setproducts(response.data);
  }, []);
  return products
};

export default useGetProducts;




