const fetch = require('node-fetch'),
    apiUrl = 'https://api.nytimes.com/svc/books/v3',
    bestSellersPath = '/lists/overview.json',
    apiKey = 'b25752e4a6414ae690b8c1f9c4073126',
    publishedDate = '2018-10-28',
    url = `${apiUrl}${bestSellersPath}?api-key=${apiKey}&published_date=${publishedDate}`;
    
fetch(url)
    .then(res => res.json())
    .then(res => {
        res.results.lists.forEach(list => {
            console.log(`display_name: ${list.display_name}, books_count: ${list.books.length}`)
        })
    })
    .catch(err => console.error(err));