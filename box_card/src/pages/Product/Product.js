import "./Product.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ButtonDI from "../../components/Button/in_de_button/ButtonDI";

export default function DetailProduct() {
  const { id } = useParams(); // Lấy productId từ URL
  const [product, setProduct] = useState(null); // Khởi tạo state với giá trị null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        if (response.status === 200) {
          setProduct(response.data);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchData();
  }, [id]); // Chạy lại khi productId thay đổi

  // Kiểm tra nếu sản phẩm chưa được tải xong
  console.log(product);
  if (!product) {
    return <div>Loading...</div>; // Hiển thị thông báo loading
  }

  return (
    <div className="product-detail">
      <div className="detail-left">
        <img
          src={product.image}
          alt={product.title}
          className="product-detail-img"
        />
      </div>
      <div className="detail-right">
        <p className="product-detail-title">{product.title}</p>
        <p className="product-detail-price">{product.price} $</p>
        <p className="product-detail-description">{product.description}</p>
        <ButtonDI className="ButtonDI" />
        <div className="buy-add-save">
          <button>Buy Now</button>
          <button>Add to cart</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}
