import axios from "axios";
import { useState } from "react";

// dati iniziali
const formInitialData = {
  name: "",
  text: "",
  vote: 1,
};

export default function ReviewForm({movieId, afterFormSubmit}) {
    // setta stato locale per gestire i campi di input
  const [formData, setFormData] = useState(formInitialData);

  /**
   * Gestisce l'aggiornamento dinamico dello stato per ogni input.
   * Estrae 'name' e 'value' dal target dell'evento.
   */
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Copia array e ne sostituisce solo la proprietà modificata
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    storeMovie()
    setFormData(formInitialData);
  };
   /**
   * Invia i dati della recensione al server tramite POST.
   */
  const storeMovie = () => {
    axios.post(`http://localhost:3000/movies/${movieId}/review`, formData).then((res) => {
        afterFormSubmit()
    })
  }

  return (
    <div className="card my-5">
      <div className="card-header">
        <h3>Add review</h3>
      </div>
      <form className="card-body" onSubmit={handleFormSubmit}> 
        <div>
          <label className="form-label" htmlFor="name">
            Name
            <input
              value={formData.name}
              onChange={handleFormChange}
              className="form-control"
              type="text"
              id="name"
              name="name"
            />
          </label>
        </div>
        <div>
          <label className="form-label" htmlFor="text">
            text
            <textarea
              value={formData.text}
              onChange={handleFormChange}
              name="text"
              className="form-control"
              type="text"
              id="text"
            />
          </label>
        </div>
        <div>
          <label className="form-label" htmlFor="vote">
            Vote
            <input
              value={formData.vote}
              onChange={handleFormChange}
              name="vote"
              className="form-control"
              type="number"
              id="vote"
              min="1"
              max="5"
            />
          </label>
        </div>
        <button className="btn btn-success">Send</button>
      </form>
    </div>
  );
}
