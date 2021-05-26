import { Button, HStack, VStack, Box, Text, Flex } from '@chakra-ui/react'
import Card from 'app/layouts/components/card'
import { onSendMessage } from 'vertx'
import { map } from 'ramda'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis placerat arcu, tempor rutrum tortor porta quis. Donec aliquam urna ac varius ultrices. Morbi vel dapibus nunc, dictum pretium justo. Nulla non blandit leo. Proin non imperdiet ex. Etiam cursus dignissim sem, nec interdum massa pellentesque eu. Proin condimentum mauris at diam porttitor, a rhoncus nisi semper. Sed sed tincidunt felis, at bibendum sapien. Etiam odio libero, pretium ac condimentum ac, congue ac mi. Aenean efficitur malesuada arcu mattis tempus.'

const items = [
  {
    title: 'Title 1',
    description: description,
    buttonText: 'Button 1',
    completed: true,
  },
  {
    title: 'Title 2',
    description: description,
    buttonText: 'Button 2',
    completed: true,
  },
  {
    title: 'Title 3',
    description: 'description',
    buttonText: 'Button 3',
    completed: false,
  },
  {
    title: 'Title 4',
    description: description,
    buttonText: 'Button 4',
    completed: false,
  },
]

const Timeline = () => {
  const totalItems = items.length
  const numberOfCompletedItems = items.filter(item => item.completed).length
  let progressBarHeight = (numberOfCompletedItems / totalItems) * 100

  return (
    <HStack h="90vh" position="relative" spacing={8} background="yellow">
      <Box h="100%" w="1" background="silver">
        <Flex
          direction="column"
          h="100%"
          justifyContent="space-around"
          display="flex"
          position="absolute"
          ml="-3.5"
        >
          {map(({ completed }) => (
            <Box
              h="8"
              w="8"
              background={completed ? 'green' : 'silver'}
              borderRadius="50%"
              display="flex"
              justifyContent="center"
            >
              {completed ? <FontAwesomeIcon opacity="0.5" icon={faCheck} color="#fff" /> : null}
            </Box>
          ))(items)}
        </Flex>
        <Box h={`${progressBarHeight}%`} w="100%" background="green" />
      </Box>
      <VStack h="100%" justifyContent="space-around" display="flex" position="absolute">
        {map(({ title, description, buttonText }) => (
          <Card>
            <VStack spacing={4} w={['xs', 'md']}>
              <Text textStyle="head.2" alignSelf="flex-start">
                {title}
              </Text>
              <Text textStyle="body.2" noOfLines={[1, 2, 3]} w="inherit">
                {description}
              </Text>
              <Button
                colorScheme="blue"
                onClick={() =>
                  onSendMessage({
                    code: 'QUE_TAB_BUCKET_VIEW',
                    parentCode: 'QUE_TAB_BUCKET_VIEW',
                  })
                }
                size="md"
                alignSelf="flex-end"
              >
                {buttonText}
              </Button>
            </VStack>
          </Card>
        ))(items)}
      </VStack>
    </HStack>
  )
}

export default Timeline
