var express = require('express');

// define the routes
var router = express.Router();

var todoItems = [
    {id: 1, desc: "Jesu"},
    {id: 2, desc: "Marya"},
    {id: 3, desc: "Otep"}
];

router.get('/', function(req, res){
    // load data from DB here
    res.render('index', {
        title: "Express App",
        items: todoItems
    });    
});
            
router.post('/add', function (req, res) {
      var newItem = req.body.newItem;
      
      todoItems.push({
            id: todoItems.length + 1,
            desc: newItem            
        });        
            
      res.redirect('/');
});

module.exports = router;