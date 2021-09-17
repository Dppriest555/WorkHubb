<template>
<div class="container">
    <label>
        {{label}}
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
    border-bottom: solid 2px #626262;
    background-color: #EEEEEE;
    width: 80%;
    font-size: 22px;
}

label {
    text-align: left;
    margin-left: 9%;
    color: #626262;
    font-weight: 500;
    font-size: 16px;
}

.container {
    display: block;
}

</style>