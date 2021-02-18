import { useToast } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectToast } from 'redux/app/selectors'

const Toast = () => {
  const toast = useToast()
  const newToast = useSelector(selectToast)

  useEffect(() => {
    if (newToast) toast({ description: newToast.message })
  }, [newToast, toast])
  return null
}

export default Toast