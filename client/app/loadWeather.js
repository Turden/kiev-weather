import superagent from 'superagent';

export default weatherReceived => {
	superagent
	  .get('/weather')
	  .end((err, res) => {
	    if (err) {
	      document.body.innerHTML = err.toString();
	    } else {
	      weatherReceived(res.body);
	    }
	  });
}
