import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import Home from '../pages/Home';
import SocialHome from '../pages/apps/social/Home';
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='social' element={<SocialHome />} />
        </Route >
    )
)