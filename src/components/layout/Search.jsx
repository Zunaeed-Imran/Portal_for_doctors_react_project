

function Search() {
  return (
    <>
      <label className="input input-bordered flex items-center gap-2 bg-yellow-200">
        <input type="text" className="grow" placeholder="Search" />

        <span className="badge badge-info">Filter</span>
      </label>
    </>
  );
}

export default Search
