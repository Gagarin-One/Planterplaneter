import s from './Workshop.module.scss'
import { StateType } from '../../Redux/Redux';
import { useSelector, useDispatch } from 'react-redux';
<<<<<<< HEAD
import { AddProductToShoppingCard } from '../../Reducer';
=======
import { AddProductToShoppingCard } from '../../Reducer.tsx';
>>>>>>> 21fa5505a223f75af8ff919ade0741e0a340a1aa
let Workshops = () => {
  let ShoppingCard = useSelector((state:StateType) => state.MainReducer.ShoppingCard)
  const dispatch = useDispatch()
  const CurrentProduct = {
    "id": "7",
    "data": {
     "ProductId": "7",
     "title": "CRASSULA HALO PLANTEPLANET",
     "price": 399,
     "image": "/Img/Products/Crassula-smallleaf-planteplaneter-kajaskytte-hanginggarden-greenliving-danishdesign-565x565.png",
     "ProductsCount": 3}
    }

  let AddToCard = () => {
    ShoppingCard.every((obj:ProductItemType) => obj.data.ProductId !== CurrentProduct.data.ProductId) &&
    dispatch(AddProductToShoppingCard(CurrentProduct))
  }
  return(
    <div>
      <div className={s.FrontImage}>
        <img src='./Img/Workshop.png'/>
      </div>
      <div className={s.titleWrapper}>
        <p className={s.title}>WORKSHOPS</p>
        <p className={s.description}>Learn how to make magic hanging sculptures</p>
      </div>
      <p className={s.WorkshopsDesc}>
        DIY classes in our studio
          or in your workspace
      </p>
      <div className={s.Cart}>
        <img width="400" src='/Img/Workshops/Workshop_1.png'/>
        <p>
          Planteplaneter is also a great way to spend time and do some hand work with a beautiful outcome. I organise workshops both for groups and individual people.
        </p>
      </div>
      <div className={s.Cart}>
        <p>
          If you want to take part in workshops by yourself have a look below to see what’s being planned
        </p>
        <img  src='/Img/Workshops/Workshop_2.png'/>
      </div>
      <div className={s.offerCart}>
        <img src='/Img/Workshops/Workshop_3.png'/>
        <div className={s.offer}>
          <b className={s.offerTitle}>Planteplanet Workshop</b>
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