import React from "react";
import {Product} from "./ProductsData";

interface Props {
    product: Product;
    inBasket: boolean;
    onAddToBasket: () => void;
}

const ProductPresentation: React.FC<Props> = ({
    product: {description, name, price, reviews},
    inBasket,
    onAddToBasket,
}: Props) => {
    const onAddToBasketClicked = () => {
        onAddToBasket();
    };

    return (
        <>
            <h1>{name}</h1>
            <p>{description}</p>
            <div>
                <ul className="product-reviews">
                    {
                        reviews.map(x => (
                            <li key={x.reviewer} className="product-reviews-item">
                                <i>&ldquo;{x.comment}&rdquo;</i> - {x.reviewer}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <p className="product-price">
                {new Intl.NumberFormat("en-US", {
                    currency: "USD",
                    style: "currency"
                }).format(price)}
            </p>
            {!inBasket && (
                <button type="button" onClick={onAddToBasketClicked}>
                    Add to basket
                </button>
            )}
        </>
    );
};

export default ProductPresentation;
