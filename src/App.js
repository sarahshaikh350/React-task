import React from "react";
import WelcomeMessage from './component/WelcomeMessage.js';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import Greeting from "./component/Greeting.js";
import Counter from './component/Counter.js';
import ToggleText from "./component/ToggleText.js";
import LiveInput from "./component/LiveInput.js";
import FruitList from "./component/FruitList.js";
import AddItemList from "./component/AddItemList.js";
import LoginForm from "./component/LoginForm.js";
import FetchPosts from "./component/Fetchpost.js";
function App()  {

 return(

  <div>
    <WelcomeMessage />
    <Header/>
    <Counter/>
   <Greeting name="Ali"/>
   <Greeting name=" Sara"/>
   <Greeting name="Areesha"/>
   <ToggleText/>
   <LiveInput/>
   <FruitList/>
   <AddItemList/>
   <LoginForm/>
   <FetchPosts/>

   <Footer/>
  </div>
 )


}




export default App;
