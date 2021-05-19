import React from 'react'
import CIcon from '@coreui/icons-react'

import   '../views/menuform/form.css'

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Inicio',
    to: '/dashboard',
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon "/>,
    color:'info'
    
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Configuracion',
    to: '/menu1',
    icon: <CIcon name="cil-settings" customClasses="c-sidebar-nav-icon "/>,
    color: 'info'
    
  },
 
  {
 
  _tag: 'CSidebarNavItem',
   name: 'Cuenta',
    to: '/pages/login',
    icon: 'cil-User',
    color:'info',
    addLinkClass:'sdc'
  },

  {
 
    _tag: 'CSidebarNavItem',
     name: 'Cerrar Sesión',
    to: '/',
    color:'info',
    icon: 'cil-x-circle',
    addLinkClass:'sdi'
   
  }


]
