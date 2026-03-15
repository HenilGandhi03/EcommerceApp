import { fetchTopProducts } from "../api/Top_Picks";

export const getTopProducts = async () => {
  const products = await fetchTopProducts();

  return products.map((item) => {
    const [name, subheading] = item.Name.split(" - ");

    return {
      id: item.Identity,
      name: name || item.Name,
      sub: subheading || "",
      price: item.MRP,
      img: item.ImageURL,

      // keep full data for product screen
      sku: item.Sku,
      description: item.Description,
      category: item.Category,
      tags: item.Tags
    };
  });
};