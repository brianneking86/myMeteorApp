Todolists = new Mongo.Collection('todolists');
Todolists.allow({
  update: function(userID, doc) {
    return (userID && doc.owner === userID);
  }
});

Todolists.attachSchema(new SimpleSchema({
  owner: {
    type: String
  },
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
