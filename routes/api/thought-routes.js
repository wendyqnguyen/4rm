const {
    getAllThoughts,
    getThoughtsById,
    addThought,
    removeThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

  const router = require('express').Router();

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);


// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeThought);

  // /api/thoughts/<userId>/<thoughtId>/<reactionID>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;