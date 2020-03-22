import React from 'react';
import styled from 'styled-components';
import './App.css';
import Disk from './Disk';

const Container = styled.div`
	position: relative;
`

const Cover = styled.div`
	height: 251px;
	width: 500px;
	position: absolute;
	top: 250px;
	background: #282c34;
`

function App() {
	const [rotation, setRotation] = React.useState(0);
	return (
		<div className="App">
			<header className="App-header">
				<Container>
					<Disk rotation={rotation} />
					<Cover>
						<button onClick={() => setRotation(Math.random() * 180)}>Randomize</button>
					</Cover>
				</Container>
			</header>
		</div>
	);
}

export default App;
