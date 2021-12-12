import React, { useState } from "react"
import Nube00 from '../img/nubes/nube00.svg'
import Nube01 from '../img/nubes/nube01.svg'
import Nube02 from '../img/nubes/nube02.svg'
import Nube03 from '../img/nubes/nube03.svg'
import Nube04 from '../img/nubes/nube04.svg'
import Nube05 from '../img/nubes/nube05.svg'
import Nube06 from '../img/nubes/nube06.svg'
import Nube07 from '../img/nubes/nube07.svg'
import Nube08 from '../img/nubes/nube08.svg'
import Nube09 from '../img/nubes/nube09.svg'


export const Svg_mar = (props) => {


	return <React.Fragment>
		<div className='d_svg_animacion_mar00'>


			<div className='d_contenedor_mar'>
				<svg viewBox="0 0 338 7" version="1.1" id="svg_mar" x="0px" y="0px">

					<rect x="0" width="380" height="7"   transition="1s" style={props.estado_dia ? { fill: "rgb(228, 239, 241)" } : { fill: "rgb(91, 94, 92)" }}></rect>

					<path id="agua00" style={props.estado_dia ? { fill: "rgb(54, 150, 206)" } : { fill: "rgb(17, 69, 99)" }} d="M0,7c4.4-0.9,10.8-2.2,18.6-3.1c11.7-1.3,20-1.2,30-1.1c21.2,0.2,38.2,0.1,58.7,0C120.1,2.8,132,2.6,132,2.6 c4.4,0,8.3-0.1,17.6-0.2c0,0,11.1-0.1,21.4-0.2c15.5-0.1,21.1,0,44.4,0c27.4,0,29.1-0.2,45.2,0c1.1,0,13.9,0.1,30.9,0.6 c14.6,0.4,24.2,0.9,36.2,2.5C331.9,6,335.5,6.6,338,7" ></path>
				</svg>
			</div>

			<div className='d_contenedor_bote'>



				<svg version="1.1" id="Barco00" x="0px" y="0px" viewBox="0 0 100 60">

					<path class="Barco00_st0" d="M73.8,54c-6.5,2.4-12.2,3-16,3.1c-4.8,0.2-8.1-0.3-14.9-1.2c-12.7-1.7-14.8-3.8-15.6-4.7c-1-1.2-1.9-2.8-4.3-5
	c-2-1.8-2.9-2-3.9-3.4c-1-1.2-2-3.3-1.9-7.1c1.5,0,3.5,0,5.9,0c2.2,0,3.6,0.1,4.5,1.2c0.4,0.5,0.3,0.7,0.6,1.3c1,1.9,3.8,1.8,7,2.8
	c0.7,0.2,1.2,0.4,1.7,0.6c1.8,0.8,3,1.6,3.2,1.7c5,3.2,24.3-0.7,24.3-0.7c11.3-2.3,16.9-3.4,18.6-4.4c0.4-0.2,2.4-1.3,2.9-0.7
	c0.2,0.3,0.1,0.8,0,1.1c-0.6,2-1.2,3.3-1.5,4.2c-0.7,2.5-0.6,3.5-1.7,5C82.2,48.8,81.1,51.3,73.8,54z"/>
					<path class="Barco00_st1" d="M85.4,41c-10.3,3.9-19.2,6-25.7,7.2c-11.7,2.1-16,1.2-18.7,0.4c-3.3-1-5-2.1-10.5-3.9
	c-5.3-1.7-9.7-2.6-12.6-3.1c-0.2-0.3-0.5-0.9-0.6-1.8c-0.1-0.5,0-0.9,0-1.1C20.1,39,24.2,39.6,29,41c5.3,1.6,7.5,3.1,10.8,4.3
	c2.3,0.8,6.6,2,18.8,0.1c7-1,16.5-3,27.7-7.2c0,0.2,0,0.4,0,0.8c-0.1,0.3-0.2,0.5-0.4,0.9C85.8,40.2,85.6,40.6,85.4,41z"/>
					<path class="Barco00_st2" d="M84.7,43.7c-5.8,2-10.8,3.4-14.9,4.4c-12.6,3.1-19,4.7-26.3,3.3c-2.7-0.5-2.5-0.8-14-3.7
	c-4.2-1.1-7.6-1.9-9.9-2.4c-0.3-0.3-0.7-0.8-1-1.5c-0.3-0.5-0.5-1.1-0.6-1.5c0.4-0.1,1.1-0.2,2-0.2c0.8,0,4.1-0.1,10.4,2.7
	c2.1,0.9,2.1,1.1,3.9,1.9c0,0,2.8,1,5.9,1.8c8.9,2.4,16.3,0.8,27-1.5c4.5-1,10.7-2.6,17.9-5.5c0,0.3,0,0.7-0.1,1.1
	C85.1,43.1,84.9,43.4,84.7,43.7z"/>
					<path class="Barco00_st2" d="M84.1,45.8c-2.6,1-6.6,2.4-11.5,3.7c-10.7,3-16.9,4.7-24.8,4c-3.9-0.4-7.8-1.3-15.6-3.3c-4-1-7.3-1.9-9.6-2.6
	c-0.1,0-1.1-0.2-1.5-1.1c-0.3-0.6-0.2-1.2-0.1-1.4c2.6,0.8,6.4,1.9,10.9,3.1c8.6,2.2,12.9,3.3,16.6,3.6c7.1,0.5,12.5-0.9,22.8-3.8
	c5.6-1.5,10.2-3.2,13.4-4.4c0,0.2,0,0.6-0.1,1.1C84.5,45.3,84.3,45.7,84.1,45.8z"/>
					<path class="Barco00_st3" d="M83.8,47.9c-2.4,1-5.7,2.3-9.7,3.6c-5.3,1.7-10.1,3.2-16,3.8c-8.7,0.8-15.6-0.7-23.5-2.5
	c-4-0.9-7.3-1.9-9.6-2.6c-0.2-0.1-1-0.3-1.5-1.1c-0.3-0.4-0.4-0.9-0.4-1.1c2.6,0.8,6.5,1.8,11.2,2.8c9.8,2.1,14.8,3.2,21.5,2.9
	c6.2-0.3,11.1-1.8,17.4-3.7c4.6-1.4,8.3-2.8,11-3.9c0,0.3,0,0.7-0.1,1.2C84,47.4,83.9,47.7,83.8,47.9z"/>
					<path class="Barco00_st4" d="M82.8,50.2c-1.9,0.7-4.6,1.7-7.9,2.7c-5.4,1.7-10.2,3.2-15.7,3.9C49.5,58,41.6,56.3,36,55
	c-4.2-0.9-7.7-2.1-10-2.9c-0.2-0.3-0.5-0.6-0.6-0.7c-0.3-0.3-0.5-0.4-0.6-0.6c-0.2-0.3-0.2-0.6-0.2-0.9c2.7,1,6.4,2.1,10.9,3.2
	c6.1,1.4,13.1,3,21.9,2.2c5.9-0.5,10.5-2,16.6-3.8c4-1.2,7.3-2.4,9.6-3.4c0.1,0.7,0,1-0.2,1.2c-0.1,0.1-0.1,0.1-0.3,0.4
	C83,49.9,82.9,50.1,82.8,50.2z"/>
					<path class="Barco00_st5" d="M30.5,40.9c-2-0.6-4.3-1.2-6.9-1.6c-2.3-0.4-4.4-0.5-6.3-0.5c-0.3-0.5-0.7-1.4-0.9-2.7c-0.1-0.8-0.1-1.5-0.1-2
	c1,0.6,2.5,1.4,4.5,1.6c1.1,0.1,1.7,0,2.9,0.1c1.2,0.1,2.9,0.4,4.9,1.3C29.3,38.3,29.9,39.6,30.5,40.9z"/>
					<path class="Barco00_st5" d="M86.6,37.9c-1.1,0.5-2.3,0.9-3.4,1.3c-2.5,0.9-4.9,1.8-7.2,2.5c0-0.6,0-1.2,0-1.8c2.6-0.5,4.4-1.2,5.6-1.7
	c0.3-0.1,0.5-0.3,1.1-0.6c1.8-0.9,3.2-1.5,4.2-1.9c0,0.4-0.1,0.7-0.2,0.9c-0.1,0.3-0.3,0.4-0.3,0.7C86.4,37.6,86.5,37.8,86.6,37.9z"
					/>
					<rect x="51.7" y="2.6" class="Barco00_st6" width="0.9" height="42.1" />
					<path class="Barco00_st7" d="M65.5,44.3c-1.6,0.4-3.2,0.7-4.9,1c-2.7,0.4-5.2,0.7-7.5,0.8c-0.1-0.5-0.2-1-0.2-1.4c2-0.1,4.1-0.4,6.3-0.7
	c2.1-0.3,4.1-0.7,6-1.1C65.3,43.3,65.4,43.8,65.5,44.3z"/>
					<rect x="37.9" y="10.6" class="Barco00_st6" width="28.5" height="0.8" />
					<path id="vela_01" class="Barco00_st8" d="M52,35c-4.9-1.4-11.6-2.5-18.9-0.8c-1,0.2-2,0.5-2.9,0.8c-0.4-0.6-4.7-8.1-0.9-15.9c2.7-5.6,7.8-7.7,9.1-8.1
	c1.2,0.5,3.1,1.2,5.3,1.4c3.5,0.3,6.3-0.7,7.7-1.3c-5.4,1.4-9.3,6.2-9.4,11.7C41.9,28.6,46.1,33.8,52,35z"/>
					<rect x="24.5" y="13.9" transform="matrix(0.5669 -0.8238 0.8238 0.5669 -17.0509 34.8389)" class="Barco00_st9" width="0.3" height="39.4" />
					<path class="Barco00_st10" d="M8.7,23.9c0,19.8,4.5,35.8,10.1,35.8" />
					<path id="ola_borde_barco00" class="Barco00_st11" style={props.estado_dia ? { fill: "rgb(54, 150, 206)" } : { fill: "rgb(17, 69, 99)" }} d="M18.9,56c0-0.2,1.8-1.3,5.4-3.6c0.6-0.4,1.2-0.7,2-0.8c1.3-0.1,1.8,0.5,3.3,0.6c1.7,0.2,1.7-0.5,3.3-0.4
	c1.9,0.1,2,1.1,4.1,1.3c1.9,0.2,2.3-0.5,3.6,0.1c1.2,0.6,1.1,1.5,2.1,1.7c1.2,0.3,1.7-1,3.3-1.3c1.8-0.3,2.3,1.1,4.4,1.4
	c2.3,0.3,2.6-1.2,5.4-1.3c3.3-0.1,4.7,1.9,6.6,0.9c1-0.5,0.7-1.1,1.9-1.9c2.2-1.5,4.9-1,5.5-0.9c2.2,0.4,2.1,1.3,3.6,1.3
	c2.2,0,2.5-2.1,5.5-2.6c0.7-0.1,2.2-0.4,3.4,0.4c1,0.7,1.6,2,1.5,2.6c-0.3,3.1-15.4,3.6-28.8,4.4C32.1,59.4,18.9,57.1,18.9,56z"/>
					<path class="Barco00_st12" style={props.estado_dia ? { fill: "rgb(54, 150, 206)" } : { fill: "rgb(17, 69, 99)" }} d="M90.1,56.5c-10.7,1.7-23.1,2.9-37,3c-13.6,0.1-25.8-0.9-36.3-2.4c1.7-1.3,3.5-2.5,5.2-3.8
	c7.9,1.8,14.6,2.6,19.6,3C58.8,57.4,67.4,58,73.8,54c1.3-0.8,4.5-3,8.4-2.5c2.5,0.3,4.5,1.7,5.7,2.8C88.6,55,89.4,55.7,90.1,56.5z"
					/>
					<path class="Barco00_st5" d="M53.1,46c-1.4,0.2-3.1,0.4-4.9,0.4c-2.9,0-5.5-0.5-7.5-1.1c0.2-0.6,0.3-1.2,0.5-1.8c1.6,0.5,3.6,1,5.9,1.2
	c2.2,0.2,4.2,0.1,5.8-0.2C53,45,53,45.5,53.1,46z"/>
					<polygon class="Barco00_st13" points="40.5,45.7 29.1,40.7 29.8,38.6 41.1,43.6 " />
					<path class="Barco00_st6" d="M76.7,35.5H29.6c-0.2-0.1-0.3-0.2-0.3-0.4c0-0.2,0.1-0.3,0.3-0.4c15.7,0,31.4,0,47.2,0c0,0,0.2,0.2,0.2,0.5
	C76.9,35.3,76.8,35.4,76.7,35.5z"/>
					<path id="vela_02" class="Barco00_st8" d="M75.9,34.6c-4.3-1.2-10.1-2.1-16.7-1c-1.3,0.2-2.5,0.5-3.6,0.8c-0.6-0.3-6.6-3.8-7.4-11
	c-0.9-7.7,4.8-12.5,5.2-12.9c1.3,0.7,4.7,2.2,8.9,1.5c1.6-0.3,3-0.8,4-1.4c-0.7,1.3-3.1,5.8-1.9,11.5C66.2,31.3,75.5,34.5,75.9,34.6
	z"/>
					<path class="Barco00_st14" d="M76.7,42l-8.4,1.7c-0.4-1-0.7-2.1-0.9-3.5c-0.2-1-0.3-2-0.3-2.9c1.3-0.2,2.7-0.5,4-0.8
	c1.5-0.3,2.9-0.6,4.4-0.9c0.3,0.8,0.6,1.8,0.8,2.9C76.5,39.8,76.6,41,76.7,42z"/>
					<path class="Barco00_st15" d="M69,42l-5.6,1.1c-0.1-0.6-0.2-1.2-0.4-1.8c-0.1-0.6-0.3-1.3-0.4-1.9c0.9-0.2,1.9-0.4,2.8-0.6
	c0.9-0.2,1.9-0.4,2.8-0.5C68.5,39.5,68.8,40.8,69,42z"/>
					<path class="Barco00_st16" d="M77.2,41.8c-1.5,0.5-3.1,1-4.9,1.5c-2.6,0.7-5.1,1.1-7.5,1.3c-0.1-0.6-0.3-1.2-0.4-1.8c2-0.2,4.1-0.6,6.3-1.2
	c2.1-0.5,4.1-1.2,5.9-1.9C76.8,40.4,77,41.1,77.2,41.8z"/>
					<path class="Barco00_st17" d="M36,48.3c-3.7-0.9-7.4-1.7-11-2.6c-2.2-1.9-2.6-2.6-2.4-2.8c0.5-0.8,7.2,2.2,10.6,3.9
	C34.4,47.4,35.3,47.9,36,48.3z"/>
					<path class="Barco00_st18" d="M63.8,46.2c0,0.1-1.7,0.2-4.2,0.9c-1.3,0.4-1.4,0.5-2.2,0.6c-2,0.3-3.7,0-3.7-0.1c0-0.1,1.6,0.2,3.6-0.5
	c0.7-0.2,1-0.5,1.8-0.6c0.6-0.1,1,0.1,2.1-0.1C62.5,46.1,63.8,46.1,63.8,46.2z"/>
					<path class="Barco00_st17" d="M64.9,50.5c0,0.2-0.2,0.4-0.3,0.4c-0.2,0.2-0.7,0.3-0.9,0.1c-0.2-0.2-0.1-0.6,0-0.6c0.1-0.1,0.3,0.2,0.5,0.1
	c0.2-0.1,0.1-0.2,0.3-0.2C64.7,50.1,64.9,50.3,64.9,50.5z"/>
				</svg>


			</div>
		</div>


	</React.Fragment>

}


export const Svg_nubes = () => {




	return <React.Fragment>


		<img className="img_nubes" src={Nube00} style={{ width: "10rem", height: "12rem", top: `10rem`, animationName: "nube_movimiento00", animationDuration: `55s`, animationDelay: `1s` }}></img>
		<img className="img_nubes" src={Nube01} style={{ width: "14rem", height: "16rem", top: `5rem`, animationName: "nube_movimiento00", animationDuration: `90s`, animationDelay: `15s` }}></img>
		<img className="img_nubes" src={Nube02} style={{ width: "8rem", height: "10rem", top: `40rem`, animationName: "nube_movimiento00", animationDuration: `55s`, animationDelay: `20s` }}></img>
		<img className="img_nubes" src={Nube03} style={{ width: "17rem", height: "19rem", top: `15rem`, animationName: "nube_movimiento00", animationDuration: `85s`, animationDelay: `3s` }}></img>
		<img className="img_nubes" src={Nube04} style={{ width: "12rem", height: "14rem", top: `20rem`, animationName: "nube_movimiento00", animationDuration: `100s`, animationDelay: `10s` }}></img>
		<img className="img_nubes" src={Nube05} style={{ width: "6rem", height: "8rem", top: `7rem`, animationName: "nube_movimiento00", animationDuration: `95s`, animationDelay: `20s` }}></img>
		<img className="img_nubes" src={Nube06} style={{ width: "17rem", height: "19rem", top: `18rem`, animationName: "nube_movimiento00", animationDuration: `60s`, animationDelay: `0s` }}></img>
		<img className="img_nubes" src={Nube07} style={{ width: "13rem", height: "15rem", top: `33rem`, animationName: "nube_movimiento00", animationDuration: `100s`, animationDelay: `25s` }}></img>
		<img className="img_nubes" src={Nube08} style={{ width: "11rem", height: "13rem", top: `37rem`, animationName: "nube_movimiento00", animationDuration: `89s`, animationDelay: `15s` }}></img>
		<img className="img_nubes" src={Nube09} style={{ width: "10rem", height: "12rem", top: `25rem`, animationName: "nube_movimiento00", animationDuration: `81s`, animationDelay: `8s` }}></img>


	</React.Fragment>


}


export const Estrellas_div = () => {


	let Estrellas = [];




	for (let i = 0; i < 100; i++) {

		let estrella_posicion_top = Math.floor((Math.random() * 45) + 1);
		let estrella_posicion_left = Math.floor((Math.random() * 105) + 1);
		let estrella_width_height = Math.floor((Math.random() * 3) + 1);
		
		let animacion_true_false = Math.floor((Math.random() * 2) + 1);
        let duracion_animacion = Math.round(Math.random() * (5 - 8) + 5); 


		let animacion_estrellas ;
		
		animacion_true_false ===1 ? animacion_estrellas="parpadeo_estrellas" : animacion_estrellas="";




		Estrellas.push([[estrella_posicion_top], [estrella_posicion_left], [estrella_width_height],[animacion_estrellas], [duracion_animacion]]);

	}

	console.log(Estrellas);
	return <React.Fragment>
		{Estrellas.map((estrellas) => {



			return <div className="d_estrella00" style={{animationDuration:`0.${estrellas[4]}s` ,animationName:estrellas[3] ,width: `0.${estrellas[2]}rem`, height: `0.${estrellas[2]}rem`, top: `${estrellas[0]}rem`, left: `${estrellas[1]}rem` }}></div>

		})}

	</React.Fragment>


}
