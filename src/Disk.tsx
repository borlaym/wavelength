import React from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas<{ rotation: number }>`
	transform: rotate(${props => props.rotation - 90}deg);
`

const SLICE_WIDTH = 10; // deg

type Props = {
	rotation: number
}

function Disk(props: Props) {
	const canvasRef = React.createRef<HTMLCanvasElement>();
	React.useEffect(() => {
		if (canvasRef.current) {
			const ctx = canvasRef.current.getContext('2d');
			if (!ctx) {
				return;
			}
			const { width, height } = canvasRef.current;
			if (width !== height) {
				throw new Error('Canvas needs to be a square')
			}
			const CENTER: [number, number] = [width / 2, height / 2];
			const RADIUS = width / 2;

			const slice = (start: number, color: string) => {
				if (!ctx) {
					return;
				}
				ctx.beginPath();
				ctx.moveTo(...CENTER);
				ctx.arc(CENTER[0], CENTER[1], RADIUS, start, start + (Math.PI / 180) * SLICE_WIDTH);
				ctx.lineTo(...CENTER);
				ctx.fillStyle = color;
				ctx.closePath();
				ctx.fill();
			}

			ctx.beginPath();
			// Circle background
			ctx.arc(CENTER[0], CENTER[1], RADIUS, 0, Math.PI * 2);
			ctx.fillStyle = '#fff';
			ctx.fill();
			// 2 slices
			slice(-(Math.PI / 180) * 115, 'yellow');
			slice(-(Math.PI / 180) * 75, 'yellow');
			// 3 slices
			slice(-(Math.PI / 180) * 105, 'orange');
			slice(-(Math.PI / 180) * 85, 'orange');
			// 4
			slice(-(Math.PI / 180) * 95, 'turquoise');
		}
	}, [canvasRef.current])
	return <Canvas
		width="500"
		height="500"
		ref={canvasRef}
		rotation={props.rotation}
	/>

}

export default Disk;
