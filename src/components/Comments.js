import React from "react";

const Comments = ({email, body}) => {
    return (
        <div style={{borderBottom: "1px solid gray"}}>
            <p style={{fontWeight: 500, marginBottom: "5px"}}>{email} says:</p>
            <span>{body}</span>
        </div>
    )
};

export default Comments;