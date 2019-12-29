import { connect } from 'react-redux'
import Header from '../components/Header'
import { logout } from '../redux/actions'


const mapStateToProps = ( state ) => {
    return {
        currentUser: state.currentUser,
    }
}


const mapDispatchToProps = ( dispatch ) => {
    return {
        logout: () => dispatch( logout() )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Header)