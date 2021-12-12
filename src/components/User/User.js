import PropTypes from 'prop-types';

function User(props) {
    const {user, removeUser} = props;
    const {title, description, id} = user;
    return (
        <div>
            <h3>{title}</h3>
            <p></p>
            <button></button>
        </div>
    )
}

User.propTypes = {
    user: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired,
    removeUser: PropTypes.func.isRequired
}

User.defaultProps = {
    removeUser(){},
}
export default User