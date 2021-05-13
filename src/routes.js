import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const menu1 = React.lazy(() => import('./views/menu1/menu1'));
const submenu21 = React.lazy(() => import('./views/menu2/submenu21/Submenu21'));
const submenu22 = React.lazy(() => import('./views/menu2/submenu22/Submenu22'));
const menuform = React.lazy(() => import('./views/menuform/nuevosorteo'));


const routes = [
  {path: '/', exact: true, name: 'Home'},
  {path: '/dashboard', name: 'Dashboard', component: Dashboard},
  {path: '/menu1', name: 'Menu1', component: menu1},
  {path: '/menu2', exact: true, name: 'Menu2', component: submenu21},
  {path: '/menu2/submenu21', name: 'Submenu21', component: submenu21},
  {path: '/menu2/submenu22', name: 'Submenu22', component: submenu22},
  {path: '/menuform', name: 'Nuevosorteo', component: menuform},
];

export default routes;
