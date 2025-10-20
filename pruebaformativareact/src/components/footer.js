import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
return(

    <div className="container row  mt-5" style={{width: '100%'}}>
        <div className="col-lg-12 text-center bg-success">

            <p claseName="mt-3 text-white ">Whatsapp: +5612345678 - info@recursoshumanos.cl <i class="fa-brands fa-whatsapp"></i></p>
            <p claseName="mt-3 text-white ">sede Central: Av. Principal 456, Santiago <i class="fa-solid fa-location-dot"></i></p>
            <p claseName="mt-3 text-white ">sede Norte: calle Norte 987, Rancagua <i class="fa-solid fa-location-dot"></i> </p>
            <p claseName="mt-3 text-white ">sede sur: Plaza sur 369, Concepción <i class="fa-solid fa-location-dot"></i></p>

            <div className="mt-3">
            
            </div>
        </div>
    </div>
);
}
export default Footer;