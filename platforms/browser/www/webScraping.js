
const request = require('request');
const cheerio = require('cheerio');

request('http://timeout.zbw.ch/', (error,response,html) =>{

    if(!error && response.statusCode == 200){
    const $ = cheerio.load(html);
    const siteHeading = $('#mo0');
    console.log(siteHeading.html());
    alert(siteHeading.html());
    }else if (error){
        console.log(error.html);
        console.log("fuck");
    }
});
