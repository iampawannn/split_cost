let totalAmount = 60;
let friends = [
    {
    firstName: 'Alex',
    lastName: 'Lee',
    mobile: 5678908993,
    email: 'alexlee@example.com', 
    },
    {
     firstName: 'Bob',
     lastName: 'Lyon',
     mobile: 567888993,
     email: 'boblyon@example.com', 
        },
    {
    firstName: 'Donald',
    lastName: 'Trump',
    mobile: 5673238993,
    email: 'dtrump@example.com', 
    },
] ;

let shoppingItems = [
    {  
        title: "Grocery Shopping",
        amount: 50,
        date: new Date(),
        isSettled: false,
    },
    {
        title: "Aldi Shopping",
        amount: 100,
        date: new Date(),
        isSettled: true,
    }]

//function to display shopping items
function showShoppingItems(shoppingItems) {


const shoppingItemsElement = document.getElementById('shopping_items');
let shoppingListElements = '';
for(let shoppingItems of shoppingItems) {
    let shoppingItemElement = `<div>
    <div><h3>${shoppingItems.title}</h3>
        <time>${shoppingItems.date}</time>
    </div>
    <div>$${shoppingItems.amount}</div>
    </div>`
    shoppingListElements += shoppingListElements;
}
shoppingItemsElements.innerHTML = shoppingListElements;
}

//function to display friends
function showFriends(friends) {
const friendsElement = document.getElementById('friends');
let friendListElements = '';
for(let friend of friends) {
    let friendElement = `<div title="${friend.firstName} ${friend.lastName}"></div>`;
    friendListElements = friendListElements + friendElement;
    
}
friendsElement.innerHTML = friendListElements;
}


// Function to display unsettled Amount
function showUnsettledAmount(unsettledAmount){
const unsettledAmountElement = document.getElementById("unsettled_amount");
unsettledAmountElement.innerHTML = unsettledAmount;
}
showShoppingItems();
showFriends(friends);
showUnsettledAmount(totalAmount / friends.length);