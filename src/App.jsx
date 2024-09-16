import { BsPersonVcard, BsArchive, BsTelephoneForward } from "react-icons/bs";
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
      <div className='main--header'>thirapi</div>
      <hr/>
      <div className='main--body'>
        <div className='main--body--items'>
          <BsPersonVcard className="icon" />
          <span>about</span>
        </div>
        <div className='main--body--items'>
          <BsArchive className="icon" />
          <span>archive</span>
        </div>
        <div className='main--body--items'>
          <BsTelephoneForward className="icon" />
          <span>contact</span>
        </div>
      </div>
      </main>
    </>
  )
}

export default App
