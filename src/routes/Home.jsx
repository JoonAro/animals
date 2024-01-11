import { NavLink, Link } from 'react-router-dom'
import pic from '../assets/owl-50267_1280.jpg'
import pic2 from '../assets/giraffe123.jpg'
function Home({ resetSearch }) {
    return (
        <main>
            <div className="welcome">
                <div className='txtHolder'>

                    <h1>Welcome to Zoo</h1>
                    <p>Pick one category and get ready to see some wildlife!</p>
                </div>
                <div className="picLinkHolder">
                    <div className="picAtxt">
                        <NavLink to="/animals" onClick={() => resetSearch()}><img className="animalLink" src={pic2} alt="giraffe" /></NavLink>
                        <p>Animals</p>
                    </div>
                    <div className="picAtxt">
                        <NavLink to="/birds" onClick={() => resetSearch()}><img className="animalLink" src={pic} alt="owl" /></NavLink>
                        <p>Birds</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Home;