import logo from './logo.svg';
import './App.css';
import Counter from './hooks/Counter';

function App() {
  const{increaseClick, decreaseClick } = Counter();
  
  return (
    <div>
      <div class="header">
    <h2 class="logo">Logo</h2>
    <h2 class="menu">Menu</h2>
</div>

    <div id ="counter">
        <button id="decrease" onClick={decreaseClick}>Remove 1</button>
        <button id="increase" onClick={increaseClick}>Add 1</button>
        <div id = "displayCounter">
            <h1 id = "count">0</h1>
        </div>
       
    </div>
 
    <div id ="star">
    </div>
  
    </div>


  );
}

export default App;
