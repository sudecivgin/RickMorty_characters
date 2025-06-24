import "./Pagination.css";

const Pagination = ({ setPageNumber }) => {
  const Next = () => {
    setPageNumber(x => x + 1);
  };

  const Prev = () => {
    setPageNumber(x => Math.max(1, x - 1));
  };

  // Buton stilleri için inline CSS objesi
  const buttonStyle = {
    fontFamily: "'Source Code Pro', Menlo, Monaco, Consolas, 'Courier New', monospace",
    fontWeight: 600,
    letterSpacing: '0.5px',
    padding: '8px 20px',
    borderRadius: '6px',
    border: '3px solid #ff009d',
    backgroundColor: '#ff009d', // İç rengi pembe
    color: 'white', // Yazı rengi beyaz
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: 'none',
    transform: 'translateY(0)'
  };

  const hoverStyle = {
    ...buttonStyle,
    transform: 'translateY(-3px)', // Hafifçe yukarı kalkma efekti
    boxShadow: '0 4px 8px rgba(255, 0, 157, 0.3)' // Gölge efekti
  };

  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
      <button 
        onClick={Prev} 
        className="btn"
        style={buttonStyle}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        Prev
      </button>
      <button 
        onClick={Next} 
        className="btn"
        style={buttonStyle}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;