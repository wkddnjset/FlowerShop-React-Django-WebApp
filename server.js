const express = require('express');

const request = require('request'),
	  cheerio = require('cheerio'),
	  fs = require('fs');

const naver = {
	text:[],
	link:[]
};
request('https://www.naver.com/', function(err, res, body) {
	if(!err && res.statusCode === 200) {
		var $ = cheerio.load(body);
		$('.ah_k').each(function() {
			var text = $(this).text();
			console.log(text);
			naver.text.push(text);
			for(var i = 0; i < 10; i++) {
				naver.link[i] = 'https://search.naver.com/search.naver?where=nexearch&query='+naver.text[i];
			}
		});
		console.log(naver);
	}
})

const app = express();

app.get('/api/customers', (req,res) => {
	const customers = [
		{id: 0, text:naver.text[0], link:naver.link[0]},
		{id: 1, text:naver.text[1], link:naver.link[1]},
		{id: 2, text:naver.text[2], link:naver.link[2]},
		{id: 3, text:naver.text[3], link:naver.link[3]},
		{id: 4, text:naver.text[4], link:naver.link[4]},
		{id: 5, text:naver.text[5], link:naver.link[5]},
		{id: 6, text:naver.text[6], link:naver.link[6]},
		{id: 7, text:naver.text[7], link:naver.link[7]},
		{id: 8, text:naver.text[8], link:naver.link[8]},
		{id: 9, text:naver.text[9], link:naver.link[9]}
	];

	res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));