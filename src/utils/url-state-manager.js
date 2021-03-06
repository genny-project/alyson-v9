import { includes, split, tail, length } from 'ramda'
import { readParams } from 'utils/pathname'

const urlStateManager = onSendMessage => pathname => {
  if (includes('/home', pathname || '')) {
    const params = tail(split('/', pathname))

    if (length(params) === 1) {
      onSendMessage({
        code: 'QUE_DASHBOARD_VIEW',
        parentCode: 'QUE_DASHBOARD_VIEW',
      })
    } else if (length(params) > 1) {
      onSendMessage(readParams(params))
    }
  }
}

export default urlStateManager
