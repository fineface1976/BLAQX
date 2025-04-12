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
