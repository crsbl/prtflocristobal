import  './exmslc.css'
import React, {  useState, useContext } from 'react'
import { Contx_scroll } from './ctx00';

export const Exm00_slc = (props)=>{

    let cntx_exm = useContext(Contx_scroll);


    const [Stdo_cmnt, Setstdo_cmnt] = useState([
        [[0],["Gráfico"], ["maquetar"]],
        [[1],["Galeria"], [" responsive"]],
        [[2],["Api"], ["forms, cruds "]],
       
        [[4],["Crud"], [""]]
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
    
        return<div key={cmt[0]} className={' d_exm01 '} style={props.exmslc00 == cmt[0] ? {border:"solid 0.2rem rgb(189, 180, 99)", transform:"translate(1rem,0)"} : {border:"solid 0.2rem rgb(182, 181, 181)"}} onClick={()=>{props.setexmslc00(cmt[0])
        
            if(props.xmslc00 == cmt[0])
            {setslc_dstcdo({
                anmc00:" d_exm01_ts01 " 
                })}
        }
        
      
        
        }>
            <div className='d_exm02'>
            <h1 className='h1_exm00'>{cmt[1]}</h1> 
            </div>
            </div>
    })}
    
    </div>
      
}