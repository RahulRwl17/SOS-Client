// Context
import { AuthContext } from '../context/auth.context';
import SweetAlert from 'react-bootstrap-sweetalert';
import { useHistory, Redirect } from "react-router-dom";
import { useContext } from 'react';

const ProtectedRoute = ({ component: Component, ...rest }) => {

    const { user } = useContext(AuthContext);
    const history = useHistory();
    const Token = localStorage.getItem('token');
    console.log("TOKEN", Token);
    if (Token === null) {
        return (
            <SweetAlert
                warning
                title="You are not logged in"
                onConfirm={() => { history.push('/auth/sign-in'); }}
                onCancel={() => { history.push('/auth/sign-in'); }}
            />
        )
    }
    console.log("Authenticated..!")
    return <Component {...rest} />
}

export default ProtectedRoute;