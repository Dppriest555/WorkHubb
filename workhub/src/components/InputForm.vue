<template>
    <div class="container">
        <div class="inputtext">
           <p>{{ title }}</p>
        </div>
        <div class="input-icons">
            <i class="far fa-user"></i>
            <input class="inputfield" type="email" v-model="email"/>
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
    border-bottom: solid 2px #626262;
    background-color: #EEEEEE;
    width: 80%;
}

p {
    text-align: left;
    margin-left: 9%;
    color: #626262;
    font-weight: 500;
    font-size: 18px;
}
.input-icons{
    margin-top: 20px;
}
.input-icons i {
            position: absolute;
            margin-bottom: 10px;
            width: 20px;
        }
        
</style>