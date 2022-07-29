import s from './Search.module.scss'
import { StateType } from '../../Store/Store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getArrayOfProducts } from '../../Store/Reducer';
import Preloader from '../Preloader/Preloader';

const Search = () => {
  const ArrayOfProducts = useSelector((state:StateType) => state.MainReducer.ArrayOfProducts)
  const initialized = useSelector((state:StateType) => state.MainReducer.isInitialized)
  let [SearchValue, setSearchValue] = useState('') 

  const dispatch:any = useDispatch()
  
  useEffect(() =>{
    dispatch(getArrayOfProducts())
  },[])

  const onChangeSearch = (e:any) => {
    setSearchValue(e.target.value)
  } 

  if (initialized === false) {
    return <Preloader/>
  }
  return(
    <div>
      <div>
          <input 
            onChange={onChangeSearch} 
            value={SearchValue} 
            placeholder="Find..." 
            type='text'
          />
      </div>
      <div className={s.ItemsWrapper}>
      <div className={s.wrapper}>  
      {ArrayOfProducts.filter((item) => item.data.title.toLowerCase().includes(SearchValue.toLowerCase())).map((item) => {return <div 
          key={item.id}
          className={s.ProductWrapper}
        >
        <NavLink style={{ textDecoration: 'none' }} to={`/Products/${item.data.ProductId}`}>
          <div>
            <img src={item.data.image}/>
            <div>{item.data.title}</div>
            <b>{item.data.price}</b>
          </div>
        </NavLink>
      </div>
      })}
      </div>
      </div>
    </div>
  )
}
export default Search