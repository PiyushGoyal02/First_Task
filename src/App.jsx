
import './App.css';
import Checkboxes from './components/Checkboxex';
import DoneButton from './components/DoneButton';

function App() {
  

  return (
    <div className="main-box">
      <div className='Inside'>
        <div className="inside-contact-box">

          {/* Checkboxes Section */}
          <Checkboxes/>

          {/* Horizontal Line */}
          <div className='HorizontalLine-box'>
            <div className='Horizontal-Line'></div>
          </div>

          {/* Done Button Section */}
          <DoneButton/>

        </div>
      </div>
    </div>
  );
}

export default App;
