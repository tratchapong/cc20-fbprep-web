import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router'
import { Suspense, lazy } from 'react'
import useUserStore from '../stores/userStore'
// import Login from '../pages/Login'
// import Home from '../pages/Home'
// import Friends from '../pages/Friends'
// import Profile from '../pages/Profile'
const Login = lazy(()=> import('../pages/Login') )
const Home = lazy(()=>import('../pages/Home'))
const Friends = lazy(()=>import('../pages/Friends'))
const Profile = lazy(()=>import('../pages/Profile'))

const guestRouter = createBrowserRouter([
  { path: '/', Component: Login },
  { path: '*', element: <Navigate to='/' /> },
])

const userRouter = createBrowserRouter([
  {
    path: '/', element: <>
      <p className='py-4 border'>Header</p>
      <Outlet />
    </>,
    children: [
      { path: '', Component: Home },
      { path: 'friends', Component: Friends },
      { path: 'profile', Component: Profile },
      { path: '*', element: <Navigate to='/' /> },
    ]
  }
])

function AppRouter() {
  const user = useUserStore(state=>state.user)
  const finalRouter = user ? userRouter : guestRouter
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider key={user?.id} router={finalRouter} />
    </Suspense>
  )
}

export default AppRouter