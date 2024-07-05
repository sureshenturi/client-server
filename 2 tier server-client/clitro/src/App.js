import logo from './logo.svg';
import './App.css';

function App() {

  let getFruits = async()=>{
    let reqOptions = {
      method:"GET",
    };
       let JSONData = await fetch ("http://localhost:4567/fruits",reqOptions);

       let JSOData = await JSONData.json();

       console.log(JSOData); 

  };

  return (
    <div className="App">
     <button onClick={()=>{getFruits();

     }}>Get Fruits</button>
    </div>
  );
}

export default App;
