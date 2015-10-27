Todolists = new Mongo.Collection('todolists');
Todolists.allow({
  update: function(userID, doc) {
    return true;
  }
});

Todolists.attachSchema(new SimpleSchema({
  update: {
    type: Date
  },
  title: {
    type: String
  },
  tasks: {
    type: [String],
    label: "Tasks",
    optional: true,
    max: 50
  }
}));
