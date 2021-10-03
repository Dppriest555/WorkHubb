<template>
<div class="container">
    <label>
        <p class="label">{{label}}</p>
      
    <input type="text" v-model="inputValue">

    </label>
</div>    
</template>

<script>

export default {
  name: 'CustomInput',
  props: ['label', 'modelValue'],
  computed: {
    inputValue: {
        get() {
            return this.modelValue
        },
        set(value) {
            this.$emit('update:modelValue', value)
            }
    }
  }
}

</script>

<style scoped>

input {
    border: none;
    border-bottom: solid 2px rgba(0, 0, 0, 0.278);
    background-color: #f5f5f5;
    width: 95%;
    font-size: 22px;
    outline:none;
    margin-bottom: 20px;
}

input[type=text] {
      padding-left: 25px; 
}

input[type=text]:focus {
  border-bottom: 3px solid #7F04FC;
}

.label{
   margin-left: 5px;
}

.container {
    display: block;
}
label {
    text-align: left;
    color: #626262;
    font-weight: 500;
    font-size: 18px;
}

</style>