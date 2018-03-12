let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
	// res.render('user', {title:'Express'});
	res.json({name:'liufeng', money:100000000})
});

module.exports = router;