import { VStack } from '@chakra-ui/react'

import DetailSection from 'app/SBE/detail/default-view/templates/detail-section'
import LinkedSupervisor from './LinkedSupervisor'
import Software from './Software'

const LeftHandDetails = ({ beCode, internshipDetail, linkedSupervisor, software }) => {
  return (
    <VStack align="start">
      <LinkedSupervisor sbeCode={linkedSupervisor} />
      <DetailSection
        config={{ textStyle: 'body2' }}
        noTitle
        code={beCode}
        details={internshipDetail}
      />
      <Software value={software?.value || ''} title={`Software to be Used`} />
    </VStack>
  )
}

export default LeftHandDetails