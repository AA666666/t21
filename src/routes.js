import React from 'react';

import { Navigate } from 'react-router-dom';

import MainLayout from 'src/layouts/MainLayout';

import LoginView from 'src/views/auth/LoginView';

import NotFoundView from 'src/views/errors/NotFoundView';

import RegisterView from 'src/views/auth/RegisterView';

import Home from 'src/views/home';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;