var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host:"localhost",
	port:3306,
	user:"root",
	password:"",
	database:"Bamazon"
});

connection.connect(function(err){
	if(err) throw err;
	console.log("connected as id " + connection.threadId + "\n");
});


function callTableOne(){
	console.log("Heres all that we have for sale.\n");

	connection.query("SELECT * FROM item_table", function(err,res){
		if(err) throw err;
		console.log(res);
  askUser();
	});
};

callTableOne();





function askUser(){
	inquirer.prompt([{
		type:"input",
		message:"What ID of the item would you like to purchase?",
		name:"idOfItem"
	},{
		type:"input",
		message:"What is the quantity you would like to purchase?",
		name:"item_quantity"
	}])
	.then(function(inquirerResponse){
    if(inquirerResponse.idOfItem){
                var query = connection.query(
                    "UPDATE item_table SET ? WHERE ?",
                    [
                     {
    
                      stock_quantity: "stock_quantity - " + inquirerResponse.item_quantity
                    },
                    {
                         item_id: inquirerResponse.idOfItem
                      }
                      ],
                        //highest_bid: inquirerResponse.startingBidInput
                    function (error, results, fields){
                      if(error) throw error;
                     }
                     )
            }
              })
};


/*
function readArtist() {
  console.log("Selecting all artists...\n");
  //Reads and logs all the "columns" from the "music_list" table
  connection.query("SELECT * FROM music_list", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}


function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Find songs by artist",
        "Find all artists who appear more than once",
        "Find data within a specific range",
        "Search for a specific song"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "Find songs by artist":
          artistSearch();
          break;

        case "Find all artists who appear more than once":
          multiSearch();
          break;

        case "Find data within a specific range":
          rangeSearch();
          break;

        case "Search for a specific song":
          songSearch();
          break;
      }
    });
}



function songSearch() {
  inquirer
    .prompt({
      name: "song",
      type: "input",
      message: "What song would you like to look for?"
    })
    .then(function(answer) {
      console.log(answer.song);
      connection.query("SELECT * FROM top5000 WHERE ?", { song: answer.song }, function(err, res) {
        console.log(
          "Position: " +
            res[0].position +
            " || Song: " +
            res[0].song +
            " || Artist: " +
            res[0].artist +
            " || Year: " +
            res[0].year
        );
        runSearch();
      });
    });
}
*/