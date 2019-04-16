import styled from "styled-components";

export const Container = styled.div` 
    display: flex;
    flex-flow: row wrap;
`;

export const FlexColumn = styled.div` 
    display: flex;
    flex-direction: column;
    margin-right: 10px;
`;

export const CommentText = styled.textarea` 
    width: 80%;
    min-height: 90px;
`;

export const Button = styled.button`
    padding: 0 20px;
    background-color: ${({type}) => type === 'error' ? 'pink' : 'transparent'}
`;