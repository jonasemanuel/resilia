import './Button.css'

export const Button = (props) => {
  return <button onClick={props.onClick} className="btn">{props.label}</button>
}