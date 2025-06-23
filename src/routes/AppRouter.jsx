import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router'

const guestRouter = createBrowserRouter([
  { path: '/', element: <p>Login</p> },
  { path: '*', element: <Navigate to='/' /> },
])

const userRouter = createBrowserRouter([
  {
    path: '/', element: <>
      <p className='py-4 border'>Header</p>
      <Outlet />
    </>,
    children: [
      { path: '', element: <p>User Home : sidebar, posts</p> },
      { path: 'friends', element: <p>Friends Home</p> },
      { path: 'profile', element: <p>Profile Home</p> },
      { path: '*', element: <Navigate to='/' /> },
    ]
  }
])

function AppRouter() {
  return (
    <RouterProvider router={userRouter} />
  )
}

export default AppRouter