<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/register">Sign Up</router-link> |
    <router-link to="/login">Sign In</router-link>|
    <router-link to="/customprofile">Custom Profile</router-link>
      <router-view/>
      </div>

</template>

<style>
#app {
  font-family: 'Sarabun', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #36006C;
}
</style>
