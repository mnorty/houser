module.exports = {

  get: async (req, res, next) => {
    console.log('made it')
    const dbInstance = await req.app.get('db');

    dbInstance.get_house()
      .then(houses => res.status(200).send(houses))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
        console.log(err)
      });
    },
  add: (req,res,next) => {
    const dbInstance = req.app.get('db');
    const {name,address,city,state,zip} = req.body;

    dbInstance.add_house([name,address,city,state,zip])
    .then( () => res.sendStatus(200) )
    .catch( err => {
      res.status(500).send({errorMessage: "Oops that didn't work"});
      console.log(err)
    } )
  },

  delete:(req,res,next) => {
    const dbInstance = req.app.get('db');
    const {id} = req.params;//this isnt picking up the number I want

    dbInstance.delete_house(5)//this needs to be the Switching with the display
    .then( () => res.sendStatus(200))
    .catch( err => {
      res.status(500).send({errorMessage: "Oops that didn't work"});
      console.log(err)
    } );
  }
}