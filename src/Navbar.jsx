import React, {useState} from "react";
import './App.css';
import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from "@material-ui/icons/Search";
function Navbar(){
    const [showLinks, setShowLinks] = useState(false);

    return <nav className="Navbar"> 
    <div className="leftSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
        <select id='algortithms'>
            <option>Bubble Sort</option>
            <option>Selection Sort</option>
            <option>Insertion Sort</option>
            <option>Merge Sort</option>
            <option>Quick Sort</option>
            
        </select>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}> </button>
    </div>
    <div className="rightSide">
        <button onClick={()=>getAlgorithm()}>GO!</button>
        </div>
    </nav>
}

function getAlgorithm(){
    var select = document.getElementById('algortithms');
    var text = select.options[select.selectedIndex].text;
    console.log(text); // English
}

export default Navbar;