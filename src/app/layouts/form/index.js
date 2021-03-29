import { useSelector } from 'react-redux'
import { includes, not } from 'ramda'
import { selectDisplay, selectForm } from 'redux/app/selectors'
import AsksForm from 'app/ASKS/form'
import {
  CircularProgress,
  Center,
  HStack,
  Box,
  useDisclosure,
  Collapse,
  Button,
} from '@chakra-ui/react'
import BaseEntityDetail from 'app/SBE/detail'
import { selectCode } from 'redux/db/selectors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useIsMobile } from 'utils/hooks'

const Form = ({ onFinish }) => {
  const data = useSelector(selectForm)
  const display = useSelector(selectDisplay)
  const submit = useSelector(selectCode(data, 'QUE_SUBMIT'))
  const { isOpen, onToggle } = useDisclosure()

  const useDetail = includes('DETAIL', display)

  const isMobile = useIsMobile()

  return data ? (
    useDetail ? (
      <HStack m="3" w="full" alignItems="start" justifyContent="center">
        <AsksForm onFinish={onFinish} questionCode={data} />

        {not(isMobile) && (
          <Box>
            <Button
              position="fixed"
              right="5"
              onClick={onToggle}
              leftIcon={<FontAwesomeIcon icon={faEye} />}
            >
              Preview
            </Button>
            <Collapse in={isOpen} animateOpacity>
              <BaseEntityDetail targetCode={submit?.targetCode} />
            </Collapse>
          </Box>
        )}
      </HStack>
    ) : (
      <AsksForm onFinish={onFinish} questionCode={data} />
    )
  ) : (
    <Center>
      <CircularProgress isIndeterminate />
    </Center>
  )
}

export default Form
