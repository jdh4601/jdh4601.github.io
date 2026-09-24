import { About } from './components/About/About'
import { Archive } from './components/Archive/Archive'
import { Collections } from './components/Collections/Collections'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { Landing } from './components/Landing/Landing'
import { Nav } from './components/Nav/Nav'
import { Thread } from './components/Thread/Thread'

export default function App() {
  return (
    <>
      <Nav />
      <Thread />
      <main className="main">
        <Landing />
        <About />
        <Collections />
        <Archive />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
