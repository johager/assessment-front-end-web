const recommendation = document.getElementById('recommendation')

const restaurants = [
    {
        name: "Il Vicino",
        location: "Nob Hill, Albuquerque, NM",
        url: "https://ilvicino.com"
    },
    {
        name: "Los Arcos",
        location: "Truth Or Consequences, NM",
        url: "http://www.losarcossteakhouse.com"
    },
    {
        name: "Pino's Italian Kitchen & Bar",
        location: "Castle Pines, CO",
        url: "http://ladolcevitacastlepines.net/"
    },
]

function showRecommendation(event) {
    const index = Math.floor(Math.random() * restaurants.length)
    const restaurant = restaurants[index]
    let {name, location, url} = restaurant
    recommendation.style.display = 'block'
    const a = recommendation.querySelector('a')
    a.href = url
    a.textContent = name
    recommendation.querySelector('span').textContent = location
}

document.querySelector('button').addEventListener('click', showRecommendation)