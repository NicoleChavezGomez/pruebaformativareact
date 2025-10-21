import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
return(

    <div className="mt-5" style={{width: '100%', margin: 0, padding: 0}}>
        <div className="text-center" style={{backgroundColor: '#ffb3ff', padding: '20px 0'}}>

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