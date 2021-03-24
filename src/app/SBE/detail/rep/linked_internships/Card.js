import { useSelector } from 'react-redux'
import { Box, VStack, Flex, Spacer, useColorModeValue, useTheme, Button } from '@chakra-ui/react'
import { selectCode } from 'redux/db/selectors'
import Text from 'app/DTT/text'
import Attribute from 'app/BE/attribute'
import { onSendMessage } from 'vertx'

const Card = ({ code, parentCode }) => {
  const theme = useTheme()
  const title = useSelector(selectCode(code, 'PRI_ASSOC_INDUSTRY'))
  const subTitle = useSelector(selectCode(code, 'PRI_NAME'))

  const defaultColor = useColorModeValue(
    theme.colors.background.light,
    theme.colors.background.dark,
  )

  return (
    <Box bg={defaultColor} p="5" w="full" borderWidth="1px" borderRadius="lg">
      <Flex spacing="3">
        <VStack alignItems="baseline" w="30rem">
          <Text.Read
            data={title}
            config={{
              fontWeight: 'semibold',
              maxW: '25rem',
              fontSize: 'md',
            }}
          />
          <Text.Read
            config={{
              color: 'gray.400',
              fontSize: 'sm',
              maxW: '25rem',
            }}
            data={subTitle}
          />
        </VStack>
        <Spacer />
        <VStack>
          <Attribute code={code} attribute={'PRI_STATUS'} />
          <Button
            size="sm"
            colorScheme="primary"
            onClick={() =>
              onSendMessage({ code: 'ACT_PRI_EVENT_VIEW', targetCode: code, parentCode })
            }
          >
            View
          </Button>
        </VStack>
      </Flex>
    </Box>
  )
}

export default Card