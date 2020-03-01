import React, {useEffect, useState} from "react";
import {Link, RouteComponentProps} from "react-router-dom";
import {Product, mockData} from "./ProductsData";

const ProductsPage: React.FC<RouteComponentProps> = ({location: {search}}: RouteComponentProps) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchParam, setSearchParam] = useState<string>("");

    useEffect(() => {
        setProducts(mockData);
    }, []);

    useEffect(() => {
        const searchParams = new URLSearchParams(search);
        setSearchParam(searchParams.get("search") || "");
    }, [search]);

    return (
        <div className="page-container">
            <p>Welcome to React Shop where you can get all your tools for ReactJS!</p>
            <ul className="product-list">
                {products.map(value => {
                    if (
                        !searchParam ||
                        (searchParam &&
                            value.name.toLowerCase().indexOf(searchParam.toLowerCase()) > -1)
                    ) {
                        return (
                            <Link
                                key={value.id}
                                className="product-list-item"
                                to={`/products/${value.id}`}
                            >
                                {value.name}
                            </Link>
                        );
                    }

                    return null;
                })}
            </ul>
        </div>
    );
};

export default ProductsPage;
