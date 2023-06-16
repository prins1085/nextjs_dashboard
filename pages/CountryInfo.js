import React from 'react'

const CountryInfo = ({data}) => {
  return (
    <div>CountryInfo</div>
  )
}

export default CountryInfo

export async function getStaticProps(){
    const res = await fetch("https://disease.sh/v3/covid-19/countries")
    const data = await res.json();

    return {
        props:{
            data
        }
    }
}