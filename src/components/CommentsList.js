import React from "react";
import styled from "styled-components";

const Container = styled.div` 
    borderBottom: 1px solid gray;   
`;

const Title = styled.p`
    font-weight: 500;
    margin-bottom: 5px;
`;

const CommentsList = ({comments}) => {
    return (comments.map(({body, email, id}) => {
        return (
            <Container key={id} style={{borderBottom: "1px solid gray"}}>
                <Title className="email">{email} says:</Title>
                <span>{body}</span>
            </Container>
        )
    }))
};

export default CommentsList;