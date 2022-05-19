const http = require('http');
const path = require('path');
const fs = require('fs')

fs.readFile('./text.txt', 'utf8', (error, response) => {
    if (error) throw error;
    console.log(response)
})