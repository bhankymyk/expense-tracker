<template>
    
        <div class="row">
            <div class="col bal">
                <h4>Your Balance</h4>
                <h1 id="balance">#{{ total }}</h1>
            </div>
        </div>

</template>

<script>
    export default {
        props: {
    total: {
      type: Number,
      required: true
    },
  },
    }
</script>

<style scoped>
.bal{
    text-align: center;
}


</style>