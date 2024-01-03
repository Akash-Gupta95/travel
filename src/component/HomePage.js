import React from 'react'
import HomeSecStart from './HomeSecStart';
import SectionBook from './SectionBook';
import SectionPackages from './SectionPackages';
import Services from './Services';
import Gallary from './Gallary';
import About from './About';

const HomePage = () => {
  return (<>
    <HomeSecStart></HomeSecStart>
    <SectionBook></SectionBook>
    <SectionPackages></SectionPackages>
    <Services></Services>
    <Gallary></Gallary>
    <About></About>
    </>
  )
}

export default HomePage