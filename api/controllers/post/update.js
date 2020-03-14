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

  let post = await Post.updateOne({id: req.param('id')})
    .set({
      title: title,
      description: description
    });

  return res.json(post).status(200);
};
