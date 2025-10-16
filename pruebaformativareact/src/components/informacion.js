import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardsProductos from './cards';


function Informacion() {
    return (
        //seccion empresa 
        <section id="caracteristicas">
            <Container>
                <hr />
                <Row className="my-3">
                    <Col lg={6}>
                        <img 
                            src='https://img.freepik.com/vector-premium/ilustracion-concepto-computadora-escritorio-moderna_114360-11616.jpg' 
                            alt="Empresa PC ANDES"
                            className="img-fluid"
                            style={{height: '400px', objectFit: 'cover'}}
                        />
                      
                    </Col>
                   
                    <Col lg={6} className="d-flex flex-column justify-content-center ">
                        <h3>Nuestra Misión</h3>
                        <p>
                            "Proporcionar soluciones tecnológicas integrales de alta calidad,
                            ofreciendo componentes de computación premium, servicios de
                            ensamble personalizado y soporte técnico especializado.
                            Nos comprometemos a satisfacer las necesidades tecnológicas
                            de nuestros clientes, desde gamers entusiastas hasta
                            profesionales y empresas, garantizando productos auténticos,
                            precios competitivos y atención personalizada."
                        </p>
                    </Col>
                </Row>
                <hr />

               {/*seccion productos destacados */}
               <CardsProductos />
            </Container>
        </section>
    )
}

export default Informacion;