const moment = require("moment");



const sortProduct = input => {
	var output = {};

  	input.map( item => {
  		var dateMoment = moment(item.dateAdded);
  		if(dateMoment.year() > 2000){
  			var newItem = { name: item.name, 
  							year: dateMoment.year(), 
  							monthOfYear: dateMoment.month()+1, 
  							quantity: item.quantity };
  			var itemName = item.name;
        if( output[itemName] === undefined){output[itemName] = []}
        output[itemName].push(newItem)
        output[itemName].sort(function(a, b) {
           return a.year;
        });
  		}
  	});

  console.log(output);
  return output; 
};

module.exports = {
  title: "Exercise 1",
  run: sortProduct
};
