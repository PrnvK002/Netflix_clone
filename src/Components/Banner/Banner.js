import React, {  useState , useEffect } from "react";
// import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";
import axios from '../../Constants/axios';
import { API_BASE_URL, API_KEY , IMAGE_URL } from "../../Constants/constants";



function Banner() {

  const [ banners , addBanners ] = useState();


    useEffect(() => {
      
        axios.get(`${API_BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`)

            .then((response) => {

              console.log(response.data.results);
              
//================= Reducing the length of the array to 5 ============================
              let data = response.data.results.filter((e,index) => {

                  return index < 5

              })

              console.log(data);
              addBanners(data);

            })
     
    }, [])
    


  return (
    <div 
      style={{ backgroundImage: `url( ${ banners ? IMAGE_URL + banners[0].backdrop_path : '' } )` }}
      className='banner'>
       <div className='content' >
           <h1 className='title'> { banners ? banners[0].title : "" } </h1>
           <div className='banner_buttons' >
               <button className='button' >Play</button>
               <button className='button' >My list</button>
           </div>
           <h1 className='description'> { banners ? banners[0].overview : "" } </h1>
       </div>
   <div className="fade_bottom"></div>
   </div>
  );
}

export default Banner;
