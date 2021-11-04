
import './App.css';
import './App_rv.css';
import './prtlo.css';

import {Api_rd} from './cmpts/Api_rd'
import {Skl00} from './cmpts/Skill'
import {Glra00} from './cmpts/Glra00'
import React, {  useState, useContext } from 'react'
import {Gfc00} from './cmpts/gfc';
import {Exm00_slc} from './cmpts/exmslc'
import {Api_rd00} from './cmpts/Api_rd';
import {Contx_scroll} from './cmpts/ctx00';
import {Crud00} from './cmpts/crd';
import {Canvs00} from './cmpts/canvs';
function App() {




  let cntx = useContext(Contx_scroll)
  


const [std_exm, setstd_exm] = useState(0)

const [std_mnu, setstd_mnu] = useState(0)


let std_croll = null


cntx.nmro_scroll=std_croll



const Ptf00 = ()=>{


  const [std_prtf, setstd_prtf] = useState({
    anmc00:" prtf01_ts00 ",
    anmc01:" prtf02_ts00 ",
  })

  cntx.ptf.f_obn_stdo(std_prtf, setstd_prtf)


  
  return<div className='d_ptf00'>
<div className='d_ptf01'></div>
<div className='d_ptf02'></div>
<div className='d_ptf02_00'></div>
<div className='d_ptf02_02'></div>
<div className='d_ptf02_03'></div>

<div className={'d_ptf03'+ std_prtf.anmc00}>

<div className={'d_ptf03_00' + std_prtf.anmc01}>
<div className='d_ptf03_00_00'></div>
</div>

<div className={'d_ptf04_00' + std_prtf.anmc01}>
<div className='d_ptf04_00_00'></div>
</div>
</div>

  </div>
}

const Hadr = ()=>{




  return<header>

<div className='d_hdmn00'onClick={()=>{setstd_mnu(1)}}>
  <h1 className='h1_hdr00'>Pjs</h1>
  <svg version="1.1" id="Capa_1" >
<rect x="5.65" y="0.18" class="st0" width="0.35" height="0.35"/>
<path class="st1" d="M44.93,56.87H0.42V0.53h44.52c0,8.58,0,17.17,0,25.75C44.93,36.48,44.93,46.67,44.93,56.87z"/>
<rect x="5.95" y="23.68" class="st2" width="31.75" height="1.66"/>
<rect x="5.95" y="26.39" class="st2" width="19.82" height="1.66"/>
<rect x="5.95" y="29.73" class="st2" width="31.75" height="1.66"/>
<rect x="5.95" y="33.08" class="st2" width="31.75" height="1.66"/>
<rect x="5.95" y="36.47" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 25.1396 74.6085)" class="st2" width="13.25" height="1.66"/>
<rect x="5.95" y="39.04" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 25.1396 79.7335)" class="st2" width="13.25" height="1.66"/>
<rect x="5.95" y="41.82" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 25.1396 85.2923)" class="st2" width="13.25" height="1.66"/>
<rect x="5.95" y="44.59" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 25.1396 90.8511)" class="st2" width="13.25" height="1.66"/>
<rect x="5.95" y="47.37" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 25.1396 96.4099)" class="st2" width="13.25" height="1.66"/>
<rect x="20.34" y="35.98" class="st3" width="17.35" height="13.89"/>
<rect x="32.5" y="7.26" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 70.1983 16.1771)" class="st2" width="5.2" height="1.66"/>
<rect x="5.95" y="21.02" class="st2" width="31.75" height="1.66"/>
<rect x="5.95" y="18.12" class="st2" width="22.11" height="1.66"/>
<rect x="32.5" y="2.62" class="st3" width="5.2" height="4.16"/>
<rect x="5.95" y="15.14" class="st2" width="17.93" height="1.66"/>
<rect x="5.95" y="12.58" class="st2" width="17.93" height="1.66"/>
<rect x="24.93" y="15.14" class="st2" width="12.77" height="1.66"/>
<rect x="24.93" y="12.58" class="st2" width="12.77" height="1.66"/>
<rect x="33.86" y="35.98" class="st4" width="3.84" height="13.89"/>
<path class="st5" d="M7.74,7.26c3.08-0.48,6.71-0.83,10.79-0.83s7.71,0.35,10.79,0.83c0-0.55,0-1.11,0-1.66H7.74V7.26z"/>
<rect x="7.74" y="7.66" class="st5" width="21.57" height="0.41"/>
<rect x="12.28" y="4.2" class="st6" width="13.06" height="0.99"/>
<rect x="28.71" y="18.12" class="st2" width="8.98" height="1.66"/>
<rect x="26.46" y="26.39" class="st2" width="11.24" height="1.66"/>
<rect x="32.5" y="4.7" class="st7" width="5.2" height="2.08"/>
</svg>
  </div>

  <div className='d_hdmn01' onClick={()=>{setstd_mnu(2)}}>
<h1 className='h1_hdr00'>Info</h1>

<svg version="1.1" id="Capa_1" >

<path class="st0d" d="M31.44,15.35c-0.47,2.06-1.79,7.87-5.66,9.21c-1.56,0.54-3.26,0.37-3.26,0.37c0,0-1.59-0.15-3.05-0.95
	c-4.09-2.22-4.69-9.23-4.77-10.14c-0.25-2.91-0.51-5.98,1.6-8.7c0.28-0.36,2.82-3.53,7.02-3.51c3.85,0.01,6.86,2.69,8.14,5.43
	C32.71,9.75,32.15,12.19,31.44,15.35z"/>
<path class="st1d" d="M39.04,56.19c-5.86,0.16-12.06,0.17-18.55-0.05c-6.04-0.2-11.81-0.57-17.28-1.06c0.21-1.63,0.55-4.35,0.93-7.71
	c1.26-11.05,1.22-13.76,3.21-16.99c1.07-1.73,3.11-4.25,7.25-6.33c0.36,0.45,3.22,3.82,8,3.79c4.38-0.03,7.08-2.89,7.52-3.37
	c3.93,2.12,5.74,4.57,6.68,6.41c2.08,4.1,0.99,7.55,1.36,16.08C38.32,50.9,38.73,54.1,39.04,56.19z"/>
<path class="st2d" d="M27.54,23.51c-0.42,0.3-2.75,1.88-5.81,1.28c-2.28-0.45-3.66-1.86-4.12-2.37c0.98,0.39,4.5,1.64,8.04,0.07
	c4.32-1.92,6.93-7.26,5.96-13.05c-0.23-1.11-0.45-2.21-0.68-3.32c0.52,1.08,0.96,2.34,1.19,3.78
	C33.22,16.72,28.67,22.22,27.54,23.51z"/>
<path class="st3d" d="M22.47,40.68C15.22,27.95,14,24.46,14.59,24.05c0.4-0.27,1.78,0.77,3.19,0.09c0.46-0.22,0.75-0.54,0.91-0.73
	c0.56,0.43,1.89,1.31,3.82,1.52c2.31,0.24,4.04-0.65,4.63-1c0.29,0.41,0.72,0.83,1.29,0.93c0.85,0.14,1.43-0.55,1.68-0.38
	c0.68,0.45-1.62,4.69-1.62,4.69C27.04,31.83,25.02,35.64,22.47,40.68z"/>
<path class="st4d" d="M22.68,30.78c-0.58-0.05-1.04-0.66-1.96-1.86c-0.76-1-1.27-1.91-1.59-2.55c0.56,0.32,2.06,1.08,4.03,0.89
	c1.24-0.12,2.18-0.57,2.71-0.89C25.02,29.04,23.76,30.88,22.68,30.78z"/>
<path class="st4d" d="M23.53,38.88c-0.04,0.13-0.59,1.85-1.05,1.8c-0.25-0.03-0.33-0.55-1.08-2.18c-0.1-0.21-0.17-0.38-0.22-0.48
	c0.06-2.31,0.12-4.61,0.17-6.92c0.17-0.84,0.95-1.36,1.67-1.23c0.57,0.1,1.05,0.59,1.16,1.23C24.51,34.83,24,37.35,23.53,38.88z"/>
</svg>

</div>

</header>
}
const Otros_desarrollos00= ()=>{


  

  return <div className='d_dsarrollos00'>

<div className='d_dsarrollos01'>

  <div className='d_dsarrollos01_hrd'>
<div className='d_dsarrollos01_btn00' onClick={()=>{
  setstd_mnu(0)
}}>
  <h1 className='h1_dsarrollos00'>Cerrar</h1>
</div>
</div>
<h1 className='h1_contacto01'>Proyectos</h1>


<div className='d_dsarrollos02'>

<h1 className='h1_dsarrollos01'>Pantalla publicitaria (animacion infinita)</h1>

<div className='d_img01'></div>
<iframe className='frame_00' src="https://www.youtube.com/embed/QRXcvCGfdAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>



</div>

  </div>
}
const Contacto = ()=>{

  return<div className='d_contacto00'>

  <div className='d_contacto01'> 
  <div className='d_contacto_hrd'>
<div className='d_contacto01_btn00' onClick={()=>{
  setstd_mnu(0)
}}>
  <h1 className='h1_contacto00'>Cerrar</h1>
</div>
</div>
<div className='d_contacto03'>
<h1 className='h1_contacto01'>Info</h1>

<div className='d_contacto02'>
<h1 className='h1_contacto02'>Contacto</h1>
<h1 className='h1_contacto02'>z.edd36@gmail.com</h1>
</div>

<div className='d_contacto02'>
<h1 className='h1_contacto02'>Github</h1>
<h1 className='h1_contacto02'>https://github.com/crsbl</h1>
</div>

</div>
</div>
  
  </div>
}

  return (<div className='d_grnal00' 

  >

<Hadr/>

{std_mnu ==1 ? <Otros_desarrollos00/> :<React.Fragment/>}
{std_mnu ==2 ? <Contacto/> :<React.Fragment/>}


<div className='d_grnal01' style={std_mnu == 0 ? {filter:"blur(0rem)"} : {filter:"blur(0.4rem)"}} 
 onScroll={(e)=>{
 
 //e.currentTarget.scrollTop
 
 
 let tltlhgtscrll =  e.currentTarget.scrollHeight - e.currentTarget.offsetHeight
 let slc_scrol0 = tltlhgtscrll / 100    
 let slc_scrol01=  e.currentTarget.scrollTop / slc_scrol0
 
 std_croll=slc_scrol01
 
 
 
 cntx.stdo_p_scrol=slc_scrol01
 
 if(slc_scrol01 <8)
 {cntx.ptf.setstdo_ptf({
   anmc00:" prtf01_ts00 ",
   anmc01:" prtf02_ts00 ",
 })}
 
 if(slc_scrol01 >9)
 {cntx.ptf.setstdo_ptf({
   anmc00:" prtf01_ts01 ",
   anmc01:" prtf02_ts01 ",
 })}
 
 
 
 
 
 
 
 
 
 if(slc_scrol01 < 5)
 {cntx.skill.setstdo_skll({
   anmc00:" skl01_ts00 ",
 })}
 if(slc_scrol01 > 15)
 {cntx.skill.setstdo_skll({
   anmc00:" skl01_ts01 ",
 })}
 if(slc_scrol01 > 65)
 {cntx.skill.setstdo_skll({
   anmc00:" skl01_ts00 ",
 })}
 
 
 
 if(slc_scrol01 < 70)
 {cntx.exm.setstdo_exm({
   anmc00:" skl01_ts00 ",
 })}
 if(slc_scrol01 > 70)
 {cntx.exm.setstdo_exm({
   anmc00:" skl01_ts01 ",
 })}
 
 // console.log("Total: "+tltlhgtscrll +"Posicion: "+e.currentTarget.scrollTop + "asd"+ slc_scrol01)
 }}>
<div className='d_inco'>

<div className='d_ttl_pfl'>

<div className='d_ttl00'>
  <h1 className='h1_ttl00'>Portafolio</h1>
  <h1 className='h1_ttl01'>Developer</h1>
  <h1 className='h1_ttl02'>Cristóbal Ortega</h1>
</div>


<Ptf00/>


</div>

</div>
{/*
<div className='d_animacion00'>

<div className='d_animacion00_01'></div>

</div>
 Un comentario JSX */}

<div className='d_skl'>

<h1 className='h1_ttl03'>SKILLS</h1>

<Skl00/>

</div>

<div className='d_ejrc'>
<h1 className='h1_ttl03'>EJEMPLOS</h1>
<div className='d_exm'>

  <div className='d_exm00'>
<Exm00_slc exmslc00={std_exm} setexmslc00={setstd_exm}/>
  </div>
  
{std_exm ==0 ? <Gfc00/> :<React.Fragment/>}
{std_exm ==1 ? <Glra00/> :<React.Fragment/>}
{std_exm ==2 ? <Api_rd00/>:<React.Fragment/>}
{std_exm ==3 ? <Canvs00/>:<React.Fragment/>}
{std_exm ==4 ? <Crud00/>:<React.Fragment/>}

</div>
</div>

</div>
</div>

  );
}

export default App;
