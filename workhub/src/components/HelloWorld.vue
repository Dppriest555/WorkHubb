<template>
  <div class="hello">
    <h1>Welcome to Work<a style="color: #36006C">Hub</a></h1>
    <h3>The marketplace for small gigs</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1{
  margin: 30px 0 0;
  font-weight: bold;
}

h3 {
  margin: 30px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  font-family: 'Sarabun', sans-serif;
}

</style>
