let a=document.getElementById("quote")
const quotes=[
    "Try not to become a man of success, but rather become a man of value.",
    "The simpler you keep things, the more happiness you have.",
    "Don't let yesterday take up too much of today.",
    "అవకాశాలు కలిసివచ్చినప్పుడు వాటిని వినియోగించుకోండి.",
    "Your attitude, not your aptitude, determines your altitude."
]
function getQuote(){
    let singlequote=Math.floor(Math.random()*quotes.length)
    console.log(singlequote)
    a.textContent=quotes[singlequote]
}