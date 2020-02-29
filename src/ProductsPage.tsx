import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
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
                    <Link key={value.id} className="product-list-item" to={`/products/${value.id}`}>
                        {value.name}
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default ProductsPage;
