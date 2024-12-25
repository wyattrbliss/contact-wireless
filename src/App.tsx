import './App.less'
import { Header } from './components/Header'

function App() {
  return (
    <>
			<div className={`container`}>
        <Header />
				<section id='home'>
          home
				</section>
				<section id='about'>
					about
				</section>
				<section id='towers'>
          towers
        </section>
				<section id='contact'>
					contact
				</section>
			</div>
		</>
  )
}

export default App
