import './App.css';
import {useState} from "react";
import HoveredBlocks from "./components/HoveredBlocks";

function App() {


    const [hoveredBlock, setHoveredBlock] = useState([])
    const [size, setSize] = useState([])
    const [value, setValue] = useState(5)
    const a = []

    const boxSize = {
            width:"250px",
            height:"250px",
        }
    const insideBlocksSize = {
        width:`${250/value}px`,
        height:`auto`
    }

    for (let i = 0; i < value*value; i++){
        a.push("white")
    }

const getParams = () => {
        fetch('http://demo7919674.mockable.io/')
            .then(response => response.json())
            .then(json => setSize(json))
}



    return (
    <div className="App">
        <div className="inside_grid">
            <select className = "select" onChange={event => {
                for (let i = 0; i< size.length; i++){
                    if(size[i].name == event.target.value){
                        setValue(Number(size[i].field))
                    }
                }

            }}>
                <option disabled>Size of square</option>
                {
                    size.length > 0 ?
                        size.map((option) =>
                            <option key={option.name} >{option.name}</option>
                        )
                        :
                        <option>Loading...</option>
                }
            </select>
            <button className = "btn" onClick={getParams}>Start</button>
            <div className="container" style={boxSize}>
                {
                    size.length > 0 ?
                        a.map((o, index) =>
                            <div
                                key={index}
                                className={o}
                                style={insideBlocksSize}
                                onMouseOver={
                                        (e) => {e.currentTarget.classList.toggle('blue')
                                        setHoveredBlock([...hoveredBlock, index])
                                    }}
                            >

                            </div>)
                        :
                        <div>Loading...</div>
                }
            </div>
        </div>
        <div className="inside_grid">
            <div style={{fontSize:"20px", fontWeight:"bold"}}>Hover squares</div>
            <HoveredBlocks array={hoveredBlock} value={value}/>
        </div>


    </div>
  );
}

export default App;
