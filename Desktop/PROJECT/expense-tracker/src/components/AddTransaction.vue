<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>Add Income or Expenses</h3>
        <form id="form " @submit.prevent="onSubmit">
            <div class="form-control mt-2">
                <label for="text">Input income/expenses</label>
                <input type="text" id="text" v-model="text" placeholder="Enter income or expenses">
            </div>
            <div class="form-control mt-2">
                <label for="amount">Input Amount <br>
                (Expenses should start with a minus sign ) </label>
                    <input type="text" id="amount" v-model="amount" placeholder="Enter Amount....">
            </div>
            <div class="div mt-2">
                <button class="btn btn-primary">Add Transaction</button>
            </div>
        </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
    

    // v-Model binding 
    const text = ref(' ')
    const amount = ref (' ')

    const toast = useToast ();
    
    const emit = defineEmits(['transactionSubmitted'])


    const onSubmit = () => {
    if (!text.value || !amount.value ) {
     toast.error('Both fields are required');
    return;
    }
    const transactionData = {
                         text: text.value,
                         amount: parseFloat(amount.value),
                        };
                        
                        emit('transactionSubmitted', transactionData);
                        
                        text.value = '';
                        amount.value = ''



    }

</script>

<style scoped>
input{
  border: 1px solid #dedede;
  border-radius: 2px;
  display: block;
  font-size: 16px;
  padding: 10px;
}

.btn {
  cursor: pointer;
}

.btn:focus,
.delete-btn:focus {
  outline: 0;
}

</style>