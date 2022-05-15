import { FC } from "react"
import { NavLink } from "react-router-dom"
type LinksType = {
  Link:any
}
const NavigationLinks:FC<LinksType> = ({Link}) => {
  return(
    <NavLink style={{ textDecoration: 'none', marginBottom:'10px'}}  to={Link}>
      <b>{Link}</b>
    </NavLink>
  )
}
export default NavigationLinks