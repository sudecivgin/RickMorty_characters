import "./Cards.css";

const Cards = ({ results }) => {
  let display;

  if (results && results.length > 0) { 
    display = results.map((x) => {
      let { id, name, image, location, status } = x;

      let statusClass = "bg-secondary";
      if (status === "Alive") statusClass = "bg-success";
      else if (status === "Dead") statusClass = "bg-danger";

      return (
        <div key={id} className="col-4 mb-4">
          <div className="card h-100">
            <img src={image} alt={name} className="card-img-top img-fluid" />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title text-center fw-bold">{name}</h5>
              <div className="mt-2">
                <div className="fs-6 text-muted">Last Location:</div>
                <div className="fs-5">{location.name}</div>
              </div>
              <div className="mt-3 text-center">
                <span className={`badge ${statusClass}`}>{status}</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = (
      <div className="col-12 text-center py-5">
        <h3 className="text-danger">Sorry, your character was not found.</h3>
        <p className="text-muted">You can try searching again</p>
      </div>
    );
  }

  return <div className="row">{display}</div>;
};

export default Cards;