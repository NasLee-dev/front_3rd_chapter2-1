import React from "react"
import { IProductList } from "../models/Product"


interface IItems extends IProductList {
  quantity: number
}

interface ICartItem {
  items: IItems[]
  updateItem: (id: string, change: number) => void
  removeItem: (id: string) => void
  total: number
  discountRate: number
  bonusPoints: number
}

function Cart({ items, updateItem, removeItem, total, discountRate, bonusPoints }: ICartItem) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-2">
          <span>{item.name} - {item.price}원 X {item.quantity}</span>
          <div>
            <button className="quantity-change bg-blue-500 text-white px-2 py-1 rounded mr-1" onClick={() => updateItem(item.id, -1)}>-</button>
            <button className="quantity-change bg-blue-500 text-white px-2 py-1 rounded mr-1" onClick={() => updateItem(item.id, 1)}>+</button>
            <button className="remove-item bg-red-500 text-white px-2 py-1 rounded" onClick={() => removeItem(item.id)}>삭제</button>
          </div>
        </div>
      ))}
      <div className="text-xl font-bold my-4">
        총액: {Math.round(total)}원
        {discountRate > 0 && <span className="text-green-500 ml-2">({(discountRate * 100).toFixed(1)}% 할인 적용)</span>}
        <span className="text-blue-500 ml-2">(포인트: {bonusPoints})</span>
      </div>
    </div>
  )
}

export default Cart