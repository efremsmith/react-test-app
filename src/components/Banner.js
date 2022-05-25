import logo from '../assets/logo.png';
import '../styles/Banner.css';

function Banner() {
    const title = 'La maison jungle'
    //const currentMonth = new Date().getMonth()
    return  <div className='lmj-banner'>
                <div className='lmj-banner-row'>
                    <img src={logo} alt='La maison jungle' className='lmj-logo' />
                    <h1 className='lmj-title'>{title} </h1>
                </div>
            </div>
}

export default Banner