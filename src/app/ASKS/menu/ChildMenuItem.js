import { useSelector } from 'react-redux'
import { selectCode } from 'redux/db/selectors'
import sendAskClick from 'app/ASKS/utils/send-ask-click'
import { MenuItem } from '@chakra-ui/react'

const ChildMenuItem = ({ questionCode, childCode }) => {
  const data = useSelector(selectCode(questionCode, childCode))

  if (!data) return null

  const { name } = data

  const onClick = () => {
    sendAskClick(questionCode, childCode)
    if (name === 'Logout') {
      window.localStorage.setItem('localToken', '')
      window.location.href = window.location.origin
    }
  }

  return <MenuItem onClick={onClick}>{name}</MenuItem>
}

export default ChildMenuItem
