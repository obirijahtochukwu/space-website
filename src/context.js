import React, { useState, useContext } from 'react';


const AppContext = React.createContext();
const AppProvider = ({ children }) => {
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const openNav = () =>{
  setIsSidebarOpen(true);
 };
 const = {import React, { useState } from 'react';
import { earth } from './data';

export default function Earth() {
 const [earths, setEarths] = useState(earth);
 console.log(earths);
 return (
  <div>
   {
    earths.map((earth)=>{
     const {id, planet, overview, internal, rotation, revulotion, temp, text} = earth;
     return (
      <div className="container-fluid">
       <div key={id}>
        <div className="row">
         <div className="col-5 mx-auto">overview</div>
         <div className="col-5 mx-auto">internal structure</div>
        </div>
        <div className="row">
         <div className="col-10 col-md-8 col-lg-6 mx-auto"><img src={overview.img} alt="" style={{height:'100%', width: '100%'}}/></div>
         <div className="col-10 col-md-5 col-lg-5 mx-auto">
          <h1>{planet}</h1>
          <p>{overview.text}</p>
         </div>
         <div className="col-12 col-md-5 col-lg-6 mx-auto">
          <button className="planetButton">ovorview</button>
          <button className="planetButton">internal structure</button>
         </div>
        </div>
       </div>
      </div>      
     )
    })
   }
  </div>
 )
}
}
 const second = {
   <div className="col-10 col-md-5 col-lg-5 mx-auto">
          <h1>{planet}</h1>
          <p>{overview.text}</p>
         </div>
         <div className="col-10 col-md-5 col-lg- mx-auto">
          <button className="planetButton">ovorview</button>
          <button className="planetButton">internal structure</button>
         </div>
 }
 return (
  <AppContext.Provider
    value={{
     isSidebarOpen,
     openNav
    }}
   >
    {children}
   </AppContext.Provider>
 );
};
// make sure use
export const useGlobalContext = () => {
 return useContext(AppContext);
};

export { AppContext, AppProvider };
