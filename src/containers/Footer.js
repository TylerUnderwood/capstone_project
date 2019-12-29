import { connect } from 'react-redux'
import Footer from '../components/Footer'


const mapStateToProps = ( state ) => {
    return {
        currentUser: state.currentUser,
    }
}

export default connect( mapStateToProps )(Footer)