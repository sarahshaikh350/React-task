import React from "react";
import WelcomeMessage from './component/WelcomeMessage.js';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import Greeting from "./component/Greeting.js";
import Counter from './component/Counter.js';
function App()  {

 return(

  <div>
    <WelcomeMessage />
    <Header/>
    <Counter/>
   <Greeting name="Ali"/>
   <Greeting name=" Sara"/>
   <Greeting name="Areesha"/>

   <Footer/>
  </div>
 )


}




export default App;
