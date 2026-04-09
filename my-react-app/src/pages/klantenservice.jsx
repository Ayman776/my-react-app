function Klantenservice(){
return(
   <div className="support">

            <h1>Klantenservice</h1>

            <input
            type="text"
            placeholder="waarmee kunnen we je helpen?"
            className="search"
            />

            <div className="faq">
                <h3>veelgestelde vragen</h3>

                <div className="faq=item">
                    <p><strong>hoe voeg ik een trip toe?</strong></p>
                    <p>Ga naar je dashboard en klik op "Nieuwe trip"</p>
                </div>

                <div className="faq-item">
                    <p><strong>Hoe laad ik saldo op?</strong></p>
                    <p>Gebruik de knop "Saldo opladen".</p>
                </div>

<div className="contact">
    <h3>Contact</h3>
    <button className="btn">Stuur ons een Email</button>
    <button className="btn primary">Stuur ons een bericht</button>
</div>

            </div>
            </div>
)


}

export default Klantenservice