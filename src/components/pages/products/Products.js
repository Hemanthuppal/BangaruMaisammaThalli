import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import gallery1 from "./../../img/2-2.jpg";
import gallery2 from "./../../img/3-2.jpg";
import gallery3 from "./../../img/4-2.jpg";
import gallery4 from "./../../img/8-1.jpg";
import gallery5 from "./../../img/5-2.jpg";
import gallery6 from "./../../img/6-2.jpg";
import gallery7 from "./../../img/7-1.jpg";
import gallery8 from "./../../img/8-1.jpg";
import gallery9 from"./../../img/9-1.jpg";
import "./Product.css";

const Products = () => {
  return (
    <div className='gallery-background' style={{backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaDaDPwaU06q9BAZ02YhicBD5MzMNJ2eNINg&s')`, }}>
      <div className='container' style={{ marginTop: "100px" }}>
        <div className='row'>
          <div className='col-md-4'>
            <img src={gallery1} className='img-fluid gallery-img' alt="Gallery 1" />
          </div>
          <div className='col-md-4'>
            <img src={gallery2} className='img-fluid gallery-img' alt="Gallery 2" />
          </div>
          <div className='col-md-4'>
            <img src={gallery3} className='img-fluid gallery-img' alt="Gallery 3" />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <img src={gallery4} className='img-fluid gallery-img' alt="Gallery 4" />
          </div>
          <div className='col-md-4'>
            <img src={gallery5} className='img-fluid gallery-img' alt="Gallery 5" />
          </div>
          <div className='col-md-4'>
            <img src={gallery6} className='img-fluid gallery-img' alt="Gallery 6" />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <img src={gallery7} className='img-fluid gallery-img' alt="Gallery 7" />
          </div>
          <div className='col-md-4'>
            <img src={gallery8} className='img-fluid gallery-img' alt="Gallery 8" />
          </div>
          <div className='col-md-4'>
            <img src={gallery9} className='img-fluid gallery-img' alt="Gallery 9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
