// the first section of this script is for the input area for user's suggestions and as it will appear down at the suggestion's pan

const suggestionInput = document.querySelector('#suggestion-input');
const suggestionBtn = document.querySelector('#suggestbtn');
let addSuggestion = document.querySelector('#enter-suggestion')

function clickSuggestion() {
    if (suggestionInput.value.length > 0) {
        let newSuggestion = document.createElement('p');
        newSuggestion.appendChild(document.createTextNode(suggestionInput.value));
        addSuggestion.appendChild(newSuggestion);
        suggestionInput.value = "";
    }   
}

function enterSuggestion(event) {
    if (suggestionInput.value.length > 0 && event.keyCode === 13 ) {
        let newSuggestion = document.createElement('p');
        newSuggestion.appendChild(document.createTextNode(suggestionInput.value));
        addSuggestion.appendChild(newSuggestion);
        suggestionInput.value = "";
    } 
}

suggestionBtn.addEventListener('click', clickSuggestion );      
suggestionInput.addEventListener('keypress', enterSuggestion );

// first block of script ends here

// The second script here is the manipulation of the favorites heart icon
// The heart should change to a solid color on click and the title attribute update

const favorites = document.querySelector('#heart1');
const favorites1 = document.querySelector('#heart2');
const favorites2 = document.querySelector('#heart3');
const favorites3 = document.querySelector('#heart4');


favorites.addEventListener('click', () => {
    let classes = favorites.classList.toggle('heartsfull');
        favorites.getAttribute('title');
        favorites.setAttribute('title', 'You added this to favorites');
} );

favorites1.addEventListener('click', () => {
    favorites1.classList.toggle('heartsfull');
    favorites1.getAttribute('title');
    favorites1.setAttribute('title', 'You added this to favorites')
} );

favorites2.addEventListener('click', () => {
    favorites2.classList.toggle('heartsfull');
    favorites2.getAttribute('title');
    favorites2.setAttribute('title', 'You added this to favorites')
} );

favorites3.addEventListener('click', () => {
    favorites3.classList.toggle('heartsfull');
    favorites3.getAttribute('title');
    favorites3.setAttribute('title', 'You added this to favorites')
} );


// the next block of code is the price increment on multi-selection / price decrement and eventually delete of the item

const cartItems = document.querySelectorAll('.cart-item-container');

console.log(cartItems)

cartItems.forEach((item) => {
    const unitPriceElement = item.querySelector('.unit-price');
    const quantityElement = item.querySelector('.quantity-change');
    const incrementBtn = item.querySelector('.increment');
    const decrementBtn = item.querySelector('.decrement');
    const removeBtn = item.querySelector('.remove-btn');

    let quantity = parseInt(quantityElement.textContent);
    let unitPrice = parseInt(unitPriceElement.textContent.replace('$', ''));

    const incrementTotal = () => {
        const total = document.querySelector('.total-amount');
        const totalAmount = parseInt(total.textContent);
        total.textContent = totalAmount + unitPrice;
    };

    const decrementTotal = () => {
        const total = document.querySelector('.total-amount');
        const totalAmount = parseInt(total.textContent);
        total.textContent = totalAmount - unitPrice;
    }

    incrementBtn.addEventListener('click', () => {
        console.log("working");
        quantity += 1;
        quantityElement.textContent = quantity;
        incrementTotal(); 
    })

    decrementBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity -= 1;
            quantityElement.textContent = quantity;
            decrementTotal();
        }        
    })

    removeBtn.addEventListener('click', () => {
        const totalItem = unitPrice * quantity;
        const total = document.querySelector('.total-amount');
        const totalAmount = parseInt(total.textContent);
        total.textContent = totalAmount - totalItem;
        item.remove();
    })

});