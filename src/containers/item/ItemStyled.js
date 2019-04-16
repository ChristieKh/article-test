import styled from "styled-components";

export const Button = styled.button`
    height: 38px;
    padding: 0 30px;
    width: 100%;
    font-size: 11px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: .1rem;
    text-transform: uppercase;
    border-radius: 4px;
    border: 1px solid #bbb;
    cursor: pointer;
    background-color: ${({type}) => type === 'isOpen' ? '#84edb2' : 'transparent'}
`;