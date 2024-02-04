var mysql = require("mysql")
var mySqlConfig = require("./config/mysql")

// console.log(mySqlConfig);
var mysqlConnector = mysql.createConnection(mySqlConfig)
mysqlConnector.connect((err) => {
    if (err) return console.log("Unable To connect");
    else console.log("Well Done")

    var myQuery = "CREATE TABLE temp_name_add (name VARCHAR(255), address VARCHAR(255))";
    mysqlConnector.query(myQuery, function (err, result) {
        if (err) throw err; 
        console.log("Table created");
        console.log(result);
    })
});