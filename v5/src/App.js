import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    Redirect,
    useLocation
} from 'react-router-dom';

export const App = () => (
    <>
        <h1>App Layout</h1>
        <Router>
            <Switch>
                <Route path="/" exact>
                    <MainPage/>
                    <Redirect to="/"/>
                </Route>
                <Route path="/users/:userId?">
                    <Users/>
                </Route>
                <Route path="/edit/:userId?">
                    <EditUser/>
                </Route>
            </Switch>
        </Router>
    </>
);

function MainPage() {
    let location = useLocation();
    return (
        <>
            <h3>
                <Link to="/users">Users List Page</Link>
            </h3>
            {location.pathname === "/" && <h1>Main Page</h1>}
        </>
    );
}

function Users() {
    const {userId} = useParams();
    const getUser = userId => users.find(({id}) => String(id) === userId);
    const users = [...Array(5).keys()].map(i => ({id: i, name: `User: ${i}`}));
    return (
        <>
            <h1>Users Layout</h1>
            <h3>
                <Link to="/">Main Page</Link>
            </h3>
            {userId ? (
                <User user={getUser(userId)} userId={userId}/>
            ) : (
                <UserList users={users}/>
            )}
        </>
    );
}

function User() {
    const {userId} = useParams();
    return (
        <>
            <h1>User Page</h1>
            <ul>
                <li>
                    <h3>
                        <Link to="/users">Users List Page</Link>
                    </h3>
                </li>
                <li>
                    <h3>
                        <Link to={`/edit/${userId}`}>Edit this user</Link>
                    </h3>
                </li>
            </ul>
            <p> {`userId: ${userId}`} </p>
        </>
    );
}

function UserList({users}) {
    return (
        <>
            <h1>Users List Page</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <p>
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                    </li>
                ))}
            </ul>
        </>
    );
}

function EditUser() {
    const {userId} = useParams();
    return (
        <>
            <h1>Edit User Page</h1>
            <ul>
                <li>
                    <h3>
                        <Link to={`/users/${userId}`}>Users Profile Page</Link>
                    </h3>
                </li>
                <li>
                    <h3>
                        <Link to={`/users/${Number(userId) + 1}`}>Another User</Link>
                    </h3>
                </li>
                <li>
                    <h3>
                        <Link to="/users">User List page</Link>
                    </h3>
                </li>
            </ul>
            <p> {`userId: ${userId}`} </p>
        </>
    );
}
