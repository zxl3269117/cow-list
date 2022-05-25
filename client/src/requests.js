// this file defines all requests made by server
const axios = require('axios').default;

// GET all cows
var requests = {
  getAllCows: (callback) => {
    axios.get('/api/cows')
      .then(response => {
        // when there is no cows on the server
        if (!response.data.length) {
          callback(['create a cow!'])
        }
        console.log('response data', response.data);
        callback(response.data);
      })
      .catch( err => console.log(err) );
  },

  createCow: (cow, callback) => {
    // cow is from the <Description /> form text field
    axios.post('/api/cows', {
      name: cow.name,
      description: cow.description
    })
      .then(data => {
        callback(data);
      })
      .catch( err => console.log(err));
  }
}

export default requests;