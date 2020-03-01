import React, {useEffect, useState} from "react";
import {NavLink, RouteComponentProps, withRouter} from "react-router-dom";
import logo from "./logo.svg";

const Header: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        const searchParams = new URLSearchParams(props.location.search);
        setSearch(searchParams.get("search") || "");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
    };

    const handleSearchKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.history.push(`/products?search=${search}`);
        }
    };

    return (
        <header className="header">
            <div className="search-container">
                <input
                    type="search"
                    placeholder="search"
                    value={search}
                    onChange={handleSearchChange}
                    onKeyDown={handleSearchKeydown}
                />
            </div>
            <img src={logo} className="header-logo" alt="logo" />
            <h1 className="header-title">React Shop</h1>
            <nav>
                <NavLink
                    to="/products"
                    className="header-link"
                    activeClassName="header-link-active"
                >
                    Products
                </NavLink>
                <NavLink to="/admin" className="header-link" activeClassName="header-link-active">
                    Admin
                </NavLink>
            </nav>
        </header>
    );
};

export default withRouter(Header);
