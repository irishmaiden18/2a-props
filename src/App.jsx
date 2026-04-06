import Greeting from "./components/Greeting"
import GreetingObject from "./components/GreetingObject"
import ProfileCard from "./components/ProfileCard";
import ProfileCardObject from "./components/ProfileCardObject";

function App() {

  const newName = "Nora";
  const newAge = 35;

  const personObject = {
    name: "Sheldon",
    age: 25,
    isGraduated: true
  }

  const personObject2 = {
    name: "Danny",
    age: 35,
    isGraduated: false
  }

  const personObject3 = {
    name: "Dan",
    email: "dan.lanier14@gmail.com",
    experience: 12,
    role: "Product Manager",
    isActive: true
  }

  const personObject4 = {
    name: "Laura",
    email: "LauraPohl19@gmail.com",
    experience: 1,
    role: "Web Developer",
    isActive: false
  }
  
  return (
    <>
      <h1>2A - Props</h1>
      {/* Props (short for properties) - data that gets passed to our components as key-value pairs */}
      {/* Allows our React components to display data dynamically based on the props being passed in */}
      <Greeting name="Jenny" age={22} isGraduated={true}/>
      <Greeting name="Brad" age={24} isGraduated={false}/>
      <Greeting name="Tucker" age={20} />
      <Greeting name={newName} age={newAge} isGraduated={true}/>

      {/* use {...object to pass in the individual properties of an object into a component as separate props} */}
      {/* {...personObject2} is the same as name={personObject2.name} age ={personObject2.age} etc. */}
      {/* only works for objects */}
      <Greeting {...personObject2} />

      <h1>Objects</h1>
      {/* <Greeting name={personObject.name} age={personObject.age} isGraduated={personObject.isGraduated} /> */}
      <GreetingObject person={personObject}/>
      <GreetingObject person={{ name: "Lance", age: 32, isGraduated: false }}/>

      {/* doesn't work, GreetingObject is looking for a person prop. we're passing in props for name, age, and isGraduated (not a person object) */}
      {/* <GreetingObject {...personObject2} /> */}

      <h1>Exercise</h1>
      <h2>1.</h2>
      <ProfileCard 
        name="Baxter" 
        email="Baxman317@gmail.com" 
        experience={16} 
        role="Chief Cuddler" 
        isActive={true} />

      <ProfileCard 
        name="Maggie" 
        email="MissMaggsAlot@gmail.com" 
        experience={15} 
        role="Chief Mischief Doer" 
        isActive={false} />

      <ProfileCard 
        name="Mouse" 
        email="MouseMischievous@gmail.com" 
        experience={14} 
        role="Chief Sleeper" 
        isActive={false} />

      <h2>2.</h2>
      <ProfileCardObject person={personObject3} />
      <ProfileCardObject person={personObject4} />
    </>
  )
}

/*
Create a ProfileCard component and ProfileCardObject component

1. ProfileCard
-create a ProfileCard component that takes in name, email, experience (in years), role, and isActive as props and then displays them to the user
- Render at least 3 different ProfileCards

2. ProfileCardObject
-create another component that takes in the same information, except as an object
Render at least 2 different ProfileCardObjects
*/

export default App

//445
