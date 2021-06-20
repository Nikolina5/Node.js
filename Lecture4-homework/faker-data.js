var faker = require('faker');

var i = 1;

do{
    var myName = faker.name.findName(); 
    var myEmail = faker.internet.email(); 
    var myAdress = faker.address.streetName();
    var myData = faker.datatype.datetime();
    var myTransaction = faker.finance.transactionType();
    i++;
    
    console.log(myName);
    console.log(myEmail);
    console.log(myAdress);
    console.log(myData);
    console.log(myTransaction);
}while(i<=20)

