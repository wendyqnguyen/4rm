const {
    getAllThoughts,
    getThoughtById,
    addThought,
    removeThought,
    updateThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

  const router = require('express').Router();


// /api/thoughts
router
  .route('/')
  .get(getAllThoughts);

// /api/thoughts/<userId>
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .post(addThought)
  .put(updateThought);


// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeThought);

  // /api/thoughts/<userId>/<thoughtId>/<reactionID>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;