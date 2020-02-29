import React, {useEffect, useState} from "react";
import {Product, mockData} from "./ProductsData";

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts(mockData);
    }, []);

    return (
        <div className="page-container">
            <p>Welcome to React Shop where you can get all your tools for ReactJS!</p>
            <ul className="product-list">
                {products.map(value => (
                    <li key={value.id} className="product-list-item">
                        {value.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsPage;
