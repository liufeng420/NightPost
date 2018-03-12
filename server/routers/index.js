let express = require('express')
let router = express.Router();

router.use('/users', require('./user'));

router.get('/', function(req, res, next) {
	res.render('index.html', {title:'Express'});
	// res.send("hello express index");
});

module.exports = router;