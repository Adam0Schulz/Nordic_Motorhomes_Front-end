import './Button.css'

export const Button = (props) => {
    if (props.type == 'submit') {
        return <input className='btn' type="submit" value={props.text} />
    } else {
        return <button className='btn'>{props.text}</button>
    }

}