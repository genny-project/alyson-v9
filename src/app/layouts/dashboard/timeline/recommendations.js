import { map, includes, find } from 'ramda'
import { useSelector } from 'react-redux'
import { Grid, Box, VStack, Text, Spacer, HStack, useColorModeValue } from '@chakra-ui/react'

import { selectDashboard } from 'redux/app/selectors'
import Attribute from 'app/BE/attribute'
import { selectRows } from 'redux/db/selectors'

const Recommendation = ({ setShowDetailView, setCurrentMentor }) => {
  const bg = useColorModeValue('gray.100', 'gray.700')
  const cardsbg = useColorModeValue('#ffffff', 'gray.800')
  const hoverbg = useColorModeValue('teal.300', 'teal.500')

  const dashboardSbes = useSelector(selectDashboard)
  const allMentorsCode = dashboardSbes && find(includes('_SUMMARY_MENTORS_'))(dashboardSbes)
  const allMentors = useSelector(selectRows(allMentorsCode))

  return (
    <Box w="50vw" h="80vh" spacing={10} textAlign="center" p="5" position="sticky" top="10vh">
      <Text
        textStyle="head.2"
        bg={bg}
        py={5}
      >{`Please select a Mentor from the suggestions below!`}</Text>
      <Spacer />
      <Grid gap={10} bg={bg} overflowY="scroll" h="70vh" mt={5} paddingY={5}>
        {allMentors &&
          map(mentor => (
            <HStack
              bg={cardsbg}
              _hover={{ boxShadow: 'dark-lg', rounded: 'md', color: 'white', bg: hoverbg }}
              cursor="pointer"
              w={'70%'}
              p="5"
              onClick={() => {
                setShowDetailView(true)
                setCurrentMentor(mentor)
              }}
              m="auto"
              boxShadow="base"
              rounded="md"
              textAlign="left"
              spacing={10}
              justifyContent="space-around"
            >
              <VStack textAlign="center">
                <Attribute config={{ size: 'xl' }} code={mentor} attribute="PRI_IMAGE_URL" />
                <Spacer />
                <Attribute config={{ textStyle: 'head.2' }} code={mentor} attribute="PRI_NAME" />
              </VStack>

              <VStack display="inline">
                <HStack justifyContent="space-between">
                  <Text>{`Location:`}</Text>
                  <Attribute config={{ textStyle: 'body.2' }} code={mentor} attribute="PRI_NAME" />
                </HStack>
                <HStack justifyContent="space-between">
                  <Text>{`Gender:`}</Text>
                  <Attribute config={{ textStyle: 'body.2' }} code={mentor} attribute="PRI_NAME" />
                </HStack>
                <HStack justifyContent="space-between">
                  <Text>{`Age:`}</Text>
                  <Attribute config={{ textStyle: 'body.2' }} code={mentor} attribute="PRI_NAME" />
                </HStack>
                <HStack justifyContent="space-between">
                  <Text>{`Expertise:`}</Text>
                  <Attribute config={{ textStyle: 'body.2' }} code={mentor} attribute="PRI_NAME" />
                </HStack>
                <HStack justifyContent="space-between">
                  <Text>{`Industry:`}</Text>
                  <Attribute config={{ textStyle: 'body.2' }} code={mentor} attribute="PRI_NAME" />
                </HStack>
                <HStack justifyContent="space-between">
                  <Text>{`Rotary Member?`}</Text>
                  <Attribute config={{ textStyle: 'body.2' }} code={mentor} attribute="PRI_NAME" />
                </HStack>
              </VStack>
            </HStack>
          ))(allMentors)}
      </Grid>
    </Box>
  )
}

export default Recommendation
