import  './skl.css'
import  './skill_rv.css'
import './svg00.css'
import React, {  useState, useContext, useMemo } from 'react'
import {Contx_scroll} from './ctx00';
import img_html_00 from '../img/html.svg'
import img_css_00 from '../img/css.svg'
import img_js_00 from '../img/js.svg'
import img_react_00 from '../img/react.svg'
import img_html_01 from '../img/html01.svg'
import img_css_01 from '../img/css01.svg'
import img_js_01 from '../img/js01.svg'
import img_react_01 from '../img/react01.svg'


export const Skl00 = ()=>{


  

    const [Stdo_cmnt, Setstdo_cmnt] = useState([
        [["HTML5"], ["Estructuracion"], [img_html_00], [img_html_01]],
        [["CSS3"], ["maquetacion responsiva"],  [img_css_00], [img_css_01]],
        [["JAVASCRIPT"], ["forms, cruds "],  [img_js_00],  [img_js_01]],
        [["REACT.JS"], ["hooks"],  [img_react_00],  [img_react_01]],
     
      ]);






      let cntx_skll00 = useContext(Contx_scroll);


  
const Svg_pc_cod = ()=>{


  return
  
}



//cntx_skll00.skill.f_obn_stdo(sty_skl00, setsty_skl00);


const [std_skill, setstd_skill] = useState({
  anmc00:" skl01_ts00 ",
})


cntx_skll00.skill.f_obn_stdo(std_skill, setstd_skill)

    return<div className='D_skl00'>





<div className={"d_sklgp00"  + std_skill.anmc00}>


<h1 className='h1_skltitulo00 '>Descripcion</h1>

<div className='d_skl_descripcion'>
<p className='p_skl00 '>
||En constante aprendizaje, al igual en busca de dar la mejor ilustración,
frente a los diferentes desarrollos, tanto desafiantes como más ensayados,
no me obstaculizó ante la frustración, concuerdo en un resultado satisfactorio donde
el despliegue y demostración de la información tengan el protagonismo.

</p>

</div>
<h1 className='h1_skltitulo02 '> Nacionalidad</h1>
<h1 className='h1_skltitulo01 '>  Chileno </h1>
<h1 className='h1_skltitulo02 '> Residencia</h1>
<h1 className='h1_skltitulo01 '> Sexta Region</h1>
<h1 className='h1_skltitulo02 '> Formacion</h1>
<h1 className='h1_skltitulo01 '> Aiep téc. nivel superior programación computacional
</h1>
<div  className='d_sklgp01'>
  
{Stdo_cmnt.map((cmt)=>{




    return<div key={cmt[0]} className={"d_skl01" + std_skill.anmc00} >
        <div className='d_skl02'>
        <h1 className='h1_skl00'>{cmt[0]}</h1> 


       <div className='d_sklimg00'>

       <img className='img_svg_habilidades_fondo00' src={cmt[3]}></img>
       <img className='img_svg_habilidades_frente00' src={cmt[2]}></img>
  

       </div>
        </div>  
   
        </div>

})}


</div>


<p className='p_skl01'>
responsivo(flex, @media), Fetch, localstorage, spread, desestructuración, filter, map, foreach, usestate, useeffect, context, usereft, styled
</p>


<div className='d_ilustracion_svg'>


<svg version="1.1" id="svg_animacion_pc_formal">
<path id="sombra" class="svg_formal0" d="M68,297.7"/>
<path class="svg_formal1" d="M125.6,56c-1,5.6-4.1,21.5-12.9,25.2c-3.6,1.5-7.4,1-7.4,1s-3.6-0.4-6.9-2.6c-9.3-6-10.7-25.2-10.8-27.7
	c-0.6-8-1.2-16.3,3.6-23.8c0.7-1,6.4-9.6,15.9-9.6c8.7,0,15.6,7.4,18.5,14.8C128.4,40.7,127.3,47.4,125.6,56z"/>
<path class="svg_formal2" d="M116.5,78.1c-1,0.8-6.3,5.1-13.2,3.5c-5.2-1.2-8.4-5.1-9.4-6.5c1.6,0.8,5.8,2.8,10.1,3.5
	c0.6,0.1,1.7,0.3,3.2,0.3c1.1,0.1,2.8,0.1,4.8-0.6c6.2-2.1,8.8-8.9,10.6-13.6c1.3-3.4,1.8-6,2.3-8.8c1.6-8.2,1.1-14.4,0.9-16.1
	c-0.2-2.6-0.7-5.7-1.6-9c1.2,3,2.2,6.4,2.7,10.3C129.4,59.7,119,74.7,116.5,78.1z"/>
<path class="svg_formal3" d="M104.5,123.5c-13.7-24-20.6-42.8-18.3-45.4c0.5-0.5,2.9-2.4,4.9-3.7c0.4-0.3,1-0.6,1.7-0.5
	c0.8,0.2,1.1,1.3,1.9,2.8c0,0,0.3,1,1.8,2.9c2.5,3.2,5.9,4,8,4.2c1.6,0.2,4.6,0.7,7.7-1.2c0.2-0.1,0.3-0.2,0.3-0.2
	c1.7-1.1,2.4-2.3,3.3-3.4c1.4-1.8,2.2-2.8,3.3-2.9c1.8-0.2,3.6,2.2,4,2.8C127,84.5,111.3,112,104.5,123.5z"/>
<path class="svg_formal4" d="M106.1,91.6c-1.6-0.1-2.6-1.5-4.2-3.7c-1-1.5-2.5-3.8-3.5-7.2c1.1,0.7,4.2,2.5,8.4,2.3c3.5-0.2,6-1.6,7.1-2.3
	c-0.8,3.3-2.1,5.6-3.1,7C109.5,89.7,108,91.7,106.1,91.6z"/>
<path class="svg_formal4" d="M108.2,118.1c-0.1,0.4-1.4,5.5-2.6,5.4c-0.6-0.1-0.8-1.6-2.6-6.5c-0.2-0.7-0.4-1.1-0.6-1.4
	c0.2-6.9,0.2-13.8,0.4-20.6c0.4-2.5,2.3-4.1,4-3.7c1.4,0.3,2.5,1.8,2.8,3.7C110.5,106,109.3,113.5,108.2,118.1z"/>
<path class="svg_formal5" d="M152.7,171.8c-3-0.2-7.3-0.5-12.6-0.6c-9.9-0.3-14.9-0.4-21.7,0c-6.9,0.5-10.3,1.2-16.7,0.4
	c-3.1-0.4-5.8-1-7.5-1.5c-1.4-0.3-2.3-0.4-2.3-0.4c-18-3.4-37.8,1.6-37.8,1.6c-6.4,1.6-9.6,3.1-11.1,0.9c-0.9-1.2-0.6-2.6,2.5-17.6
	c0.9-4.3,1.6-7.6,3-11.8c2.9-8.8,4.9-8,6-13.6c1.3-6.6-2.3-21.7,2.8-31.5c1.9-3.7,4.7-5.9,7.7-8.3c4.4-3.5,7.2-4.2,14.3-8.1
	c2.5-1.4,6.2-3.5,10.5-6.5c1,2.7,2.4,6.8,4.1,11.9c2.4,7.3,3.3,10.4,5.5,15c2,4.1,5.4,11.1,8.2,10.6c1.1-0.2,1.7-1.4,3.6-7.3
	c2.6-8,3.6-13,5.2-17.9c0.8-2.6,2.2-6.4,4.3-10.8c4.4,4.2,8.3,7.2,10.9,9.2c5.3,4,9.9,6.8,14.5,12.9c0.3,0.4,0.9,1.2,1.5,2.1
	c6,9.8,5.1,23.4,5.1,30.9c0.1,9.4-1.1,14.3-0.6,28C152.1,164.7,152.5,169,152.7,171.8z"/>
<path class="svg_formal6" d="M73.3,62.8"/>
<path class="svg_formal0" d="M160.6,184.9H43.8c-0.1-0.4-0.2-0.9-0.2-1.5c-0.1-1,0.1-1.7,0.2-2.3c0,0,0-23,0-42.4c0-7.8,0-27.3,0-35.3l0,0
	l0.3-0.4c42.8-0.9,47.8-0.9,47.8-0.9c16.4-0.2,39.6-0.2,68.4,0.9c0.1,0.1,0.2,0.3,0.2,0.3v0.1c-0.7,7.9,0,34.7,0,34.7
	c0.5,16.2-0.1,40,0,43c0,0.1,0,0.1,0,0.1c0,0.8,0.2,1.3,0.2,1.5C160.8,183.2,160.8,183.8,160.6,184.9z"/>
<rect x="43.8" y="180.8" class="svg_formal7" width="116.8" height="2.2"/>
<rect x="45.6" y="104.9" class="svg_formal8" width="113.3" height="73.1"/>
<rect x="72.9" y="121.5" class="svg_formal9" width="58.6" height="43.4"/>
<path class="svg_formal10" d="M126.9,53c-0.3-12.2-3-15.8-5.3-16.8c-3-1.2-4.8,1.8-11.3,2.7c-9,1.3-12.9-3.4-17.3-0.9
	c-2.4,1.3-4.9,4.9-5.2,14.6c-0.9-2.2-2.2-6.1-2.1-11.1c0-2.3,0.2-10.6,6.3-17.1c4.5-4.8,9.9-5.8,13.9-6.5c5.2-1,15.8-1.5,18,3.5
	c0.5,1.2,0.5,2.4,0.3,3.3c0.5,0.1,1.2,0.3,1.9,0.6c0,0,0.6,0.4,1.2,0.8c1,0.9,4.2,6.8,2.6,16.6C129.6,45.3,128.9,48.9,126.9,53z"/>
<path class="svg_formal11" d="M120.7,27.7c-2.5,5.1-7.4,8.6-12.8,8.8c-6,0.2-11.7-3.6-14.1-9.6c4-2.1,8-4.3,11.9-6.5c3.6,0,7,0,10.6,0
	c1.7,0.8,3.5,1.7,5.2,2.5C121.2,24.5,121,26.1,120.7,27.7z"/>
<path class="svg_formal11" d="M130,35.5c0.5,4.7-1.6,9.6-3,9.5c-1.1-0.1-0.7-3.6-3.2-7.6c-1.6-2.6-3.6-4.2-5.2-5.1c0.7-4.2,3-7.1,5.4-7.4
	c0.5-0.1,1.4,0,2.4,0.5c0.8,1,1.5,1.9,2.3,2.8c0.3,1.6,0.4,3.2,0.7,4.8C129.7,33.6,130,34.5,130,35.5z"/>
<rect x="85.9" y="133.8" class="svg_formal12" width="32.6" height="13.5"/>
<path class="svg_formal13" d="M160.5,102.6c-38.9,0.3-77.9,0.7-116.8,1c2.6-34.3,29.6-60.3,60.2-59.3C132.9,45.2,157.6,70.2,160.5,102.6z"/>
</svg>






</div>


</div>

</div>
}