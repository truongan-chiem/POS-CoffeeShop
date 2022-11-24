import Route from "./utils/router";
import {useDispatch} from 'react-redux'
import { useEffect } from "react";
import { getAllMenu } from "./redux/Slice/menuSlice";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllMenu())
  }, [dispatch]);
  return (
   <Route />
  );
}

export default App;
