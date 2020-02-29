import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import AdminPage from "./AdminPage";
import ProductsPage from "./ProductsPage";
import Header from "./Header";
import ProductPage from "./ProductPage";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";

const Routes: React.FC = () => {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

    return (
        <Router>
            <div>
                <button type="button" onClick={() => setLoggedIn(!isLoggedIn)}>Login</button>
                <Header />
                <Switch>
                    <Redirect to="/products" from="/" exact />
                    <Route exact path="/products" component={ProductsPage} />
                    <Route path="/products/:id" component={ProductPage} />
                    <Route path="/admin" component={AdminPage}>
                        {isLoggedIn ? <AdminPage /> : <Redirect to="/login" />}
                    </Route>
                    <Route path="/login" component={LoginPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default Routes;
