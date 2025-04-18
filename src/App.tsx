import './App.less';
import { Header } from './components/Header';
import { Towers } from './components/Towers';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
// import towerSunset from './assets/tower-sunset.jpg';
// import towerPNG from './assets/tower.png';
// import towerInField from './assets/tower-in-field-craig-garnham.jpg';
import { Home } from './components/Home';

function App() {
	return (
    	<>
			<Header />
			<div className={`content-container`}>
				<div className={`sections-container`}>
					<section id='home'>
						<Home />
					</section>
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
				</div>
				
				{/* <div className={`tower-sunset-container`}>
                	<img src={towerSunset} alt='Tower with sunset background'/>
				</div>
				<div className='tower-png'>
					<img src={towerPNG} />
				</div> */}
				{/* <div className='tower-in-field-container'>
					<img src={towerInField} />
				</div> */}
			</div>
		</>
  	)
}

export default App
