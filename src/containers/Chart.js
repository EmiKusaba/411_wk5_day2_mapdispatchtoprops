import { connect } from 'react-redux'
import Cart from '../components/Chart'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Cart)