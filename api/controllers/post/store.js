module.exports = async function (req, res) {

  let errors = {};

  let title = req.param('title');
  let description = req.param('description');

  if (!title) {
    errors.title = 'title field is required';
  }

  if (!description) {
    errors.description = 'description field is required';
  }

  if (Object.keys(errors).length) {
    return res.json({errors: errors}).status(422);
  }

  let createdPost = await Post.create({
    title: title,
    description: description,
  }).fetch();

  return res.json(createdPost).status(200);
};
