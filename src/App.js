import styles from "./App.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import background from "./img/sneakersgrayedout.png";
import SearchBar from "material-ui-search-bar";

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={styles.navbar}>
            Kickz Viewer
          </Typography>
        </Toolbar>
      </AppBar>
      <div
        style={{
          backgroundImage: "url(" + background + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <SearchBar
          onChange={() => console.log("onChange")}
          onRequestSearch={() => console.log("onRequestSearch")}
          style={{
            margin: "0 auto", //first field is top and bottom, second field is left and right
            position: "relative",
            top: "40%",
            padding: 10,
            maxWidth: 1000,
          }}
          cancelOnEscape
        />
      </div>
    </div>
  );
}

export default App;
