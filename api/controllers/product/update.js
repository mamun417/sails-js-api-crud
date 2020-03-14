module.exports = async function (req, res) {

  let title = req.param('title');
  let description = req.param('title');

  let post = await Post.updateOne({id: req.param('id')})
    .set({
      title: title,
      description: description
    });

  return res.json(post).status(200);
};
