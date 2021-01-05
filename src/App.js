import "./App.css";
import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchBar from "material-ui-search-bar";

function App() {
  return (
    <div className="backgroundImg">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="navbar">
            Kickz Viewer
          </Typography>
        </Toolbar>
      </AppBar>
      <SearchBar
        onChange={() => console.log("onChange")}
        onRequestSearch={() => console.log("onRequestSearch")}
        className="searchbar"
        cancelOnEscape
      />
    </div>
  );
}

export default App;
