Template.register.onCreated(function() {
	Meteor.subscribe("userProfiles");
});

Template.register.helpers({
  users: function() {
    return Meteor.users.find();
  }
})

Template.register.events({
  "click button.register" : function() {
    var permissions = {
      requestPermissions: 'profile',
      include_granted_scopes: true,
      loginStyle: 'popup'
    }

    Meteor.loginWithGoogle(permissions, function(err) {
      if (err) {
        console.log('Login: ' + err.message);
      } else {
        console.log('Google authorised');
      }
    });
  },
  "click .signout" : function(e) {
    e.preventDefault();
    Meteor.logout();
  }
});

Template.editTodolists.onCreated(function(){
	Meteor.subscribe("todolists");
});

Template.editTodolists.helpers({
	todolist: function() {
		return Todolists.findOne();
	}
});
