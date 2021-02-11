import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './date-picker.css'
import { Text } from '@chakra-ui/react'
import dateFormatter from 'utils/formatters/date'

const Read = ({ data, size }) => {
  const date = dateFormatter(data?.value)

  if (!date) return null
  return (
    <Text w="8rem" fontSize={size}>
      {date}
    </Text>
  )
}
const Write = ({ data, onSendAnswer }) => {
  return <ReactDatePicker selected={data?.value} onChange={onSendAnswer} isClearable />
}

const DatePicker = {
  Write,
  Read,
}

export default DatePicker