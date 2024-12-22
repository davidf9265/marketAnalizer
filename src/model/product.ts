/**
 * @product class to be used within the object
 */
export class Product {
  productName: string;
  ourPrice: number;
  category: string;
  currentStock: number;
  restockThreshold: number;
  lastUpdated: Date;

  constructor(
    productName,
    ourPrice,
    category,
    currentStock,
    restockThreshold,
    lastUpdated
  ) {
    this.productName = productName;
    this.ourPrice = ourPrice;
    this.category = category;
    this.currentStock = currentStock;
    this.restockThreshold = restockThreshold;
    this.lastUpdated = lastUpdated;
  }
}
