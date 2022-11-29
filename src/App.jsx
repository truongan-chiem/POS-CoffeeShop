import Route from "./utils/router";
import {useDispatch} from 'react-redux'
import { useEffect } from "react";
import { getAllMenu } from "./redux/Slice/menuSlice";
import { getInfoUser } from "./redux/Slice/userSlice";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllMenu())
    const user_id = localStorage.getItem('user_id')
    if(user_id){
      dispatch(getInfoUser(user_id))
    }
  }, [dispatch]);
  return (
   <Route />
  );
}

export default App;
