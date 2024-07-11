import React from "react";
import transport from './transport.png'
import source from './src-dest.png'

import {
  FaWallet,
  FaUser,
  FaMapMarkerAlt,
  FaUpload,
} from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <header className="header-part">
        <h1>GreenStride</h1>
        <div className="home-header-buttons">
          <button className="home-header-button">
            <FaWallet /> Connect Wallet
          </button>
          <button className="home-header-button">
            <FaUser /> Account
          </button>
        </div>
      </header>

      <div className="home-container">
        <div className="home-main">
          <div className="left-side">
            <h1>Use green energy, embrace public transport, and promote environmental awareness.</h1>
            <img src={transport} alt=" "/>
            {/* <img src={metro} alt=""/> */}
          </div>
          <div className="right-side">
          <div className="input-group">
              <FaMapMarkerAlt className="icon destination-icon" />
              <input type="text" placeholder="Destination" />
            </div>
            
            <div className="route">
              <img src={source} alt=""/><br></br>
            </div>
            <div className="input-group">
              <FaMapMarkerAlt className="icon source-icon" />
              <input type="text" placeholder="Source" />
            </div>
            
            <div className="input-group">
              <input type="text" placeholder="Distance Travel in KM" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Ticket ID" />
            </div>
            <div className="input-group">
              <label className="label">Upload Ticket Price</label>
              <input type="file" />
              <FaUpload className="icon" />
            </div>
            <button className="claim-button">Claim Reward</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
