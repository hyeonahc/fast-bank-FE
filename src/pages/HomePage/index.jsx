import { Navigate } from 'react-router-dom'
import { pagesFullPath } from '@/pages/pagesPath'

const HomePage = () => {
  return <Navigate to={pagesFullPath.personal} />
}

export default HomePage
