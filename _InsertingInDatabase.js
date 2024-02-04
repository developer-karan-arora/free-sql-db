const mySqlConfig = require("./config/mysql");

const mysql = require("mysql");

const SqlHead = mysql.createConnection(mySqlConfig);
SqlHead.connect((error) => {
    if (error) {
        console.log("Unable to Connect");
        return;
    }

    console.log("connected ...")
    let myQuery = "INSERT INTO temp_name_add (name, address) VALUES ('Google Inc', 'NewYork')";
    SqlHead.query(myQuery, (error, result) => {
        if (error) { console.log("Failed", error);}
        else console.log("Added Row");
        return; 
    })
})