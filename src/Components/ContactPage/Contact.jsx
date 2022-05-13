import s from './Contact.module.scss';

const Contacts = () => {
  return (
    <div className={s.wrapper}>
      <div>
        <p className={s.title}>ADDRESS</p>
        <p>Designkollektivet,</p>
        <p>Jagersborgsgade 5</p>
        <p>2200 København N</p>
        <p>DENMARK</p>
      </div>
      <div>
        <p className={s.title}>CONTACT</p>
        <p>PHONE: +45 30 22 82 20</p>
        <p>EMAIL: kaja@kajaskytte.dk</p>
        <p>CVR: 36353481</p>
      </div>
    </div>
  )
}
export default Contacts
