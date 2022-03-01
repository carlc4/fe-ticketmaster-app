function Filters({ classifications, getSegmentId, setisLoading }) {
  return (
    <>
      <h2>Filter your events</h2>
      <div className="filters__container">
        <form>
          {classifications.map(({ segment }) => {
            return (
              <button
                key={segment.name}
                onClick={(event) => {
                  {
                    setisLoading(true)
                    getSegmentId(segment.id);
                    event.preventDefault();
                  }
                }}
              >
                {segment.name}
              </button>
            );
          })}
        </form>
      </div>
    </>
  );
}

export default Filters;

// KZFzniwnSyZfZ7v7n1
// KZFzniwnSyZfZ7v7nE
// KZFzniwnSyZfZ7v7nJ
// KZFzniwnSyZfZ7v7na
// KZFzniwnSyZfZ7v7nl
// KZFzniwnSyZfZ7v7nn
