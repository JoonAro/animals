import { Link } from 'react-router-dom'
import pic from '../assets/owl-50267_1280.jpg'
import pic2 from '../assets/giraffe123.jpg'
function Home() {
    return (
        <>
            <main>
                <div className="welcome">
                    <h1>Welcome</h1>
                    <p>Blue pill or red pill</p>
                    <div className="picLinkHolder">
                        <div className="picAtxt">
                            <Link to="./Animals"><img className="animalLink" src={pic2} alt="giraffe" /></Link>
                            <p>Animals</p>
                        </div>
                        <div className="picAtxt">
                            <Link to="./Birds"><img className="animalLink" src={pic} alt="owl" /></Link>
                            <p>Birds</p>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}

export default Home;