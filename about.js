console.log("hello world");

function handleImgMouseover(event) {
	alert('You moused-over the cat image.\n\nCongratulations on finding an Easter egg.')

}

function handleSubmit(evt) {
	evt.preventDefault();
	// console.log('form submit');
	alert('You submitted the form successfully.')
}

document.querySelector('img').addEventListener('mouseover', handleImgMouseover)

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);