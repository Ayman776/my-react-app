function Klantenservice(){
return(
   <div className="support">

            <h1>Klantenservice</h1>

         <div className="card">
                <h3>Zoek</h3>
                <input 
                    type="text" 
                    placeholder="Waarmee kunnen we je helpen?"
                    className="search"
                />
            </div>


            <div className="card">
                <h3>Veelgestelde vragen</h3>
                  <h3>Hoe voeg ik een trip toe?</h3>
                <p>Ga naar dashboard en klik op "Nieuwe trip".</p>
                   <p><strong>Hoe laad ik saldo op?</strong></p>
                    <p>Gebruik de knop "Saldo opladen".</p>

            
            </div>

               
            

<div className="contact">
    <h3>Contact</h3>
     <p> Telefoon: 06-12345678</p>
                <p> Email: support@vervoerapp.nl</p>

    <button className="btn">Stuur ons een Email</button>
    <button className="btn primary">Stuur ons een bericht</button>
</div>

            </div>
            
)


}

export default Klantenservice