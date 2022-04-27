import React from 'react'


//router
import { Switch, Route } from 'react-router'
//layoutpages
// import Index from '../views/index'
import Default from '../layouts/dashboard/default'
import Simple from '../layouts/dashboard/simple'
import { AuthProvider } from '../context/auth.context'
// import AuthProvider from '../context/auth.context';
import ProtectedRoute from '../layouts/ProtectedRoute'

const IndexRouters = () => {
    const user = localStorage.getItem('user');
    // console.log(user);
    return (
        <>
            <AuthProvider userData={user}>
                <Switch>
                    {/* <Route exact path="/" component={Index}></Route> */}
                    <Route path="/auth" component={Simple}></Route>
                    <Route path="/errors" component={Simple}></Route>
                    <ProtectedRoute path="/" component={Default}></ProtectedRoute>

                </Switch>
            </AuthProvider>
        </>
    )
}

export default IndexRouters
