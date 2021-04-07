import { useSelector } from 'react-redux'
import { selectCode } from 'redux/db/selectors'
import { Text, VStack, HStack, Badge, IconButton, Flex, Spacer } from '@chakra-ui/react'
import getActions from 'app/SBE/utils/get-actions'
import Action from 'app/BE/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { includes } from 'ramda'

const HeroTask = ({ sbeCode, rows }) => {
  const targetCode = rows[0]

  const sbe = useSelector(selectCode(sbeCode))
  const title = useSelector(selectCode(sbeCode, 'SCH_TITLE'))
  const actions = getActions(sbe)
  const validation = useSelector(selectCode(targetCode, 'PRI_VALIDATION'))

  return (
    <HStack w="full">
      <FontAwesomeIcon icon={faFile} />
      <Text>{title?.value}</Text>
      <Spacer w="1rem" />
      {actions
        ?.filter(action => validation?.value === 'Ready' && includes('_DOWNLOAD_', action))
        .map(action => (
          <Action key={action} parentCode={sbeCode} code={action} targetCode={targetCode} />
        ))}
    </HStack>
  )
}

export default HeroTask
