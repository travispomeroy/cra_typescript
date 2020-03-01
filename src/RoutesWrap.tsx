import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Routes from "./Routes";

const RoutesWrap: React.FC = () => {

    return (
        <Router>
            <Route component={Routes} />
        </Router>
    );
};

export default RoutesWrap;