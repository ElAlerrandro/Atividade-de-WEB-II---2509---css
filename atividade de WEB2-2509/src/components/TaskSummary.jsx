import React from 'react'

function TaskSummary({
  total,
  concluidas,
  pendentes
}) {
  return (
    <section className="summary">
      <h2>Resumo</h2>

      <div className="summary-cards">
        <div className="summary-card">
          <span className="summary-number">{total}</span>
          <span className="summary-label">Total</span>
        </div>

        <div className="summary-card completed">
          <span className="summary-number">{concluidas}</span>
          <span className="summary-label">Concluídas</span>
        </div>

        <div className="summary-card pending">
          <span className="summary-number">{pendentes}</span>
          <span className="summary-label">Pendentes</span>
        </div>
      </div>
    </section>
  )
}

export default TaskSummary
