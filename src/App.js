import "./App.css";
const cssStyle={ };

function App() {
  let Greeting="";
  let curDate= new Date();
  curDate=curDate.getHours();
  if(curDate>=6 && curDate<11){
    Greeting= "Good Morning"
    cssStyle.color="Green";
  }
  else if(curDate>=11 && curDate<17){
    Greeting= "Good Afternoon"
    cssStyle.color="#D1D100";
  }
  else if(curDate>=17 && curDate<21){
    Greeting= "Good Evening"
    cssStyle.color="Orange";
  }
  else {
    Greeting= "Good Night"
    cssStyle.color="Black";
  }
  return (
    <>
      <div>
      <h1>Hello Sir, <span style={cssStyle}>{Greeting}</span></h1>
      </div>
      {/* <div className="hello">
        <h5>
        Created by <span>Faizan Ahmed</span>
        </h5>
      </div> */}
      </>
  );
}

export default App;
