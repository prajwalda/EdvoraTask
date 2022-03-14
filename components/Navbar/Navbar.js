import Image from 'next/image';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.png'
//import { useStore } from '../../Context/Store';


export const NavBar = ({}) => {

    // style classes
    const { _logo,uname,_avatar, row, main_nav } = styles;
    //const { user } = useStore();
    
    return (
        <nav className = { main_nav } >
            <div className = "--container">
                <div className = { row }>
                    
                    <div className = { _logo } >
                        <Image src = { logo } alt = "logo" />
                    </div>


                     {
                        <div className = { row }>
                        <p className = { uname } >Dhruv Singh</p>

                        <div className = { _avatar } >
                            <Image src ={avatar}alt = "avatar" />
                        </div>
                       </div>
                    } 


                </div>
            </div>
        </nav>
    );
}
// export async function getStaticProps() {
//     const res = await fetch('https://assessment.api.vweb.app/user')
//     const data = await res.json()
//     return {
//        props: {}
       
//     }
    
//  }
//  export default  NavBar