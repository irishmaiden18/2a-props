// const GreetingObject = (props) => {
//   return (
//     <>
//         <h2>Hello {props.person.name}!</h2>
//         <h3>Age: {props.person.age}</h3>
//         {props.person.isGraduated ? (
//             <p>Congrats on Graduating!</p>
//         ) : (
//             <p>Go back to school!!</p>
//         )}
//     </>
//   );
// };

// export default GreetingObject;

//OR:

// destructuring
// instead of using props, we put the keys that we want to access inside {} in order to access the data we need more directly
// {person} gives us access to the person prop (person={}) that was passed into our GreetingObject component
const GreetingObject = ({person}) => {
  return (
    <>
        <h2>Hello {person.name}! (destructuring)</h2>
        <h3>Age: {person.age}</h3>
        {person.isGraduated ? (
            <p>Congrats on Graduating!</p>
        ) : (
            <p>Go back to school!!</p>
        )}
    </>
  );
};

export default GreetingObject;