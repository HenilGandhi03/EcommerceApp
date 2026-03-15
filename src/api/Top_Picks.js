import { BASE_URL } from "./config";

export const fetchTopProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}?action=top`);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};