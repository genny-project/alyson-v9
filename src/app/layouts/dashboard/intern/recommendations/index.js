import { useState } from 'react'
import { HStack, Text, VStack } from '@chakra-ui/layout'
import InternshipCard from 'app/layouts/table/intern_internship/InternshipCard'
import { always, compose, either, find, head, identity, includes, split } from 'ramda'
import { useSelector } from 'react-redux'
import { selectKeys, selectRows } from 'redux/db/selectors'
import { getRandomInRange } from 'utils/helpers/get-random'

const Recommendations = () => {
  const sbeCode = compose(
    head,
    split('@'),
    either(identity, always('')),
    find(includes('SBE_INTERN_RECOMMENDATION')),
  )(useSelector(selectKeys))

  const rows = useSelector(selectRows(sbeCode)) || []

  const [randomSlice] = useState(getRandomInRange(0, Math.max(rows.length - 3, 0)))

  if (!rows.length) return null

  return (
    <VStack p="5" borderRadius="lg" boxShadow="dark-lg">
      <Text fontSize="xl" fontWeight="semibold">
        ✨ Congrats! ✨
      </Text>
      <Text fontWeight="semibold">
        We've matched you directly with these available Internships!
      </Text>
      <HStack>
        {rows.slice(randomSlice, randomSlice + 3).map(code => (
          <InternshipCard key={code} code={code} parentCode={sbeCode} />
        ))}
      </HStack>
    </VStack>
  )
}

export default Recommendations