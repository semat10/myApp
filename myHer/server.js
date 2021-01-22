const express = require('express')
const app = express();

// var path= require('path');
const port=process.env.PORT || 3000;
app.use(express.static('public'));


app.listen(port,function(){
console.log('listening',port)
}
)

