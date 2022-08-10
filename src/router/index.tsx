import { useRoutes } from 'react-router-dom'
import { publicRouters } from './public'

export const AppRoutes = () => {
  console.log(publicRouters, 'public.........')
  const element = useRoutes(publicRouters)
  return <>{element}</>
}
