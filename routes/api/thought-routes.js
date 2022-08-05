const router = require("express").Router();

const {
    createThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    deleteThought,
    newReaction,
    deleteReaction, 
} = require("../../controllers/thoughts-controllers");

router.route("/").get(getAllThoughts);

router
    .route("/:id")
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

    router.route("/:userId").post(createThought);

    router.route("/:thoughtId/reactions").post(newReaction);
    router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

    module.exports = router;