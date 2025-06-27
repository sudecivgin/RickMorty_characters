import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CharacterDetail.css'; 

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) return <div className="text-center my-5">Loading...</div>;

  return (
    <div className="character-detail-container">
      <div className="character-content">
        <div className="row g-4">
          <div className="col-lg-5">
            <img 
              src={character.image} 
              alt={character.name} 
              className="character-image img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-7">
            <div className="character-info-card card h-100 shadow">
              <div className="card-body p-4">
                <h1 className="mb-3">{character.name}</h1>
                <span className={`badge ${
                  character.status === 'Alive' ? 'bg-success' : 
                  character.status === 'Dead' ? 'bg-danger' : 'bg-secondary'
                } fs-5 mb-3`}>
                  {character.status}
                </span>
                
                <div className="character-details">
                  <p className="mb-3"><strong className="text-primary">Gender:</strong> {character.gender}</p>
                  <p className="mb-3"><strong className="text-primary">Species:</strong> {character.species}</p>
                  <p className="mb-3"><strong className="text-primary">Location:</strong> {character.location.name}</p>
                  <p className="mb-3"><strong className="text-primary">Origin:</strong> {character.origin.name}</p>
                  <p className="mb-0"><strong className="text-primary">Episodes:</strong> {character.episode.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;