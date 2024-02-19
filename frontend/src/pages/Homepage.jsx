import React from 'react'
import Sidenav from '../components/Sidenav';
import MainContent from '../components/MainContent';


function HomePage() {
  return (
    <div>
      <nav>
        <Sidenav />
      </nav>
        <MainContent />
    </div>
  )
}

export default HomePage