<template>
    <div class="container">
        <div class="col g-3">
            <div class="input-group mb-4 mt-5">
                 <div>
                     <label class="input-group-text mb-4" for="inputGroupFile01"></label>
                </div>
                <input type="file" class="form-control-photo" id="inputGroupFile01">
            </div>

            <div class="col mb-3">
                <input type="text" class="form-control" placeholder="Full name" aria-label="Full name">
            </div>

            <div class="col mb-3">
                <input type="text" class="form-control" placeholder="Last Name" aria-label="Last Name">
            </div>

            <div class="col mb-3">
                <input type="tel" class="form-control" placeholder="Phone" aria-label="Phone">
            </div>

            <div class="col mb-3">
                <input type="number" class="form-control" placeholder="Zip Code" aria-label="Zip Code">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserProfileSettings',
    }
</script>

<style>

</style>