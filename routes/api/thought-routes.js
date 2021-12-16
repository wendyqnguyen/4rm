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
  .post(addThought)
  .get(getAllThoughts);

// /api/thoughts/<thoughtId>
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);


  // /api/thoughts/<thoughtId>/reactions/<reactionID>
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

// /api/thoughts/<thoughtId>/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

module.exports = router;