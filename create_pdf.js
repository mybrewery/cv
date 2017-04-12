var wkhtmltopdf = require('wkhtmltopdf');
var fs = require('fs');

console.log(wkhtmltopdf);

wkhtmltopdf('index.html', { pageSize: 'letter' }, function(){
	console.log(arguments);
})
