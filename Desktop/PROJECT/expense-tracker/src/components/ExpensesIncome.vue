<template>
    <div class="container">
        <div class="row income">
            <div class="col-md-6">
                <h4>Income</h4>
                <p id="income" class="incomeAdd">#{{ income }}</p>
            </div>
            <div class="col-md-6">
            <h4>Expenses</h4>
            <p id="income" class="expensesMinus">#{{ expenses }}</p>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props: {
    income: {
      type: Number,
      required: true
    },
    expenses: {
      type: Number,
      required: true
    },
        
    }
        
    }
</script>

<style scoped>
.income{
    text-align: center;
}
.incomeAdd {
    color: #2ecc71;
}
.expensesMinus {
    color: #c0392b;
}


</style>