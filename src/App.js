 import { useState } from "react";

export default function App(){
  const cards = [1,1,1,1,1,1,1,1];
  return ( <div className="containar-fluid mt-2" >
    <Heading/>
    <div className="row mt-5">
      {cards.map(() => <div className="col-3 mb-2">
        <CardD/>
      </div>)}
    </div>
  </div>
  );
}

function Heading(){
  return <div>
    <h1>Card Samples</h1>
  </div>
}
function CardD(){

  return <div className="card">
        <div className="card-header" > Title </div>
        <div className="card-body"> <img src="https://picsum.photos/270/300"/> 
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione nulla
        earum, iure magnam at assumenda qui et itaque, modi totam mollitia
        officia necessitatibus tenetur architecto.
        </div>
        <div className="card-footer"> <input type="button"   value="Buy Now"/> </div>
    </div>;

}