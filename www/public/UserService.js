angular.module('myService',[])
.service('userService',function($http) {
	var uid=1;
    var users=[]

    this.showUsers=function() {
        return users;
    }

    this.addUser=function(user) {
     if(user.id==null) {
	    user.id=uid++;
        $http.post('/posttodo',user).success(function(data){
            users.push(data);
        })
        
		 
    } else {
	for(i in users) {
		if(users[i].id==user.id) {
	    users[i]=user;
		}}}
    }


    this.updateUser=function(id) {
    for(i in users) {
		if(users[i].id==id) {
            return users[i];
    }}}

    this.deleteUser=function(id) {
        for(i in users) {
			if(users[i].id==id) {
				users.splice(i,1);
     }}}
});