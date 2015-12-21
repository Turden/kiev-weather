import superagent from 'superagent';

export default (weatherReceived, failed) => {
	superagent
	  .get('/weather')
	  .end((err, res) => {
	    if (err) {
	    	failed(err);
	    } else {
	      weatherReceived(res.body);
	    }
	  });
};
