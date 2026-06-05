import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageNotFound, ToDo, Dashboard } from '../components/features';
import QuestinosAnswers from '../components/qa';
import Projects from '../components/projects';
import Loading from '../shared/ui/loading';


const CounterWithStep = lazy(() => import('../components/counterWithStep'));
const SearchFilterHighlight = lazy(() => import('../components/searchFilterHighlight'));
const LoginForm = lazy(() => import('../components/loginForm'));


const AppRouter = () => {

    // const PageNotFound = () => {
    //     return(
    //         <p>404 | Page Not Found</p>
    //     );
    // };
    // const ToDo = () => {
    //     return(
    //         <p>To-Do List</p>
    //     )
    // };
    // const ToDo1 = () => {
    //     return(
    //         <p>To-Do List 1</p>
    //     )
    // };
    // const Dashboard = () => {
    //     return(
    //         <p>Dashboard</p>
    //     )
    // };
    // const router = createBrowserRouter([
    //     {
    //         path: '/todo',
    //         element: <ToDo />
    //     },
    //     {
    //         path: '/todo1',
    //         element: <ToDo1 />
    //     },
    //     {
    //         path: '*',
    //         element: <PageNotFound />
    //     }
    // ]);
    // return <RouterProvider router={router} />;
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/' element={<QuestinosAnswers />} />
                <Route path='/React/todo' element={<ToDo />} />
                <Route path='/React/dashboard' element={<Dashboard />} />
                <Route path='/React/projects' element={<Projects />} />
                <Route path='/React/*' element={<PageNotFound />} />
                <Route path='/counterWithStep' element={<CounterWithStep />} />
                <Route path='/searchFilterHighlight' element={<SearchFilterHighlight />} />
                <Route path='/loginForm' element={<LoginForm />} />
            </Routes>
        </Suspense>
    );
};
export default AppRouter;