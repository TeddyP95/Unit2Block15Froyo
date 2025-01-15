//create prompt
const userInput = prompt("Enter froyo flavors separated by commnas, no spaces!");

//userInput --> vanilla,vanilla,vanilla,strawberry,coffee,coffee

//split userInput string 
const order = userInput.split(",");

//create function
function orderQty(order) {
    let froyoOrder = {};                        //initializing empty object to hold flavors and counts
    for (let i=0; i < order.length; i++){       //looping through the array to get flavors and counts
      let flavor = order[i];                    //Get current flavor from array
      if (froyoOrder[flavor]) {                 //if this is a truthy statement aka it exists, then increment the count by 1
        froyoOrder[flavor]++;
      } else {                                  //if it is a falsey statement, initialize the count of this flavor to 1
        froyoOrder[flavor] = 1;
      }
    }
    return froyoOrder;
}

console.table(orderQty(order));