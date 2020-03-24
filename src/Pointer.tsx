import * as React from 'react';
import styled from 'styled-components';
import useEventListener from './useEventListener';

interface Props {
	onChange: (rotation: number) => void,
	forceRotation: number
}

const Handle = styled.div.attrs<{ rotation: number }>(props => ({
	style: {
		transform: `rotate(${props.rotation}deg)`
	}
}))<{ rotation: number }>`
	width: 8px;
	height: 230px;
	position: absolute;
	top: 20px;
	left: 246px;
	background: red;
	transform-origin: center 100%;
`

export default function Pointer(props: Props) {
	const handleRef = React.useRef<HTMLDivElement | null>(null);
	const [isDragging, setIsDragging] = React.useState(false);
	const [startX, setStartX] = React.useState(0);
	const [rotation, setRotation] = React.useState(props.forceRotation);
	const onMouseDown = React.useCallback((event: MouseEvent) => {
		if (!handleRef.current) {
			return;
		}
		if (event.target === handleRef.current) {
			setStartX(event.x);
			setIsDragging(true);
		}
	}, []);
	const onMouseUp = React.useCallback((event: MouseEvent) => {
		if (!isDragging) {
			return;
		}
		setIsDragging(false);
		props.onChange(rotation);
	}, [isDragging, rotation]);
	const onMouseMove = React.useCallback((event: MouseEvent) => {
		if (!isDragging) {
			return;
		}
		const d = event.x - startX;
		setStartX(event.x);
		setRotation(Math.max(Math.min(rotation + d / 2, 90), -90));
	}, [isDragging, rotation, startX]);
	React.useEffect(() => {
		setIsDragging(false);
		setRotation(props.forceRotation);
	}, [props.forceRotation]);
	useEventListener('mousedown', onMouseDown);
	useEventListener('mouseup', onMouseUp);
	useEventListener('mousemove', onMouseMove);
	return (
		<Handle ref={handleRef} rotation={rotation} />
	)
}