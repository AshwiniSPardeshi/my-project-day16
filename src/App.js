// import { useState } from "react";

import { useState } from "react";

export default function App(){
  return ( <div className="containar-fluid" >
    <Heading/>
    <div className="row">
      <div className="col-4 col-sm-12"> 
        <CardD/>        
      </div>
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
  const list = [1,1,1,1,1,1,1];
  const [title, setTitle] = useState("");

  const Click = () => {
    return;
  };
  
  const typeTitle = (e) => {
    setTitle(e.target.value);
  }; 

  return <div className="container-fluid bg-info">
    <div>    
      <input className="m-2 " type="text" value={title} placeholder="Enter Title..."  onChange={typeTitle} />
    </div>
    <div>
      <input className="m-2 " type="button" value="Click" onClick={Click} />
    </div>
    <div>{title}</div>
    
    {list.map( (item) =>     <div className="card">
        <div className="card-header" > {title} </div>
        <div className="card-body"> <img src="https://picsum.photos/200"/> </div>
        <div className="card-footer"> <input type="button"   value="Buy Now"/> </div>
    </div> ) }

  </div>

    /*
    <div className="card">
        <div className="card-header" > {Title} </div>
        <div className="card-body"> <img src="https://picsum.photos/200"/> </div>
        <div className="card-footer"> <input type="button"   value="Buy Now"/> </div>
    </div>;
    */

}