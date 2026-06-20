import ApiError from "./ApiError";
import { getAccessToken } from "../utils/localStorage";

const BASE_URL = "http://localhost:3500/api";

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    auth: boolean = true,
    options: RequestInit = {}
  ): Promise<T> {

    const token = getAccessToken();

    const isFormData =
      options.body instanceof FormData;

    const response = await fetch(
      `${this.baseUrl}${endpoint}`,
      {
        ...options,

        credentials: "include",

        headers: {

          ...(isFormData
            ? {}
            : {
                "Content-Type":
                  "application/json"
              }),

          ...(token && auth
            ? {
                Authorization:
                  `Bearer ${token}`
              }
            : {}),

          ...options.headers
        }
      }
    );

    const data =
      await response.json();

    if (!response.ok) {
      throw new ApiError(
        data.message || "API Error",
        response.status,
        data
      );
    }

    return data;
  }

  get<T>(
    endpoint: string,
    auth: boolean = true
  ) {
    return this.request<T>(
      endpoint,
      auth,
      {
        method: "GET"
      }
    );
  }

  post<T, B>(
    endpoint: string,
    body: B,
    auth: boolean = true
  ) {
    return this.request<T>(
      endpoint,
      auth,
      {
        method: "POST",

        body:
          body instanceof FormData
            ? body
            : JSON.stringify(body)
      }
    );
  }

  put<T, B>(
    endpoint: string,
    body: B,
    auth: boolean = true
  ) {
    return this.request<T>(
      endpoint,
      auth,
      {
        method: "PUT",

        body:
          body instanceof FormData
            ? body
            : JSON.stringify(body)
      }
    );
  }

  delete<T>(
    endpoint: string,
    auth: boolean = true
  ) {
    return this.request<T>(
      endpoint,
      auth,
      {
        method: "DELETE"
      }
    );
  }
}

export const apiClient =
  new ApiClient(BASE_URL);