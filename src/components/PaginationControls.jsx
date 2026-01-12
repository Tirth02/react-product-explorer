// UI ONLY – Pagination / Load More controls (no logic)
// You will connect state, API, and handlers yourself

function PaginationControls({onLoadMore,onNext,onPrev, hasMore,page}) {
    
  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      {/* Page info */}
      <div className="text-sm text-gray-600">
        Page <span className="font-semibold">{page}</span> of <span className="font-semibold">10</span>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={onPrev}
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
          disabled = {page == 1}
        >
          ◀ Prev
        </button>

        <button onClick={onLoadMore} disabled={!hasMore} className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
          Load More
        </button>

        <button onClick={onNext} disabled={!hasMore} className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100">
          Next ▶
        </button>
      </div>

      {/* Optional loading state UI */}
      <div className="text-sm text-gray-400">Loading more products...</div>
    </div>
  );
}

export default PaginationControls;
