import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppContainer from "./components/AppContainer";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
function App() {
   return (
      <div className="App">
         <header>
          <MyNavbar />
         </header>
         <main>
            <AppContainer />

         </main>
         <footer>
          <MyFooter />
         </footer>
      </div>
   );
}

export default App;
