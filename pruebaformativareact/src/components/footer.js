import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


function Footer() {
return(

    <div className="mt-5" style={{width: '100%', margin: 0, padding: 0}}>
        <div className="text-center" style={{backgroundColor: '#ffb3ff', padding: '20px 0'}}>
            <div className="d-flex flex-column align-items-center gap-2">
                <Button 
                    variant="outline-light" 
                    href="https://wa.me/56912345678?text=Me%20contacto%20via%20web%20y%20necesito%20ayuda"
                    className="px-3 fw-bold text-dark"
                >
                    <i className="fa-brands fa-whatsapp"></i> Whatsapp: +5612345678
                </Button>
                
                <Button 
                    variant="outline-light" 
                    href="#"
                    className="px-3 fw-bold text-dark"
                >
                    <i className="fa-brands fa-instagram"></i> Instagram
                </Button>
                
                <Button 
                    variant="outline-light" 
                    href="#"
                    className="px-3 fw-bold text-dark"
                >
                    <i className="fa-brands fa-twitter"></i> Twitter
                </Button>
                
                <Button 
                    variant="outline-light" 
                    href="#"
                    className="px-3 fw-bold text-dark"
                >
                    <i className="fa-brands fa-facebook"></i> Facebook
                </Button>
            </div>

            <div className="mt-3 text-dark">
                <p className="mt-3 fw-bold">Sede Central: Av. Principal 456, Santiago <i className="fa-solid fa-location-dot"></i></p>
                <p className="mt-3 fw-bold">Sede Norte: Calle Norte 987, Rancagua <i className="fa-solid fa-location-dot"></i></p>
                <p className="mt-3 fw-bold">Sede Sur: Plaza Sur 369, Concepción <i className="fa-solid fa-location-dot"></i></p>
            </div>
        </div>
    </div>
);
}
export default Footer;