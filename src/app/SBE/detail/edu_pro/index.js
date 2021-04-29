import { useSelector } from 'react-redux'
import { selectCode, selectRows } from 'redux/db/selectors'
import { Box, HStack, VStack, Divider } from '@chakra-ui/react'
import useApi from 'api'

import getActions from 'app/SBE/utils/get-actions'
import { topHeight } from 'app/SBE/detail/helpers/set-top-height'
import DetailHeader from 'app/layouts/components/header'
import ProfilePicture from 'app/layouts/components/profile_picture'
import DetailSubHeader from 'app/layouts/components/subheader'
import LeftHandDetails from './templates/LeftHandDetails'
import RightHandDetails from './templates/RightHandDetails'

const contactdetails = {
  title: 'Details',
  attributes: ['PRI_MOBILE', 'PRI_LINKEDIN_URL'],
}

const horizontalLayoutDetails = {
  attributes: ['PRI_ABN', 'PRI_PROVIDER_ID', 'PRI_LEGAL_NAME'],
}

const EduProDetail = ({ sbeCode, targetCode }) => {
  const sbe = useSelector(selectCode(sbeCode))
  const rows = useSelector(selectRows(sbeCode))

  const beCode = targetCode ? targetCode : rows?.length ? rows[0] : null

  const addressData = useSelector(selectCode(beCode, 'PRI_ADDRESS_FULL'))
  const address = addressData?.value
  const image = useSelector(selectCode(beCode, 'PRI_IMAGE_URL'))
  const { getImageSrc } = useApi()
  const src = getImageSrc(image?.value)
  const url = useSelector(selectCode(beCode, 'PRI_COMPANY_WEBSITE_URL'))
  const name = useSelector(selectCode(beCode, 'PRI_NAME'))
  const status = useSelector(selectCode(beCode, 'PRI_STATUS'))
  const actions = getActions(sbe)

  if (!beCode) return null

  return (
    <Box
      w="70vw"
      h="100vh"
      style={{
        borderTopLeftRadius: '0.5rem',
        borderTopRightRadius: '0.5rem',
      }}
    >
      <DetailHeader address={address} />
      <ProfilePicture src={src} />

      <VStack pt="5rem" overflow="scroll" h={`calc(100vh - ${topHeight})`}>
        <DetailSubHeader
          url={url}
          name={name}
          beCode={beCode}
          sbeCode={sbeCode}
          actions={actions}
        />

        <HStack w="65vw" align="start" pt="5" spacing="5">
          <LeftHandDetails
            beCode={beCode}
            contactdetails={contactdetails}
            horizontalLayoutDetails={horizontalLayoutDetails}
            status={status}
          />
          <Divider orientation="vertical" />
          <RightHandDetails beCode={beCode} />
        </HStack>
      </VStack>
    </Box>
  )
}

export default EduProDetail