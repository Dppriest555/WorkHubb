<template>
    <div class="container">
        <div class="inputtext">
           <h4>{{ title }}</h4>
        </div>
        <div class="inputfield">
            <input type="email" v-model="email"/>
        </div>
    </div>    
</template>

<script>
export default {
  name: 'InputForm',
  props: ['title']

}
</script>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
}

input {
    border: none;
    border-bottom: solid 2px rgb(110, 110, 110);
    background-color: #EEEEEE;
    width: 80%;
}

h4 {
    text-align: left;
    margin-left: 10%;
}

</style>