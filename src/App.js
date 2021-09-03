
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
function App() {




  let cntx = useContext(Contx_scroll)
  


const [std_exm, setstd_exm] = useState(0)



const [std_skill_scrl, setstd_skill_scrl] = useState(false)

const [std_scrl, setstd_scrl] = useState(0)

let std_croll = null
let scrll_skill = null

cntx.nmro_scroll=std_croll
console.log(cntx.stdo_p_scrol)


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
  <h1 className='h1_hdr01'>Inicio</h1>
  <div className='d_hdr00'>
<h1 className='h1_hdr00' onClick={()=>{

}}>Skills</h1>

<h1 className='h1_hdr00'>Ejemplos</h1>
<h1 className='h1_hdr00'>Contacto</h1>

</div>
</header>
}



  return (<div className='d_grnal00'onScroll={(e)=>{
   



let tltlhgtscrll =  e.currentTarget.scrollHeight - e.currentTarget.offsetHeight
let slc_scrol0 = tltlhgtscrll / 100    
let slc_scrol01=  e.currentTarget.scrollTop / slc_scrol0

std_croll=slc_scrol01


console.log(cntx.stdo_p_scrol)
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
if(slc_scrol01 > 25)
{cntx.skill.setstdo_skll({
  anmc00:" skl01_ts01 ",
})}
if(slc_scrol01 > 60)
{cntx.skill.setstdo_skll({
  anmc00:" skl01_ts00 ",
})}



if(slc_scrol01 < 60)
{cntx.exm.setstdo_exm({
  anmc00:" skl01_ts00 ",
})}
if(slc_scrol01 > 60)
{cntx.exm.setstdo_exm({
  anmc00:" skl01_ts01 ",
})}






// console.log("Total: "+tltlhgtscrll +"Posicion: "+e.currentTarget.scrollTop + "asd"+ slc_scrol01)
}}>



<div className='d_inco'>

<div className='d_ttl_pfl'>

<div className='d_ttl00'>
  <h1 className='h1_ttl00'>Portafolio</h1>
  <h1 className='h1_ttl01'>Front-End</h1>
  <h1 className='h1_ttl02'>Cristobal Ortega</h1>
</div>


<Ptf00/>


</div>

</div>

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



</div>
</div>



</div>
 
    
  );
}

export default App;
