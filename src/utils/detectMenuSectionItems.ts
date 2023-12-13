import products from "@utils/products.json";

const detectMenuSectionItems = (category: string) => {
  const itemIds = products.reduce((a, c) => {
    if (c.category === category) a.push(Number(c.id));
    return a;
  }, []);
  return itemIds;
};

export default detectMenuSectionItems;
