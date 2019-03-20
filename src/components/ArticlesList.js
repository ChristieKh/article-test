import React from "react";
import {Link} from "react-router-dom";

const ArticlesList = ({item: {id, title}}) => {
    return (
        <div className="row">
            <Link to={`/item/${id}`}>
                <li>{title}</li>
            </Link>
        </div>
    )
};

export default ArticlesList;