import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Parent from './Teaching/Parent'
import ParentReg from './Practise/ParentReg'

export const Router = createBrowserRouter([
    {
        path:'/',
        element: <Parent />
    },
    {
        path:'/registration',
        element:<ParentReg />
    }
])

