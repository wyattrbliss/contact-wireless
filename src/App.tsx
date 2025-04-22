import './App.less';
import { Header } from './components/Header';
import { Towers } from './components/Towers';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import bayCity from './assets/bay-city-tower.jpg';
import { Video } from './components/Video';

function App() {
	return (
    	<>
			<Header />
			<Video />
			<div className={`content-container`}>
				<div className={`sections-container`}>
					<section id='home'>
						<div className='home-section-left'>
							<img src={bayCity} />
							</div>
						<div className={`home-section-container`}>
							<div className={`home-section-right`}>
								<Home />
								<About />
							</div>
						</div>
					</section>
					<section id='towers'>
						<Towers />
					</section>
					<section id='contact'>
						<Contact />
					</section>
				</div>
			</div>
			<Footer />
		</>
  	)
}

export default App
