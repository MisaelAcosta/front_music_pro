import  styled, { css }  from "styled-components";

const StyledButton = styled.button`
    background-color: #5542f6;
    border:0;
    color: #fff;
    padding 5px 15px;
    border-radius:5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    svg{
        height: 16px;
        margin-left:5px;
    }

    ${props => props.white && css`
        background-color: transparent;
        color: #000;
        border: 1px solid #000;
    `}

    ${props => props.primary && css`
     background-color: #000;
     color: #fff;
    `}

    ${props => props.size == 'l' && css`
        font-size:1.2rem;
        padding: 10px 20px;
        svg{
            height: 23px;
        }
    `}

`;

export default function Button({children,...rest}) {
    return (
        <StyledButton {...rest}>{children}</StyledButton>
    );
}