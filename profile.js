
const doText = document.getElementById('doText')

function showFaveColor(event) {
    alert('My favorite color is green.')
}

function showFavePlace(event) {
    alert('My favorite place is Wonder Lake in Denali National Park.')
}

function showFaveRitual(event) {
    alert('I perform a short exercise routine every morning.')
}

function showDoText(event) {
    doText.textContent = `${event.target.value}...`
    setTimeout(hideDoText, 750)
    doText.style.display = 'inline'
}

function hideDoText(event) {
    doText.style.display = 'none'
}

document.getElementById('color').addEventListener('click', showFaveColor)

document.getElementById('place').addEventListener('click', showFavePlace)

document.getElementById('ritual').addEventListener('click', showFaveRitual)

for (let doBtn of document.querySelectorAll('.do')) {
    doBtn.addEventListener('click', showDoText)
}