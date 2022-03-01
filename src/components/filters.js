function Filters({ classifications, selectEvents, setisLoading }) {
  return (
    <>
      <h2>Filter your events</h2>
      
      
      <div className="filter__buttons">
          {console.log(classifications)}
          {classifications.map(({ segment }) => {
            return (<>
                <footer className="pv4 ph2 tc-l ">
                    <a className="btn_cursor no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" title={segment.name} key={segment.name}
                onClick={(event) => {
                  {
                    setisLoading(true)
                    selectEvents(segment.id);
                    event.preventDefault();
                  }
                }}>
                    
                    <span className="f6 ml3 pr2">{segment.name}</span>
                    </a>
                </footer>
              </>
            );
          })}
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
