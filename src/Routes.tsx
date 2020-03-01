import React from "react";
import {
    Route,
    Switch,
    Redirect,
    RouteComponentProps
} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import AdminPage from "./AdminPage";
import ProductsPage from "./ProductsPage";
import Header from "./Header";
import ProductPage from "./ProductPage";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";

const Routes: React.FC<RouteComponentProps> = ({location: {key}}: RouteComponentProps) => {
    return (
        <div>
            <Header />
            <TransitionGroup>
                <CSSTransition key={key} timeout={500} classNames="animate">
                    <Switch>
                        <Redirect to="/products" from="/" exact />
                        <Route exact path="/products" component={ProductsPage} />
                        <Route path="/products/:id" component={ProductPage} />
                        <Route path="/admin" component={AdminPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default Routes;
