import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function MoviesDetailPage() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(fetchDetail, [id]);

  function fetchDetail() {
    axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
      console.log(res.data.movie);
      setDetail(res.data.movie);
    });
  }

  if (!detail) return <p>Caricamento...</p>;

  return (
    <div className="container">
      <h1 className="mb-5">Dettaglio Film</h1>
      <div className="row">
        <div className="col">
          <div className="card">
            <img
              src={detail.image}
              className="card-img-top w-50 mx-auto d-block"
              alt={detail.title}
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">{detail.title}</h5>
              <p className="card-text mb-1">Direttore: {detail.director}</p>
              <p className="card-text mb-1">Genere: {detail.genre}</p>
              <p className="card-text">
                Anno di rilascio: {detail.release_year}
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <h3>Recensioni</h3>

          {detail.reviews.map((review) => (
            <div key={review.id} className="card">
              <div className="card-body px-0">
                <h6 className="fw-bold">Nome: {review.name}</h6>
                <p className="card-text">Commento: {review.text}</p>
                <p className="badge bg-warning text-dark">
                  Voto: {review.vote}/5
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
