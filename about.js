console.log("hello world");

function handleImgMouseover(event) {
	alert(`You moused-over the cat image.\n\nCongratulations on finding an Easter egg.\n\nYou won't see this alert until you reload the page.`)
	event.target.removeEventListener('mouseover', handleImgMouseover)
}

function handleSubmit(evt) {
	evt.preventDefault();
	// console.log('form submit');
	alert('You submitted the form successfully.')
}

document.querySelector('img').addEventListener('mouseover', handleImgMouseover)

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);