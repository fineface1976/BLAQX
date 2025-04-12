// CSRF Protection
   const csrfToken = localStorage.getItem('csrfToken') || crypto.randomUUID();
   localStorage.setItem('csrfToken', csrfToken);

   // Input Sanitization
   function sanitize(input) {
     return input.toString().replace(/<[^>]*>?/gm, '');
   }

// User Trading Engine
   class UserEngine {
     constructor() {
       this.tokenBalance = 0;
       this.initTrading();
     }

     initTrading() {
       setInterval(() => {
         const profit = this.runArbitrage() + this.runHedgedTrades();
         this.distributeProfit(profit);
       }, 300000); // Runs every 5 minutes
     }

     distributeProfit(profit) {
       this.tokenBalance += profit * 0.5; // 50% reinvest
       wallet.cashBalance += profit * 0.4; // 40% company
       wallet.userProfit += profit * 0.1; // 10% user
     }
   }

// In user-engine.js  
async function connectWallet() {  
  if (window.ethereum) {  
    await ethereum.request({ method: 'eth_requestAccounts' });  
    const accounts = await ethereum.request({ method: 'eth_accounts' });  
    userWallet = accounts[0];  
  }  
}  

// In user-engine.js  
async function connectWallet() {  
  if (window.ethereum) {  
    await ethereum.request({ method: 'eth_requestAccounts' });  
    const accounts = await ethereum.request({ method: 'eth_accounts' });  
    userWallet = accounts[0];  
  }  
}  

// CSRF Protection  
const csrfToken = localStorage.getItem('csrfToken') || crypto.randomUUID();  
localStorage.setItem('csrfToken', csrfToken);  

// Sanitize Inputs  
function sanitize(input) {  
  return input.toString().replace(/<[^>]*>?/gm, '');  
}  

// Secure API Calls  
async function apiCall(endpoint, data) {  
  const response = await fetch(endpoint, {  
    method: 'POST',  
    headers: {  
      'Content-Type': 'application/json',  
      'X-CSRF-Token': csrfToken  
    },  
    body: JSON.stringify(data)  
  });  
  return response.json();  
}  
