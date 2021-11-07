import  './skl.css'
import  './skill_rv.css'
import React, {  useState, useContext } from 'react'
import styled from 'styled-components';
import {Contx_scroll} from './ctx00';

export const Skl00 = ()=>{

    const [Stdo_cmnt, Setstdo_cmnt] = useState([
        [["HTML5"], ["Estructuracion"], ["https://prtflocristobal.000webhostapp.com/img/html_ico.png"]],
        [["CSS3"], ["maquetacion responsiva"],  ["https://prtflocristobal.000webhostapp.com/img/css_ico.png"]],
        [["JAVASCRIPT"], ["forms, cruds "],  ["https://prtflocristobal.000webhostapp.com/img/js_ico.png"]],
        [["REACT.JS"], ["hooks"],  ["https://prtflocristobal.000webhostapp.com/img/react_ico.png"]],
     
      ]);

      let cntx_skll00 = useContext(Contx_scroll);





let stly_skl00 = {tslt00:0,
  tslt01:0}







  
//cntx_skll00.skill.f_obn_stdo(sty_skl00, setsty_skl00);



  
const [std_skill, setstd_skill] = useState({
  anmc00:" skl01_ts00 ",
})


cntx_skll00.skill.f_obn_stdo(std_skill, setstd_skill)

    return<div className='D_skl00'>

<div className='d_sklgp01'>
{Stdo_cmnt.map((cmt)=>{




    return<div key={cmt[0]} className={"d_skl01" + std_skill.anmc00}>
        <div className='d_skl02'>
        <h1 className='h1_skl00'>{cmt[0]}</h1> 
        
       <div style={{width:"2rem", height:"2rem", backgroundImage:`url(${cmt[2]})`, backgroundSize:"2rem 2rem", backgroundRepeat:"no-repeat"}}></div>
        </div>  
   
        </div>

})}
</div>


<div className={"d_sklgp00"  + std_skill.anmc00}>
<p className='p_skl00 '>Me agrada el desarrollo front-end, me entretiene la Programación, y por otro lado me gusta todo lo que tenga que ver con diseño web y despliegue de la información. 

</p>

<p className='p_skl01'>
responsivo(flex, @media), async y await, localstorage, spread, desestructuración, filter, map, foreach, usestate, useeffect, context, usereft, styled
</p>


<div className='d_ilustracion_svg'>

<svg version="1.1" id="Capa_2">

<path class="st0a" d="M55.78,7.07c-0.02,2.9-0.24,37.1-0.24,37.1c0,0-1.57,0.52-1.57,0.52c0,0-50.88-0.32-50.88-0.32
	c0,0-2-0.71-2-0.71c0,1.77-0.12-20.92,0.18-27.83c0.17-4.01,0.11-7.23,0.06-9.08C19.47,6.86,37.62,6.96,55.78,7.07z"/>
<path class="st1" d="M2.61,7.4L2.61,7.4c0,0,38.73,0.23,44.31,0.28c0,0,10.15,0.06,6.79,0.04c0,0,1.06,0.38,1.06,0.38
	c0,0-0.2,30.8-0.21,32.66c-17.59-0.11-35.19-0.22-52.78-0.34C1.93,18.14,1.99,7.65,1.99,7.65l0,0C1.99,7.65,2.61,7.4,2.61,7.4z"/>
<rect x="2.25" y="7.69" transform="matrix(-1 -6.360932e-03 6.360932e-03 -1 56.1176 48.3328)" class="st2a" width="51.77" height="32.78"/>
<path class="st1A" d="M2.23,7.39"/>
<rect x="38.16" y="13.36" class="st3a" width="6.39" height="7.04"/>
<rect x="2.25" y="7.71" class="st2a" width="51.77" height="2.22"/>
<rect x="2.04" y="37.9" class="st4a" width="51.78" height="2.58"/>
<rect x="24.66" y="42.38" class="st5a" width="1.7" height="0.79"/>
<rect x="9.05" y="8.35" class="st6a" width="33.85" height="0.94"/>
<rect x="5.66" y="8.35" class="st6a" width="2.46" height="0.94"/>
<rect x="38.16" y="17.65" class="st7a" width="6.39" height="2.73"/>
<rect x="38.16" y="22.56" class="st8a" width="6.39" height="7.04"/>
<rect x="38.16" y="26.88" class="st9a" width="6.39" height="2.73"/>
<rect x="25.56" y="13.36" class="st10a" width="6.39" height="7.04"/>
<rect x="25.56" y="17.65" class="st11a" width="6.39" height="2.73"/>
<rect x="25.56" y="22.56" class="st12a" width="6.39" height="7.04"/>
<rect x="25.56" y="26.88" class="st13a" width="6.39" height="2.73"/>
<rect x="13.67" y="22.56" class="st14a" width="6.39" height="7.04"/>
<rect x="13.67" y="26.88" class="st15a" width="6.39" height="2.73"/>
<rect x="13.67" y="13.36" class="st16a" width="6.39" height="7.04"/>
<rect x="13.67" y="17.65" class="st17a" width="6.39" height="2.73"/>
<rect x="2.44" y="38.41" class="st6a" width="6.16" height="1.58"/>
<rect x="26.28" y="44.52" class="st0a" width="3.21" height="6.05"/>
<rect x="27.03" y="42.38" class="st5a" width="1.7" height="0.79"/>
<rect x="29.49" y="42.34" class="st5a" width="1.7" height="0.79"/>
<rect x="20.04" y="50.57" class="st0a" width="15.3" height="1.45"/>
</svg>


<svg version="1.1" id="Capa_3">
<style type="text/css">
	
</style>
<path class="st0w" d="M17.82,2.9c3.06-1.99,21.95-2.01,24.17,0.18c0.36,0.36,0.66,0.96,0.66,0.96c0.43,0.86,0.69,1.95,0.85,2.77
	c-0.02,3.59-0.29,45.9-0.29,45.9c0,0-0.79,0.65-0.79,0.65c0,0-25.45-0.16-25.45-0.16c0,0-1-0.87-1-0.87c0,0,0.09-14.26,0.22-34.43
	c0.03-4.05,0.05-8.1,0.08-12.15c0.09-0.37,0.24-0.9,0.46-1.41C17.1,3.5,17.49,3.11,17.82,2.9z"/>
<path class="st1w" d="M17.45,8.74L17.45,8.74c0,0,18.89,0.1,21.62,0.14c0,0,4.95,0.02,3.31,0.02c0,0,0.51,0.49,0.51,0.49
	c0,0-0.26,40.47-0.27,42.92c-8.58-0.05-17.17-0.11-25.75-0.16c0.19-29.27,0.27-43.07,0.27-43.07l0,0
	C17.15,9.07,17.45,8.74,17.45,8.74z"/>
<circle class="st2w" cx="31.34" cy="5.31" r="1.19"/>
<circle class="st2w" cx="26.74" cy="5.95" r="1.88"/>
<rect x="17.36" y="9.15" transform="matrix(-1 -6.360889e-03 6.360889e-03 -1 59.5328 61.5592)" class="st3w" width="25.01" height="43.07"/>
<circle class="st4w" cx="26.74" cy="5.95" r="1.76"/>
<circle class="st4w" cx="31.34" cy="5.31" r="1.02"/>
<circle class="st5w" cx="26.74" cy="5.95" r="1.65"/>
<circle class="st5w" cx="31.34" cy="5.31" r="0.92"/>
<circle class="st4w" cx="26.74" cy="5.95" r="1.59"/>
<circle class="st4w" cx="31.34" cy="5.31" r="0.9"/>
<circle class="st6w" cx="26.74" cy="5.95" r="1.43"/>
<circle class="st7w" cx="26.74" cy="5.95" r="1.37"/>
<circle class="st6w" cx="26.74" cy="5.95" r="1.16"/>
<circle class="st4w" cx="26.74" cy="5.95" r="1.11"/>
<rect x="27.04" y="2.18" transform="matrix(1 6.360897e-03 -6.360897e-03 1 0.0162 -0.1945)" class="st8w" width="7.11" height="0.54"/>
<circle class="st9w" cx="26.74" cy="5.95" r="0.6"/>
<path class="st1w" d="M17.45,8.74"/>
<rect x="19.08" y="14.64" class="st10w" width="5.78" height="6.36"/>
<rect x="19.08" y="22.49" class="st11w" width="5.78" height="6.36"/>
<rect x="19.08" y="30.33" class="st12w" width="5.78" height="6.36"/>
<rect x="19.08" y="38.17" class="st13w" width="5.78" height="6.36"/>
<rect x="26.85" y="14.64" class="st14w" width="5.78" height="6.36"/>
<rect x="34.82" y="14.64" class="st15w" width="5.78" height="6.36"/>
<rect x="26.85" y="22.49" class="st16w" width="5.78" height="6.36"/>
<rect x="34.82" y="22.49" class="st17w" width="5.78" height="6.36"/>
<rect x="34.82" y="30.33" class="st18w" width="5.78" height="6.36"/>
<rect x="34.82" y="38.37" class="st19w" width="5.78" height="6.36"/>
<rect x="26.85" y="30.33" class="st20w" width="5.78" height="6.36"/>
<rect x="26.85" y="38.17" class="st21w" width="5.78" height="6.36"/>
<rect x="17.48" y="9.15" class="st22w" width="25.03" height="1.86"/>
<rect x="17.21" y="47.22" class="st23w" width="25.03" height="5"/>
<rect x="18.83" y="48.68" class="st24w" width="6.27" height="2.07"/>
<rect x="27.41" y="48.68" class="st24w" width="4.91" height="2.07"/>
<rect x="34.57" y="48.68" class="st24w" width="6.27" height="2.07"/>
<rect x="39.86" y="9.7" class="st24w" width="1.86" height="0.76"/>
<rect x="37.33" y="9.7" class="st24w" width="1.61" height="0.76"/>
<rect x="21.97" y="9.7" class="st24w" width="3.23" height="0.76"/>
<rect x="26.85" y="42.46" class="st25w" width="5.78" height="2.07"/>
<rect x="34.82" y="42.46" class="st26w" width="5.78" height="2.07"/>
<rect x="19.08" y="42.46" class="st27w" width="5.78" height="2.07"/>
<rect x="19.08" y="34.62" class="st28w" width="5.78" height="2.07"/>
<rect x="26.84" y="34.62" class="st29w" width="5.78" height="2.07"/>
<rect x="34.82" y="34.62" class="st30w" width="5.78" height="2.07"/>
<rect x="19.08" y="26.78" class="st31w" width="5.78" height="2.07"/>
<rect x="26.84" y="26.78" class="st32w" width="5.78" height="2.07"/>
<rect x="34.82" y="26.78" class="st33w" width="5.78" height="2.07"/>
<rect x="34.82" y="18.94" class="st34w" width="5.78" height="2.07"/>
<rect x="26.85" y="18.94" class="st35w" width="5.78" height="2.07"/>
<rect x="19.08" y="18.94" class="st36w" width="5.78" height="2.07"/>
</svg>


</div>


</div>

</div>
}