import React, {  useState, useEffect } from 'react';
import styled from 'styled-components';
import './api_rd.css'
import './api_rd_rv.css'



export const Api_rd00 = ()=>{



const[rtds_bsqda, setrtds_bsqda] = useState([[""]])


const Slctud = async () =>{

    const url = 'https://api.nasa.gov/planetary/apod?count=1&api_key=zbZ3Oujd8fiptxK3rdbOFecqgVFHdnDQujmkveLS'
  const res = await fetch(`${url}`)
  const data = await res.json()

  console.log(data)
  setrtds_bsqda(data)
  }

useEffect(()=>{
    Slctud()

}, [])






    return<div className='d_api00_00'>

<div className='d_api00_03'>
<h1 className='h1_api00_00'>Api nasa imágenes random</h1>
<button className='btn_api00' onClick={()=>{Slctud()}}>Siguiente</button>
</div>

{rtds_bsqda.map( (rtds)=>{

    

let Img_rdpi00 = styled.div`
width:22rem;
height:14rem;
background-image: url(${rtds.url});
background-size: 22rem 14rem;
background-repeat: no-repeat;
border-radius:0.1rem;
animation-name: anmcpd00;
animation-duration: 1s;
animation-iteration-count: 1;

@keyframes anmcpd00{
    0%{opacity: 0;}
    }

`

return<React.Fragment>
    
    <div className='d_api00_gp00'>
    <div className='d_api00_01'>
<Img_rdpi00></Img_rdpi00>
<h2 className='h2_api00_00'>{rtds.title}</h2>
<h3 className='h3_api00_00'>{rtds.date}</h3>


</div><div className='d_api00_02'>
<p className='p_api00_00'>{rtds.explanation}</p>
<p className='p_api00_00'>{rtds.copyright}</p>

</div>

</div>
</React.Fragment>
})}



</div>

  
}