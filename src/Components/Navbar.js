import React from 'react';

function Navbar() {
  return (
    <nav style={{ backgroundColor: 'black', padding: '1px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <ul style={{ display: 'flex', alignItems: 'center', listStyleType: 'none', margin: 0, padding: 0 }}>
        <li>
          <a href="/dashboard" aria-label="Dashboard">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHxKKAEHn8RVyIybBh00tw210BbV3dTwCymg&s" alt="Dashboard" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
          </a>
        </li>
        <li>
          <a href="/settings" aria-label="Settings">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7RU7hOz0gnitsECkELZabr4xwXmIkZW4go1pe7kB-g&s" alt="Settings" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
          </a>
        </li>
        <li>
          <a href="/settings" aria-label="Settings">
            <img src="data:image/png;base64,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" alt="Settings" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
          </a>
        </li>
        <li>
          <a href="/warning" aria-label="Warning">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKNiMyrjA6xl9okAp7AC5fTKpqSAmZP1Lr4drnUVM6w&s" alt="Warning" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
          </a>
        </li>
      </ul>
      <h1 style={{ color: 'orange', margin: '0',fontSize:'50px' }}>MULTI<span style={{ color: 'yellow' }}>BOT</span></h1>
      <div style={{ display: 'flex', alignItems: 'center' }}> {/* Centering the input section */}
        <input type="Number" placeholder="" style={{ marginRight: '20px', padding: '10px', borderRadius: '20px', border: 'none' }} />
        <input type="Number" placeholder="" style={{ marginRight: '20px', padding: '10px', borderRadius: '20px', border: 'none' }} />
        <a href="/submit" aria-label="Submit">
          <button type="submit" style={{ padding: '5px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', width: '60px', height: '60px' }}>
            <img src="https://static.vecteezy.com/system/resources/previews/004/700/025/original/connecting-wires-glyph-two-color-icon-vector.jpg" alt="Submit" style={{ width: '100%', height: '100%', borderRadius: '50px' }} />
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
