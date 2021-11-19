import logo from '../../assets/logo.png';
import "./styles.css"
import { Nav } from './nav'

export const Header = () => {
    return (
        <header id="top">
            <img src={logo} alt="Logo" />
        </header>
    )
}
