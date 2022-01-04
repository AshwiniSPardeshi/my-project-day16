export default function App(){
    return <div>
      <MyComp/>
    </div>;
}

function MyComp(){
  let userName = "Ashwini";
  let id = 29;
  let subjects = ["Core-Jave ", " Operating System ", " Data Structure ", " Data Base ", " WPT"," Advance Java"];

  return <div>
    <div>My name is {userName},</div>
    <div>roll number is {id}</div>
    <div>A CDAC course have a this subjects {subjects}</div>
    <div>{subjects.map((sub) => <div> {sub} </div> )}
    </div>
  </div>
}