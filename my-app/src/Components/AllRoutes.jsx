// import nav_Overly from '../Overly_nav/nav_Overly';
import {Routes ,Route} from 'react-router-dom';
import React from 'react';

import Homepage from './Homepage';

import Login from './Routes/Login';


function AllRoutes(){
    return(
        <Routes>
        {/* <Route path="/" element={<nav_Overly/>}></Route> */}
        <Route path="/" element={<Homepage/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       
        </Routes>
    );
}

export default AllRoutes;