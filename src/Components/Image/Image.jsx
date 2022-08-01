import './Image.css'

export const Image = (props) => {
  return <img className='img' src={require('../../Assets/Images/' + props.type + 's/' + props.img + '.png')}/> 
    
}