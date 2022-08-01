import "./LoginPage.css"
import { Image } from '../../Components/Image/Image'
import { LoginForm } from "../../Components/LoginForm/LoginForm"


const LoginPage = () => {
  return (
    <div id="wraper">
      <div className='logo_cont'>
        <Image type="Logo" img="big" />
      </div>
      <div className="main">
          <Image type='Illustration' img='camper-01' />
          <LoginForm />
      </div>
    </div>
  )
}

export { LoginPage }

