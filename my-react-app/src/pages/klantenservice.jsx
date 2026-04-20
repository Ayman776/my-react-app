import { useState } from "react";

function Klantenservice() {
  const [search, setSearch] = useState("");

  return (
    <div className="support">
      <h1>Klantenservice</h1>

   
      <section className="card">
        <h2>Zoek</h2>
        <label htmlFor="search" className="visually-hidden">
          Zoek hulp
        </label>
        <input
          id="search"
          type="text"
          placeholder="Waarmee kunnen we je helpen?"
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      <section className="card">
        <h2>Veelgestelde vragen</h2>

        <div className="faq-item">
          <h4>Hoe voeg ik een trip toe?</h4>
          <p>Ga naar je dashboard en klik op "Nieuwe trip".</p>
        </div>

        <div className="faq-item">
          <h4>Hoe laad ik saldo op?</h4>
          <p>Gebruik de knop "Saldo opladen" in je accountoverzicht.</p>
        </div>
      </section>

 
      <section className="contact card">
        <h2>Contact</h2>

        <p>
           <a href="tel:0612345678">06-12345678</a>
        </p>
        <p>
           <a href="mailto:support@vervoerapp.nl">
            support@vervoerapp.nl
          </a>
        </p>

        <div className="actions">
          <button className="btn">Email sturen</button>
          <button className="btn primary">Bericht sturen</button>
        </div>
      </section>
    </div>
  );
}

export default Klantenservice;