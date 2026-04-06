/*
we can access props in our component through the parameters
conventionally called (props), but you can name them whatever you want
inside our component, props is treated as an object that we can use to access the different key-value pairs passed into the component (props.key to access value)
*/
// const Greeting = (props) => {
    
//   return (
//     <>
//         {/* props.name = props . whatever we called our props in app.js */}
//         {/* accessing the name prop being passed in */}
//         <h2>Hello {props.name}!</h2>
//         <h3>Age: {props.age}</h3>
//         {/* if graduated display: "Congrats on Graduating" else, display "Go back to school!"*/}
//         {/* {props.isGraduated ? "Congrats on Graduating" : "Go back to school!"} */}
//         {props.isGraduated ? (
//             <p>Congrats on Graduating!</p>
//         ) : (
//             <p>Go back to school!!</p>
//         )}
//     </>
//   )
// }

//OR:
// you can destructure any props!! not just objects
// {name, age, isGraduated} are all part of the props object (NOT multiple parameters!)
const Greeting = ({name, age, isGraduated}) => {
    
  return (
    <>
        <h2>Hello {name}!</h2>
        <h3>Age: {age}</h3>
        {isGraduated ? (
            <p>Congrats on Graduating!</p>
        ) : (
            <p>Go back to school!!</p>
        )}
    </>
  )
}

export default Greeting