import { BsPersonVcard, BsArchive, BsTelephoneForward } from "react-icons/bs";
import { GiPistolGun } from "react-icons/gi";
import Menu from './components/Menu'
import './App.css'

function App() {
  const openInNewTab = () => {
    window.open('https://thirapi.vercel.app/', '_blank', 'noopener,noreferrer');
  };

  const commingSoon = () => {
    alert("under construction")
  }
  return (
    <>
      <main>
      <div className='main--header'><img 
      src="https://avatars.githubusercontent.com/u/132630759" 
      />
      <span>thirapi</span>
      </div>
      <hr/>
      <div className='main--body'>
        <Menu 
        icon={<BsPersonVcard className="icon" />}
        title="about"
        toggle={commingSoon}
        />
        <Menu
        icon={<BsArchive className="icon" />}
        title="archive"
        toggle={commingSoon}
        />
        <Menu
        icon={<BsTelephoneForward className="icon" />}
        title="contact"
        toggle={commingSoon}
        />
        <Menu
        icon={<GiPistolGun className="icon" />}
        title="gun store"
        toggle={commingSoon}
        />
      </div>
      </main>
    </>
  )
}

export default App
