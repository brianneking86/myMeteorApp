Template.register.onCreated(function() {
  
})

Template.register.helpers({

})

Template.register.events({

});

Template.addTodolists.onCreated(function(){
  Meteor.subscribe('todolists');
});

Template.addTodolists.helpers({
  todolist: function(){
    return Todolists.findOne();
  }
})
