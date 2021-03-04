import sleep from 'utils/helpers/sleep'

test('the difference between the two functions executed should be 1 second by default', async () => {
  const beforeSleep = new Date()
  await sleep()
  const afterSleep = new Date()
  const diff = afterSleep - beforeSleep
  expect(diff).toBeGreaterThan(1000)
  expect(diff).toBeLessThan(1010)
})

test('the difference between the two functions executed should be the time in ms, passed as argument while invoking the function', async () => {
  const beforeSleep = new Date()
  await sleep(3000)
  const afterSleep = new Date()
  const diff = afterSleep - beforeSleep
  expect(diff).toBeGreaterThan(2999)
  expect(diff).toBeLessThan(3010)
})