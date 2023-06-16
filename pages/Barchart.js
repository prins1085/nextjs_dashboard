import React from 'react'
import Bargraph from './components/Bargraph';

const Barchart = ({firstFive}) => {
  return (
    <>
    <div className="container">
      <h1 className="text-center text-3xl font-bold">BAR CHART</h1>
      <p className="text-center mb-4 text-[#5BC9B4]">simple bar chart</p>
      
      <Bargraph data={firstFive}/>
    </div>
  </>
  )
}

export default Barchart

export async function getStaticProps(){


    const Barres = await fetch("https://disease.sh/v3/covid-19/states");
    const BarData = await Barres.json();
  
    const firstFive = BarData.slice(0, 8);
  
    return {
      props : {
      
        firstFive
      }
    }
  }