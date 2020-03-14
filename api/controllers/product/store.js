module.exports = async function (req, res) {

  let title = req.param('title');
  let description = req.param('title');

  let createdProduct = await Post.create({
    title: title
  }).fetch();

  return res.json(createdProduct).status(200);
};
