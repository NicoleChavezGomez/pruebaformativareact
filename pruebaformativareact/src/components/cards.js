import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardsProductos() {
    return (
        <CardGroup>
            <Card className="h-100">
                <Card.Img 
                    variant="top" 
                    src="https://images.adsttc.com/media/images/55e6/7714/8450/b5e7/a600/08f4/large_jpg/procesadores.jpg?1441167119"
                    style={{height: '250px', objectFit: 'contain'}}
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>Procesadores</Card.Title>
                    <Card.Text className="flex-grow-1">
                        Procesadores Intel y AMD de 4-16 núcleos.
                        Velocidades base desde 3.0GHz hasta 5.0GHz.
                        Soporte para DDR4/DDR5 y PCIe 4.0.
                       
                    </Card.Text>
                </Card.Body>
            </Card>
            
            <Card className="h-100">
                <Card.Img 
                    variant="top" 
                    src="https://centrale.cl/wp-content/uploads/Memoria-RAM-192GB-en-Kit-4x48GB-DDR5-5200MT-s-CL38-Corsair-Vengeance-Bl_RX0TFUa.webp"
                    style={{height: '250px', objectFit: 'contain'}}
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>Memorias RAM</Card.Title>
                    <Card.Text className="flex-grow-1">
                        Memoria RAM DDR4 y DDR5 de alta velocidad. 
                        Desde 8GB hasta 64GB de capacidad. 
                        Perfectas para gaming, edición de video y 
                        aplicaciones profesionales.
                    </Card.Text>
                </Card.Body>
            </Card>
            
            <Card className="h-100">
                <Card.Img 
                    variant="top" 
                    src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&q=80"
                    style={{height: '250px', objectFit: 'contain'}}
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>Discos SSD NVMe</Card.Title>
                    <Card.Text className="flex-grow-1">
                        Almacenamiento SSD NVMe de última generación. 
                        Velocidades de lectura y escritura ultrarrápidas. 
                        Desde 250GB hasta 4TB de capacidad.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}

export default CardsProductos;