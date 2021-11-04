
import './canvs.css'
import React, {useRef, useEffect} from 'react'


export const Canvs00 = ()=>{

    const canvasref = useRef(null)

    useEffect(() => {
        let canvas = canvasref.current
        let ctx = canvas.getContext("2d");
     
       
        ctx.fillStyle = 'green';
        ctx.fillRect(10, 20, 100, 100);
        ctx.strokeRect(35, 40, 50, 50);
        ctx.shadowColor = 'blue'
    
        ctx.fillStyle = 'red';
        ctx.font = '2rem serif'
        ctx.fillText('asd',200, 40);
       
      
        ctx.arc(50,150,40,0,2*Math.PI);
        ctx.stroke();

        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.moveTo(10, 150);
        ctx.bezierCurveTo(100, 170, 100, 100, 300, 100);
        ctx.stroke();

    }, [])

    return <div className='d_cnvs00'>

<canvas ref={canvasref} width={400} height={400}  className='cnvs00' >


</canvas>

    </div>
}