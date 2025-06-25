

const FilterList = ({ filter_type, checkFilter, setTodos, activeLength }) => {

  return (
    <div className="filter-count flex justify-between py-3 px-4 bg-[var(--TodoList-background)]">
      <div className="todos-count text-[var(--task-text)]">
        <span className="todos-length">{activeLength}</span> items left
      </div>
      <div className="filter hidden sm:block">
        <ul className="flex gap-4">
          <li onClick={checkFilter}
            className={`cursor-pointer capitalize ${filter_type === 'all' ? 'active' : 'text-[var(--task-text)]'}`}>all</li>
          <li onClick={checkFilter}
            className={`cursor-pointer capitalize ${filter_type === 'active' ? 'active' : 'text-[var(--task-text)]'}`}>active</li>
          <li onClick={checkFilter}
            className={`cursor-pointer capitalize ${filter_type === 'completed' ? 'active' : 'text-[var(--task-text)]'}`}>completed</li>
        </ul>
      </div>
      <button className="text-[var(--task-text)]" onClick={() => setTodos([])}>Clear completed</button>
    </div>
  )
}


export default FilterList;