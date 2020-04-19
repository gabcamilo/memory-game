document.addEventListener('DOMContentLoaded', () =>{
	//card options
	const cardArray = [
		{
			name: 'darklink',
			img: 'images/darklink.png'
		},
		{
			name: 'heart',
			img: 'images/heart.png'
		},
		{
			name: 'link',
			img: 'images/link.png'
		},
		{
			name: 'rupee',
			img: 'images/rupee.png'
		},
		{
			name: 'shield',
			img: 'images/shield.png'
		},
		{
			name: 'zelda',
			img: 'images/zelda.png'
		},
		{
			name: 'darklink',
			img: 'images/darklink.png'
		},
		{
			name: 'heart',
			img: 'images/heart.png'
		},
		{
			name: 'link',
			img: 'images/link.png'
		},
		{
			name: 'rupee',
			img: 'images/rupee.png'
		},
		{
			name: 'shield',
			img: 'images/shield.png'
		},
		{
			name: 'zelda',
			img: 'images/zelda.png'
		}
	];
	
	cardArray.sort(()=> 0.5 - Math.random())

	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');
	let cardsChosen = [];
	let cardsChosenId = [];
	cardsWon = [];

	//create your board
	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			let card = document.createElement('img');
			card.setAttribute('src', 'images/blank.png');
			card.classList.add('blank');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	function checkForMatch(){
		let cards = document.querySelectorAll('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];
		if(cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] !== cardsChosenId[1]){
			alert('You found a match!!!');
			cards[optionOneId].setAttribute('src', 'images/white.png')
			cards[optionOneId].classList.add('white');
			cards[optionOneId].classList.remove('blank');
			cards[optionTwoId].setAttribute('src', 'images/white.png')
			cards[optionTwoId].classList.add('white');
			cards[optionTwoId].classList.remove('blank');
			cardsWon.push(cardsChosen)
		}else{
			cards[optionOneId].setAttribute('src', 'images/blank.png')
			cards[optionTwoId].setAttribute('src', 'images/blank.png')
			alert('Sorry, try again.');
		}
		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length
		if(cardsWon.length === cardArray.length/2){
			resultDisplay.textContent = 'Congratulations! You found them all!'
		}
	}

	function flipCard (e) {
		let cardId = e.target.getAttribute('data-id');
		if((cardsChosen.length === 0 || (cardsChosen.length ===1) && cardsChosenId[0] !== cardId) && !e.target.classList.contains('white')){
			cardsChosen.push(cardArray[cardId].name);
			cardsChosenId.push(cardId);
			e.target.setAttribute('src', cardArray[cardId].img);
		}

		if (cardsChosen.length === 2){
			setTimeout(checkForMatch, 500)
		}
	}

	createBoard();
});