import React from "react";
import "./App.css";
import routes from "./routes";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

function App() {
  return (
    <div className="App">
      <div className="important">
        <header className="header">
          <Link className="link" to="/">
            <h1>j. pastel</h1>
          </Link>
          <div className="nav-links">
            {/*<Link to="/about" className="link">
              <h2>about</h2>
            </Link>*/}
            <Link to="/contact" className="link">
              {/* <h2>contact</h2> */}
              <ul
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  textAlign: "left",
                }}
              >
                <li style={{ color: "rgba(0, 0, 0, 0.465)" }}>thomas@surkit.co</li>
                <li style={{ color: "rgba(0, 0, 0, 0.465)" }}>manu@surkit.co</li>
                <li style={{ color: "rgba(0, 0, 0, 0.465)" }}>j.pastelmusic@gmail.com</li>
              </ul>
            </Link>
          </div>
        </header>
        {routes}
        <div className="middle-section">
          {/*<iframe 
          className="youtube"
            width="660"
            height="415"
            src="https://www.youtube.com/embed/RGS1E8ynmYQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>*/}
        </div>
        <div className="social-links">
          <a href="https://music.apple.com/us/artist/j-pastel/1451661209">
            Apple Music
          </a>
          <a href="https://music.apple.com/us/artist/j-pastel/1451661209">
            itunes
          </a>
          <a href="https://music.amazon.co.uk/artists/B07NDWWRQ6?ref=dm_sh_91dd-fcff-dmcp-f095-842e3&musicTerritory=GB&marketplaceId=A1F83G8C2ARO7P">
            Amazon Music
          </a>
          <a href="https://open.spotify.com/artist/4e0F3Bqyp0BpE3VmNh4qKS">
            Spotify
          </a>
        </div>
        <div className="social-media">
          <a href="https://www.instagram.com/j.pastelmusic/">
            <img
              width="20"
              src="https://img.icons8.com/metro/26/000000/instagram-new.png"
            />
          </a>
          <a href="https://twitter.com/jpastelmusic">
            <img
              width="20"
              src="https://img.icons8.com/ios/50/000000/twitter.png"
            />
          </a>
          <a href="https://www.youtube.com/channel/UC959joE99pLeH_X-nsQ26Xg">
            <img
              width="25"
              src="https://img.icons8.com/windows/32/000000/youtube-squared.png"
            />
          </a>
        </div>
      </div>
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 70,

              density: {
                enable: true,
                value_area: 2500,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default App;
