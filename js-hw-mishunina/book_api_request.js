const API_URL = 'https://api.nytimes.com/svc/books/v3',
    BESTSELLERS_PATH = '/lists/overview.json',
    API_KEY = 'b25752e4a6414ae690b8c1f9c4073126',
    DATE = '2018-10-28';

let requestUrl = `${API_URL}${BESTSELLERS_PATH}?api-key=${API_KEY}&published_date=${DATE}`;

fetch(requestUrl)
    .then(res => res.json())
    .then(res => {
        res.results.lists.forEach(list => {
            console.log(`display_name: ${list.display_name}, books_count: ${list.books.length}`)
        })
    })
    .catch(err => console.error(err));