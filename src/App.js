import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCounterAction, removeCounterAction} from "./modules/counter/reducer";
import {fetchUsers} from "./api/users";

function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const users = useSelector(state => state.users.users)
  const addCounter = (count) => {
    dispatch(addCounterAction(count))
  }
  const removeCounter = (count) => {
    dispatch(removeCounterAction(count))
  }
  const addUser = (name) => {
    const user = {
      id: Date.now(),
      title: name
    }
    dispatch({type: "ADD_USER", payload: user})
  }
  const removeUser = (id) => {
    dispatch({type: "REMOVE_USER", payload: id})
  }
    // moreUsersAction
  return (
    <div className="App">
      <h1>My counter: {counter}</h1>
      <div className="container">
        <button onClick={() => addCounter(10)}>Add Count</button>
        <button onClick={() => removeCounter(10)}>Remove Count</button>
      </div>
      <div className="container">
        {users.length
          ? users.map(elem => <div onClick={() => removeUser(elem.id)} key={elem.id}>{elem.title}</div>)
          : <h3>Empty</h3>
        }
      </div>
      <div className="container">
        <button onClick={() => addUser(prompt('', 'Vasya'))}>Add User</button>
      </div>
      <div className="container">
          <button onClick={() => dispatch(fetchUsers())}>More Users</button>
      </div>
    </div>
  );
}

export default App;
