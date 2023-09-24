import './NameItem.css'

export const NameItem = ({ name, isDeletable=false, removeName }) => {
  return (
    <li>
      <p className='name'>{`${name}`}</p>
      {isDeletable && <button onClick={removeName}>delete</button>}
    </li>
  )
}