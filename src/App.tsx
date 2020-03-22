import React from 'react';
import styled from 'styled-components';
import './App.css';
import Disk from './Disk';

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
	background: red;
	transform-origin: center 100%;
	transform: ${props => props.isOpen ? 'rotate(-180deg)' : 'rotate(0deg)'};
	transition: transform 0.5s;
`

function App() {
	const coverRef = React.createRef<HTMLDivElement>();
	const [rotation, setRotation] = React.useState(0);
	const [isOpen, setIsOpen] = React.useState(true);
	const randomize = React.useCallback(() => {
		setRotation(Math.random() * 180);
	}, []);
	const onRandomizeClick = React.useCallback(() => {
		if (!coverRef.current) {
			return;
		}
		if (isOpen) {
			setIsOpen(false);
			coverRef.current.addEventListener('transitionend', randomize, { once: true });
		} else {
			randomize();
		}
	}, [isOpen, coverRef, randomize]);
	return (
		<div className="App">
			<header className="App-header">
				<Container>
					<Disk rotation={rotation} />
					<Cover isOpen={isOpen} ref={coverRef} />
					<ButtonContainer>
						<button onClick={onRandomizeClick}>Randomize</button>
						<button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Open'}</button>
					</ButtonContainer>
				</Container>
			</header>
		</div>
	);
}

export default App;
