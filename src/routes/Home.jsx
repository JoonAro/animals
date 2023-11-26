import { Link } from 'react-router-dom'
import pic from '../assets/owl-50267_1280.jpg'
import pic2 from '../assets/giraffe123.jpg'
function Home({ changeZoo, changeZoo2 }) {
    /* const { animals, birds } = zoo; */

    return (
        <>
            <main>
                <div className="welcome">
                    <h1>Welcome</h1>
                    <p>Blue pill or red pill</p>
                    <div className="picLinkHolder">
                        <div className="picAtxt">
                            <Link to="./Animals" onClick={() => changeZoo()}><img className="animalLink" src={pic2} alt="giraffe" /></Link>
                            <p>Animals</p>
                        </div>
                        <div className="picAtxt">
                            <Link to="./Birds" onClick={() => changeZoo2()}><img className="animalLink" src={pic} alt="owl" /></Link>
                            <p>Birds</p>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}

export default Home;