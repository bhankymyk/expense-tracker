<template>
    <div class="container">
        <div class="row">
            <div class="col head">
                <h2>Expense Tracker</h2>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <YourBalance :total="+total"/>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <ExpensesIncome :income="+income" :expenses="+expenses"/>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <History :transactions="transactions" @transactionDeleted="handleTransactionDeleted"/>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <AddTransaction  @transactionSubmitted="handleTransactionSubmitted"/>
            </div>
        </div>


    </div>
</template>

<script>
import YourBalance from '@/components/YourBalance.vue';
import ExpensesIncome from '@/components/ExpensesIncome.vue';
import History from '@/components/History.vue';
import AddTransaction from '@/components/AddTransaction.vue';


import {ref, computed, onMounted} from "vue";
import { useToast } from 'vue-toastification';

    export default {
        components :{
            YourBalance,
            ExpensesIncome,
            History,
            AddTransaction
        },
        
        setup () {
    const transactions = ref(
           [
                // {id: 1, text: 'Book', amount: 800 },
                // {id: 2, text: 'Pen', amount: -800 },
                // {id: 3, text: 'Phone', amount: 1900 },
                // {id: 4, text: 'Laptop', amount: -1200 }
            ])

            
            // Local Storage
    onMounted (() => {
      const savedTransactions = JSON.parse(localStorage.getItem
      ('transactions'));
      
      if (savedTransactions) {
        transactions.value = savedTransactions
      }
    });

    const toast = useToast();


              // Get Total Balance
    const total = computed (() => {
              return transactions.value.reduce((acc, transaction) => {
                return acc + transaction.amount;
              }, 0)
            })

              // Get Income
    const income = computed (() => {
              return transactions.value
              .filter((transaction) => transaction.amount > 0)
               .reduce((acc, transaction) => {
                return acc + transaction.amount;
              }, 0)
              .toFixed(2)
            })

              // Get Expenses
    const expenses = computed (() => {
              return transactions.value
              .filter((transaction) => transaction.amount < 0)
               .reduce((acc, transaction) => {
                return acc + transaction.amount;
              }, 0)
              .toFixed(2)
            })


            // Add Transaction
    const handleTransactionSubmitted = (transactionData) => {
                  transactions.value.push({
                    id: generateUniqueId(),
                    text: transactionData.text,
                    amount: transactionData.amount
                  });

                  saveTransactionsToLocalStorage ();
                  toast.success('Transaction Added')
                }
                

                  // Generate Unique ID
    const generateUniqueId =  () => {
                  return Math.floor(Math.random() * 1000000 )
                }

                // Delete transaction
    const handleTransactionDeleted = (id)  => {
                transactions.value = transactions.value.filter(
                  (transaction) => transaction.id !==id);
                
                  saveTransactionsToLocalStorage ();

                  toast.success('Transaction Deleted')
            };

            // Save to storage
            const saveTransactionsToLocalStorage = () => {
              localStorage.setItem('transactions', JSON.stringify(transactions.value));
            }

            return {transactions, total, income, expenses, handleTransactionSubmitted, handleTransactionDeleted}
          },
}
    
</script>

<style scoped>
.head h2{
    text-align: center;
    color: #198754;
}

</style>