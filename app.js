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



function showUnsettledAmount(unsettledAmount){
const unsettledAmountElement = document.getElementById("unsettled_amount");
unsettledAmountElement.innerHTML = unsettledAmount;
}
showFriends(friends);
showUnsettledAmount(totalAmount / friends.length);