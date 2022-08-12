import { useRoutes } from 'react-router-dom'
import { publicRouters } from './public'

export const AppRoutes = () => {
  const element = useRoutes(publicRouters)
  return <>{element}</>
}
