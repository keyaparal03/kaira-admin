import { apiClient } from "../api/ApiClient";

class ProductService {

  getProducts() {
    return apiClient.get(
      "/products"
    );
  }

  getProductById(id: string) {
    return apiClient.get(
      `/products/${id}`
    );
  }

  createProduct(data: any) {
    return apiClient.post(
      "/products",
      data
    );
  }

  updateProduct(
    id: string,
    data: any
  ) {
    return apiClient.put(
      `/products/${id}`,
      data
    );
  }

  deleteProduct(id: string) {
    return apiClient.delete(
      `/products/${id}`
    );
  }
}

export default new ProductService();