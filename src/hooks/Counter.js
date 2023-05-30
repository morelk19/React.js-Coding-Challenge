import React, {useState} from 'react'
import LinkHeart from "../images/LinkHeart.jpeg"

const Counter = () => {

    let [counterState, setCounterState] = useState(0)


    const increaseClick = () => {
        let stars= document.querySelector("#star");
        let count = document.querySelector("#count");
        counterState++;
        count.innerHTML = counterState;
        let newStar = document.createElement('img');
    
        newStar.id = "starCount"
        newStar.src = LinkHeart
        stars.appendChild(newStar);
     
    }
    
    const decreaseClick = () => {
        let stars= document.querySelector("#star");
        let count = document.querySelector("#count");
        if(counterState< 1){
            setCounterState(0);
        }else{
            let starCount = document.querySelector("#starCount")
            stars.removeChild(starCount);
            counterState--;
            count.innerHTML = counterState;
            
        }   
    }

    return{
        increaseClick: increaseClick,
        decreaseClick: decreaseClick
    }

}

export default Counter
