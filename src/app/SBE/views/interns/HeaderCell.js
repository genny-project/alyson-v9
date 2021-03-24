import { replace } from 'ramda'
import { IconButton, Th } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { selectCode } from 'redux/db/selectors'
import { onSendAnswer } from 'vertx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const Cell = ({ attribute, parentCode }) => {
  const data = useSelector(selectCode(parentCode, attribute))
  const sort = useSelector(selectCode(parentCode, replace('COL_', 'SRT_', attribute)))

  return (
    <Th>
      {data?.attributeName}
      {sort && (
        <IconButton
          variant="ghost"
          cursor={'pointer'}
          onClick={() =>
            onSendAnswer({
              attributeCode: sort.attributeCode,
              targetCode: sort.baseEntityCode,
              value: sort.value === 'ASC' ? 'DESC' : 'ASC',
            })
          }
          icon={<FontAwesomeIcon icon={sort.value === 'ASC' ? faAngleUp : faAngleDown} />}
        />
      )}
    </Th>
  )
}

export default Cell
