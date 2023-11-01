import pic from './owl-50267_1280.jpg'
const Card = (props) => {
    return (
        <div className="card">
            <span class="close" onclick="">&times;</span>
            <div className="imgHolder">

            </div>

            <p className="name">{props.name}</p>
        </div>
    )
}

export default Card;