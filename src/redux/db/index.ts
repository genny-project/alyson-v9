import { forEach } from 'ramda'
import { createSlice } from '@reduxjs/toolkit'
import { newMsg, newCmd } from '../app'
import { formatAsk, formatAttribute, formatBaseEntity } from './utils/format'
import { DBState } from './types'
import { MsgPayload, CmdPayload } from 'redux/types'
import { addKey, removeKey } from './utils/update-keys'

const initialState = {}

const db = createSlice({
  name: 'db',
  initialState: initialState as DBState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(newMsg, (state: DBState, { payload }: { payload: MsgPayload }) => {
      const { items, data_type, aliasCode, parentCode, replace } = payload

      if (replace && parentCode) {
        state[`${parentCode}@rows`] = []
      }

      if (data_type === 'BaseEntity') forEach(formatBaseEntity(state, aliasCode, parentCode), items)
      if (data_type === 'Ask') forEach(formatAsk(state), items)
      if (data_type === 'Attribute') forEach(formatAttribute(state), items)
    })
    builder.addCase(newCmd, (state: DBState, { payload }: { payload: CmdPayload }) => {
      const { cmd_type, code, sourceCode, targetCode } = payload

      if (cmd_type === 'MOVE_ENTITY') {
        if (sourceCode)
          state[`${sourceCode}@rows`] = removeKey(
            state[`${sourceCode}@rows`] as Array<string>,
            code,
          )
        if (targetCode) {
          state[`${targetCode}@rows`] = addKey(state[`${targetCode}@rows`] as Array<string>, code)
        }
      }
    })
  },
})

export default db.reducer