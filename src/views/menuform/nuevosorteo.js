import React from 'react';
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
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import  '../menuform/form.css'

const nuevosorteo = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
    
    <CContainer className="padreform">
    <div>
      <CRow className="justify-content-center">
        <CCol md="5">
          <CCardGroup>
            <CCard className="p-4">
              <CCardBody>
                <CForm >
                  <h1>Crear Sorteo</h1>
                  <p className="text-muted">Generación de Sorteos</p>
                  
                  <label>Sorteo No.#</label>
                  <CInputGroup className="mb-3">
                   
                    <CInput
                      type="text"
                      placeholder=""
                      autoComplete="username"
                      // onChange={e => setusuario(e.target.value)}
                    />
                     <CInputGroupPrepend>
                      <CInputGroupText>
                        {/* <CIcon name="cil-user"/> */}
                        <label className="text-sm-start"> Generar </label>
                      </CInputGroupText>
                    </CInputGroupPrepend>
                  </CInputGroup>

                    <label>Fecha Inicio</label>
                  <CInputGroup className="mb-4">
                  
                    <CInput
                      type="date"
                      placeholder="Fecha"
                      autoComplete="current-date"
                      // onChange={e => setcontrasena(e.target.value)}
                    />
                  </CInputGroup>

                  <label>Nuemero de puntos asignados</label>
              
                  <CInputGroup className="mb-4">
                   
                    <CInput
                      type="number"
                      placeholder="puntos"
                      autoComplete="current-date"
                      min="0"
                      max="100"
                      // onChange={e => setcontrasena(e.target.value)}
                    />
                  </CInputGroup>

                  <CRow>
                    <CCol xs="6">
                      <CButton
                        type="submit"
                        color="primary"
                        className="px-4"
                        // disabled={!validarCampos()}>Acceder</CButton>
                        >Guardar</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
      </div>

      
      {/* aqui */}

      <div>
      <CRow className="justify-content-center">
        <CCol md="5">
          <CCardGroup>
            <CCard className="p-4">
              <CCardBody>
                <CForm >
                  <h1>Crear Sorteo</h1>
                  <p className="text-muted">Generación de Sorteos</p>
                  
                  <label>Sorteo No.#</label>
                  <CInputGroup className="mb-3">
                   
                    <CInput
                      type="text"
                      placeholder=""
                      autoComplete="username"
                      // onChange={e => setusuario(e.target.value)}
                    />
                     <CInputGroupPrepend>
                      <CInputGroupText>
                        {/* <CIcon name="cil-user"/> */}
                        <label className="text-sm-start"> Generar </label>
                      </CInputGroupText>
                    </CInputGroupPrepend>
                  </CInputGroup>

                    <label>Fecha Inicio</label>
                  <CInputGroup className="mb-4">
                  
                    <CInput
                      type="date"
                      placeholder="Fecha"
                      autoComplete="current-date"
                      // onChange={e => setcontrasena(e.target.value)}
                    />
                  </CInputGroup>

                  <label>Nuemero de puntos asignados</label>
              
                  <CInputGroup className="mb-4">
                   
                    <CInput
                      type="number"
                      placeholder="puntos"
                      autoComplete="current-date"
                      min="0"
                      max="100"
                      // onChange={e => setcontrasena(e.target.value)}
                    />
                  </CInputGroup>

                  <CRow>
                    <CCol xs="6">
                      <CButton
                        type="submit"
                        color="primary"
                        className="px-4"
                        // disabled={!validarCampos()}>Acceder</CButton>
                        >Guardar</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
      </div>
    </CContainer>
    
     
  </div>
  );
};

export default nuevosorteo;
