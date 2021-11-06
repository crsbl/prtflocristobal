import React, {useState, useEffect} from 'react'

import './crd.css'
import './crd_rv.css'
export const Crud00 = ()=>{




  

let stdos_crd = {
    crd:{
        slc_dts:0,
        dts00:{height:"14rem"},
        camp00:{opacity:0, height:"0rem", background: "rgb(25, 26, 25)"},
        
        slc:{
            nslc:0,
            nuevo:{background:"rgba(238, 238, 238, 0)"},
            modificar:{background:"rgba(238, 238, 238, 0)"},
            borrar:{background:"rgba(238, 238, 238, 0)"},
            cancelar:{background: "rgb(34, 36, 34)"}
        },
        btn00:{background: "rgb(32, 32, 32)"}
    },

}
const [stds_slc, setstds_slc] = useState(stdos_crd)

const [stds_dts, setstds_dts]= useState([])

const [stds_inpus, setstds_inpus] = useState({buscar:"",nombre:"", marca:"", cantidad:"", precio:""})


const resposive00 = window.innerWidth > 426




const itms_tdos = async()=>{
    const url = './php/az_crd.php'
    const res = await fetch(`${url}`)
    const data = await res.json()
    
    setstds_dts(data[0])
    
    }

let Cnslta_pst = async(tpo, url, dts)=>{

   
    
        const data= await fetch(url,{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(dts)
        })
     
        const dts_bsd = await data.json()
    
     switch (tpo) {
         case 1:

            

        console.log( dts_bsd)
        itms_tdos()
       
           setstds_inpus({...stds_inpus,nombre:"", marca:"", cantidad:"", precio:""})
             break;
     
         case 2:
            setstds_slc({crd:{...stds_slc.crd,slc_dts:0}})
            console.log( dts_bsd)
            itms_tdos()
            setstds_inpus({...stds_inpus,nombre:"", marca:"", cantidad:"", precio:""})
         break;

         case 3: 
         setstds_slc({crd:{...stds_slc.crd,slc_dts:0}})
         console.log('elim')
         console.log( dts_bsd)
         itms_tdos()
         setstds_inpus({...stds_inpus,nombre:"", marca:"", cantidad:"", precio:""})
         break
        
        case 4:
            setstds_dts(dts_bsd[0])
           
        break
    


            }
     
    
    
    
    
    }




const handdle_inp = (evn)=>{
  
  
    if(stds_slc.crd.slc_dts > 0 || stds_slc.crd.slc_dts.length > 0){
    const value = evn.currentTarget.value
    setstds_inpus({...stds_inpus, [evn.target.name]:value })

    valicacion_btn_color()
}
}


const handdle_buscar = (evn)=>{
   
    

    const value = evn.currentTarget.value
    setstds_inpus({...stds_inpus, [evn.target.name]:value })
    Cnslta_pst(4, './php/bscr_dts.php', [stds_inpus.buscar])


    
    
 


}

const handdle_llamar_dts = (dts)=>{

    if(stds_slc.crd.slc.nslc === 2 || stds_slc.crd.slc.nslc === 3)
    {
   

        
        setstds_slc({crd:{...stds_slc.crd, slc_dts: dts[0]} })
  
    setstds_inpus({...stds_inpus,nombre:dts[1], marca:dts[2], cantidad:dts[3], precio:dts[4]})
        
 
    console.log(stds_slc)

   

        }      }

const valicacion_btn_color=()=>{
    
            if(stds_slc.crd.slc.nslc === 1 || stds_slc.crd.slc.nslc === 2 || stds_slc.crd.slc.nslc === 3)
            {
         
                if(stds_inpus.nombre.length >0 && stds_inpus.marca.length >0 & stds_inpus.cantidad >0 && stds_inpus.precio >0)
                {
             
                    console.log(stds_inpus.nombre.length)
                    setstds_slc({crd:{...stds_slc.crd, btn00:{background:""}}})}
                    else
                    {
                     
                        setstds_slc({crd:{...stds_slc.crd, btn00:{background:"rgb(32, 32, 32)"}}})
                    }
                }
         
        }
useEffect(()=>{
    valicacion_btn_color()
    
    
},[stds_inpus])



useEffect(()=>{


itms_tdos()

},[stds_slc.crd.slc.nslc])




    return<div className='d_crd00'>

<div className='d_crd01 '>

<div className='d_crd02'>
<div className='d_crd_gr00'>
<h2 className='h2_crd00' >Buscar</h2>
<input spellCheck='false' autoComplete="off" className='inp_crd_00'  
name='buscar'
value={stds_inpus.buscar}  onChange={handdle_buscar}
></input>
</div>

<div className='d_crd_gr02'>
<div className='d_crd_gr01'>
<h2 className='h2_crd01' style={stds_slc.crd.slc.nuevo} onClick={()=>{

setstds_slc({crd:{...stds_slc.crd,slc_dts: stds_slc.crd.slc.nslc == 1 ? 0 : "gdr", dts00 : {height:"6rem"},
camp00: resposive00 ? { height:"8.5rem", boxshadow:"inset 0 -0.1rem 0.2rem  0.1rem  rgb(12, 22, 14)"} :{ height:"17rem", boxshadow:"inset 0 -0.1rem 0.2rem  0.1rem  rgb(12, 22, 14)"},
slc:{...stds_slc.crd.slc, nslc:1, cancelar:{background:"rgba(238, 238, 238, 0)"}, borrar:{background:"rgba(238, 238, 238, 0)"} ,nuevo:{background:"rgb(24, 32, 23)" },modificar:{background:"rgba(238, 238, 238, 0)"}}}})


        setstds_inpus({...stds_inpus, buscar:"", nombre:"", marca:"", cantidad:"", precio:""})


     
}}>Nuevo</h2>

</div>

<div className='d_crd_gr01'>
<h2 className='h2_crd01' style={stds_slc.crd.slc.modificar} onClick={()=>{

setstds_slc({crd:{...stds_slc.crd, slc_dts:0, dts00 :{height:"6rem"},
camp00:resposive00 ? { height:"8.5rem", boxshadow:"inset 0 -0.1rem 0.2rem  0.1rem  rgb(12, 22, 14)"} :{ height:"17rem", boxshadow:"inset 0 -0.1rem 0.2rem  0.1rem  rgb(12, 22, 14)"},
slc:{...stds_slc.crd.slc ,nslc:2, cancelar:{background:"rgba(238, 238, 238, 0)"}, borrar:{background:"rgba(238, 238, 238, 0)"} ,modificar:{background: "rgb(38, 39, 19)"},nuevo:{background:"rgba(238, 238, 238, 0)"}}}})

setstds_inpus({...stds_inpus, buscar:"",nombre:"", marca:"", cantidad:"", precio:""})


}}>Modificar</h2>

</div>
</div>

<div className='d_crd_gr02'>
<div className='d_crd_gr01'>
<h2 className='h2_crd01 ' style={stds_slc.crd.slc.borrar} onClick={()=>{

setstds_slc({crd:{...stds_slc.crd,slc_dts:0, dts00 : {height:"6rem"},
camp00:resposive00 ? { height:"8.5rem", boxshadow:"inset 0 -0.1rem 0.2rem  0.1rem  rgb(12, 22, 14)"} :{ height:"17rem", boxshadow:"inset 0 -0.1rem 0.2rem  0.1rem  rgb(12, 22, 14)"},
slc:{...stds_slc.crd.slc, nslc:3, cancelar:{background:"rgba(238, 238, 238, 0)"}, borrar:{background: "rgb(32, 23, 13)"}, modificar:{background:"rgba(238, 238, 238, 0)"},nuevo:{background:"rgba(238, 238, 238, 0)"}}}})

setstds_inpus({...stds_inpus, buscar:"", nombre:"", marca:"", cantidad:"", precio:""})

}}>Borrar</h2>

</div>

<div className='d_crd_gr01'>
<h2 className='h2_crd01' style={stds_slc.crd.slc.cancelar} onClick={()=>{

  
setstds_slc({crd:{...stds_slc.crd,slc_dts:0, dts00 :{height:"14rem"},
camp00:{opacity:"0" , height:"0rem", background: "rgb(25, 26, 25)"},

slc:{...stds_slc.crd.slc, nslc:0, cancelar:{background: "rgb(34, 36, 34)"}, borrar:{background:"rgba(238, 238, 238, 0)"} , modificar:{background:"rgba(238, 238, 238, 0)"},nuevo:{background:"rgba(238, 238, 238, 0)"}}}})  

setstds_inpus({...stds_inpus, buscar:"", nombre:"", marca:"", cantidad:"", precio:""})
}}>Cancelar</h2>

</div>
</div>


</div>

<div className='d_crd03' style={ stds_slc.crd.camp00}>


<div className='d_crd03_gr00'>

<h3 className='h3_crd00'>Nombre</h3>
<input spellCheck='false' autoComplete="off"  className='inp_crd_00'
disabled={stds_slc.crd.slc.nslc ==3 ? true : false}
name='nombre'
value={stds_inpus.nombre}  onChange={handdle_inp}

></input>


<h3 className='h3_crd00'>Marca</h3>
<input spellCheck='false' autoComplete="off" className='inp_crd_00'
disabled={stds_slc.crd.slc.nslc ==3 ? true : false} 
name='marca'
value={stds_inpus.marca}  onChange={handdle_inp}
 ></input>

</div>

<div className='d_crd03_gr00'>
<h3 className='h3_crd00'>Cantidad</h3>
<input spellCheck='false' autoComplete="off" type='number'  className='inp_crd_00 inp_crd_00_number'
disabled={stds_slc.crd.slc.nslc ==3 ? true : false} 
name='cantidad'
value={stds_inpus.cantidad}  onChange={handdle_inp}

></input>
<h3 className='h3_crd00'>Precio</h3>
<input spellCheck='false' autoComplete="off" type='number'  className='inp_crd_00 inp_crd_00_number'
disabled={stds_slc.crd.slc.nslc ==3 ? true : false} 
name='precio'
value={stds_inpus.precio}  onChange={handdle_inp}

></input>
</div>

<button className='btn_crd00_add' style={stds_slc.crd.btn00} onClick={()=>{

switch(stds_slc.crd.slc.nslc){

case 1:


if(stds_inpus.nombre.length > 0 && stds_inpus.marca.length > 0 && stds_inpus.cantidad > 0 && stds_inpus.precio > 0)
{
    Cnslta_pst(1, './php/gr_dts.php', [stds_inpus.nombre, stds_inpus.marca, stds_inpus.cantidad, stds_inpus.precio])

}
else
{ console.log('faltan datos')}
  
break

case 2:
    if(stds_slc.crd.slc_dts != null && stds_inpus.nombre.length > 0 && stds_inpus.marca.length > 0  && stds_inpus.precio > 0)
    {


        Cnslta_pst(2, './php/mdf_dts.php', [stds_slc.crd.slc_dts,stds_inpus.nombre, stds_inpus.marca, stds_inpus.cantidad, stds_inpus.precio])
  
    }
    else
    { console.log('faltan datos')}
break 

case 3:
    if(stds_slc.crd.slc_dts.length > 0 && stds_inpus.nombre.length > 0 && stds_inpus.marca.length > 0 && stds_inpus.cantidad.length > 0 && stds_inpus.precio.length > 0)
    {
  
        Cnslta_pst(3, './php/dlt_crd.php', [stds_slc.crd.slc_dts])
      
    }
    else
    { console.log('faltan datos')}
   
break

}


}}>
{stds_slc.crd.slc.nslc == 0 ? '':''}
{stds_slc.crd.slc.nslc == 1 ? 'Guardar':''}
{stds_slc.crd.slc.nslc == 2 ? 'Modificar':''}
{stds_slc.crd.slc.nslc == 3 ? 'Eliminar':''}


</button>

</div>
</div>


<div className={'d_crd_dts00 '} style ={stds_slc.crd.dts00}>

<div className='d_crd_dts01'>
<h3 className='h3_crd_dts00'>Nombre</h3>
<h3 className='h3_crd_dts01'>Marca</h3>
<h3 className='h3_crd_dts02'>Cant</h3>
<h3 className='h3_crd_dts03'>Precio</h3>
</div>

{stds_dts.map((dts_crd)=>{

return<div key={dts_crd[0]} className='d_crd_dts02' onClick={()=>{return  handdle_llamar_dts(dts_crd)}}>
<h3 className='h3_crd_dts04'>{dts_crd[1]}</h3>
<h3 className='h3_crd_dts05'>{dts_crd[2]}</h3>
<h3 className='h3_crd_dts06'>{dts_crd[3]}</h3>
<h3 className='h3_crd_dts07'>{dts_crd[4]}</h3>
</div>

})}

</div>



    </div>
}