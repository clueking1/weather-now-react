import React from 'react'
import './style.css'

function Display(props) {

    const { info } = props


    let date = new Date()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let iconurl = "https://openweathermap.org/img/w/" + info.icon + ".png";
    return (
        <div className="displayWrapper">
          <div className='hideInfo' style={ !info.icon ? {visibility: 'hidden'} : {visibility : 'visible'}}>
            <div className='citStateDiv'>
               <h3 className='stateHead'>{info.stateCity}</h3>
           </div>
           <div className='dateDiv'>
               <h3 className='dateText'>{month}/{day}</h3>
           </div>
           <div className='iconDiv'>
               <img src= {iconurl} alt= 'icon'/>
           </div>
 
           <div className='tempDiv'>
               <p className='tempP'>{info.temp}<span>&#8457;</span></p>
           </div>
           <div className='feelsTempDiv'>
               <p className='feelsTempP'><span className='feelText'>Feels like </span>{info.tempFeels}<span>&#8457;</span></p>
           </div>
           <div className='maxTempDiv'>
               <p className='maxTempP'><span className='maxText'>Max </span>{info.tempMax}<span>&#8457;</span></p>
           </div>
           <div className='minTempDiv'>
               <p className='minTempP'><span className='feelText'>Min </span>{info.tempMin}<span>&#8457;</span></p>
           </div>
           <div className='humidHeadDiv'>
               <p className='humidHeadP'>Humidity</p>
           </div>
           <div className='humidDiv'>
               <p className='humidP'>{info.humid}%</p>
           </div>
           <div className='windHeadDiv'>
               <p className='windHeadP'>Wind</p>
           </div>
           <div className='windDiv'>
               <p className='windP'>{info.wind}mph</p>
           </div>
           </div>
           <div className='alert' style={ !info.icon ? {visibility: 'visible'} : {visibility : 'hidden'}}>
               <p>This search failed! Please check spelling!</p>
           </div>
        </div>
    )
}

export default Display