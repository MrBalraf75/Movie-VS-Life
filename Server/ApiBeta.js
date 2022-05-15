var api_key = "516adf1e1567058f8ecbf30bf2eb9378";
const https = require('https');

console.log(CallApi());

function CallApi() {
    https.get('https://api.themoviedb.org/3/movie/popular?api_key=' + api_key, res => {
    let data = [];
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.statusCode);
    console.log('Date in Response header:', headerDate);
    console.log(res);

    res.on('data', chunk => {
        data.push(chunk);
    });

    
    res.on('end', () => {
        console.log('Response ended: ');
        const movie = JSON.parse(Buffer.concat(data).toString());
        return(movie);
    });
    }).on('error', err => {
    console.log('Error: ', err.message);
    });
}



var GetMovieSearchApi = function MovieSearchApi(title) {
  https.get('https://api.themoviedb.org/3/movie/popular?api_key=' + title, res => {
  let data = [];
  const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  console.log('Status Code:', res.statusCode);
  console.log('Date in Response header:', headerDate);
  // console.log(res);

  res.on('data', chunk => {
      data.push(chunk);
  });

  
  res.on('end', () => {
      console.log('Response ended: ');
      const movie = JSON.parse(Buffer.concat(data).toString());
      return(movie);
  });
  }).on('error', err => {
  console.log('Error: ', err.message);
  });
}