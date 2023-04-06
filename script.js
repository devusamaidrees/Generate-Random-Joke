let jokes = [
    {
        "category": "Pun",
        "type": "single",
        "joke": "I'm reading a book on anti-gravity. It's impossible to put down!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 163,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Dad Joke",
        "type": "single",
        "joke": "Why don't eggs tell jokes? They'd crack each other up!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 164,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Animal",
        "type": "single",
        "joke": "Why don't oysters give to charity? Because they're shellfish!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 165,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Knock-Knock",
        "type": "single",
        "joke": "Knock, knock. Who's there? Alpaca who? Alpaca the suitcase, you load up the car!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 166,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Tech",
        "type": "single",
        "joke": "Why do programmers prefer dark mode? Because light attracts bugs!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 167,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Good",
        "type": "single",
        "joke": "Why did the tomato turn red? Because it saw the salad dressing!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 163,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Good",
        "type": "single",
        "joke": "What did one toilet say to the other toilet? You look a bit flushed.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 164,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Good",
        "type": "single",
        "joke": "What do you call a lazy kangaroo? A pouch potato!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 165,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Animal",
        "type": "single",
        "joke": "Why do cows have hooves instead of feet? Because they lactose.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 367,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Animal",
        "type": "single",
        "joke": "Why did the chicken cross the playground? To get to the other slide.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 365,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Animal",
        "type": "single",
        "joke": "What do you call a sheep that can sing? A ewe-nique.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 370,
        "safe": true,
        "lang": "en"
    }

]
let x = function () {
    let a = Math.floor(Math.random() * jokes.length - 1)
    first.innerHTML = jokes[a].joke
}
btn_id.addEventListener("click", x)
