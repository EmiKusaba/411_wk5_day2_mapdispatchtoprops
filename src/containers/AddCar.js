import { connect } from "react-redux";
import AddCar from "../components/AddCar";
import { addCar } from "../redux/actions";

const mapStateToProps = state => {
   return {
     carTotal: state.cars.length,
   };
 };

// create mapDispatchToProps function
// send a prop called addUser that references
// the addUser action imported above
const mapDispatchToProps = dispatch => {
  return {
    addCar: (car) => dispatch(addCar(car))
  };
};

// add mapDispatchToProps in connect function
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCar);