import React from 'react'

function TaskItem({
  id,
  titulo,
  concluida,
  alternarTarefa,
  excluirTarefa
}) {
  return (
    <li className={`task-card ${concluida ? 'concluida' : ''}`}>
      <div className="task-info">
        <h3>{titulo}</h3>

        <p className="task-status">
          Status:
          <span className={concluida ? 'status-concluida' : 'status-pendente'}>
            {concluida ? ' Concluída' : ' Pendente'}
          </span>
        </p>
      </div>

      <div>
        {!concluida && (
          <button onClick={() => alternarTarefa(id)}>
            Concluir
          </button>
        )}

        <button onClick={() => excluirTarefa(id)}>
          Excluir
        </button>
      </div>
    </li>
  )
}

export default TaskItem
