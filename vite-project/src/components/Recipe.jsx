// import PropTypes from "prop-types";

// export function RecipeFn(props) {
//   return (
//     <>
//       <ul>
//         {props.data.map(
//           ({ name, time, servings, calories, difficulty, image }) => {
//             return (
//               <li key={servings}>
//                 <div>
//                   <h1>Назва: {name}</h1>
//                   <p>Час приготовання: {time} хв</p>
//                   <p>Калоріі: {calories} кДж</p>
//                   <p>Складність приготовання: {difficulty}</p>
//                   <img src={image} alt="#" />
//                   <button>Замовити</button>
//                 </div>
//               </li>
//             );
//           }
//         )}
//       </ul>
//     </>
//   );
// }

// RecipeFn.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.number.isRequired,
//       time: PropTypes.string.isRequired,
//       servings: PropTypes.number.isRequired,
//       calories: PropTypes.number.isRequired,
//       difficulty: PropTypes.number.isRequired,
//       image: PropTypes.string.isRequired,
//     })
//   )
// };
