import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div 
      className='container-fluid' 
      style={{ 
       
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaDaDPwaU06q9BAZ02YhicBD5MzMNJ2eNINg&s')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        color: 'white', 
        padding: '20px', 
        borderRadius: '15px' 
      }}
    >
      <div className='row' style={{ marginTop: "100px", }}>
        <div className='col-md-12 text-center mb-5 mt-3'>
          <h1>History of the Shrine</h1>
        </div>
      </div>

      <div className='row video-content'>
        <div className='col-md-1 d-none d-md-block'></div>

        <div className='col-md-3 col-12'>
          <video 
            controls 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',  
              borderRadius: '15px' 
            }}  
          >
            <source src="https://sreebhadrakalimatha.com/images/main-slider/Video1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className='col-md-1 d-none d-md-block'></div>

        <div className='col-md-6 col-12'>
          <p>Bhadrakali temple in Warangal is among the oldest temples in India that are dedicated to Goddess Bhadrakali. Located atop a hill, between the city of Warangal and Hanamkonda, by the side of Bhadrakali Lake, it is an ancient temple which was originally built during the Chalukyan reign in 625 AD.</p>
          <p>Bhadrakali temple regained its magnetism after it was renovated in the 1950s by Sri Ganapathi Sasthri and a few other locals. Although now it bears only a few traces of its glorious past, this temple is one of the most popular shrines and is visited by lakhs of devotees every year.</p>
          <p>Along with historical importance and religious significance, natural rock formations around the temple also make this temple a must-visit. However, as photography is not allowed inside the shrine, Warangal Bhadrakali temple photos cannot depict its mystical beauty. If interested, devotees can take photos outside the main temple.</p>
          <p>In this temple, the main deity is Goddess Bhadrakali who is shown in a sitting position. She is shown with eight hands, each carrying one weapon and is wearing an alluring crown. The idol is 2.7 meters and is made out of stone.</p>
        </div>

        <div className='col-md-1 d-none d-md-block'></div>
      </div>

     
      <style jsx>{`
        @media (min-width: 768px) and (max-width: 991px) {
          .video-content {
            display: flex;
            flex-direction: column;
          }

          .video-content .col-md-3 {
            order: 1;
            margin-bottom: 20px;
            width: 100%;
          }

          .video-content .col-md-6 {
            order: 2;
            width: 100%;
          }

          .col-md-1 {
            display: none; 
          }
        }
      `}</style>
    </div>
  );
};

export default About;
