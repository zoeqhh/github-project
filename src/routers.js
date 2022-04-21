import { DashBoard, Detail } from './pages'

const routes = [{
  path: '/dashboard:store',
  component: DashBoard,
  title: 'Dashboard',
},
{
  path: '/detail/:store_fullName',
  component: Detail,
  title: 'Detail',
},
]

export default routes
