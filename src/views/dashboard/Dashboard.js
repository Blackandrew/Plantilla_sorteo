import React,{Fragment} from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,CTabPane,
  CTabs
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {useHistory} from "react-router-dom";

import Nuevosorteo from '../menuform/nuevosorteo'
import Editarsorteo from '../menuform/Editarsorteo'

const Dashboard = () => {
  let history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    history.push('/menuform');
  }
  return (
   
    <Fragment>


  <CTabs activeTab="home">

      <CNav variant="tabs">
        <CNavItem>
          <CNavLink data-tab="nuevo">
          Nuevo Sorteo
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink data-tab="editar">
          Editar Sorteo
          </CNavLink>
        </CNavItem>
       
      </CNav>
      <CTabContent>
        <CTabPane data-tab="nuevo">
              <Nuevosorteo/>
        </CTabPane>
        <CTabPane data-tab="editar">
           <Editarsorteo/>
        </CTabPane>
       
      </CTabContent>
    </CTabs>

    {/* <h1>DASHBOARD</h1> */}  
    </Fragment>
  )
}

export default Dashboard
