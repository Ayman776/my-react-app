function food (){
    const food1 = "Pizza";
    const food2 = "Burger";
    const food3 = "Salad";
    
    return(
        <div className="food">
            <ul>
                <li>Apple</li>
                <li>{food1}</li>
                <li>{food2}</li>
                <li>{food3}</li>
            </ul>
        </div>
    );
}

export default food;