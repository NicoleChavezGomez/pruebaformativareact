import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



function Banner() {
    return (
        <div className="row mt-3">
            <div className="col-lg-12">
            <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100" 
          src="https://www.accesoriosparacomputadores.co/blog/wp-content/uploads/2015/03/accesorios-para-computadores.jpg" 
          alt="First slide" 
          style={{height: '400px', objectFit: 'cover'}}
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{height: '400px', objectFit: 'cover'}} src="https://scontent.fscl37-1.fna.fbcdn.net/v/t1.6435-9/92358398_2618885221701355_4435881616748838912_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=avh5A6JmTEUQ7kNvwFjZbbU&_nc_oc=AdnxW4TTbnKomPd8Yzf1lDC2IeXN36SN4o0FVGl0NptzvBwURR-rWGRvAdY3r1xTmAk&_nc_zt=23&_nc_ht=scontent.fscl37-1.fna&_nc_gid=suNvMDY7SLIrgWtReqpTpw&oh=00_Afevec2yjZTXY7tj6_Kt1VzMv6OPXvd5LEguQ4oe4Jmrxw&oe=691F985E" alt="Second slide" />
        
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100" 
          src="https://infoshopcorp.com/wp-content/uploads/2022/01/LUDI-ASUS-WEB-BANNER-1900X540.jpg" 
          alt="Third slide" 
          style={{height: '400px', objectFit: 'cover'}}
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>
        </div>
    )
}

export default Banner;
