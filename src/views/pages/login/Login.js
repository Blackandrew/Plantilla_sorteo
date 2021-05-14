import React, {useState,Fragment} from 'react'
import {useHistory} from "react-router-dom";
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
  CImg
} from '@coreui/react'


import CIcon from '@coreui/icons-react'

import './login.css';

const Login = () => {
  let history = useHistory();
  const [usuario, setusuario] = useState("");
  const [contrasena, setcontrasena] = useState("");

  const validarCampos = () => {
    return usuario.length > 0 && contrasena.length > 0;
  }

  const handleSubmit = event => {
    event.preventDefault();
    history.push('/dashboard');
  }

  return (
  
      <div className="c-app c-default-layout flex-row align-items-center">
          
         <div className="contenedor">
         <div id="Bombillo1">
        
              <CImg
                  src={'avatars/Bombillo.svg'}
                  name="Bombillo"
                  alt="logo"
                  height={60}
                  width={100}
               />

                   
       </div>
           <div> <h2 id="Bombillo2" className=" p-1" >Punto Luz</h2>  </div>

        </div>

                 
      <CContainer >
     
        <CRow className="justify-content-center">
         
          <CCol md="5">
        
            <CCardGroup className="usuario2">
                             
                 
              <CCard className=" img2 p-4"   >
               <div className="Registrarse "> 
                      <h1 className="text-center text-white  h2" >Registrarse</h1>
                       </div> 


                <CCardBody >
                <div className="principal">
                  <div>
                 <CForm onSubmit={handleSubmit} >

                      {/* <div className="Registrarse "> 
                           <h1 className="text-center text-white  h2" >Registrarse</h1>
                       </div>   */}
                                  
                    {/* <p className="text-muted">Iniciar sesión en su cuenta</p> */}
                    <CInputGroup className=" mb-3" >
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user"/>
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Usuario"
                        autoComplete="username"
                        onChange={e => setusuario(e.target.value)}
                      />
                    </CInputGroup>
              
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked"/>
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Contraseña"
                        autoComplete="current-password"
                        onChange={e => setcontrasena(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6" className="sesion" >
                        
                        <CButton
                           type="submit"
                           //color="primary"
                           //px-4
                           className="sesion1"
                          disabled={!validarCampos()}>Iniciar Sesión</CButton>
                      </CCol>
                    </CRow>
                   
                      
                  </CForm>
                  </div>
                   <div id="logo" >
                        
                        <CImg
                            src={'avatars/logo_aes.png'}
                            name="logo_aes"
                            alt="logo"
                            height={60}
                            width={100}
                          />
         
                       </div> 
                  </div> 
          
                  
                </CCardBody>
                
              </CCard>
            
              
            </CCardGroup>
         
                     
          </CCol>

          {/* aqui */}
         
        
        </CRow>
       
      </CContainer>
         
   </div>

  
  )
}

export default Login
