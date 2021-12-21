

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
            [[0], ["tiburon"], ["https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/268631116_4935221396489637_2304401485251498811_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHX71jeYfy6PIFYCZyfA0uICtdl5IhbQ34K12XkiFtDfh7QxQ8_IJm4R21bxiTTskXxpoKbsKmhXiJlASTLnnqO&_nc_ohc=LELwoQ3j8DAAX_gYMXt&_nc_ht=scontent-nrt1-1.xx&oh=00_AT9M8PuyV4pe9PCAjZ-8gi_p0KAm99A-zgndvfF5Cc9TwQ&oe=61C7A823"]],
            [[1], ["Camaleon"], ["https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/266306930_4935221513156292_7490874841598357932_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGJa0LxGJeHhjXyOOsuiT_CGRwLD2Lx9XsZHAsPYvH1e91TCy3iYWqcJgepoYQdHDn6Vse4ZJbdxKnbeERbek71&_nc_ohc=V3FnPSSy76IAX-I1Wnp&_nc_ht=scontent-nrt1-1.xx&oh=00_AT-6kgKRKzzsb2Bb_13JuTT6mA286udF8OFw4yRyvpSS4w&oe=61C611AB"]],
            [[2], ["empuñadura"], ["https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/269732563_4935221216489655_6023612703824709836_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHc908wH50pgfp27E4jEV6iS1qNDmHfrYdLWo0OYd-th5EdRgRoso8ZqnB0HF3siz0v8bIiB_Ud8aw_vb3DOHg8&_nc_ohc=9_oKKtWWqA8AX8rXoMO&tn=R436pNcEsmcloK4t&_nc_ht=scontent-nrt1-1.xx&oh=00_AT-vTg9SreUT17JjdLxcntZKhaqh_it6t6LC8mO_C3ql4A&oe=61C72157"]],
            [[3], ["Caballito de mar"], ["https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/268137254_4935221609822949_9050807256849569391_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEarkV0tU9OwzYJe0W3uPqjEU2UNm2_RJ8RTZQ2bb9En_eUFrnSpqkV4jBCoevxwPGEfah8Sq7AaxN7DH_edeDF&_nc_ohc=QEFxXXspoSgAX9SVgVk&tn=R436pNcEsmcloK4t&_nc_ht=scontent-nrt1-1.xx&oh=00_AT9kwYY-lfma3LXBKgLVGC5lzHfH98Dnv40sAGiVJiDI-Q&oe=61C5F5A8"]],
            [[4], ["Tortuga"], ["https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/267793455_4935221796489597_2823440951569750367_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFlv3H3TnpaJ4vE45Zm0gezu6H2t5UmK5W7ofa3lSYrlX-WpCasR8sdRrZIfs-V6Ft4py64MrQaMpH0z8YrltH-&_nc_ohc=awMjDuKdRjYAX_ftJvF&_nc_ht=scontent-nrt1-1.xx&oh=00_AT9-Q0WYWislG4dR43JE_cZCivTnuh6RG8SCiB0FA9ofYg&oe=61C61140"]],
            [[5], ["Tucan"], ["https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/267490827_4935221916489585_3381874320227778293_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeH8obFkLbvVv97d9C29wVcq6tRn-ArYpHbq1Gf4CtikdumUBkjZh21XP0KqEoNS2njGrpxEuvJTPDefUhtwAmP3&_nc_ohc=wPhambt-v4wAX_IDMdb&_nc_ht=scontent-nrt1-1.xx&oh=00_AT81IeYnon788IQPnjkPAoc-A2CfUz-d5tEHaSs_EWFkUg&oe=61C64717"]],
            [[6], ["camaron"], ["https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/268590061_4935222129822897_5754784504117194272_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFH3M5dc0Xt8wWUHZekStN3r4i8crPUhCeviLxys9SEJ_3RbqpKN1f-o8VRYv-V7gViM20fE436x3SxhTNAct5y&_nc_ohc=7AiNduG5V38AX88uxu2&tn=R436pNcEsmcloK4t&_nc_ht=scontent-nrt1-1.xx&oh=00_AT8wTl24xQxypnbqFdFcpYpADg-amgXx-OdBls4eMpl0yQ&oe=61C74BC2"]],
            [[7], ["torre"], ["https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/269174110_4935222416489535_8476857698997071796_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGOjcdLdHIEbZ3fbkxdhVtbpVi8bBHvNMGlWLxsEe80warIYYhG3_IRmY0y_VNgrKAHNGIHZH13Y37sp-4xP2rd&_nc_ohc=i2isi3B6M0EAX-Q6uQR&_nc_ht=scontent-nrt1-1.xx&oh=00_AT8JQ3kWK5leWVyuYZUTD5SjYWJ0QjcddxWu6tnQHdu3ow&oe=61C73D43"]],
            [[8], ["medusa"], ["https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/269333353_4935222269822883_7309912545817044432_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeG-g8AMc54h--2KaVHGds8vHeWEA3boZpUd5YQDduhmlaZ-v1CtqFp1DUY8cOdk2Fi2IZbqlqkckLQyrY-Brn6q&_nc_ohc=G3xSaNHiBPIAX_I_e-l&_nc_ht=scontent-nrt1-1.xx&oh=00_AT9lVAB5ZyB-5whSYiBMdN6TKLepJbComL5PRf6Mphc9SA&oe=61C61369"]]
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