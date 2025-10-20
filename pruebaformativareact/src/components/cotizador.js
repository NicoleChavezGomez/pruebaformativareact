import React, { useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

function CotizadorComponentes() {
    // estados para los valores
    const [subtotal, setSubtotal] = useState(0);
    const [iva, setIva] = useState(0);
    const [descuento, setDescuento] = useState('-50000');
    const [total, setTotal] = useState(0);
    const [productos, setProductos] = useState([]);
    const [precioCPU, setPrecioCPU] = useState(150000);
    const [precioGPU, setPrecioGPU] = useState(300000);
    const [cantidadRAM, setCantidadRAM] = useState(2);
    const [garantia, setGarantia] = useState('1');

    // funcion para calcular los valores
    const calcularValores = () => {
        const cpu = precioCPU === '' ? 0 : precioCPU;
        const gpu = precioGPU === '' ? 0 : precioGPU;
        const ram = cantidadRAM === '' ? 0 : cantidadRAM;
        const desc = descuento === '' ? 0 : descuento;
        
        const subtotalCalculado = cpu + gpu + (ram * 100000);
        const IvaCalculado = subtotalCalculado * 0.19;
        const totalCalculado = subtotalCalculado + IvaCalculado + desc;



        setSubtotal(subtotalCalculado);
        setIva(IvaCalculado);
        setTotal(totalCalculado);

        
    }

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
                     {/* Aquí va el formulario */}
                        
                    <div className="mb-3">
                        <label className="form-label">Precio de la CPU</label>
                        <input type="text" className="form-control" value={precioCPU} onChange={e => setPrecioCPU(e.target.value === '' ? '' : Number(e.target.value))} />
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Precio GPU (por módulo)</label>
                        <input type="text" className="form-control" value={precioGPU} onChange={e => setPrecioGPU(e.target.value === '' ? '' : Number(e.target.value))} />
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Cantidad modulos de RAM</label>
                        <input type="text" className="form-control" value={cantidadRAM} onChange={e => setCantidadRAM(e.target.value === '' ? '' : Number(e.target.value))} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Garantia</label>
                        <select className="form-control" value={garantia} onChange={e => setGarantia(e.target.value)}>
                            <option value="1">1 año</option>
                            <option value="2">2 años</option>
                            <option value="3">3 años</option>
                            <option value="4">4 años</option>
                            <option value="5">5 años</option>

                        </select>
                        <div className="mb-3">
                            <label className="form-label"> Descuento</label>
                            <input className="form-control" type="text" value={descuento} onChange={e => {
                                const value = e.target.value;
                                if (value === '' || value === '-') {
                                    setDescuento(value);
                                } else if (!isNaN(Number(value))) {
                                    setDescuento(value);
                                }
                            }}></input>
                            <button className="btn btn-primary" onClick={calcularValores} >Calcular  <i class="fa-solid fa-calculator"></i></button>
                           

                          

                        </div>


                    </div>
                </div>
                <div className="col-lg-6">
                    <div>
                        {/* Aquí va la tabla de resultados */}
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Concepto</th>
                                    <th>Valor</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Subtotal</td>
                                    <td>${subtotal.toLocaleString()}</td>


                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>IVA (19%)</td>
                                    <td>${iva.toLocaleString()}</td>


                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Descuento</td>
                                    <td>${descuento === '' ? '0' : Number(descuento).toLocaleString()}</td>



                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td colSpan={2}>Total</td>

                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CotizadorComponentes;