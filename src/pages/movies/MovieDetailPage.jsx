import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReviewCard from "../../components/ReviewCard";
import ReviewForm from "../../components/ReviewForm";

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
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div>
          <ReviewForm movieId={id} afterFormSubmit={fetchDetail} />
        </div>
      </div>
    </div>
  );
}
