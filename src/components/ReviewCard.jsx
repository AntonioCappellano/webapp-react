export default function ReviewCard({review}) {
  return (
    <div key={review.id} className="card">
      <div className="card-body px-0">
        <h6 className="fw-bold">Nome: {review.name}</h6>
        <p className="card-text">Commento: {review.text}</p>
        <p className="badge bg-warning text-dark">Voto: {review.vote}/5</p>
      </div>
    </div>
  );
}
