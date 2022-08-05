const router = require("express").Router();
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require("../../contollers/users-controllers");

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
