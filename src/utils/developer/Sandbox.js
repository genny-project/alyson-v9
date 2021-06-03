import { IconButton, VStack } from '@chakra-ui/react'
import { IconHostCpyRep, IconEduProRep, IconIntern } from 'app/layouts/components/im_icons'
import ThemeToggler from 'app/layouts/navigation/ColorToggler'

const Sandbox = () => {
  return (
    <VStack>
      <ThemeToggler />
      <IconButton size="lg" icon={<IconHostCpyRep />} />
      <IconButton size="lg" icon={<IconEduProRep />} />
      <IconButton size="lg" icon={<IconIntern />} />
    </VStack>
  )
}

export default Sandbox
