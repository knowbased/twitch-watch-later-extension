import "./App.css";
import extensionLogo from "./assets/twitch-watch-later-logo-128x128.png";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <img
            src={extensionLogo}
            width="50"
            className="logo"
            alt="logo twitch watch later"
          />
          <h1>Twitch Watch Later</h1>
        </div>
      </header>
      <main className="main">
        <section className="instructions">
          <p>1. Select the video you want to save for later.</p>
          <p>2. Click on the "Watch Later" button below the player.</p>
          <p>3. Navigate to the following tab.</p>
          <p>4. Click on the "Videos" tab.</p>
          <p>5. Enjoy your saved videos!</p>
        </section>
      </main>
    </div>
  );
}

export default App;
