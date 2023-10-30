import React from 'react'
import { element } from 'prop-types'


const Dashboard = React.lazy(()=> import('./views/admin/dashboard/Dashboard'))
const Meeting = React.lazy(()=> import('./views/admin/meetings/Meeting'))


const routes = [
    {path:'/dashboard', name: 'Dahsboard', element: Dashboard},
    {path:'/meetings', name: 'Meetings', element: Meeting}
]

export default routes
