import './App.less';
import { Header } from './components/Header';
import { Towers } from './components/Towers';

function App() {
  return (
    <>
		<div className={`content-container`}>
        	<Header />
			<section id='home'>
          		home
			</section>
			<section id='about'>
				about
			</section>
			<section id='towers'>
         		<Towers />
        	</section>
			<section id='contact'>
				contact
			</section>
		</div>
	</>
  )
}

export default App
