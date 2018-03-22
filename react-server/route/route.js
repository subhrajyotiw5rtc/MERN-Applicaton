var task=require('../controller/controller.js');
module.exports = function(app) {
	app.get('/item',task.getUserData);
	app.post('/add/post',task.userDataSubmit);
	app.get('/edit/:id',task.userDataEdit);
	app.post('/update/:id',task.userDataUpdate);
	app.post('/delete/:id',task.userDataDelete);
}