import { useState } from "react";

function Checkboxes() {
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5", "Page 6"];
  const [selectedPages, setSelectedPages] = useState([]);

  const isAllSelected = selectedPages.length === pages.length;

  const toggleAllPages = () => {
    if (isAllSelected) {
      setSelectedPages([]);
    } else {
      setSelectedPages([...pages]);
    }
  };

  const togglePage = (page) => {
    setSelectedPages((prev) =>
      prev.includes(page)
        ? prev.filter((p) => p !== page)
        : [...prev, page]
    );
  };

  return (
    <>
      {/* All Pages Checkbox */}
      <div className="allpages-checkbox">
        <label className="allpages-text" htmlFor="myCheckbox">All pages</label>
        <div className='checkbox-outsidebox'>
          <input
            className="checkbox"
            type="checkbox"
            id="myCheckbox"
            checked={isAllSelected}
            onChange={toggleAllPages}
          />
        </div>
      </div>

      {/* Horizontal Line */}
      <div className='HorizontalLine-box'>
        <div className='Horizontal-Line'></div>
      </div>

      {/* Individual Pages Checkboxes */}
      <div className="container">
        <div className="Pages-section">
          {pages.map((page, index) => (
            <div key={index} className="sections">
              <label>
                <div className='TextSize'>{page}</div>
                <div className='checkbox-outsidebox'>
                  <input
                    className='checkbox'
                    type="checkbox"
                    checked={selectedPages.includes(page)}
                    onChange={() => togglePage(page)}
                  />
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Checkboxes;
