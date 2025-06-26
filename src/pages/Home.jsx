import useUserStore from '../stores/userStore'

function Home() {
  const logout = useUserStore(state=>state.logout)

  return (
    <div>
      <button className='btn btn-accent' onClick={logout} >Logout</button>
      <p>Left SideBar</p>
      <p>PostContainer</p>
      <p>Right SideBar</p>
    </div>
  )
}

export default Home