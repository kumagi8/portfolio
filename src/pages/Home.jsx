import React from 'react';
import Header from '../components/Header';
import Skillset from '../components/Skillset';
import Introduction from '../components/Introduction';
import Footer from '../components/Footer';
// import Project from '../components/Projects';

const Home = () => {
  return (
    <>
        <Header/>
        <Introduction/>
        <Skillset/>
        {/* <Project/> */}
        <Footer/>

    </>
  )
}

export default Home
