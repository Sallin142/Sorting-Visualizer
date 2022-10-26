import React from 'react';
import { ReactDOM } from 'react-dom';
import { getBubbleSortAnimations } from '../sortingAlgorithms/bubbleSort';
import { getMergeSortAnimations } from '../sortingAlgorithms/mergSort';
import { getSelectionSortAnimations } from '../sortingAlgorithms/selectionSort';
import { getInsertionSortAnimations } from '../sortingAlgorithms/insertionSort';
import './SortingVisualizer.css';
import { getQuickSortAnimations } from '../sortingAlgorithms/quickSort';
import Navbar from '../Navbar';


// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 169;

// This is the main color of the array bars.
const PRIMARY_COLOR = '#fefae0';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
     
    };
     
     this.bubbleSort = this.bubbleSort.bind(this);
     this.quickSort = this.quickSort.bind(this);
     this.mergeSort = this.mergeSort.bind(this);
     this.selectionSort = this.selectionSort.bind(this);
     this.insertionSort = this.insertionSort.bind(this);
     this.resetArray = this.resetArray.bind(this);
  }

  componentDidMount() {
    this.resetArray();
  }

  

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 600));
    }
    this.setState({array});
  }
  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    this.animate(animations);
  }
  insertionSort() {
    const animations = getInsertionSortAnimations(this.state.array);
    this.animate(animations);
  }
  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    this.animate(animations);
  }
  selectionSort() {
    const animations = getSelectionSortAnimations(this.state.array);
    this.animate(animations);
  }
  quickSort(){
    const animations = getQuickSortAnimations(this.state.array);
    this.animate(animations);
  }
  animate(animations){
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      let animation = animations[i];
      const isColorChange = animation.length === 3;

      if (isColorChange) {
        const [condition, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;

        let color;

        if(condition){
          color = PRIMARY_COLOR;
        }else{
          color = SECONDARY_COLOR;
        }

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newBarOneHeight,barTwoIdx,newBarTwoHeight] = animations[i];
          if(barOneIdx !== -1){
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newBarOneHeight}px`;

            const barTwoStyle = arrayBars[barTwoIdx].style;
            barTwoStyle.height = `${newBarTwoHeight}px`;
          }
          
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  

  render() {
    const {array} = this.state;

    return (
      <div>
      <Navbar bubbleSort={this.bubbleSort} mergeSort={this.mergeSort} quickSort={this.quickSort} selectionSort={this.selectionSort} insertionSort={this.insertionSort} resetArray={this.resetArray}></Navbar>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
        
      </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

