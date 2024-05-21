const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
  person.fullName.call(person1);

  //apply

  const persons = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person3 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  persons.fullName.apply(person3, ["Oslo", "Norway"]);

//bind
  const persn = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = persn.fullName.bind(member);
  fullName()

  //call() method

 

const person={

  fullName:function(){

      return this.firstName+ " " + this.lastName;

  }

}

const person1={

  firstName:"Entri",

  lastName:"M4-M5"

}



const person2={

  firstName:"FSD",

  lastName:"MERN"

}



person.fullName.call(person1);





//apply() method



const Person ={

fullName:function(city,country){

  return this.firstName+" " + this.lastName+ "," + city+","+country;

}

}

const person1={

  firstName:"FSD",

  lastName:"MERN"

}

Person.fullName.apply(person1,["Kerala","India"]);



//bind() method

const Person={

  firstName:"FSD",

  lastName:"MERN",

  fullName: function(){

      return this.firstName+" "+this.lastName;

  }

}



const member={

  firstName:"Entri",

  lastName:"M4-M5"

}



let fullName=Person.fullName.bind(member);