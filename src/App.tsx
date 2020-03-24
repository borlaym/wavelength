import React from 'react';
import styled from 'styled-components';
import './App.css';
import Disk from './Disk';
import Pointer from './Pointer';
import { database } from 'firebase';

interface Props {
	database: database.Database
}

const Container = styled.div`
	position: relative;
`

const ButtonContainer = styled.div`
	height: 251px;
	width: 500px;
	position: absolute;
	top: 250px;
	background: #282c34;
`

const Cover = styled.div<{ isOpen: boolean }>`
	height: 250px;
	width: 500px;
	position: absolute;
	border-top-left-radius: 250px;
	border-top-right-radius: 250px;
	top: 0px;
	background: turquoise;
	transform-origin: center 100%;
	transform: ${props => props.isOpen ? 'rotate(-180deg)' : 'rotate(0deg)'};
	transition: transform 0.5s;
`

function App(props: Props) {
	const database = props.database;
	const coverRef = React.createRef<HTMLDivElement>();
	const [rotation, setRotation] = React.useState(0);
	const [isOpen, setIsOpen] = React.useState(true);
	const [isPeeking, setIsPeeking] = React.useState(false);
	const [forcePointer, setforcePointer] = React.useState(0);
	const randomize = React.useCallback(() => {
		const rotation = Math.random() * 180;
		database.ref('/discRotation').set(rotation);
		setRotation(rotation);
	}, []);
	const onRandomizeClick = React.useCallback(() => {
		if (!coverRef.current) {
			return;
		}
		if (isOpen) {
			setIsOpen(false);
			database.ref('/revealed').set(false);
			coverRef.current.addEventListener('transitionend', randomize, { once: true });
		} else {
			randomize();
		}
	}, [isOpen, coverRef, randomize]);
	const handlePointerChange = React.useCallback((rotation: number) => {
		database.ref('/pointerRotation').set(rotation);
	}, []);
	const reveal = React.useCallback(() => {
		database.ref('/revealed').set(true);
		setIsOpen(true);
	}, []);
	React.useEffect(() => {
		database.ref().on('value', (data) => {
			const values = data.val();
			setRotation(values.discRotation);
			setIsOpen(values.revealed);
			setforcePointer(values.pointerRotation);
		})
	}, []);
	return (
		<div className="App">
			<header className="App-header">
				<Container>
					<Disk rotation={rotation} />
					<Cover isOpen={isOpen || isPeeking} ref={coverRef} />
					<Pointer onChange={handlePointerChange} forceRotation={forcePointer} />
					<ButtonContainer>
						<button onClick={isOpen ? onRandomizeClick : reveal}>{isOpen ? 'Randomize' : 'Reveal'}</button>
						<button
							onMouseDown={() => setIsPeeking(true)}
							onMouseUp={() => setIsPeeking(false)}
							onMouseLeave={() => setIsPeeking(false)}
						>
							Peek
						</button>
					</ButtonContainer>
				</Container>
			</header>
		</div>
	);
}

export default App;
