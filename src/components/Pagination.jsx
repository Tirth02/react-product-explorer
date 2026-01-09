function Pagination({ page, onNext, onPrev }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <button onClick={onPrev} disabled={page === 1}>
        Previous
      </button>

      <span style={{ margin: '0 10px' }}>Page {page}</span>

      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default Pagination;
