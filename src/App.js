import React from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import SideBar from './SideBar'
import Mercury from './Mercury';
import Venus from './Venus';
import Earth from './Earth';
import Mars from './Mars';
import Jupiter from './Jupiter';
import Saturn from './Saturn';
import Uranus from './Uranus';
import Neptune from './Neptune';
function App() {
 
return (
 <div className='logo'>
  <img src="./imae/e-i.jpg" alt=""/>
   <NavBar/>
   <SideBar/>
   <Switch>
    <Route exact path='/' component={Mercury}/>
    <Route path='/venus' component={Venus}/>
    <Route path='/earth' component={Earth}/>
    <Route path='/mars' component={Mars}/>
    <Route path='/jupiter' component={Jupiter}/>
    <Route path='/saturn' component={Saturn}/>
    <Route path='/uranus' component={Uranus}/>
    <Route path='/neptune' component={Neptune}/>
   </Switch>
  </div>
 )
}

export default App;