import  './exmslc.css'
import React, {  useState, useContext } from 'react'
import { Contx_scroll } from './ctx00';
import img_grafico00 from '../img/grafico00.svg'
import img_galeria00 from '../img/galeria00.svg'
import img_api00 from '../img/api00.svg'
import img_crud00 from '../img/crud00.svg'
export const Exm00_slc = (props)=>{

    let cntx_exm = useContext(Contx_scroll);


    const [Stdo_cmnt, Setstdo_cmnt] = useState([
        [[0],["Gráfico"], ["maquetar"],[img_grafico00],["linear-gradient(0deg, rgb(34, 57, 99) 14%, rgb(25, 76, 117) 49%, rgb(23, 113, 131) 100%)"]],
        [[1],["Galeria"], [" responsive"],[img_galeria00],["linear-gradient(0deg, rgb(55, 56, 32) 14%, rgb(99, 100, 55) 49%,rgb(119, 121, 68) 100%)"]],
        [[2],["Api"], ["forms, cruds "],[img_api00],["linear-gradient(0deg, rgb(28, 49, 42) 14%, rgb(42, 77, 65) 49%,rgb(66, 124, 105) 100%)    "]],
        [[4],["Crud"], ["items"], [img_crud00],["linear-gradient(0deg, rgb(61, 34, 37) 14%, rgb(104, 57, 63) 49%,rgb(145, 78, 85) 100%)"]]
      ]);

      const [std_exm, setstd_exm] = useState({
        anmc00:" skl01_ts00 ",
        anmc01:" skl01_ts01 "
      })
      



      cntx_exm.exm.f_obn_stdo(std_exm, setstd_exm)

const [slc_dstcdo, setslc_dstcdo]= useState({
anmc00:" d_exm01_ts00 " 
})


    return<div className={" d_exm_anmcn00" + std_exm.anmc00}>
        
        {Stdo_cmnt.map((cmt)=>{
    
        return<div
         key={cmt[0]} className={' d_exm01 '} style={props.exmslc00 == cmt[0] ? {border:"solid 0.2rem rgb(189, 180, 99)",  transform:"translate(1rem,0)", background:cmt[4]} : {border:"solid 0.2rem rgb(182, 181, 181)", background:cmt[4]}} onClick={()=>{props.setexmslc00(cmt[0])
        
            if(props.xmslc00 == cmt[0])
            {setslc_dstcdo({
                anmc00:" d_exm01_ts01 " 
                })}
        }
        
      
        
        }>
    
            <div className='d_exm02'>
            <h1 className='h1_exm00'>{cmt[1]}</h1> 
            </div>
            <img className='img_ejemplos00' src={cmt[3]}></img>
            </div>
    })}
    
    </div>
      
}