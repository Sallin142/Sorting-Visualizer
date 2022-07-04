import React from 'react';
import { getBubbleSortAnimations } from '../sortingAlgorithms/bubbleSort';
import { getMergeSortAnimations } from '../sortingAlgorithms/mergSort';
import { getSelectionSortAnimations } from '../sortingAlgorithms/selectionSort';
import { getInsertionSortAnimations } from '../sortingAlgorithms/insertionSort';
import './SortingVisualizer.css';
import { getQuickSortAnimations } from '../sortingAlgorithms/quickSort';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 170;

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
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  insertionSort() {
    const animations = getInsertionSortAnimations(this.state.array);

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
          const [barOneIdx, newBarOneHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newBarOneHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
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

  selectionSort() {
    const animations = getSelectionSortAnimations(this.state.array);
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
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newBarOneHeight}px`;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barTwoStyle.height = `${newBarTwoHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }

    
    
  }
  quickSort(){
    const animations = getQuickSortAnimations(this.state.array);
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
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.insertionSort()}>Insertion Sort</button>
        <button onClick={() => this.selectionSort()}>Selection Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

