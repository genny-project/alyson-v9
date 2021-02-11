import { useSelector } from 'react-redux'
import {
  Box,
  HStack,
  VStack,
  useDisclosure,
  Collapse,
  IconButton,
  Flex,
  Spacer,
} from '@chakra-ui/react'
import { selectCode } from 'redux/db/selectors'
import { getAttribute } from 'app/SBE/utils/get-columns'
import Text from 'app/DTT/text'
import Image from 'app/DTT/upload/Image'
import ContextMenu from 'app/BE/context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faInfo } from '@fortawesome/free-solid-svg-icons'
import PickedAttribute from 'app/SBE/lane/PickedAttribute'
import statusColors from './status_colors'
import MainDetails from './MainDetails'

const Card = ({ parentCode, actions = [], code, columns }) => {
  const title = useSelector(selectCode(code, getAttribute(columns[0])))
  const subTitle = useSelector(selectCode(code, getAttribute(columns[1])))
  const image = useSelector(selectCode(code, 'PRI_IMAGE_URL'))
  const statusColor = useSelector(selectCode(code, 'PRI_STATUS_COLOR'))

  const { isOpen, onToggle } = useDisclosure()

  const color = statusColors[statusColor?.value]

  return (
    <Box bg={color} transition="all 0.2s" p="4" w="xs" h="30" borderWidth="1px" borderRadius="lg">
      <Flex spacing="3">
        <HStack>
          <Image.Read data={image} />
          <VStack alignItems="baseline" w="30">
            <Text.Read
              data={title}
              textProps={{
                fontWeight: 'semibold',
                as: 'h4',
                lineHeight: 'tight',
                isTruncated: true,
                maxW: '14rem',
              }}
            />
            <Text.Read
              textProps={{
                as: 'span',
                color: 'gray.600',
                fontSize: 'sm',
                isTruncated: true,
                maxW: '14rem',
              }}
              data={subTitle}
            />
          </VStack>
        </HStack>
        <Spacer />
        <HStack>
          <IconButton size="xs" onClick={onToggle} icon={<FontAwesomeIcon icon={faInfo} />} />
          <ContextMenu
            actions={actions}
            code={code}
            parentCode={parentCode}
            button={<IconButton variant="ghost" icon={<FontAwesomeIcon icon={faEllipsisV} />} />}
          />
        </HStack>
      </Flex>
      <MainDetails code={code} columns={columns} parentCode={parentCode} />
      <Collapse in={isOpen} animateOpacity>
        <Box p="3">
          <VStack align="left">
            {columns.map(col => (
              <PickedAttribute key={col} col={col} code={code} parentCode={parentCode} />
            ))}
          </VStack>
        </Box>
      </Collapse>
    </Box>
  )
}

export default Card