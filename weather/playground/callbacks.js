var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Name'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(13, (user) => {
  console.log(user);
});
