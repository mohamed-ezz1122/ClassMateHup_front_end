import React from 'react'
import "./Content.css"
import ContentTop from '../Content-top/Content-top.jsx'
import ContentMain from '../ContentMain/ContentMain.jsx'
export default function Content() {
  return <div className='content d-flex align-items-start justify-content-between w-100 position-relative'>
  <ContentTop/>
  <ContentMain/>
  </div>
}
