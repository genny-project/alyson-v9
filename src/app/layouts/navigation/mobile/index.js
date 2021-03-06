import { useRef } from 'react'
import AskMenu from 'app/ASKS/menu'
import {
  Drawer,
  Flex,
  Spacer,
  Image,
  HStack,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  useTheme,
  useDisclosure,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  IconButton,
  Text,
  Button,
  Box,
} from '@chakra-ui/react'
import { apiConfig } from 'config/get-api-config'
import Avatar from '../Avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBolt, faBars } from '@fortawesome/free-solid-svg-icons'
import Buttons from 'app/ASKS/buttons'
import { onSendMessage } from 'vertx'
import Drafts from '../drafts/Drafts'
import { caps, hideQuickAdd } from 'config/caps'
import { useSelector } from 'react-redux'
import { selectCode } from 'redux/db/selectors'
import getUserType from 'utils/helpers/get-user-type'

const MobileNav = () => {
  const theme = useTheme()
  const bg = useColorModeValue(theme.colors.background.light, theme.colors.primary[900])
  const color = useColorModeValue(theme.colors.text.light, theme.colors.text.dark)

  const userCode = useSelector(selectCode('USER'))
  const userType = getUserType(useSelector(selectCode(userCode)))

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <header
        style={{
          color,
          position: 'fixed',
          top: 0,
          zIndex: 9999,
          width: '100%',
          maxWidth: '100vw',
          left: 0,
          right: 0,
          backgroundColor: bg,
          boxShadow: 'rgb(0 0 0 / 10%) 0px 2px 0px 0px',
        }}
      >
        <nav>
          <Flex p="3">
            <IconButton color="gray.600" onClick={onOpen} variant="ghost">
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
            <Box mx={5} w="45px">
              {apiConfig && (
                <Image
                  onClick={() =>
                    onSendMessage({ code: 'QUE_DASHBOARD_VIEW', parentCode: 'QUE_DASHBOARD_VIEW' })
                  }
                  ref={btnRef}
                  src={'/favicon.png'}
                />
              )}
            </Box>
            <Spacer />
            <HStack spacing={5}>
              <Drafts />
              <Avatar />
            </HStack>
          </Flex>
        </nav>
      </header>
      <Drawer
        preserveScrollBarGap
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <HStack spacing="5">
                <AskMenu
                  onClose={onClose}
                  questionCode={'QUE_ADD_ITEMS_GRP'}
                  icon={<Button leftIcon={<FontAwesomeIcon icon={faPlus} />}>Add</Button>}
                />
                {!caps(userType)(hideQuickAdd) && (
                  <AskMenu
                    onClose={onClose}
                    questionCode={'QUE_QUICK_ADD_ITEMS_GRP'}
                    icon={<Button leftIcon={<FontAwesomeIcon icon={faBolt} />}>Quick Add</Button>}
                  />
                )}
              </HStack>
            </DrawerHeader>
            <DrawerBody mt="4">
              <Buttons onClick={onClose} questionCode={'QUE_PROJECT_SIDEBAR_GRP'} />
              <Text textStyle="tail.2" style={{ position: 'absolute', bottom: 5 }}>
                Powered By GADA Technology
              </Text>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default MobileNav
