import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Header } from './Header';
import CardPizza from './CardPizza';
import imagen1 from '../assets/img/imagen1.jpg'
import imagen2 from '../assets/img/imagen2.jpg'
import imagen3 from '../assets/img/imagen3.jpg'

export const Home = () => {
    const cardsData = [
        {
            id: 1,
            imagen: imagen1,
            titulo: "Napolitana",
            ingredientes: "Mozzarela, Tomate, Jamón, Orégano.",
            precio: "5.950"
        },
        {
            id: 2,
            imagen: imagen2,
            titulo: "Española",
            ingredientes: "Mozzarela, Gorgonzona, Provolone, Chorizo.",
            precio: "6.590"
        },
        {
            id: 3,
            imagen: imagen3,
            titulo: "Pepperoni",
            ingredientes: "Mozzarella, Pepperoni, Orégano.",
            precio: "6.590"
        }
    ];
    
    return (
        <>
            <Header />
            <Container className="my-5">
                <Row className="justify-content-center g-4">
                    {cardsData.map(card => (
                        <Col 
                            key={card.id} 
                            xs={12} 
                            md={6} 
                            lg={4}
                            className="d-flex justify-content-center"
                        >
                            <div className="w-100" style={{ maxWidth: '350px' }}>
                                <CardPizza 
                                    imagen={card.imagen}
                                    titulo={card.titulo}
                                    ingredientes={card.ingredientes}
                                    precio={card.precio}
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}
