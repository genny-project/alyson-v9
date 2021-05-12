import {
  Text,
  useClipboard,
  useToast,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
} from '@chakra-ui/react'
import phoneNumberFormatter from 'utils/formatters/phone-number'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeroIconButton from 'app/layouts/components/hero_icon_button'
import countryCodeJSON from 'utils/helpers/country-code.json'
import debounce from 'lodash.debounce'
import { useMobileValue } from 'utils/hooks'
import { useState, useEffect } from 'react'

const Read = ({ data, size }) => {
  const { onCopy } = useClipboard(data.value)
  const toast = useToast()

  if (!data?.value) return null

  const onClick = () => {
    onCopy()
    toast({
      title: `${data?.value} copied!`,
      status: 'success',
      duration: 1000,
    })
  }
  return (
    <HStack spacing={2}>
      <HeroIconButton onClick={onClick} icon={<FontAwesomeIcon size="sm" icon={faPhoneAlt} />} />
      <Text w="10rem" fontSize={size}>
        {phoneNumberFormatter(data.value)}
      </Text>
    </HStack>
  )
}

export const Write = ({ questionCode, data, onSendAnswer }) => {
  const countryCode = countryCodeJSON[`${data?.value}`]
  const debouncedSendAnswer = debounce(onSendAnswer, 500)

  return (
    <HStack w={useMobileValue(['100%', '25vw'])}>
      <Image src={`https://www.countryflags.io/${countryCode}/flat/64.png`} alt="..." h="inherit" />
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<Text>{data?.value}</Text>} />
        <Input
          type="tel"
          test-id={questionCode}
          onChange={e => {
            debouncedSendAnswer(e.target.value)
          }}
        />
      </InputGroup>
    </HStack>
  )
}

const Phone = {
  Write,
  Read,
}

export default Phone
