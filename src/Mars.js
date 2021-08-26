import React, { useState } from 'react';
import { mar } from './data';

export default function Mars() {
 // eslint-disable-next-line
 const [mars, setmars] = useState(mar);
 const [over, setOver] = useState(true);
 const [inter, setInter] = useState(false);

 const overV = () => {
  setOver(true);
  setInter(false);
 }

 const interN = () =>{
  setInter(true);
  setOver(false);
 }
 return (
  <div>
   {
    mars.map((mar)=>{
     // eslint-disable-next-line
     const {id, planet, overview, internal, rotation, revolution, temp, radius, text,img} = mar;
     return (
      <div className="container-fluid">
       <div key={id}>
        <div className="row">
         <div className="mobile-btn mt-2 mb-3">
          <button onClick={overV} className={over ? "mobilebtn-active col-4 mx-auto" : "col-4 mx-auto"}><span>overview</span></button>
          <button onClick={interN} className={inter ? "mobilebtn-active col-4 mx-auto" : "col-4 mx-auto"}>structure</button>
         </div>
        </div>
        <br/>
        <div className="row">
         <div className="col-10 col-md-8 col-lg-5 mx-auto mb-5">
          {over ? <img src={overview.img} alt="" style={{height:'100%', width: '100%'}}/> : <img src={internal.img} alt="" style={{height:'100%', width: '100%'}}/> }</div>
         <div className="col-sm-10 col-md-5 col-lg-5 mx-auto">
          <h1 className='mobile-h1'>{planet}</h1>
          <div className="underline2"></div>
          <br/>
          <p className='mobile-p'>{over ? overview.text : internal.text }</p>
          <div className="desktop desktop1 d-md-none">
           <button onClick={overV} className={over ? "tabletbtn-active tabletbtn" : "tabletbtn"}>01 <span>ovorview</span></button>
          <button onClick={interN} className={inter ? "tabletbtn-active tabletbtn" : "tabletbtn"}>02 <span>internal structure</span></button>
          <button className="tabletbtn">03 <span>surface geology</span></button>
          </div>
         </div>
         <div className="col-sm-10 col-md-5 mx-auto m-1 d-lg-none">
          <button onClick={overV} className={over ? "tabletbtn-active tabletbtn" : "tabletbtn"}>01 <span>ovorview</span></button>
          <button onClick={interN} className={inter ? "tabletbtn-active tabletbtn" : "tabletbtn"}>02 <span>internal structure</span></button>
          <button className="tabletbtn">03 <span>surface geology</span></button>
         </div>
        </div>
        <div className="container-fluid d-block">
         <div className="row m-3">
         <div className="col-md-3 mx-auto descript ">
          <div className="descript2 py-auto">
          <span>rotation time</span>
          <h2>{rotation} days</h2>
          </div>
         </div>
         <div className=" col-md-3 mx-auto descript">
          <div className="descript2 py-auto">
          <span>revolution time</span>
          <h2>{revolution} days</h2>
          </div>
         </div>
         <div className=" col-md-3 mx-auto descript">
          <div className="descript2 py-auto">
          <span>radius</span>
          <h2>{radius} km</h2>
          </div>
         </div>
         <div className=" col-md-3 mx-auto descript">
          <div className="descript2 py-auto">
          <span>average temp</span>
          <h2>{temp}°c</h2>
          </div>
         </div>
        </div>
        </div>
        <br/>
        <br/>
       </div>
      </div>      
     )
    })
   }
  </div>
 )
}
