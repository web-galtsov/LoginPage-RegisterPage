import React, { Fragment } from "react";
import { Link, Route } from "react-router-dom";
import { NotFound } from "../Errors";
import Wrote from "../pages/Wrote";

export default ({
                    match: { url, id },
                    name,
                    description,
                    image,
                    born,
                    deceased,
                    texts
                }) =>
    console.log(id) || (
        <Fragment>
            <h1>{name}</h1>
            <h3>
                {born} &ndash; {deceased}
            </h3>
            <p>{description}</p>
            <img src={image} alt={name} style={{ maxWidth: 300, maxHeight: 150 }} />

            <ul>
                {texts.map(({ id, title }) => (
                    <li key={id}>
                        <Link to={`${url}/text/${id}`}>{title}</Link>
                    </li>
                ))}
            </ul>

            <Route
                path={`${url}/text/:writerId`}
                render={props => {
                    const text = texts.find(
                        ({ id }) => id === props.match.params.writerId
                    );
                    if (!text) {
                        return <NotFound/>;
                    }
                    return <Wrote {...text} />;
                }}
            />
        </Fragment>
    );
