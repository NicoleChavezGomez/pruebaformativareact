import React, { useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

function CotizadorComponentes() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-12 text-center bg-secondary text-white p-3">
                    <h2>DEMO:</h2>
                    <h4>Cotizador de Componentes</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div>
                        {/* Aquí va el formulario */}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div>
                        {/* Aquí va la tabla de resultados */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CotizadorComponentes;