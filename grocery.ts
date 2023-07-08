// define grocery class

class Grocery {
    name: string;
    quantity: number;
  
    constructor(name: string, quantity: number) {
      this.name = name;
      this.quantity = quantity;
    }
  }
  
  
  // array of groceries
  
  const groceries: Grocery[] = [
    new Grocery('Milk', 1),
    new Grocery('Bread', 2),
    new Grocery('Eggs', 12),
  ];
  