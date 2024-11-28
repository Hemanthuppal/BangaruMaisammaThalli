import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import gallery1 from "./../../img/colorful-banner-bokeh-durga-navaratri-celebration-ai-generated-328675834.webp";
import gallery2 from "./../../img/colorful-banner-bokeh-durga-colorful-banner-bokeh-durga-navaratri-celebration-ai-generated-328675874.webp";
import gallery3 from "./../../img/durga matha360_F_1015780361_5RQQDZ4tvRZ7wxoPEYhXVhOs8xTLxTjG.jpg";
import Carousel from './Caurosal';
import icon1 from "./../../img/kankadurgmaa imgicon1.png";
import icon2 from "./../../img/kankadurgmaa imgicon2.png";
import icon3 from "./../../img/kankadurgmaa imgicon3.png";
import icon4 from './../../img/kankadurgmaa imgicon4.png';
import image from './../../img/amma1.jpg';
import page2 from './../../img/kankadurgamma homam.9.png';
import pic2 from './../../img/kankadurgamma seshavaham.4063b353.png';
import temple1 from './../../img/tempel view (1)@2x.91f8b808.png';
import temple2 from './../../img/temple view-20220413-WA0018@2x.7f356c08.png';
import temple3 from './../../img/templeview3DSC_0263@2x.bad532cd.png';
import temple4 from './../../img/templeview4IMG-20220413-WA0023@2x.0a3a386a.png';
import temple5 from './../../img/templeview5IMG-20220413-WA0016@2x.ae152c19.png';
import temple6 from './../../img/templeview614@2x.b0a8b7de.png';
import './Home.css'
import underline from "./../../img/cropunderline.png"

const CarouselComponent = () => {
  const images = [
    { src: gallery1, alt: "Los Angeles" },
    { src: gallery2, alt: "Chicago" },
    { src: gallery3, alt: "New York" }
  ];

  return (
    <div style={styles.pageBackground}>
      <Carousel images={images} />



  
      <div className="container mt-4">
      <style>{`
        .custom-header {
          background-color: #FFC067; /* Light orange */
          color: #4D80FF; /* Light violet */
          
          font-size: 1.2rem;
          text-align: center;
          padding: 10px;
        }
        .table th, .table td {
          text-align: center;
          vertical-align: middle;
        }
      `}</style>
      <div className="card shadow">
        <div className="card-header custom-header">
        Visiting Timings of Sravanthi Devi - Bangaru Maisamma Thalli Temple
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Temple Darshan Timing</th>
                <th>Timings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Morning Darshan</td>
                <td>6:30 AM to 12:30 PM</td>
              </tr>
              <tr>
                <td>Evening Darshan</td>
                <td>3:30 PM to 12:30 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
 
 

      <h2 style={{ textAlign: 'center', marginBottom: '10px', marginTop: '50px' }}>Devotee Services</h2>
      <div className="text-center mb-5 ">
          <img
            src={underline}
            alt="Underline Decoration"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
      
      <div className='container'>
  <div className='row'>
    <div className='col-sm-12 col-md-6 col-lg-3 mb-4'> {/* Adjusted for mobile, iPad, and desktop */}
      <div className='card' style={styles.card}>
        <img src={icon1} alt="Icon 1" style={styles.icon} />
        <h6>Seva and Darshanam</h6>
        <p>Darshanam is the auspicious sight of a deity that has immense spiritual significance...</p>
        <button className="btn btn-primary">Book Now</button>
      </div>
    </div>

    <div className='col-sm-12 col-md-6 col-lg-3 mb-4'>
      <div className='card' style={styles.card}>
        <img src={icon2} alt="Icon 2" style={styles.icon} />
        <h6>Annadanam</h6>
        <p>The devotees anywhere from the world can serve the people who are in hunger ...</p>
        <button className="btn btn-primary">Book Now</button>
      </div>
    </div>

    <div className='col-sm-12 col-md-6 col-lg-3 mb-4'>
      <div className='card' style={styles.card}>
        <img src={icon3} alt="Icon 3" style={styles.icon} />
        <h6>Accommodation</h6>
        <p>Comfortable and hygienic AC/Non AC Rooms, Suite Rooms, Hotels with all amenities and near to temple...</p>
        <button className="btn btn-primary">Book Now</button>
      </div>
    </div>

    <div className='col-sm-12 col-md-6 col-lg-3 mb-4'>
      <div className='card' style={styles.card}>
        <img src={icon4} alt="Icon 4" style={styles.icon} />
        <h6>Donation</h6>
        <p>e-Hundi allows donations from people across the globe for welfare of the sacred Sri Kanaka Durga...</p>
        <button className="btn btn-primary">Book Now</button>
      </div>
    </div>
  </div>
</div>



<div className='container mt-5'>
  <div className='row'>
    <div className='col-sm-12 col-md-6 col-lg-4 mb-4'> {/* Adjusted for mobile, iPad, and desktop */}
      <div className='text-center img-fluid' >
        <img src={image} alt="Image 1" style={styles.imageStyle} />
      </div>
    </div>

    <div className='col-sm-12 col-md-6 col-lg-4 mb-4'>
      <div className='card' style={{ ...styles.card, height: '330px' }}>
        <img src={page2} alt="Page 2" style={styles.imageStyle} />
        <h6>Paroksha Seva</h6>
        <p>In a world filled with the essence of Durgamma, one can now wholeheartedly worship Sri Durga...</p>
        <button className="btn btn-primary">Book Now</button>
      </div>
    </div>

    <div className='col-sm-12 col-md-6 col-lg-4 mb-4'>
      <div className='card' style={{ ...styles.card, height: '330px' }}>
        <img src={pic2} alt="Pic 2" style={styles.imageStyle} />
        <h6>News</h6>
        <p>SriKanakaDurga Official is a YouTube Channel where live telecasts of various Sevas will be available...</p>
        <button className="btn btn-primary">Book Now</button>
      </div>
    </div>
  </div>
</div>

<div className='container'>
  <div className='row mt-5'>
    <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Gallery</h2>
    <div className="text-center mb-5">
          <img
            src={underline}
            alt="Underline Decoration"
            style={{ width: "200px", height: "auto" }}
          />
        </div>

    {/* For all devices */}
    <div className='col-12 col-md-6'>
      <img src={temple1} alt="Temple 1" className='img-fluid gallery-image' />
      <img src={temple4} alt="Temple 4" className='img-fluid gallery-image mt-4' />
    </div>
    <div className='col-12 col-md-3'>
      <img src={temple6} alt="Temple 2" className='img-fluid gallery-image' />
      <img src={temple3} alt="Temple 5" className='img-fluid gallery-image mt-3' />
    </div>
    <div className='col-12 col-md-3'>
      <img src={temple3} alt="Temple 3" className='img-fluid gallery-image' />
      <img src={temple6} alt="Temple 6" className='img-fluid gallery-image mt-3' />
    </div>

    {/* Button to view more */}
    <div className='col-12 text-center mt-3'>
      <button className="btn btn-primary btn-sm" style={{ width: '150px' }}>View more</button>
    </div>
  </div>

  {/* CSS to handle responsiveness and image quality */}
  <style jsx>{`
    .gallery-image {
      height: auto; /* Maintain aspect ratio */
      max-height: 300px; /* Set maximum height for larger images */
      object-fit: cover; /* Cover the container without distortion */
      width: 100%; /* Make images responsive */
    }

    @media (max-width: 768px) {
      .gallery-image {
        max-height: 250px; /* Adjust height for mobile */
      }
    }

    @media (min-width: 768px) {
      .row {
        display: flex;
        flex-wrap: wrap;
      }
      .col-md-6, .col-md-3 {
        margin-bottom: 20px; /* Add spacing between rows */
      }
    }
  `}</style>
</div>



      
<div className='container-fluid' 
  style={{ 
   
    backgroundColor: '#FEFCF3', 
    color: 'black', 
    padding: '20px', 
    borderRadius: '15px' 
  }}
>
  <div className='row'>
    <div className='col-md-12 text-center mb-3 '>
      <h3>About Temple</h3>
      <div className="text-center mb-5">
          <img
            src={underline}
            alt="Underline Decoration"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
    </div>
  </div>
  <div className='container'>
    <div className='row align-items-center'> 
      
      <div className='col-md-5'>
        <img 
          src="https://kanakadurgamma.org/static/media/Group%205789@2x.758ba21a.png" 
          alt="Temple Image"
          style={{ 
            width: '100%', 
            height: '400px', 
            objectFit: 'cover',  
            borderRadius: '15px' 
          }} 
        />
      </div>

      <div className='col-md-7'>
        <p className='about' style={{fontSize: '20px'}}>The temple of Kanaka Durga, the Goddess of power, riches, and benevolence, and the presiding deity of Vijayawada, is thronged by lakhs of pilgrims for worship during the “Navarathri” festival which is celebrated with religious fervor, pomp, and festivity. The ancient temple of Kanaka Durga, atop the Indrakeeladri hill on the banks of the sacred river Krishna in Vijayawada, abounds with legends of historical interest.</p>
        <p className='about' style={{fontSize: '20px'}}>The temple of Kanaka Durga, the Goddess of power, riches, and benevolence, and the presiding deity of Vijayawada, is thronged by lakhs of pilgrims for worship during the “Navarathri” festival which is celebrated with religious fervor, pomp, and festivity. The ancient temple of Kanaka Durga, atop the Indrakeeladri hill on the banks of the sacred river Krishna in Vijayawada, abounds with legends of historical interest.</p>
      </div>
    </div>
  </div>
</div>



    </div>
  );
}


const styles = {
  pageBackground: {
    backgroundColor: '#FEFCF3',
    padding: '40px 0',
  },
  card: {
    textAlign: 'center',
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  icon: {
    width: '50px',
    height: '50px',
    marginBottom: '10px',
  },
  imageStyle: {
    width: '80%',
    height: 'auto',
    margin: '0 auto',
    borderRadius: '8px',
  },
  largeImage: {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
    borderRadius: '8px',
  },
  smallImage: {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
    borderRadius: '8px',
  },
  tallImageUpwards: {
    width: '100%',
    height: '350px', 
    objectFit: 'cover',  
    position: 'relative',  
    top: '-155px',  
    borderRadius: '8px',
  },
  
  
};

export default CarouselComponent;
