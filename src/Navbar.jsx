import React, {useState} from "react";
import ReactDOM from 'react-dom';
import './App.css';


export default class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            readyToSort: true,
            sorting: false
        };
    }

   

    handleGo(){
        if(this.state.sorting === true){
            return;
        }
        var select = document.getElementById('algortithms');
        var text = select.options[select.selectedIndex].text;
        this.setState({sorting: true});

        if(text==='Merge Sort'){
          this.props.mergeSort();
        }else if(text==='Insertion Sort'){
          this.props.insertionSort();
        }else if(text==='Selection Sort'){
          this.props.selectionSort()
        }else if(text==='Quick Sort'){
          this.props.quickSort();
        }else if(text==='Bubble Sort'){
          this.props.bubbleSort();
        }
        
    }


    render(){
        return (
        <nav className="Navbar"> 
        <div className="leftSide">
            <div>{this.state.date.toLocaleTimeString()}</div>
            <div className="links">
            <select id='algortithms'>
                <option>Bubble Sort</option>
                <option>Selection Sort</option>
                <option>Insertion Sort</option>
                <option>Merge Sort</option>
                <option>Quick Sort</option>
                
            </select>
            </div>
            
            
        </div>
        <div className="rightSide">
            <button className="generate" onClick={() => {
                if(this.state.sorting === true){
                    this.setState({sorting: false});
                }
                this.props.resetArray();
                this.setState({readyToSort: true});
                }}>New!</button>
            <button className="go" onClick={()=>this.handleGo()}>GO!</button>
            
            </div>
        </nav>
        )
    }

    componentDidMount(){
        const oneSecond = 1000;
        setInterval(() => {
            this.setState({ date: new Date() });
        }, oneSecond);
    }
    
}



