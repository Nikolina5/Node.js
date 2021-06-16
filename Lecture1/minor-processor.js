module.exports = (people,age) => {

  let counter=0;

  people.forEach( person=> {
      if(person.age<age) {
          counter++;
          console.log(`Name: ${person.name}, Last Name: ${person.lastname}`);
      }
  });
  console.log("${counter} persons.");
};

    let counter=0;

    people.forEach( person=> {
        if(person.age<age) {
            counter++;
            console.log(`Name: ${person.name}, Last Name: ${person.lastname}`);
        }
    });
    console.log("${counter} persons.");

