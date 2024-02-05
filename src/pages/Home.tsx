import Intro from "./Home/Intro"
import Bar from "./Home/Bar"
import Features from './Home/Features'
import Findout from "./Home/Findout"
import Footer from "./Home/Footer"
import './Home/index.css'


function Home() {

  return (
    <>
      <header>
        <Bar />
        <Intro />
      </header>
      <main>
        <Features />
        <Findout />
      </main>
      <Footer />
    </>
  )
}

export default Home
