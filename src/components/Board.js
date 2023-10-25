import Square from './Square'
import './Board.css'

function Board() {

  return (
    <section className="board">
      <section className="columns">
        <section className="frontend">
          <h3>Front End</h3>
          <Square value={200} type="frontend" />
          <Square value={400} type="frontend" />
          <Square value={600} type="frontend" />
          <Square value={800} type="frontend" />
          <Square value={1000} type="frontend" />
        </section>
        <section className="backend">
          <h3>Back End</h3>
          <Square value={200} type="backend" />
          <Square value={400} type="backend" />
          <Square value={600} type="backend" />
          <Square value={800} type="backend" />
          <Square value={1000} type="backend" />
        </section>
        <section className="behavioral">
          <h3>Behavioral</h3>
          <Square value={200} type="behavioral" />
          <Square value={400} type="behavioral" />
          <Square value={600} type="behavioral" />
          <Square value={800} type="behavioral" />
          <Square value={1000} type="behavioral" />
        </section>
      </section>
    </section>
  )
}

export default Board;