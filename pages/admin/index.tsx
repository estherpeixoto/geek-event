import { Admin } from 'layouts/Admin'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return <Admin header={{ title: 'Dashboard' }} />
}

export default Home
