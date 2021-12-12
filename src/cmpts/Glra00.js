

import styled from 'styled-components';
import './Glra00.css';
import './Glra00_rv.css';

import React, { useState, useContext } from 'react';



export const Glra00 = (props) => {

    let stdos_glria = {
        Galeria: {
            setslc_img: null,
            slc_img: null,
            Fnc_obtnr_stds: (stdo1, stdo2) => {
                stdos_glria.Galeria.slc_img = stdo1
                stdos_glria.Galeria.setslc_img = stdo2
            }
        }
    }

    const contxt_amcn = React.createContext(stdos_glria)

    const Cnt_gleria = () => {

        const contxt_mstr_mg = useContext(contxt_amcn)

        const img_arry = [
            [[0], ["tiburon"], ["https://prtflocristobal.000webhostapp.com/img/GALERIA/c1.jpg"]],
            [[1], ["Camaleon"], ["https://prtflocristobal.000webhostapp.com/img/GALERIA/c2.jpg"]],
            [[2], ["empuñadura"], ["https://prtflocristobal.000webhostapp.com/img/GALERIA/c3.jpg"]],
            [[3], ["Caballito de mar"], ["https://prtflocristobal.000webhostapp.com/img/GALERIA/c4.jpg"]],
            [[4], ["Tortuga"], ["https://prtflocristobal.000webhostapp.com/img/GALERIA/c5.jpg"]],
            [[5], ["Tucan"], ["https://prtflocristobal.000webhostapp.com/img/GALERIA/c6.jpg"]],
            [[6], ["camaron"], ["https://prtflocristobal.000webhostapp.com/img/GALERIA/c7.jpg"]],
            [[7], ["torre"], ["https://prtflocristobal.000webhostapp.com/img/GALERIA/c8.jpg"]],
            [[8], ["medusa"], ["https://prtflocristobal.000webhostapp.com/img/GALERIA/c9.jpg"]]
        ]


        const [img_dts, setimg_dts] = useState(img_arry)
        const [img_slc_dstcr, setimg_slc_dstcr] = useState(null)



        return <div className='d_glria_01'>
            {
                img_dts.map((dts_img) => {

                    return <div key={dts_img[0]} className='d_dts_img00'
                        style={img_slc_dstcr == dts_img[0] ? { border: "solid 0.1rem rgb(209, 209, 148)" } : { border: "solid 0.1rem rgb(156, 156, 156)" }}
                        onClick={() => {
                            if (img_slc_dstcr == dts_img[0]) { }
                            else {
                                setimg_slc_dstcr(dts_img[0])
                                contxt_mstr_mg.Galeria.setslc_img(dts_img[2])
                            }

                        }}>
                        <div className='d_dts_img_ttle00'>{dts_img[1]}</div>

                        <div className='d_dts_img01'>IMG</div>
                    </div>

                })
            }


        </div>
    }
    const Mstrar_Img = () => {

        const [stdo_img_gl, setstdo_img_gl] = useState(null)

        const contxt_mstr_mg = useContext(contxt_amcn)

        contxt_mstr_mg.Galeria.Fnc_obtnr_stds(stdo_img_gl, setstdo_img_gl)

        const [slc_scl, setslc_scl] = useState(0)


        let clss_img_slc = {

            width: "13rem",
            height: "10rem",
            background: "#fff"
        }

        let Img_slc = styled.div`
 width:15rem;
 height:15rem;
 background-image: url(${stdo_img_gl});
 background-repeat: no-repeat;
 filter: grayscale(${slc_scl});
 background-size: cover;
 border-radius: 0.1rem 0.1rem 0.1rem 0.1rem;

 
 
 @media only screen and (max-width:426px){
   width:15rem;
   background-size:cover;
 }
 
 `;
        let style_slc_img = {
            backgroundImage: `url(${stdo_img_gl})`,
            filter: `grayscale(${slc_scl})`
        }

        return <React.Fragment>
            <div className='d_img_opcn00'>
                <div className='d_mstr_img00' style={style_slc_img} >

                    <div className='d_img_slc' style={style_slc_img}></div>

                </div>

                <div className='d_mstr_img02' onScroll={(e) => {


                    let tltlhgtscrll = e.currentTarget.scrollHeight - e.currentTarget.offsetHeight


                    let slc_scrol0 = tltlhgtscrll / 100
                    let slc_scrol01 = e.currentTarget.scrollTop / slc_scrol0


                    setslc_scl(slc_scrol01 / 100)


                    return console.log("Total: " + tltlhgtscrll + "Posicion: " + e.currentTarget.scrollTop + "asd" + slc_scrol01 / 100)

                }}>
                    <div className='d_scroll00'></div>




                </div>
            </div>

        </React.Fragment>
    }
    return <div className='d_Glra00'
        style={props.tono_color
            ? {background:"linear-gradient(270deg,rgb(13, 16, 17) 2%,  rgb(78, 78, 63) 49%,  rgb(105, 105, 87) 100%)"}
            : {background:"linear-gradient(270deg,rgb(46, 54, 53) 2%,  rgb(78, 78, 63) 49%,  rgb(105, 105, 87) 100%)"}}
    >

        <h1 className='h1_glria00'>Seleccione imagen</h1>
        <div className='d_glra01'>
            <Mstrar_Img />
            <Cnt_gleria />
        </div>
    </div>
} 