import {CommentText} from "../comment-form/CommentFormStyled";
import styled from "styled-components";

export const ContainerModal = styled.div`
    position: fixed;
    font-family: Arial, Helvetica, sans-serif;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    z-index: 99999;
    transition: opacity 400ms ease-in;
    display: ${({type}) => type === 'block' ? 'block' : 'none'}
    pointer-events: auto;
`;

export const ModalCss = styled.div`
    width: 500px;
    position: relative;
    margin: 10% auto;
    padding: 20px 20px 13px 20px;
    border-radius: 10px;
    background: #fff;
`;

export const ButtonClose = styled.a`
    cursor: pointer;
    background: #606061;
    color: #FFFFFF;
    line-height: 25px;
    position: absolute;
    right: -12px;
    text-align: center;
    top: -10px;
    width: 24px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 12px;
    box-shadow: 1px 1px 3px #000;
        &:hover { 
        background: #00d9ff; 
        }
`;

export const InputEmail = styled.input`
    width: 38%;
    margin-right: 10px;
`;

export const InputTitle = styled.input`
    width: 60%;
`;

export const TextArticle = styled(CommentText)`
    width: 100%
`;

export const Button = styled.button`
    width: 100%;
    color: #fff;
    background-color: ${({type}) => type === 'error' && 'red' || type === 'ok' && '#33C3F0' || type === 'disabled' && 'pink'}
`;