import './NameItem.css'

export const NameItem = ({ firstName, lastName, timesCalled }) => {
  return (
    <li>
      <p className='name'>{`${firstName} ${lastName}`}</p>
      <p>{`Called ${timesCalled} times`}</p>
    </li>
  )
}