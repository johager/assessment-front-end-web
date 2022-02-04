
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

function showThis(event) {
    doText.textContent = `This...`
    showDoText(event)
}

function showThat(event) {
    doText.textContent = `That...`
    showDoText(event)
}

function hideDoText(event) {
    doText.style.display = 'none'
}

function showDoText(event) {
    setTimeout(hideDoText, 750)
    doText.style.display = 'inline'
}

document.getElementById('color').addEventListener('click', showFaveColor)

document.getElementById('place').addEventListener('click', showFavePlace)

document.getElementById('ritual').addEventListener('click', showFaveRitual)

document.getElementById('doThis').addEventListener('click', showThis)

document.getElementById('doThat').addEventListener('click', showThat)