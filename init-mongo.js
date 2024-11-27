db.createUser({
  user: 'appuser',
  pwd: 'apppassword',
  roles: [
    { role: 'readWrite', db: 'mydatabase' }  // Assign readWrite role to the specific database
  ]
});

