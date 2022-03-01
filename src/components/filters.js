function Filters({ classifications }) {


    return (

        <>
        <h2>Filter your events</h2>
        <div className="filters__container">
                <form>
                 {classifications.map(({segment}) => {
                     console.log(segment.id)
                    return(
                        <button key={segment.name} onClick={() => {
                        }}>{segment.name}</button>
                        )
                    })}
                </form>
        </div>
        </>
    )
}

export default Filters