import s from './Contact.module.scss';

const Contacts = () => {
  return (
    <div className={s.wrapper}>
      <div>
        <b className={s.title}>ADDRESS</b>
        <p>Designkollektivet,</p>
        <p>Jagersborgsgade 5</p>
        <p>2200 København N</p>
        <p>DENMARK</p>
      </div>
      <div>
        <b className={s.title}>CONTACT</b>
        <p>PHONE: +45 30 22 82 20</p>
        <p>EMAIL: kaja@kajaskytte.dk</p>
        <p>CVR: 36353481</p>
      </div>
    </div>
  )
}
export default Contacts
