
module.exports.routes = {

  '/': { view: 'pages/homepage' },
  'GET /posts': 'post/list',
  'POST /post/store': 'post/store',
  'POST /post/update/:id?': 'post/update',
  'DELETE /post/destroy/:id?': 'post/delete'
};
