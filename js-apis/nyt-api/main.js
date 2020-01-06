//https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=romney&facet_field=day_of_week&facet=true&begin_date=20120101&end_date=20191201&api-key=your-api-key

// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=your-api-key

//Yang 1007
//Warren 2174
// Biden 2147
//bernie 1915
//Buttigieg 1054

let key = '9SypLyiQacFWrmCBg0ycmq0uEEUqKgoh';
let baseURL = 'http://api.nytimes.com/svc/semantic/v2/concept';
///articlesearch.json?q={query}&fq={filter}

let query = 'joe+biden';
let queryFilter = '&fq=pub_year:2019';

let queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + query + queryFilter + '&api-key=' + key;

fetch(queryURL).then(function (result) {
    return result.json();
}).then(function (json) {
    console.log(json);
})



