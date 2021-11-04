import  './gfc.css'
import './gfc_rv.css';
import React, {  useState, useContext } from 'react'


export const Gfc00 = ()=>{

    const [std_gtfco00, setstd_gtfco00] = useState(70)

    let Grfico00 = {
        height: std_gtfco00 /10 + "rem"
    }
    let Grfico01 = {
        height: std_gtfco00 /10 + "rem"
    }
    return <div className='d_gfc00'>

        <h1 className='h1_gfc00'>Ingrese un porcentaje</h1>
    <div className='d_gfc04'>
<div className='d_gfc02'>
<div className='d_gfc01'>
<div className='d_gfc_dnmco01' style={Grfico01}></div>
</div>
</div>


<div className='d_gfc03'>
    <h1 className='h1_gfc00'>%</h1>
<input className='inp_gfc00'  value={ std_gtfco00} onChange={(e) => {

let nmro_inp = e.currentTarget.value

setstd_gtfco00(nmro_inp)

if(nmro_inp.length == 0 )
{setstd_gtfco00(0)}



if(nmro_inp.length == 2 && nmro_inp.substr(0, 1) == 0)
{setstd_gtfco00(nmro_inp.substr(1, nmro_inp.length - 1))}

if(nmro_inp > 100){setstd_gtfco00(nmro_inp.substr(0, 2))}

if(nmro_inp.substr(0, 3) == 100 && nmro_inp > 100){setstd_gtfco00(100)}
                
                }}></input>

</div>
</div>
    </div>



}