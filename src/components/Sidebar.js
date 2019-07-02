import React, { Component } from 'react'
import WidgetWrapper from './WidgetWrapper'
import styled from 'styled-components'

const SidebarWrapper = styled(WidgetWrapper)`
  position: sticky;
  top: 30px;
  height: 400px;
  font-family: 'Nunito', sans-serif;
  font-size: 15px;
  color: #646464;
`

class Sidebar extends Component {
  render() {
    return(
      <SidebarWrapper>
        Tipo de contratação
      </SidebarWrapper>
    )
  }
}

export default Sidebar
