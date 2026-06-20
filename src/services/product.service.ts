import { apiClient }
from "../api/ApiClient";

class ProductService {

  getProducts() {
    return apiClient.get(
      "/products"
    );
  }

  getProductById(
    id: string
  ) {
    return apiClient.get(
      `/products/${id}`
    );
  }

  createProduct(
    data: FormData
  ) {
    return apiClient.post(
      "/products",
      data
    );
  }

  updateProduct(
    id: string,
    data: FormData
  ) {
    return apiClient.post(
      `/products/${id}`,
      data
    );
  }

  deleteProduct(
    id: string
  ) {
    return apiClient.post(
      `/products/${id}`,
      {}
    );
  }
}

export default
new ProductService();