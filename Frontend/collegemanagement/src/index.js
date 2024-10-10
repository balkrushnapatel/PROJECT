import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import GetAllStudents from './GetAllStudents';
import GetStudentByID from './GetStudentByID';
import UpdateStudent from './UpdateStudent';
import AddStudent from './AddStudent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/students' element={<GetAllStudents />} />
        <Route path='/students/:id' element={<GetStudentByID />} />
        <Route path='/students/add' element={<AddStudent/>}/>
        <Route path='/students/edit/:id' element={<UpdateStudent/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

