import React from "react";
import {Container, Title} from "./CommentsListStyled";

const CommentsList = ({comments}) => {
    return (comments.map(({body, email, id}) => {
        return (
            <Container key={id}>
                <Title>{email} says:</Title>
                <span>{body}</span>
            </Container>
        )
    }))
};

export default CommentsList;