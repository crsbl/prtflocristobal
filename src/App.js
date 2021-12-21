
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
import {Svg_mar} from './cmpts/svg_vista';
import {Sol00}from'./cmpts/svg_vista';
import {Estrellas_div} from './cmpts/svg_vista';
import {Luna00} from './cmpts/svg_vista';
import {Svg_nubes} from './cmpts/svg_vista';
import img_carta00 from './img/carta.svg' ;
import img_celular from './img/telefono.svg';
import img_inco00 from './img/svg_inco00.svg';
import img_inco01 from './img/svg_inco01.svg';
import img_inco_final00 from './img/svg_inco_final00.svg';
import img_inco_final01 from './img/svg_inco_final01.svg';

import img_mar_svg00 from './img/mar/svg_mar00.svg';
import img_mar_svg01 from './img/mar/svg_mar01.svg';
import img_mar_svg02 from './img/mar/svg_mar02.svg';



function App() {


  const resposive00 = window.innerWidth > 426

  let cntx = useContext(Contx_scroll)
  


const [std_exm, setstd_exm] = useState(0)

const [std_mnu, setstd_mnu] = useState(0)

const [std_tono, setstd_tono] = useState(false)


let std_croll = null


cntx.nmro_scroll=std_croll



const Ptf00 = ()=>{


  const [std_prtf, setstd_prtf] = useState({
    anmc00:{height:"4.3rem"},
    anmc01:{top:"3.5rem"},
  })

  cntx.ptf.f_obn_stdo(std_prtf, setstd_prtf)


  
  return<div className='d_ptf00'>
<div className='d_ptf01'></div>
<div className='d_ptf02'></div>
<div className='d_ptf02_00'></div>
<div className='d_ptf02_02'></div>
<div className='d_ptf02_03'></div>

<div className='d_ptf03' style={std_prtf.anmc00}>

<div className='d_ptf03_00' style={std_prtf.anmc01}>
<div className='d_ptf03_00_00'></div>
</div>

<div className='d_ptf04_00'  style={std_prtf.anmc01}>
<div className='d_ptf04_00_00'></div>
</div>
</div>

  </div>
}

const Hadr = ()=>{



//
  return<header>

  <div className='d_hdmn02_slc'>  
<div className='d_hdmn02'onClick={()=>{std_tono ? setstd_tono(false) :setstd_tono(true)}}>



<div className='d_hdmn02_00' style={std_tono ? { backgroundColor:"rgb(218, 218, 218)", float:"left"} : {backgroundColor:"rgb(148, 148, 148)", float:"right"}} 

></div>
</div>
  </div>



<div className='d_hdmn00'onClick={()=>{setstd_mnu(1)}}>
<h1 className='h1_hdr01'>Proyectos</h1>

  </div>

<div className='d_hdmn01_contenedor00'>
  <div className='d_hdmn01'>
<h1 className='h1_hdr02'>Mas</h1>

</div>
<div className='d_hdmn03' onClick={()=>{setstd_mnu(2)}}>
<h1 className='h1_hdr01'>Contacto</h1>

</div>

<div className='d_hdmn04' >
<a href="https://github.com/crsbl/prtflocristobal" target="_blank" className='h1_hdr01'>Github</a>

</div>

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
<h1 className='h1_contacto01'>Contacto</h1>


<div className='d_contacto02'>

<img className='img_carta' src={img_carta00}></img>
<h1 className='h1_contacto02'>z.edd36@gmail.com</h1>
<img className='img_telefono' src={img_celular}></img>
<h1 className='h1_contacto02'>+569 4869 7889</h1>
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
 
 if(slc_scrol01 <7)
 {cntx.ptf.setstdo_ptf({
   anmc00:{height:"4.3rem"},
   anmc01:{top:"3.5rem"},
 })}
 
 if(slc_scrol01 >1)
 {cntx.ptf.setstdo_ptf({
   anmc00:{height:"1rem", transition:" 0.7s"},
   anmc01:{ top:"0.3rem", transform: "rotateX(50deg)"},
 })}
 
 
 if(slc_scrol01 > 12)
 {cntx.skill.setstdo_skll({
   anmc00:  {opacity: "1",transform: "translate(0rem,0rem)"},
 })}

 
 

 if(slc_scrol01 > 80)
 {cntx.exm.setstdo_exm({
   anmc00:" skl01_ts01 ",
 })}
 
 // console.log("Total: "+tltlhgtscrll +"Posicion: "+e.currentTarget.scrollTop + "asd"+ slc_scrol01)
 }}>
<div className='d_inco' style={std_tono ?{backgroundColor:"rgb(212, 232, 252)"}:{backgroundColor:"rgb(91, 94, 92)"}}>

<div className='d_ttl_pfl'>

<div className='d_ttl00'>
  <h1 className='h1_ttl00'>Portafolio</h1>
  <h1 className='h1_ttl01'>Developer</h1>
  <h1 className='h1_ttl02'>Cristóbal Ortega</h1>
</div>


<Ptf00/>




</div>
{std_tono 
?<Sol00/> 
:<Luna00/>}

{std_tono 
?<React.Fragment/> 
:<Estrellas_div/>}


<Svg_nubes></Svg_nubes>
<Svg_mar estado_dia={std_tono}/>


</div>


<div className='d_skl' style={std_tono ?{backgroundColor:"rgb(54, 150, 206)"}:{backgroundColor:"rgb(17, 69, 99)"}}>

<h1 className='h1_ttl03' style={std_tono? {background:"linear-gradient(0deg, rgba(56, 121, 206, 0.63) 20%, rgb(54, 150, 206) 77%)"}:{background:"linear-gradient(0deg, rgba(45, 98, 167, 0.63) 20%, rgb(17, 69, 99) 77%)"}}>PERFIL</h1>

<Skl00
estado_tonos ={std_tono}
/>
<img className='svg_inco' src={std_tono?  img_inco_final00 : img_inco_final01}></img>
</div>

<div className='d_ejrc' style={std_tono ?{backgroundColor:"rgb(13, 16, 17)"}:{backgroundColor:"rgb(46, 54, 53)"}}>
<h1 className='h1_ttl04' style={std_tono ? {background:"linear-gradient(0deg, rgba(39, 46, 56, 0.63) 20%, rgb(13, 16, 17) 77%)"} :{background:"linear-gradient(0deg, rgba(45, 47, 49, 0.63) 20%, rgb(46, 54, 53) 77%)"}}>EJEMPLOS</h1>
<div className='d_exm'>

  <div className='d_exm00'>
<Exm00_slc exmslc00={std_exm} setexmslc00={setstd_exm}/>
  </div>
  
{std_exm ==0 ? <Gfc00 tono_color ={std_tono}/> :<React.Fragment/>}
{std_exm ==1 ? <Glra00 tono_color ={std_tono}/> :<React.Fragment/>}
{std_exm ==2 ? <Api_rd00 tono_color ={std_tono}/>:<React.Fragment/>}
{std_exm ==3 ? <Canvs00 tono_color ={std_tono}/>:<React.Fragment/>}
{std_exm ==4 ? <Crud00 tono_color ={std_tono}/>:<React.Fragment/>}

</div>
</div>

</div>
</div>

  );
}

export default App;
