import React from 'react';


function Banner() {
    return (
        <div className="row mt-3">
            <div className="col-lg-12">
                <img 
                    src="https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=1920&q=80" 
                    alt="Banner PC Andes"
                    className="w-100"
                    style={{height: '400px', objectFit: 'cover'}}
                />
            </div>
        </div>
    )
}

export default Banner;
