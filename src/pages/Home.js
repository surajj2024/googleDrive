import React from 'react'
import SideBar from '../components/SideBar'
import Data from '../components/Data';
import "./Home.css";

const Home = ({sidebar}) => {
  return (
    <div className='home'>
        <SideBar sidebar={sidebar} />
        <Data />
    </div>
  )
}

export default Home