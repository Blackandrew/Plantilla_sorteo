import React from 'react'
import CIcon from '@coreui/icons-react'

export default [
  {
    _tag: 'CSidebarNavItem',
    // name: 'Dashboard',
    name: 'Inicio',
    to: '/dashboard',
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon"/>,
    color:'info',
    badge: {
      color: 'info',
      // text: '1x',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    // name: 'Menu 1',
    name: 'Configuracion',
    to: '/menu1',
    icon: <CIcon name="cil-settings" customClasses="c-sidebar-nav-icon"/>,
    color: 'info',
    badge: {
      color: 'info',
      // text: '2x',
    }
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Submenu']
  // },
  {
    // _tag: 'CSidebarNavDropdown',
    _tag: 'CSidebarNavItem',
    // name: 'Menu 2',
    name: 'Cuenta',
    to: '/pages/login',
    icon: 'cil-User',
    badge: {
      color: 'info'
      // text: '2x',
    }
    // _children: [
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Menu 2.1',
    //     to: '/menu2/submenu21',
    //     icon: '',
    //     badge: {
    //       color: 'danger',
    //       text: '1x',
    //     }
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Menu 2.2',
    //     to: '/menu2/submenu22',
    //     icon: '',
    //     badge: {
    //       color: 'danger',
    //       text: '2x',
    //     }
    //   }
    // ]
  },

  {
    // _tag: 'CSidebarNavDropdown',
    _tag: 'CSidebarNavItem',
    // name: 'Menu 2',
    name: 'Cerrar Sesión',
    to: '/',
    icon: 'cil-x-circle'
  }


]
