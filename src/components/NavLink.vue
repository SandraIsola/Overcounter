<template>
    <div class="Nav-bar">Counter App</div>
    <div class="router-link">
    <router-link to ="/">Home</router-link>
    <router-link to ="/counter">Counter</router-link>
    <router-link to="/(.*)" class="navbar-link">WildCard</router-link>
  </div>
      </template>
      
      <script>
      export default {
      name: 'NavLink'
      }
      </script> 
  
      <style>
  .Nav-bar {
      display: block;
      text-align: center;
      font-family: sans-serif;
      font-weight: 900;
      font-size: 30px;
      
  }
  
  .router-link {
      background-image: linear-gradient(45deg, #a4f2f2, #efa7d7);
      border: 20px solid;
      padding: 40px 0;
      margin: 50px 0;
      text-align: left;
  }
  .router-link a {
      font-size: 20px;
      display: inline;
      justify-content: space-between;
      align-items: left;
      text-align: right;
      color: inherit;
      padding: 14px;
      text-decoration: none;
      transition: all 0.3s ease;
      margin: 0 auto;
      /* box-shadow: 1px 1px 3px #555; */
  }

  .router-link a:hover {
    background-color: grey;
  }

  @media  (max-width: 480px) {

    .Nav-bar {
      text-align: center;
    }

    .router-link {
        text-align: center;
    }
    .router-link a{
    font-size: 14px;
    justify-content: space-between;
      align-items: center;
    }


  }
     </style>