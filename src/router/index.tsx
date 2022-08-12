import { useRoutes } from 'react-router-dom'
import { publicRouters } from './asyncRouter'

export const AppRoutes = () => {
  const element = useRoutes(publicRouters)
  console.log(publicRouters,'publicRouters.......')
  return <>{element}</>
}
