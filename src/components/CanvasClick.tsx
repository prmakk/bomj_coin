import { FC, useRef, useEffect } from "react";

interface ICanvasClick{
    x: number,
    y: number,
    click: number,
}

const CanvasClick: FC<ICanvasClick> = ({x, y, click}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if(canvas){
            canvas.width = 130;
            const context = canvas.getContext("2d");
            if(context){
                context.font = '30px Tektur';
                context.fillStyle = 'white';
                context.fillText('+' + `${click}`, 10, 30);
            }
        }
    }, [click]);

    return <canvas className="canvas" ref={canvasRef} width={40} height={40} style={{position: 'absolute', left:`${x + 20}px`, top:`${y - 40}px`}}/>;
};

export default CanvasClick;
