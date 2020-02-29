import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AdminPage from "./AdminPage";
import ProductsPage from "./ProductsPage";
import Header from "./Header";
import ProductPage from "./ProductPage";

const Routes: React.FC = () => {
    return (
        <Router>
            <div>
                <Header />
                <Route exact path="/products" component={ProductsPage} />
                <Route path="/products/:id" component={ProductPage} />
                <Route path="/admin" component={AdminPage} />
            </div>
        </Router>
    );
};

export default Routes;
