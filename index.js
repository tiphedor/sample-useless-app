const express = require('express')

const app = express()

app.get('/', (req, res) => {
	return res.status(200)
		.set('Content-type', 'text/html')
		.end('<strong>This is the fowdqpwdnqwdqjw branch</strong>')
})

app.listen(8080)
console.log('Application listening on port 8080.')
