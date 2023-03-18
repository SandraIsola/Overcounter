<template>
    <div class="counter">
      <h1 class="main-header">Counter :{{ count }}</h1>
      <input class="input-range" type="number" v-model="value" placeholder="Input Value" />
          <div class="button-holder">
      <button class="counter-btn" @click="setValue(value)">SetValue</button>
      <button class="counter-btn" @click="increment">Increment</button>
      <button class="counter-btn" @click="decrement">Decrement</button>
      <button class="counter-btn" @click="reset">Reset</button>
    </div>
  </div>
  
  </template>
  
  <script>
  
  import useCounter from "@/composables/useCounter";
  
  export default {
    setup() {
      const { count, increment, decrement, reset, setValue, value} = useCounter();
  
  
      return {
        count,
        increment,
        decrement,
        reset,
        setValue,
        value,
      };
    },
  };
  </script>
  
  <style>
  body {
    background-color: #d8f8ff;
    font-family: sans-serif;
    margin: 50px;
    border: 50px;
  }
  
  h1 {
    display: block;
    font-size: 50px;
    margin: 20px;
    border: 30px;
    text-align: center;
    margin: 0;
    left: 50px;
    }
  
  .main-header{
    text-align: center;
    display: block;
   
    }
  .counter {
    display: flex;
    flex-direction: column;
    background-color: #555555;
    height: 100%;
    width: 80%;
    justify-content: center;
    align-items: center;
    margin: 100px;
    padding: 50px 20px;
    color: black;
  
  }
  .counter-btn {
    display: inline;
    background-color: aliceblue;
    padding: 12px 22px;
    margin: 22px 5px;
    font-size: 1.2rem;
    width: 150px;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: black;
    border: 12px;
    border-radius: 12px; 
    cursor: pointer; 
  } 

  .counter-btn:active {
  background-color: #60a3bc;
  box-shadow: 0 5px #e4e4e4;
  transform: translateY(8px);
  }

  .counter-btn:hover {
text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.4s ease 0s;
background-color: #efa7d7;
}
  .input-range {
    background-color: aliceblue;
    padding: 0.8rem;
    font-size: 1.5rem;
    width: 500px;
    margin: 22px 5px;
    border: 5px;
    margin-bottom: 10px;
    border-radius: 12px;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
  .counter-btn {
    display: flex;
  flex-direction: row;
  justify-content: space-between;
  }
  input-range {
    width: 30px;
  }

  body {
   display: block;
    font-size: 18px;
  }
}
  
  </style>