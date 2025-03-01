function Card({user}) {
    return (
    <div id="card-id" className="card-item">
        <div className="header">
            <h4>{user.name}</h4>
            <small>My daily life</small>
        </div>
        <p>
            {user.comment}
        </p>
        <img src={user.image.src} alt={user.image.alt} />
    </div>
    );
}

export default Card;

