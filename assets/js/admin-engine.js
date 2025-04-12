// Admin Control Engine
   class AdminEngine {
     constructor() {
       this.liquidityPool = 0;
       this.monitorContracts();
     }

     monitorContracts() {
       setInterval(() => {
         if (this.liquidityPool >= 10000) {
           deployToPancakeSwap();
         }
       }, 3600000); // Checks hourly
     }
   }

class AdminMatrix {  
  constructor() {  
    this.loadEntireTree();  
  }  

  loadEntireTree() {  
    // Fetches all users from contract  
    BLAQXContract.getAllUsers().then(users => {  
      this.renderFullTree(users);  
    });  
  }  
}  
