import React from 'react'
import {useHistory} from "react-router-dom";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdown = () => {
  let history = useHistory();

  const onClick = () => {
    history.push('/');
  }
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
             src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="Doom 3"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0 m-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Opciones</strong>
        </CDropdownItem>
        <CDropdownItem
          onClick={onClick}
        >
          <CIcon name="cilWarning" className="mfe-2"/>
          Cerrar Sesión
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
