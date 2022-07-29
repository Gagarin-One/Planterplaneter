import { Dispatch, FC, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from './Header.module.scss'
import { StateType } from '../../Store/Store';
import { GetShoppingCardArray} from '../../Store/Reducer';
import NavigationLinks from "../NavigationLinks/NavigationLinks";

const Header = () => {
  const ShoppingCardArray = useSelector((state:StateType) => state.MainReducer.ShoppingCard)
  const dispatch:Dispatch<any> = useDispatch()

  useEffect(() =>{
    dispatch(GetShoppingCardArray())
  },[])

  return (
    <div className={s.Wrapper}>
      <div className={s.MainLogo}>
        <img src='Img/MainLogo.svg'/>
      </div>
      <div className={s.MainSectionsWrapper}>
  
        <div className={s.SectionsWrapper}>
          <div className={s.Home}>
            <NavigationLinks Link={'Home'}/>
          </div>
          <NavigationLinks Link={'Shop'}/>
          <NavigationLinks Link={'Workshops'}/> 
          <NavigationLinks Link={'Spaces'}/> 
          <NavigationLinks Link={'About'}/> 
          <NavigationLinks Link={'Contacts'}/>  
        </div>
      
        <div className={s.SideSectionsWrapper}>
          <div className={s.SearchAndUser}>

            <NavLink to='/Search'>
              <img src='Img/svg/search.svg'/>
            </NavLink>

            <img src='Img/svg/user.svg'/>

            <NavLink to='/Shopping_card'>
              <img src='Img/svg/shopping.svg'/>
            </NavLink>
            <div className={s.counter}>{ShoppingCardArray.length}</div>
          </div>
        </div>
      </div> 
    </div>
  )
}
export default Header
