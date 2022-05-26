// this file defines all requests made by server
const axios = require('axios').default;

// GET all cows
var requests = {
  getAllCows: (callback) => {
    axios.get('/api/cows')
      .then(response => {
        callback(response.data);
      })
      .catch( err => console.log(err) );
  },

  createCow: (cow, callback) => {
    axios.post('/api/cows', {
      name: cow.name,
      description: cow.description
    })
      .then(response => {
        callback(response.data);
      })
      .catch( err => console.log(err));
  }
}

export default requests;