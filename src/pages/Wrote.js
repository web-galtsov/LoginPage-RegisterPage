import React, { Fragment } from "react";

export default ({ match, title, description, published }) =>
    console.log(match) || (
        <Fragment>
            <h4>
                {title}
                {published}
            </h4>
            <p>{description}</p>
        </Fragment>
    );
