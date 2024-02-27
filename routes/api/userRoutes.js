const router = require('express').Router();

const {  
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
  } = require('../../controllers/userController');
  
  // /api/users
  router.route('/')
    .get(getAllUsers)
    .post(createUser);
  
  // /api/users/:id
  router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);
  
  // /api/users/:id/friends
  router.route('/:id/friends').post(addFriend);
  
  // /api/users/:id/assignments/:friendsId
  router.route('/:id/friends/:friendsId').delete(removeFriend);
  
  module.exports = router;
  