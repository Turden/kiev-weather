import superagent from 'superagent';
import weatherReceived from './weatherReceived.js';

superagent
  .get('/weather')
  .end((err, res) => {
    if (err) {
      document.body.innerHTML = err.toString();
    } else {
      weatherReceived(res.body);
    }
  });
