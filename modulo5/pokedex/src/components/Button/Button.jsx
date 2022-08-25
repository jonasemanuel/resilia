import style from './Button.css'

export const Button = (props) => {
  return <button className={style.button}>{props.label}</button>
}