import './App.css';

function App() {
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5", "Page 6"];
  
  return (
    <div className="main-box">
      {/* Inside contact box */}
      <div className="inside-contact-box">
        <div className="allpages-checkbox">
          <label className="allpages-text" htmlFor="myCheckbox">All pages</label>
          <input className="checkbox" type="checkbox" id="myCheckbox" />
        </div>

        <hr className="HR-tag" />

        <div className="Pages-section">
          {pages.map((page) => (
            <div key={page}>
              <label className="">
                <input type="checkbox" /> {page}
              </label>
            </div>
          ))}
        </div>

        <hr className="HR-tag" />

        <div className="button-container">
          <button className="Done-button">Done</button>
        </div>
      </div>
    </div>
  );
}

export default App;
