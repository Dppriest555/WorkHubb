<template>
  <div class="container">
    <router-view />
    <br>
    <nav id="nav" class="navbar fixed-bottom">
      <router-link to="/">Home</router-link>
      <router-link to="/register">Sign Up</router-link>
      <router-link to="/login">Sign In</router-link>
      <router-link to="/customprofile">Custom Profile</router-link>
      <router-link to="/chatwindow">Chat</router-link>
      <router-link to="/profile">Profile</router-link>
    </nav>
  </div>

</template>


<style>
  #app {
    background-color: #e9ecef;
    font-family: 'Sarabun', sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

  }

  #nav {
    height: 40px;
    background-color: rgb(240, 240, 240);
    -webkit-box-shadow: 0px 5px 9px 7px rgba(0, 0, 0, 0.400);
    -moz-box-shadow: 0px 5px 9px 7px rgba(0, 0, 0, 0.400);
    box-shadow: 0px 5px 9px 7px rgba(0, 0, 0, 0.400);

  }

  #nav a {
    font-weight: bold;
    text-decoration: none;
    margin: 1px;
    padding: 1px;
  }

  #nav a.router-link-exact-active {
    color: #36006C;
  }
</style>