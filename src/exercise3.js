const _ = require("lodash");

const meeteek = input => { 
	var output = {}
 	input.map(value => {
 		var newItem = { firstname: value.firstname, 
  						commonInterests: []
  					};
	  	var name = value.firstname;
	  	if( output[name] === undefined){output[name] = []}
	  	output[name].push(newItem);
	  	console.log(output);
	  	return output; // pas eu le temps de finir :,(
  });
};

module.exports = {
  title: "Exercise 3",
  run: meeteek
};
