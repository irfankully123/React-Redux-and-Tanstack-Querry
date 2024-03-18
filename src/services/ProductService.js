import { useQuery } from "@tanstack/react-query";
import ApiContant from '../constants/ApiConstant';

class ProductService {

  static getProducts = async (query) => {
    const response = await ApiContant.get("products", { params: query });
    return response.data;
  };

  static fetchProducts = (query) => {
    return useQuery({
      queryKey: ["products", query],
      queryFn: () => ProductService.getProducts(query),
    });
  };


}

export default ProductService;
