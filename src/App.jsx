

// import { useEffect, useState } from "react";
// import classes from "./styles.module.css";
// import TodoItem from './components/todo-item'
// import TodoDetails from "./components/todo-details";
// import { Skeleton } from "@mui/material";

import { Link, Route, Routes, useNavigate } from "react-router-dom";
import RecipesList from "./pages/recipes";
import CommentList from "./pages/comments";
import RecipeDetils from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found";
import ReactHookPage from "./pages/react-hook-form";

// import FormComponent from "./components/form";
// import LoginComponent from "./components/login";
// import RegisterComponent from "./components/register";



function App() {
  // const [loading, setLoading] = useState(false);
  // const [todoList, setTodoList] = useState([]);
  // const [errorMsg, setErrorMsg] = useState(null);
  // const [todoDetails, setTodoDetails] = useState(null)
  // const [openDialog, setOpenDialog] = useState(false)

  // async function fetchListOfTodos() {
  //   try {
  //     setLoading(true);
  //     const apiResponse = await fetch("https://dummyjson.com/todos");
  //     const result = await apiResponse.json();
  //     console.log(result);
  //     if (result?.todos && result?.todos?.length > 0) {
  //       setTodoList(result?.todos);
  //       setLoading(false);
  //       setErrorMsg("");
  //     } else {
  //       setTodoList([]);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setErrorMsg("Some Errors Occured");
  //   }
  // }
  // async function fetchDetailsOfCurrentTodo(getCurrentTodoId){
  //   console.log(getCurrentTodoId);
  //   try {
  //     const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`)
  //     const details = await apiResponse.json();
  //     console.log(details);
  //     if(details){
  //       setTodoDetails(details)
  //       setOpenDialog(true)
  //     }else{
  //       setTodoDetails(null)
  //       setOpenDialog(false)
  //     }
      
  //   } catch (error) {
  //     console.log(error);
  //     setErrorMsg('Some Errors')
      
  //   }
    
  // }

  // useEffect(() => {
  //   fetchListOfTodos();
  // }, []);

  // if(loading)return <Skeleton variant="rectangular" width={650} height={650}/>
  const navigate=useNavigate()

  return (
    
    <div style={{alignItems:'center'}}>
      
    <button  onClick={()=>navigate('/recipe-list')} style={{backgroundColor:'black', color:'white'}}>Navigate to RecipeList Page</button>
    <button onClick={()=>navigate('/comment-list')} style={{backgroundColor:'black', color:'white'}}>Navigate to CommentList Page</button>
    <button onClick={()=>navigate('/react-hook')}>React form</button>
    <div>
        <Link to={'/recipe-list'}>navigate</Link>
      </div>
      <Routes>
        
        <Route path="/recipe-list" element={<RecipesList/>}/>
        <Route path="/comment-list" element={<CommentList/>}/>
        <Route path="/recipe-list/:id" element={<RecipeDetils/>}/>
        <Route path='/react-hook' element={<ReactHookPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
     
      {/* <FormComponent/> */}
      {/* "<div style={{display:'flex', gap:'20px',justifyContent:'normal'}}>
      <LoginComponent/>
      <RegisterComponent/>
      </div>" */}
    </div>
    // <div className={classes.mainWrapper}>
    //   <h1 className={classes.headerTitle}>
    //     simple to-do app using material ui
    //   </h1>
    //   <div className={classes.todoListWrapper}>
    //     {todoList&&todoList.length>0?
    //     todoList.map((todoItem)=>(
    //       <TodoItem fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo} todo={todoItem}/>
    //     )):null}
    //   </div>
    //   <TodoDetails openDialog={openDialog} todoDetails={todoDetails} setOpenDialog={setOpenDialog} setTodoDetails={setTodoDetails}/>
    // </div>
  );
}

export default App;
