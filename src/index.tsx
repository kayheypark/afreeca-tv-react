import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from 'page/Home';
import Mypage from 'page/Mypage';

const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/mypage', element: <Mypage /> },
]);

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
