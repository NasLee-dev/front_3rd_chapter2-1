import React from 'react';
import { IProductList } from '../models/Product';

function StockInfo({ products }: { products: IProductList[] }) {
  const lowStockProducts = products.filter((item) => item.stock < 5);

  return (
    <div className="text-sm text-gray-500 mt-2">
      {lowStockProducts.map((item) => (
        <div key={item.id}>
          {item.name}: {item.stock > 0 ? `재고 부족 (${item.stock}개 남음)` : '품절'}
        </div>
      ))}
    </div>
  );
}

export default StockInfo;