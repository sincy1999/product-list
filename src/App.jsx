import { useState } from "react";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';

function App() {
  const [data,setData] = useState('')
  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div>
            <input type="text" value={data}/>
          </div>
          <div>
          <input type="button" value="AC" onClick={ e => setData('')}/>
          <input type="button" value="DE" onClick={ e => setData(data.slice(0,-1))}/>
          <input type="button" value="." onClick={ e => setData(data + e.target.value)}/>
          <input type="button" value="/" onClick={ e => setData(data + e.target.value)}/>
          </div>
          <div>
          <input type="button" value="7" onClick={ e => setData(data + e.target.value)}/>
          <input type="button" value="8" onClick={ e => setData(data + e.target.value)}/>
          <input type="button" value="9" onClick={ e => setData(data + e.target.value)}/>
          <input type="button" value="*" onClick={ e => setData(data + e.target.value)}/>
          </div>
        <div>
          <input type="button" value="4" onClick={ e => setData(data + e.target.value)}/>
          <input type="button" value="5" onClick={ e => setData(data + e.target.value)}/>
          <input type="button" value="6" onClick={ e => setData(data + e.target.value)}/>
          <input type="button" value="+" onClick={ e => setData(data + e.target.value)}/>
          </div>
          <div>
          <input type="button" value="1" onClick={ e => setData(data + e.target.value)}/>
          <input type="button" value="2" onClick={ e => setData(data + e.target.value)}/>
          <input type="button" value="3" onClick={ e => setData(data + e.target.value)}/>
          <input type="button" value="-" onClick={ e => setData(data + e.target.value)}/>
          </div>
          <div >
          <input type="button" value="00"onClick={ e => setData(data + e.target.value)} />
          <input type="button" value="0" onClick={ e => setData(data + e.target.value)}/>
          <input type="button" value="=" className="last-row" onClick={ e => data(setData(eval))}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
