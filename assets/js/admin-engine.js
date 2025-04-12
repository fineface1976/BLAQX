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

// Add to admin-engine.js  
class AdminMatrix {  
  constructor() {  
    this.loadFullTree();  
  }  

  async loadFullTree() {  
    const response = await fetch('/api/admin/matrix');  
    this.fullTree = await response.json();  
    this.render();  
  }  

  render() {  
    const container = document.getElementById('admin-matrix');  
    container.innerHTML = this.generateAdminHTML(this.fullTree);  
  }  

  generateAdminHTML(node) {  
    return `  
      <div class="admin-node">  
        <span>${node.address} (Level ${node.level})</span>  
        <div class="children">  
          ${node.children.map(child => this.generateAdminHTML(child)).join('')}  
        </div>  
      </div>  
    `;  
  }  
}  

// Initialize in admin dashboard  
new AdminMatrix();  
