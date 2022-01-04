// import { useState } from "react";

export default function App(){
  return ( <div className="containar-fluid" >
    <Heading/>
    <div className="row">
      <CardD className="col-sm-12 col-md-4" />
      <CardD className="col-sm-4 col-md-4" />
      <CardD className="col-4 col-md-4" />
      <CardD className="col-4 col-md-4" />
      <CardD className="col-4 col-md-4" />
      <CardD className="col-4 col-md-4" />
      <CardD className="col-4 col-md-4" />
      <CardD className="col-4 col-md-4" />
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
        <div className="card-body"> <img src="https://picsum.photos/200"/> </div>
        <div className="card-footer"> <input type="button"   value="Buy Now"/> </div>
    </div>;

}