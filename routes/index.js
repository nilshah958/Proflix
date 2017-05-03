/*
 * GET home page. This file is used to route all the request to various other channels based on the request type.
 */


//admin Home

exports.adminHome = function(req, res) {
	
	res.render('AdminHome.html');
	

};

exports.adminDisplaySimpleMembers=function(req,res)
{
var adminDiaplaySimpleMembers= require('../database/admin');
adminDiaplaySimpleMembers.retrieveSimpleMembers(req,res);

};


exports.adminDeleteSimpleCustomer=function(req,res)
{
var adminDeleteSimpleCustomer=require('../database/admin');
adminDeleteSimpleCustomer.removeSimpleMember(req,res);

};

exports.adminDisplayPremiumMembers=function(req,res)
{
var adminDisplayPremiumMembers= require('../database/admin');
adminDisplayPremiumMembers.retrievePremiumMembers(req,res);

};


exports.adminDeletePremiumCustomer=function(req,res)
{
var adminDeletePremiumCustomer=require('../database/admin');
adminDeletePremiumCustomer.removePremiumMember(req,res);

};

exports.adminDisplayPersons=function(req,res)
{
var adminDisplayPersons=require('../database/admin');
adminDisplayPersons.adminDisplayPersons(req,res);

};

exports.adminSearchPersons=function(req,res)
{
	console.log("about to search ");
	var a = JSON.stringify(req.body);
	console.log("the cart id --------:" + a);
	var adminSearchPersons=require('../database/admin');
	adminSearchPersons.adminSearchPersons(req,res);

};

exports.makeNewMovie=function(req,res)
{
res.render('MakeNewMovie.html');
};


exports.addNewMovie=function(req,res)
{
	console.log("about to add the new movie");
	var a = JSON.stringify(req.body);
	var addNewMovie=require('../database/admin');
	addNewMovie.addNewMovie(req,res);
};

exports.getAllMovie=function(req,res)
{
	console.log("about to get all the movies ");
	var a = JSON.stringify(req.body);
	var getAllMovie=require('../database/admin');
	getAllMovie.getAllMovie(req,res);

};

exports.adminDeleteMovie=function(req,res)
{
	console.log("about to get all the movies ");
	var a = JSON.stringify(req.body);
	var adminDeleteMovie=require('../database/admin');
	adminDeleteMovie.adminDeleteMovie(req,res);

};

exports.updateMovie=function(req,res)
{
	console.log("about to get all the movies ");
	var a = JSON.stringify(req.body);
	console.log(a);
	var adminupdateMovie=require('../database/admin');
	adminupdateMovie.adminupdateMovie(req,res);

};








//Misc

exports.displayMovie =function(req,res)
{
	console.log("Request for getting all the movies");
	var a = JSON.stringify(req.body);
	console.log(a);
	var displayMovie=require('../database/PremiumMember');
	displayMovie.displayMovie(req,res);

};

exports.getMovies =function(req,res)
{
	console.log("*****************Userfor movies********************");
	var a = JSON.stringify(req.body);
	console.log(a);
	var displayMovie=require('../database/memberLogin');
	displayMovie.displayMovie(req,res);

};

exports.editPersonalInfo =function(req,res)
{
	console.log("Request for editing the personal Info");

	var a = JSON.stringify(req.body);
	console.log(a);
	var editPersonalInfo=require('../database/memberLogin');
	editPersonalInfo.editPersonalInfo(req,res);
};


exports.updatePersonalInfo =function(req,res)
{
	console.log("I am going to edit the info ");
	var a = JSON.stringify(req.body);
	console.log(a);
	var updatePersonalInfo=require('../database/memberLogin');
	updatePersonalInfo.updatePersonalInfo(req,res);

};

exports.issueMovie=function(req,res){
	console.log("Going to issue the movie ");
	var a = JSON.stringify(req.body);
	console.log(a);
	var issueMovie=require('../database/memberLogin');
	issueMovie.issueMovie(req,res);
};


exports.viewCart=function(req,res)
{
	console.log("The view cart");
	var a = JSON.stringify(req.body);
	console.log(a);
	var viewCart=require('../database/memberLogin');
	viewCart.viewCart(req,res);
};

exports.proceedToPayment=function(req,res)
{
	console.log("Gooing for payment");
	var proceedToPayment=require('../database/memberLogin');
	proceedToPayment.proceedToPayment(req,res);
};


exports.submitPayment=function(req,res)
{
	var submitPayment=require('../database/memberLogin');
	submitPayment.submitPayment(req,res);
};


exports.viewOrderHistory=function(req,res)
{
	var viewOrderHistory=require('../database/memberLogin');
	viewOrderHistory.viewOrderHistory(req,res);
};

exports.forgotPassword=function(req,res)
{
	res.render('ForgotPassword.html');
};

exports.UpgradePay=function(req,res)
{
	res.render('upgradePay.html');
};

exports.UpgradeToPremium=function(req,res)
{
	var upgradeToPremium=require('../database/memberLogin');
	upgradeToPremium.UpgradeToPremium(req,res);
};

//Premium Member Home
exports.premiumMemberHome=function(req,res)
{
	res.render('PremiumMember.html');
};

exports.logout = function(req, res) {
	console.log("Destroying the sesison !! Bye :)");
	req.session.destroy();
	res.render("Sign.html");

};

exports.deleteCartMovie = function(req, res) {
	console.log("Deleting from cart");
	var deleteCartMovie=require('../database/memberLogin');
	deleteCartMovie.deleteCartMovie(req,res);
	
};

exports.signUpCheck = function(request, response) {
	console.log("Received the info for the signup !!");
	var a = JSON.stringify(request.body);
	console.log(a);
	var member = require('../database/memberLogin');
	member.signUp(request, response);

};

exports.signUp = function(req, res) {
	console.log(" redirecting the url");
	res.render('SignUp.html');

};

exports.SignIn = function(req,res) {
	console.log("Signing in get the useename and pwd!!");
	var a = JSON.stringify(req.body);
	console.log(JSON.stringify(req.body));
	var member = require('../database/memberLogin');
	member.verify(req,res);
};

exports.setNewPassword=function(req,res)
{
	var setNewPassword = require('../database/memberLogin');
	setNewPassword.setNewPassword(req,res);
};

exports.sign = function(req, res) {

	res.render('Sign.html');
};

exports.index = function(req, res) {

	var catalog = [ {
		"catalogid" : 1,
		"catalogName" : "Electronics",
		"url" : "/img/Electronics.jpg"
	}, {
		"catalogid" : 2,
		"catalogName" : "Books",
		"url" : "/img/book.jpg"
	}, {
		"catalogid" : 3,
		"catalogName" : "Tools&Home_Improvement",
		"url" : "/img/toolshome.jpg"
	}, {
		"catalogid" : 4,
		"catalogName" : "Movies,Music&Games",
		"url" : "/img/gamesmusic.jpg"
	} ];

	var date1 = new Date(req.session.lastlogin);
	console.log("The date ------------------------------>>" + date1);
	console.log("The session id is ----------->> " + req.sessionID);
	var first = req.session.firstName;
	res.render('Catalog.html', {
		title : "Catalog !!",
		catalog : catalog,
		logindate : date1,
		firstName : first
	});

};

exports.memberHome=function(req,res)
{
	console.log('opening movies home page');
	res.render('MemberHome.html');
}

exports.returnIssuedMovie=function(req,res)
{
	console.log('returning movies');
	res.render('ReturnMovies.html');
}