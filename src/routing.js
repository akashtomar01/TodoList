import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Suspense, lazy } from 'react';
// import ParentLoginForm from './Form Task 2/Parent Login Form/parentLoginForm';
import TodoList from './Todo List/todoList';
import SignUpForm from './formComponent/signUp/signupForm';
// import ParentLoginForm2  from './Form Task 25/Parent Login Form/parentLoginForm2';
// const parentLoginForm2 = lazy(()=> import('./Form Task 25/Parent Login Form/parentLoginForm2')) 

const RoutingComp = () =>{
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route path='parentlogin' element={<ParentLoginForm />}/>
                <Suspense fallback = {'...loading'}>
                    <Route path='childpage' element={<parentLoginForm2 />} />
                </Suspense> */}
                <Route path='/' element={<TodoList />}/>
                <Route path='contextExample' element={<SignUpForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutingComp;