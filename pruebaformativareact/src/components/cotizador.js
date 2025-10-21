import React, { useState } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';


function CotizadorComponentes() {
    // estados para los valores
   
    const [precioCPU, setPrecioCPU] = useState(0);
    const [precioGPU, setPrecioGPU] = useState(0);
    const [precioRam, setPrecioRam] = useState(0)
    const [cantidadRAM, setCantidadRAM] = useState(1);
    const [garantia, setGarantia] = useState(0); 
    const [descuento, setDescuento] = useState(0);
    


    const preciosGarantia = {
        0:0,
        1:35000,
        2:40000,
        3:45000,
        4:50000,
        5:60000
    };

    const getPrecioGarantia = (años) => {
        return preciosGarantia [años] || 0;
      }


    // funcion para calcular los valores

  const precioCPUNum = Number(precioCPU) || 0;
  const precioGPUNum = Number (precioGPU) || 0;
  const precioRamNum = Number (precioRam) || 0;
  const cantidadRAMNum = Number (cantidadRAM) || 0;
  const precioGarantiaSelect = getPrecioGarantia ( garantia);
  const descuentoNum = Number (descuento) || 0;

  

  const subtotal = Math.round(precioCPUNum + precioGPUNum + (precioRamNum * cantidadRAMNum) + precioGarantiaSelect) ;
  const iva = Math.round(subtotal * 0.19);
  const totalConIva = Math.round(subtotal + iva );
  const total = Math.round(totalConIva - descuentoNum) ;



        
    

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
                        <input type="text" className="form-control" value={precioCPU} onChange={e => {
                            setPrecioCPU(e.target.value === '' ? '' : Number(e.target.value));
                            
                        }} />
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Precio GPU (por módulo)</label>
                        <input type="text" className="form-control" value={precioGPU} onChange={e => {
                            setPrecioGPU(e.target.value === '' ? '' : Number(e.target.value));
                          
                        }} />
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Precio RAM (por módulo)</label>
                        <input type="text" className="form-control" value={precioRam} onChange={e => {
                            setPrecioRam(e.target.value === '' ? '' : Number(e.target.value));
                           
                        }} />
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Cantidad modulos de RAM</label>
                        <input type="text" className="form-control" value={cantidadRAM} onChange={e => {
                            setCantidadRAM(e.target.value === '' ? '' : Number(e.target.value));
                            
                        }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Garantia</label>
                        <select className="form-control" value={garantia} onChange={e => setGarantia(e.target.value)}>
                        <option value="0"> Sin garantia </option>
                            <option value="1">1 año</option>
                            <option value="2">2 años</option>
                            <option value="3">3 años</option>
                            <option value="4">4 años</option>
                            <option value="5">5 años</option>

                        </select>
                        <div className="mb-3">
                        <label className="form-label">Descuento</label>
                        <input type="text" className="form-control" value={descuento} onChange={e => {
                            setDescuento(e.target.value === '' ? '' : Number(e.target.value));
                          
                        }} />
                     <Button variant="info" onClick={()=>{
                        setPrecioCPU(0);
                        setPrecioGPU(0);
                        setPrecioRam(0);
                        setCantidadRAM(0);
                        setGarantia(0);
                        setDescuento(0);
                     }}>Limpiar </Button>
                     
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
                                    <td> -${(descuento).toLocaleString()}</td>



                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Total</td>
                                    <td>${total.toLocaleString()}</td>
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