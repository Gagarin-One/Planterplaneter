import s from './Workshop.module.scss'
import { StateType } from '../../Store/Store';
import { useSelector, useDispatch } from 'react-redux';
import { AddProductToShoppingCard, Product } from '../../Store/Reducer';
import { Dispatch } from 'react';
const Workshops = () => {
  const ShoppingCard = useSelector((state:StateType) => state.MainReducer.ShoppingCard)
  const dispatch:Dispatch<any> = useDispatch()

  const CurrentProduct = {
    "id": 7,
    "data": {
     "ProductId": 7,
     "title": "CRASSULA HALO PLANTEPLANET",
     "price": 399,
     "image": "Img/Products/Crassula-smallleaf-planteplaneter-kajaskytte-hanginggarden-greenliving-danishdesign-565x565.png",
     "ProductsCount": 3}
    }

  let AddToCard = () => {
    ShoppingCard.every((obj:Product) => obj.data.ProductId !== CurrentProduct.data.ProductId) &&
    dispatch(AddProductToShoppingCard(CurrentProduct))
  }
  return(
    <div>
      <div className={s.titleWrapper}>
        <h2 className={s.title}>WORKSHOPS</h2>
        <p className={s.description}>Learn how to make magic hanging sculptures</p>
      </div>
      <div className={s.FrontImage}>
        <img src='Img/Workshop.png'/>
      </div>
      <p className={s.WorkshopsDesc}>
        DIY classes in our studio
          or in your workspace
      </p>
      <div className={s.Cart}>
        <img width="400" src='Img/Workshops/Workshop_1.png'/>
        <p>
          Planteplaneter is also a great way to spend time and do some hand work with a beautiful outcome. I organise workshops both for groups and individual people.
        </p>
      </div>
      <div className={s.Cart}>
        <p>
          If you want to take part in workshops by yourself have a look below to see what’s being planned
        </p>
        <img  src='Img/Workshops/Workshop_2.png'/>
      </div>
      <div className={s.offerCart}>
        <img src='Img/Workshops/Workshop_3.png'/>
        <div className={s.offer}>
          <h2 >Planteplanet Workshop</h2>
          <p>
            In this workshop we make the popular 
            hanging plant Hoya.
            The workshop takes place in the small creative workshop in Vesterbro. 
          </p>
          <b className={s.price}>375 kr</b>
          <button onClick={() => AddToCard()}>add to card</button>
        </div>
      </div>
    </div>
    
  )

}
export default Workshops