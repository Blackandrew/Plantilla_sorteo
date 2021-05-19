import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem, CImg,
} from '@coreui/react'

// sidebar nav config
import navigation from './_nav'

import   '../views/menuform/form.css'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
    className="bg-white " 
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val})}
    >
      <CSidebarBrand className="d-md-down-none bg-white" to="/dashboard">
     
        <CImg
       
          src={'avatars/logo_aes.png'}
          name="logoaes"
          className="c-sidebar-brand-full"
          alt="logo"
          height={65}
        />

        <CImg
          src={'avatars/Logo_Lotería_Nacional.svg'}
          name="Logo_Lotería_Nacional"
          className="c-sidebar-brand-minimized"
          alt="logo"
          height={35}
        />
     
      </CSidebarBrand>

      <CSidebarNav  >
              
        <CCreateElement 
          
          items={navigation}
           components={{
                CSidebarNavItem
             }}
            
        />
          
      </CSidebarNav>
      
      <CSidebarMinimizer className="c-d-md-down-none "/>
    </CSidebar>

    
  )
}

export default React.memo(TheSidebar)
