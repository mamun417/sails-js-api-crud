module.exports = async function (req, res) {

  let posts = await Post.find();

  return res.json(posts).status(200);
};
