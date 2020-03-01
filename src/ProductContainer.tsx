import React, {useEffect, useState} from "react";
import {Prompt, RouteComponentProps} from "react-router-dom";
import {mockData, Product} from "./ProductsData";
import ProductPresentation from "./ProductPresentation";

type Props = RouteComponentProps<{id: string}>;

const ProductContainer: React.FC<Props> = ({match: {params}}: Props) => {
    const [product, setProduct] = useState<Product | undefined>(undefined);
    const [isAdded, setAdded] = useState<boolean>(false);

    useEffect(() => {
        if (params.id) {
            const id: number = parseInt(params.id, 10);
            const productToDisplay: Product = mockData.filter(value => value.id === id)[0];
            setProduct(productToDisplay);
        }
    }, [params.id]);

    const handleAddClick = () => {
        setAdded(true);
    };

    return (
        <div className="page-container">
            <Prompt message={() => "Are you sure you want to leave without buying this product?"} when={!isAdded} />
            {product ? (
                <ProductPresentation product={product} inBasket={isAdded} onAddToBasket={handleAddClick}/>
            ) : (
                <p>Product not found!</p>
            )}
        </div>
    );
};

export default ProductContainer;
