import { HStack } from '@chakra-ui/layout'
import { useSelector } from 'react-redux'
import { selectCode } from 'redux/db/selectors'
import NavButton from './NavButton'

const NAV_Q_CODE = 'QUE_PROJECT_SIDEBAR_GRP'

const Views = () => {
  const buttons = useSelector(selectCode(NAV_Q_CODE)) || []

  return (
    <HStack zIndex="toast" spacing={8}>
      {buttons.map(code => (
        <NavButton key={code} code={code} questionCode={NAV_Q_CODE} />
      ))}
    </HStack>
  )
}

export default Views
