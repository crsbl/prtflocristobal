import  './skl.css'
import  './skill_rv.css'
import React, {  useState, useContext } from 'react'
import styled from 'styled-components';
import {Contx_scroll} from './ctx00';
import img_html_00 from '../img/html.svg'
import img_css_00 from '../img/css.svg'
import img_js_00 from '../img/js.svg'
import img_react_00 from '../img/react.svg'
import img_res_00 from '../img/res.svg'

export const Skl00 = ()=>{

    const [Stdo_cmnt, Setstdo_cmnt] = useState([
        [["HTML5"], ["Estructuracion"], [img_html_00]],
        [["CSS3"], ["maquetacion responsiva"],  [img_css_00]],
        [["JAVASCRIPT"], ["forms, cruds "],  [img_js_00]],
        [["REACT.JS"], ["hooks"],  [img_react_00]],
     
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
        
       <div className='d_sklimg00' >
         <img src={cmt[2]}></img>

       </div>
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

<img className='img_res00' src={img_res_00}></img>

<div className ='d_ilustracion_svg00'></div>

</div>


</div>

</div>
}