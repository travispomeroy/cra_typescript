import React, {Suspense} from "react";
import {
    Route,
    Switch,
    Redirect,
    RouteComponentProps
} from "react-router-dom";
import ProductsPage from "./ProductsPage";
import Header from "./Header";
import ProductPage from "./ProductPage";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";

const AdminPage = React.lazy(() => import("./AdminPage"));

const Routes: React.FC<RouteComponentProps> = () => {
    return (
        <div>
            <Header />
                    <Switch>
                        <Redirect to="/products" from="/" exact />
                        <Route exact path="/products" component={ProductsPage} />
                        <Route path="/products/:id" component={ProductPage} />
                        <Route path="/admin">
                            <Suspense fallback={<div className="page-container">Loading...</div> }>
                                <AdminPage />
                            </Suspense>
                        </Route>
                        <Route path="/login" component={LoginPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
        </div>
    );
};

export default Routes;
