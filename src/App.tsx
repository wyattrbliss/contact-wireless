import './App.less';
import { Header } from './components/Header';
import { Towers } from './components/Towers';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import towerSunset from './assets/tower-sunset.jpg';
import TowerPNG from './assets/tower.png';

function App() {
	return (
    	<>
			<Header />
			<div className={`content-container`}>
				<section id='about'>
					<About />
				</section>
				<section id='towers'>
					<Towers />
				</section>
				<section id='contact'>
					<Contact />
				</section>
				<Footer />
				<div className={`tower-sunset-container`}>
                	<img src={towerSunset} alt='Tower with sunset background'/>
				</div>
				<div className='tower-png'>
					<img src={TowerPNG} />
				</div>
			</div>
		</>
  	)
}

export default App
