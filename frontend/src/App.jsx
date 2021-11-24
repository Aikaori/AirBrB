import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MyListing from './pages/MyListing';
import CreateListing from './pages/CreateListing';
import EditListing from './pages/EditListing';
import ListingDetail from './pages/ListingDetail';
import ManageBooking from './pages/ManageBooking';

function App () {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/mylistings' element={<MyListing />} />
        <Route path='/mylistings/create' element={<CreateListing />} />
        <Route path='/mylistings/edit/:id' element={<EditListing />} />
        <Route path='/listings/:id' element={<ListingDetail />} />
        <Route path='/bookings' element={<ManageBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
