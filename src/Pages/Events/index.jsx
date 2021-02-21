import React from "react";
import Header from "../Header";
import Cards from "../Cards";
import "./Events.css";
import Cardinfo from "../../Cardinfo.js";
import Footer from "../Footer";

const Events = () => {
  return <div>

  <Header />

  <div className ="heading">EVENTS </div>
<Cards
worth = {Cardinfo[0].worth}
venue =  {Cardinfo[0].venue}
date= {Cardinfo[0].date}
convenor={Cardinfo[0].convenor}
coconvenor={Cardinfo[0].coconvenor}
members={Cardinfo[0].members}

/>
<Cards
worth = {Cardinfo[1].worth}
venue =  {Cardinfo[1].venue}
date= {Cardinfo[1].date}
convenor={Cardinfo[1].convenor}
coconvenor={Cardinfo[1].coconvenor}
members={Cardinfo[1].members}

/>
<Cards
worth = {Cardinfo[2].worth}
venue =  {Cardinfo[2].venue}
date= {Cardinfo[2].date}
convenor={Cardinfo[2].convenor}
coconvenor={Cardinfo[2].coconvenor}
members ={Cardinfo[2].members}

/>

<Footer/>


  </div>;
};

export default Events;
