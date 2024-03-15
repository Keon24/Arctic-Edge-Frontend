
import React from 'react'
import heatImage from "../assets/vent.jpg"
import "./heat.css";
import HeatingServices from "../heating/HeatingServices"
import ImageInfo from "../heating/ImageInfo"
import Conf from "../about/Conf"
import Footer from "../home/Footer"

const Heating = () => {
  return (
<div className="heating-container">
  <img src={heatImage} lt="Heating Page" className="heating-image" />
  <div className="heating-content">
    <h1>Heating Services</h1>
  </div>
  <HeatingServices/>
  <ImageInfo/>
  <Conf/>
  <Footer/>
</div>
  )
}

export default Heating