import React from "react";
import {Container} from "./CommentsListStyled";

const CommentsList = ({comments}) => {
    return (comments.map(({body, email, id}) => {
        return (
            <Container key={id}>
                <p>{email} says:</p>
                <span>{body}</span>
            </Container>
        )
    }))
};

export default CommentsList;