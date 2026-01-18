function FilterBar({ search, setSearch, category, setCategory, categories, maxPrice, setMaxPrice }) {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm p-4 mb-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Left: Search + Category */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full sm:w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>

          {/* Category Dropdown */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg
                       bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <div className="flex flex-col gap-2 w-full sm:w-64">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Max Price</span>
              <span className="font-medium text-gray-800">{maxPrice}</span>
            </div>

            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Right: Clear Filters */}
        <button
        onClick={() =>{
          setCategory("all");
          setSearch("");
          setMaxPrice(2000);
        }}
          className="self-start sm:self-auto px-4 py-2 rounded-lg border border-gray-300
                     text-gray-600 hover:bg-gray-100 transition"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
