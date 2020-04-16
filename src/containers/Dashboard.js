import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { removeCar } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = dispatch => {
    return {
      removeCar: (car) => dispatch(removeCar(car))
    };
  };
  
  // add mapDispatchToProps in connect function
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)