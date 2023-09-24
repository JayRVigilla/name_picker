import './NameItem.css'

export const NameItem = ({ name, timesCalled, showCount=true }) => {
  return (
    <li>
      <p className='name'>{`${name}`}</p>
      {showCount && <p>{`Called ${timesCalled} times`}</p>}
    </li>
  )
}