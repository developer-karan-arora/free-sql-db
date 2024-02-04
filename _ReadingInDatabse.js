const mySqlConfig = require("./config/mysql");

const mysql = require("mysql")
const fileSys = require("fs");

const quit = () => process.exit();
const print = (msg) => console.log(msg);
const printQuit = (msg) => {
    print(msg);
    quit();
}
let myQuery = "SELECT name , address FROM temp_name_add";

const SqlHead = mysql.createConnection(mySqlConfig);
SqlHead.connect((error) => {
    if (error) return print("Unable To Connect");

    SqlHead.query(myQuery, (error, result) => {
        if (error) printQuit(error);
        else {
            for(let i=0;i<result.length;i++){
                console.log(result[i]["name"],"->",result[i]["address"]);
            }
            quit();
        }
    })
})