import styled from "styled-components";


export const ContainerRow = styled.div`
    display: flex;
        li {
            list-style: none;
             text-transform: capitalize;
        }
`;

export const Icons = styled.div`
    margin-left: auto;
    color: #1EAEDB;
    button {
        border: none;
        font-size: 16px;
        color: #1EAEDB;
        margin-bottom: 0;
        padding: 0;
    }
        .fa-trash {
            margin-left: 20px;
            color: #555;;
        }
`;