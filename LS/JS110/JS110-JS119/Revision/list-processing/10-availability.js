/*
given a list of transactions, find if the given item is available in the inventory.
info
====
every transaction has an in and out movement. In means added to the inventory and out means out of inventory

example
=======
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true

ds
==
input: item_id, list of items
output: boolean

other variable
a new list of objects which has net quantity based on its movement

algo
====
1. calculate the inventory for each item id: it is net of quantity based on in and out movement
    a. 
2. if the value of inventory is less than zero, then the item is not available
3. if the value of invetory is more than zero, item is available
*/

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];
                     
function isItemAvailable(item_id, transactions) {
    // calculate inventory
    let itemArr = transactionsFor(item_id, transactions);
    let quant = 0;
    
    itemArr.forEach(obj => {
        if (obj.movement === 'in') quant += obj.quantity;
        if (obj.movement === 'out') quant -= obj.quantity;
    })
    
    return quant > 0;
}

// returns the list of transactions for a particular item id
function transactionsFor(item_id, arr) {
    let result = [];
    arr.forEach(elem => {
        if(elem['id'] === item_id) result.push(elem);
    })
    
    return result;
}

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(103, transactions));
console.log(isItemAvailable(105, transactions));