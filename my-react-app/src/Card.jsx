import ProfilePic from './assets/Profile.jpg';

function Card (){
    return(
       <div className= "card">
        <img src= {ProfilePic} alt="Profile Image"></img>
        <h2>Ayman</h2>
        <p className="card-p">Software Developer</p>
       </div>

    );
}

export default Card;