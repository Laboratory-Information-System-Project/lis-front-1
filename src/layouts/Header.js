import '../styles/header.scss';
import logo from '../assets/images/DOUZONE_CI_RGB.png';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const Header = () => {
    return (
        <header>
             <div>
                <h1 className='logo'>
                  <img src={logo} alt={"로고"}/>
                </h1>
                 <div className='logout_wrap'>
                  <p>Logout</p>
                  <LogoutOutlinedIcon />
                </div>
            </div>
        </header>
    )
}

