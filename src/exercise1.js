const moment = require("moment");



const sortProduct = input => {
	var output = {};

  	input.reduce( item => {
  		var dateMoment = moment(item.dateAdded);
  		if(dateMoment.year() > 2000){
  			var newItem = { name: item.name, 
  							year: dateMoment.year(), 
  							monthOfYear: dateMoment.month()+1, 
  							quantity: item.quantity };
  			var itemName = item.name;
  			output.itemName.push(newItem);
  			console.log(output);
  		}
  	});

  console.log(output);
  return output; // ça devrait marcher 
};

module.exports = {
  title: "Exercise 1",
  run: sortProduct
};
