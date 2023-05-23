'use client'
import { styled } from "styled-components";
import Center from "./Center";
import Button from "./Button";

const Bg = styled.div `
    background-color: #eeece7;
    padding: 75px 0;
`;

const Title = styled.h1`
    margin:0;
    font-weight: Black;
    font-size: 86px;
`;

const Desc =  styled.p`
    font-size:.8.5rem;
    padding-right:100px;
    margin: 20px 0 2rem;
    color:#474747;
    justify-content: center;
`;

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 40px;
    align-items:center;
`;

const Imagen = styled.div`

    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding-top:15px;
    img{
        max-width: 30%;
    }
`;

const ButtonWrapper = styled.div`

    display: flex;
    gap: 15px;
    margin: 40px 0 ;
`;



export default function Featured() {
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <div>
                        <Title>Novo Serus J<br/>
                                 Blue Metallic
                        </Title>   

                        <Desc>¿Hay algo mejor que esto? Una Novo Serus J en Ice Blue Metallic es una guitarra perfecta.<br></br>
                            <br/>
                            La guitarra eléctrica Novo Serus J en color Ice Blue Metallic es una obra maestra de la artesanía y la ingeniería musical.<br/>
                            Cada detalle de esta guitarra ha sido cuidadosamente diseñado para ofrecer un rendimiento excepcional y una estética impresionante.<br/>
                            El cuerpo de la Novo Serus J está construido con maderas de alta calidad que proporcionan una resonancia equilibrada y una respuesta tonal excepcional. 
                        </Desc>
                        <ButtonWrapper>
                            <Button  white size= "l">Leer mas</Button>
                            <Button primary size= "l">
                                Agregar
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                             </Button>
                        </ButtonWrapper>
                    </div>
                    <Imagen>
                        <img src="https://i.pinimg.com/736x/8d/ff/d4/8dffd465a9126cfc3d9f435c410cd227.jpg" alt=""/>
                        <img src="https://i.pinimg.com/736x/c1/20/22/c1202265ba0d5a41d0feeca629345e51.jpg" alt="" />
                        <img src="https://i.pinimg.com/736x/c1/4e/d8/c14ed84604a06b653735725752537328.jpg" alt="" />
                    </Imagen>
                </ColumnsWrapper>
            </Center>
        </Bg>
    );
}