import React from 'react'
import '../css/nav.css'
import Carousel from "react-bootstrap/Carousel";
import sofa from '../img/sofa.jpg'
import lounge from '../img/product-cat-7.jpg'
import chair from '../img/chair.jpg'
import lookbook from '../img/lookbook-5.jpg'
import boucle from '../img/TRENDING1.jpg'
import rattan from '../img/TRENDING2.jpg'
import cue from '../img/TRENDING3.jpg'
import small from '../img/TRENDING4.jpg'
import cart1 from '../img/cat-1.jpg'
import cart2 from '../img/cat-2.jpg'
import cart3 from '../img/cat-3.jpg'
import cart4 from '../img/cat-4.jpg'
import cart5 from '../img/cat-5.jpg'
import page1 from '../img/1.jpg'
import page2 from '../img/2.jpg'
import page3 from '../img/3.jpg'
import page4 from '../img/4.jpg'
import barnd1 from '../img/brand1.jpg'
import barnd2 from '../img/brand2.jpg'
import barnd3 from '../img/brand3.jpg'
import barnd4 from '../img/brand4.jpg'
import barnd5 from '../img/brand5.jpg'
import logo from '../img/logo.png'
import payment from '../img/payments.png'

function Home() {
  return (
    <div>

<section>
     <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
         src='https://caketheme.com/html/ruper/media/slider/29.jpg '
         id='baner'
          alt="First slide"
        />
        <div className='banner-bg'>
        <h1 className='text-primray pt-5 text-center display-1 text-white margin'>Home Furniture</h1>
          <h5 className='text-center text-primray text-white '>Hot stuff, new stuff, fun stuff, soon to be your stuff?</h5>
         <button type="button" className="btn bg-white text-black b-show mt-2 ps-4 mx-auto pe-4" >SHOP NOW</button>
        </div>
        
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://caketheme.com/html/ruper/media/slider/28.jpg"
          id='baner'
          alt="Second slide"

        />
        <div className='banner-bg'>
        <h1 className='text-primray pt-5 text-center display-1 text-white margin'>Easy Living</h1>
          <h5 className='text-center text-primray text-white '>Hot stuff, new stuff, fun stuff, soon to be your stuff?</h5>
         <button type="button" className="btn bg-white text-black b-show mt-2 ps-4 mx-auto pe-4" >SHOP NOW</button>
        </div>
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://caketheme.com/html/ruper/media/slider/30.jpg"
          id='baner'
          alt="Third slide"
        />
        <div className='banner-bg'>
        <h1 className='text-primray pt-5 text-center display-1 text-white margin'>Chair Collection</h1>
          <h5 className='text-center text-primray text-white '>Hot stuff, new stuff, fun stuff, soon to be your stuff?</h5>
         <button type="button" className="btn bg-white text-black b-show mt-2 ps-4 mx-auto pe-4" >SHOP NOW</button>
        </div>
       
      </Carousel.Item>
    </Carousel>
   </section>
 
    {/* <section>
   <div  id='baner'>
        <div className='banner-bg'>
        <h1 className='text-primray pt-5 text-center display-1 text-white margin'>Home Furniture</h1>
          <h5 className='text-center text-primray text-white '>Hot stuff, new stuff, fun stuff, soon to be your stuff?</h5>
         
        </div>
        <button type="button" className="btn bg-white  ps-4 mx-auto pe-4" >SHOP NOW</button>
   </div>
    </section> */}

    {/* OUR COLLECTION */}

    <section className='mt-5 padding-80'>
      <div className='container'>
      <div className=''>
      <div className='row'>


      <div className='w-20 col-12'>
        <div className='collection-img'>
          <img src={cart1} className='box img3 collection'></img>
        </div>
        <h6 className='text-primray text-center mt-3 fs-6'>Bed & Bath</h6>
        </div>
        <div className='w-20 col-12'>
       <div className='collection-img'>
       <img src={cart2} className='box img3 collection'></img>
       </div>
        <h6 className='text-primray text-center mt-3 fs-6'>Furniture</h6>
        </div>
        <div className='w-20 col-12'>
        <img src={cart3} className='box img3 collection'></img>
        <h6 className='text-primray text-center mt-3 fs-6'>Home Decor</h6>
        </div>
        <div className='w-20 col-12'>
        <img src={cart4} className='box img3 collection'></img>
        <h6 className='text-primray text-center mt-3 fs-6'>Lighting</h6>
        </div>
        <div className='w-20 col-12'>
        <img src={cart5} className='box'></img>
        <h6 className='text-primray text-center mt-3 fs-6'>Office</h6>
        </div>
      </div>
        
      </div>
      </div>
    </section>

    {/* sofa */}

    <section className=''>
      <div className='container'>
      <div className='row mt-5 '>
      <div class="col-12 col-md-6 col-lg-4">
        <div className='zoom'>
            <img src={sofa} className='sofa  zoom-img'></img>
            <h1 className='posion text-primray text-black fw-light fs-2'>Sofa.</h1>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div className='zoom '>
            <img src={chair} className='sofa zoom-img'></img>
            <h1 className='possion text-primray text-black fw-light fs-2'>Chair.</h1>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div className=' zoom'>
            <img src={lounge} className='sofa zoom-img'></img>
            <h1 className='posionn text-primray text-black fw-light fs-2'>Lounge.</h1>
        </div>
      </div>
     
      </div>
      </div>
    </section>


    {/* BEST SELLER */}

    <section className='padding-80'>

     <div className='container'>
     <div>
        <h1 className='text-center text-primray fw-normal fs-4 '>BEST SELLER</h1>
      </div>
      <div className='row mt-5'>
        <div className='col-md-3 col-12'>
        <img src={page1} className=' TRENDING1'></img>
        <button className=" hot bg-white border border-0 text-primray text-danger">Hot</button>
        <h6 className='text-primray text-uppercase fw-medium mt-3 font-size'>Zunkel Schwarz</h6>
        <p className='text-secondary'>$100.00</p>
        <button className='cart border bg-white text-secondary text-primray' ><i class="bi bi-bag me-1"></i>add to cart</button>
        </div>
        <div className='col-md-3 col-12'>
        <img src={page2} className='TRENDING1'></img>
        <button className=" hot1 bg-white border border-0 text-primray text-danger">Hot</button>
        <h6 className='text-primray text-uppercase fw-medium mt-3 font-size'>Namaste Vase</h6>
        <p className='text-secondary'>$100.00</p>
        <button className='cart border bg-white text-secondary text-primray' ><i class="bi bi-bag me-1"></i>add to cart</button>
        </div>
        <div className='col-md-3 col-12'>
        <img src={page3} className='TRENDING1'></img>
        <button className=" hot2 bg-white border border-0 text-primray text-danger">Hot</button>
        <h6 className='text-primray text-uppercase fw-medium mt-3 font-size'>Chair Oak Matt Lacquered</h6>
        <p className='text-secondary'>$100.00</p>
        <button className='cart border bg-white text-secondary text-primray' ><i class="bi bi-bag me-1"></i>add to cart</button>
        </div>
        <div className='col-md-3 col-12'>
        <img src={page4} className='TRENDING1'></img>
        <button className=" hot3 bg-white border border-0 text-primray text-blcak fw-fw-normal">-33%</button>
        <h6 className='text-primray text-uppercase fw-medium mt-3 font-size'>Pillar Dining Table Round</h6>
        <p className='text-secondary text-decoration-line-through'>$150.00<span className='text-danger'>$100.00</span></p>
        <button className='cart border bg-white text-secondary text-primray' ><i class="bi bi-bag me-1"></i>add to cart</button>
        </div>
      </div>
     </div>
    </section>

    {/* Exclusive */}
 
     <section className='padding-80'>
      <div className='color'>
      
        <div className='container'>

          <div className=''>
          <div className='row'>
           <div class="col-12 col-md-6 ">
             <h1 className='display-5 text-primray mt-5 pt-4'>Exclusive to Online Prints <br></br> & Rugs Range</h1>
             <h2 className='fs-6 text-primray mt-4 serch-color lh-base'>Shop from the comfort of home and order with the click of a button.<br></br> Our brand-new exclusive to online print and rug collection showcases <br></br> so much more than we have in-store.</h2>
             <button className='bg-black text-white ps-5  fw-medium show pe-5 pt-2 pb-2  mt-4 text-primray'>SHOP NOW</button>
            </div>
            <div class="col-12 col-md-6">
            <img src={lookbook} className='exclusive'></img>
            </div>
           </div>
          </div>
        </div>

      
      </div>
    </section> 

    {/* TRENDING */}

    <section className='mt-5'>
      <div className='container'>

      <div className='mt-5'>
        <h3 className='text-center text-primray fw-normal fs-4'>TRENDING</h3>
      </div>
      <div className='row mt-5'>
        <div className='col-md-3 col-12'>
        <div className='zoom'>
        <img src={boucle} className='TRENDING zoom-img'></img>
        </div>
        <h6 className='text-center mt-4 text-primray fs-6 fw-normal'>Boucle</h6>
        </div>
        <div className='col-md-3 col-12'>
        <div className='zoom'>
        <img src={rattan} className='TRENDING zoom-img'></img>
        </div>
        <h6 className='text-center mt-4 text-primray fs-6 fw-normal'>Rattan</h6>
        </div>
        <div className='col-md-3 col-12'>
        <div className='zoom'>
        <img src={cue} className='TRENDING zoom-img'></img>
        </div>
        <h6 className='text-center mt-4 text-primray fs-6 fw-normal'>Cue The Curves</h6>
        </div>
        <div className='col-md-3 col-12'>
       <div className='zoom'>
       <img src={small} className='TRENDING zoom-img'></img>
       </div>
        <h6 className='text-center mt-4 text-primray fs-6 fw-normal'>Small space solutions</h6>
        </div>
      </div>
      </div>
    </section>

    {/* Let's be friends */}
 
 <section className='serch-bg mt-5'>
  <div className='container'>
   <div className='padding-80'>
    <h2 className='text-primray text-center fw-light'>Let's be friends</h2>
    <h6 className='text-primray text-center serch-color mt-3 fw-light'>Sign up for the latest trends, products, and inspiration.</h6>
    <input placeholder='Email Address' className='email1 text-primray fw-semibold text-black b-let mt-4'></input>
    <button className=' ms-2 sub text-uppercase text-primray show fw-semibold'>subscrise</button>
    
   </div>
  </div>
 </section>

    {/* logo */}
    
    <section className='mt-5'>
      <div className='container'>
      <div className='row'>
      <div className='w-20 col-12'>
        <img src={barnd1} className='brand  zoom-img'></img>
        </div>
        <div className='w-20 col-12'>
        <img src={barnd2} className='brand  zoom-img'></img>
        </div>
        <div className='w-20 col-12'>
        <img src={barnd3} className='brand zoom-img'></img>
        </div>
        <div className='w-20 col-12'>
        <img src={barnd4} className='brand zoom-img'></img>
        </div>
        <div className='w-20 col-12'>
        <img src={barnd5} className='brand zoom-img'></img>
        </div>
        
      </div>
      </div>
    </section>
    
    <hr></hr>

    {/* footer */}

    <section className='padding-80'>
      <div className='container'>
          <div className='row'>
          <div className='col-md-3 col-12'>
              <img src={logo} className='logo-size'></img>
          </div>
          <div className='col-md-3 col-12'>
             <p className=' text-primray font-size'>CONTACT US</p>
             <p className='serch-color text-primray font-size1'>616.774.0561</p>
             <p className='serch-color text-primray font-size1'>866.453.4748</p>
             <p className='serch-color text-primray font-size1'>HR Fax: 810.222.5439</p>
             <p className='serch-color text-primray font-size1'>sales@ruperfurniture.com</p>
          </div>
          <div className='col-md-3 col-12'>
             <p className='text-primray font-size'>SERVICES</p>
             <p className='serch-color text-primray font-size1'>Sale</p>
             <p className='serch-color text-primray font-size1'>Quick Ship</p>
             <p className='serch-color text-primray font-size1'>Quick Ship</p>
             <p className='serch-color text-primray font-size1'>Accidental Fabric Protection</p>
             <p className='serch-color text-primray font-size1'>Furniture Care</p>
             <p className='serch-color text-primray font-size1'>Gift Cards</p>
          </div>
          <div className='col-md-3 col-12'>
          <p className='text-primray font-size'>NEWSLETTER</p>
          <p className='serch-color text-primray font-size1'>Enter your email below to be the first to know about new collections and product launches.</p>
          <input placeholder='Email address' className='emil border font-size'></input><i class="bi bi-envelope bg-black paymrnt-icon ms-1 "></i>
          <img src={payment} className='payment mt-4'></img>
          
          </div>
          
         
          </div>
          
      </div>
    </section>
    <hr></hr>
    <section>
     <div className='container'>
        <div className='row'>
          <div className='mb-4'>
          <div className='text-center'>Copyright © 2022. All Right Reserved</div>
          </div>
          

        </div>
     </div>
    </section>

    </div>
  )
}

export default Home
