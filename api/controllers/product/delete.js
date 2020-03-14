module.exports = async function (req, res) {

  let id = req.param('id');

  let post = await Post.destroy({id: id});

  return res.json(post).status(200);
};
