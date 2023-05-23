'use client'
import Link from "next/link";
import  styled  from "styled-components";
import Center from "./Center";

const StyledHeader = styled.header`
    background-color: #eeece7;
`;
const Logo = styled(Link)`
    color:#000000;
    text-decoration: none;
    font-weight: bold;

`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
`;

const StyledNav = styled.nav`
    display: flex;
    gap: 20px;
`;

const NavLink = styled(Link)`
    color:#000000;
    text-decoration: none;
`;

export default function Header(){
    return(
        <StyledHeader>
            <Center>
                <Wrapper>
                <Logo href={'/'}>Audio.</Logo>
                <StyledNav>
                    <NavLink href={'/'}>Inicio</NavLink>
                    <NavLink href={'/productos'}>Productos</NavLink>
                    <NavLink href={'/categorias'}>Categorias</NavLink>
                    <NavLink href={'/acceso'}>Acceso</NavLink>
                    <NavLink href={'/cart'}>Cart (0)</NavLink>
                </StyledNav>
                </Wrapper>
            </Center>
        </StyledHeader>
    );
}