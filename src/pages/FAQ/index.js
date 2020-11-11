import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";

function FAQNavLinks() {
    return (
        <ul>
            <li>
                <NavLink to="/faq/swimming">Swimming</NavLink>
            </li>
            <li>
                <NavLink to="/faq/waterpolo">Water Polo</NavLink>
            </li>
        </ul>
    );
}

export default function FAQ() {
    return (
        <div>
            <h1 className="Header">FAQ</h1>
            <FAQNavLinks />
            <Switch>
                <Route path="/faq/swimming" component={() => <div>Swimming</div>} />
                <Route path="/faq/waterpolo" component={() => <div>Water Polo</div>} />
            </Switch>
        </div>
    );
}
