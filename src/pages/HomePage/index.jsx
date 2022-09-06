import { Navigate } from 'react-router-dom'
import { pagesFullPath } from '@/pages/pagesPath'

const HomePage = () => {
  return <Navigate to={pagesFullPath.products} />
}

export default HomePage
