import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event1 from "./../../img/pic1.jpg";
import Event2 from "./../../img/pic2.jpg";
import Event3 from "./../../img/pic3.jpg";
import Event4 from "./../../img/pic4.jpg";
import Event5 from "./../../img/pic5.jpg";
import Event6 from "./../../img/pic6.jpg";
import Event7 from "./../../img/pic7.jpg";
import Event8 from "./../../img/pic8.jpg";
import Event9 from "./../../img/pic9.jpg";

// Add this link to your index.html or include it in your project
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

const Services = () => {
  return (
    <div 
      className='container text-center' 
      style={{ 
        marginTop: "100px", 
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaDaDPwaU06q9BAZ02YhicBD5MzMNJ2eNINg&s')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        padding: '50px'
      }}
    >
      <div style={{ 
        backgroundColor: 'white', 
        padding: '5px', 
        display: 'inline-block', 
        borderRadius: '5px', 
      }}>
        <h1>Navratri Avatars of Bhadrakali - 2024</h1>
      </div>
      <div className='row mt-4'>
        {/* Image and text frame */}
        <div className='col-sm-6 col-md-4'>
          <div style={{ backgroundColor: 'white', padding: '5px', borderRadius: '5px', marginBottom: '20px' }}>
            <img src={Event1} className='img-fluid gallery-img' alt="Event1" style={{ border: '5px solid white' }} />
            <div style={{ padding: '10px 0' }}>
              <button className="btn btn-primary">
                DAY-1 BAALA THRIPURASUNDHARI <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
              </button>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-md-4'>
          <div style={{ backgroundColor: 'white', padding: '5px', borderRadius: '5px', marginBottom: '20px' }}>
            <img src={Event2} className='img-fluid gallery-img' alt="Event2" style={{ border: '5px solid white' }} />
            <div style={{ padding: '10px 0' }}>
              <button className="btn btn-primary">
                DAY-2 ANNAPOORNA DEVI <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
              </button>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-md-4'>
          <div style={{ backgroundColor: 'white', padding: '5px', borderRadius: '5px', marginBottom: '20px' }}>
            <img src={Event3} className='img-fluid gallery-img' alt="Event3" style={{ border: '5px solid white' }} />
            <div style={{ padding: '10px 0' }}>
              <button className="btn btn-primary">
                DAY-3 GAYATHRI DEVI <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className='row mt-4'>
        <div className='col-sm-6 col-md-4'>
          <div style={{ backgroundColor: 'white', padding: '5px', borderRadius: '5px', marginBottom: '20px' }}>
            <img src={Event4} className='img-fluid gallery-img' alt="Event4" style={{ border: '5px solid white' }} />
            <div style={{ padding: '10px 0' }}>
              <button className="btn btn-primary">
                DAY-4 MAHA LAKSHMI <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
              </button>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-md-4'>
          <div style={{ backgroundColor: 'white', padding: '5px', borderRadius: '5px', marginBottom: '20px' }}>
            <img src={Event5} className='img-fluid gallery-img' alt="Event5" style={{ border: '5px solid white' }} />
            <div style={{ padding: '10px 0' }}>
              <button className="btn btn-primary">
                DAY-5 LALLITHA THRIPURA SUNDHARI <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
              </button>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-md-4'>
          <div style={{ backgroundColor: 'white', padding: '5px', borderRadius: '5px', marginBottom: '20px' }}>
            <img src={Event6} className='img-fluid gallery-img' alt="Event6" style={{ border: '5px solid white' }} />
            <div style={{ padding: '10px 0' }}>
              <button className="btn btn-primary">
                DAY-6 BHAVANI MAATHA <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='row mt-4'>
        <div className='col-sm-6 col-md-4'>
          <div style={{ backgroundColor: 'white', padding: '5px', borderRadius: '5px', marginBottom: '20px' }}>
            <img src={Event7} className='img-fluid gallery-img' alt="Event7" style={{ border: '5px solid white' }} />
            <div style={{ padding: '10px 0' }}>
              <button className="btn btn-primary">
                DAY-7 SARASWATHI DEVI <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
              </button>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-md-4'>
          <div style={{ backgroundColor: 'white', padding: '5px', borderRadius: '5px', marginBottom: '20px' }}>
            <img src={Event8} className='img-fluid gallery-img' alt="Event8" style={{ border: '5px solid white' }} />
            <div style={{ padding: '10px 0' }}>
              <button className="btn btn-primary">
                DAY-8 MAHA DURGA <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
              </button>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-md-4'>
          <div style={{ backgroundColor: 'white', padding: '5px', borderRadius: '5px', marginBottom: '20px' }}>
            <img src={Event9} className='img-fluid gallery-img' alt="Event9" style={{ border: '5px solid white' }} />
            <div style={{ padding: '10px 0' }}>
              <button className="btn btn-primary">
                DAY-9 MAHISHAASURA MARTHINI <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
