module.exports = function(app){
  app.get('/', (req, res) => {
    console.log('Hello, World!');
    res.send('Hello, World!');

    res.render('index', {
      head: {
        title: 'Cats and Coffee'
      },
      content: {
        title: '',
        description: 'description'
      }
    });
  });

  app.post('/', (req, res, next) => {
    console.log(req.body);
    next();
  });
};
