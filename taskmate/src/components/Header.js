import Logo from "../assets/logo.png"
import './Header.css'
export const Header = () => {
    return (
        <header>
            <img className={'logo'} src={Logo} alt=""/>
            <a className={'title'} href="/">Home</a>
        </header>
    );
}


// type
// Props = {
//
// };

// export function Header() {
//     return (
//         <div>
//
//         </div>
//     );
// }