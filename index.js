//An array of objects
const data = [
    //The first object starts here
    {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "http://swapi.dev/api/planets/1/",
      "films": [
          "http://swapi.dev/api/films/1/",
          "http://swapi.dev/api/films/2/",
          "http://swapi.dev/api/films/3/",
          "http://swapi.dev/api/films/6/"
      ],
      "species": [],
      "vehicles": [
          "http://swapi.dev/api/vehicles/14/",
          "http://swapi.dev/api/vehicles/30/"
      ],
      "starships": [
          "http://swapi.dev/api/starships/12/",
          "http://swapi.dev/api/starships/22/"
      ],
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-20T21:17:56.891000Z",
      "url": "http://swapi.dev/api/people/1/"
  },
  //The first object ends here
  //The second object starts here
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "blue",
      "birth_year": "112BBY",
      "gender": "n/a",
      "homeworld": "http://swapi.dev/api/planets/1/",
      "films": [
          "http://swapi.dev/api/films/1/",
          "http://swapi.dev/api/films/2/",
          "http://swapi.dev/api/films/3/",
          "http://swapi.dev/api/films/4/",
          "http://swapi.dev/api/films/5/",
          "http://swapi.dev/api/films/6/"
      ],
      "species": [
          "http://swapi.dev/api/species/2/"
      ],
      "vehicles": [],
      "starships": [],
      "created": "2014-12-10T15:10:51.357000Z",
      "edited": "2014-12-20T21:17:50.309000Z",
      "url": "http://swapi.dev/api/people/2/"
  },
  //The second object ends here
  //The third object starts here
  {
      "name": "R2-D2",
      "height": "96",
      "mass": "32",
      "hair_color": "n/a",
      "skin_color": "white, blue",
      "eye_color": "red",
      "birth_year": "33BBY",
      "gender": "n/a",
      "homeworld": "http://swapi.dev/api/planets/8/",
      "films": [
          "http://swapi.dev/api/films/1/",
          "http://swapi.dev/api/films/2/",
          "http://swapi.dev/api/films/3/",
          "http://swapi.dev/api/films/4/",
          "http://swapi.dev/api/films/5/",
          "http://swapi.dev/api/films/6/"
      ],
      "species": [
          "http://swapi.dev/api/species/2/"
      ],
      "vehicles": [],
      "starships": [],
      "created": "2014-12-10T15:11:50.376000Z",
      "edited": "2014-12-20T21:17:50.311000Z",
      "url": "http://swapi.dev/api/people/3/"
  },
  //The third object ends here
  //The fourth object starts here
  {
      "name": "Darth Vader",
      "height": "202",
      "mass": "136",
      "hair_color": "none",
      "skin_color": "white",
      "eye_color": "yellow",
      "birth_year": "41.9BBY",
      "gender": "male",
      "homeworld": "http://swapi.dev/api/planets/1/",
      "films": [
          "http://swapi.dev/api/films/1/",
          "http://swapi.dev/api/films/2/",
          "http://swapi.dev/api/films/3/",
          "http://swapi.dev/api/films/6/"
      ],
      "species": [],
      "vehicles": [],
      "starships": [
          "http://swapi.dev/api/starships/13/",
      "http://swapi.dev/api/starships/14/",
      "http://swapi.dev/api/starships/15/"
      ],
      "created": "2014-12-10T15:18:20.704000Z",
      "edited": "2014-12-20T21:17:50.313000Z",
      "url": "http://swapi.dev/api/people/4/"
  }
  
  ];
  
  //A single object
  const employeeJoe = {
    fullname: "Joe Brown",
    salary: 387992.44,
    address: "Joe's address"
  };
  //console.log(employeeJoe.fullname);
  
  //An array of items (items could be strings, integers or floating values)
  //An array of strings
  const employeenames = ["Joe", "Brown", "James", "Smith"];
  //1. They want a function that takes two arguements (people, name) which displays the height, gender, mass, hair color, skin color and eye color of the name of that person 
  //2. They want to know how many starships a person has
  //3. They want to know how many vehicles a person rides.
  
  
  function getHeightGenderMassHairSkinAndEyeColor(people, name)
  {
    let personObject = {};
    const person = people.find(person=>person.name == name);
    personObject["name"] = person["name"];
    personObject["height"] = person["height"];
    personObject["gender"] = person["gender"];
    personObject["mass"] = person["mass"];
    personObject["hair_color"] = person["hair_color"];
    personObject["skin_color"] = person["skin_color"];
    return personObject;
  }
  
  function getStarshipCount(people, name)
  {
    const person = people.find(person=>person.name == name);
    return person["starships"].length;
  }
  
  function getPeopleWithBlueEyes(people)
  {
   let namesOfPeopleWithBlueEyes = [];
   let peopleWithBlueEyes = people.filter(person => person["eye_color"] == "blue");
   peopleWithBlueEyes.forEach(person=>{
     namesOfPeopleWithBlueEyes.push(person["name"])
   });
   return namesOfPeopleWithBlueEyes;
  }
  
  console.log("Names of people with blue eyes:");
  console.log(getPeopleWithBlueEyes(data));
  console.log("-------------------------------------");
  console.log("getHeightGenderMassHairSkinAndEyeColor");
  console.log(getHeightGenderMassHairSkinAndEyeColor(data, "Luke Skywalker"));
  console.log(getHeightGenderMassHairSkinAndEyeColor(data, "Darth Vader"));
  console.log("-------------------------------------");
  console.log("getStarshipCount");
  const lukeStartships = getStarshipCount(data, "Luke Skywalker");
  console.log("How many start ships has Luke Skywalker : "+ lukeStartships);
  console.log("How many start ships has Darth Vader : "+getStarshipCount(data, "Darth Vader"));
  console.log("-------------------------------------");
