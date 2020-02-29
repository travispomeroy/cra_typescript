import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import AdminPage from "./AdminPage";
import ProductsPage from "./ProductsPage";
import Header from "./Header";
import ProductPage from "./ProductPage";
import NotFoundPage from "./NotFoundPage";

const Routes: React.FC = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Redirect to="/products" from="/" exact />
                    <Route exact path="/products" component={ProductsPage} />
                    <Route path="/products/:id" component={ProductPage} />
                    <Route path="/admin" component={AdminPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default Routes;
