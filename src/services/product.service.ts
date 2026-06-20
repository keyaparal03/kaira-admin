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

  /* UPDATE WITH POST */
  updateProduct(
    id: string,
    data: FormData
  ) {
    return apiClient.post(
      `/products/update/${id}`,
      data
    );
  }

  /* DELETE WITH POST */
  deleteProduct(id: string) {
    return apiClient.post(
      `/products/delete/${id}`,
      {}
    );
  }
}

export default
new ProductService();