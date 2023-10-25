import './PointOptions.css'

function PointOptions({value}) {
  return (
    <section className="point-buttons">
      <button value={value}>Full Points</button>
      <button value={0}>No Points</button>
      <button value={100}>Graceful Exit</button>
    </section>
  )
}

export default PointOptions;