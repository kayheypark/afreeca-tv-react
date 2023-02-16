import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from 'page/Home';
import Mypage from 'page/Mypage';
import GlobalStyle from 'style/GlobalStyle';
import FontStyles from 'style/font';
import Login from 'page/Login';

const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/mypage', element: <Mypage /> },
    { path: '/login', element: <Login /> },
    { path: '/streamview', element: <Login /> },
]);

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyle />
        <FontStyles />
        <RouterProvider router={router} />
    </React.StrictMode>,
);
