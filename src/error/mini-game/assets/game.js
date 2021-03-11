import { useState } from 'react'
import { Box, HStack, VStack, Flex, Text, Button } from '@chakra-ui/react'

import calculateWinner from '../helpers/calculate-winner'
import Board from './board'

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXisNext] = useState(true)
  const winner = calculateWinner(history[stepNumber])

  const handleClick = i => {
    const timeInHistory = history.slice(0, stepNumber + 1)
    const current = timeInHistory[stepNumber]
    const squares = [...current]
    // If user click an occupied square or if game is won, return
    if (winner || squares[i]) return
    // Put an X or an O in the clicked square
    squares[i] = xIsNext ? '🐱' : '🐭'
    setHistory([...timeInHistory, squares])
    setStepNumber(timeInHistory.length)
    setXisNext(!xIsNext)
  }

  const jumpTo = step => {
    setStepNumber(step)
    setXisNext(step % 2 === 0)
  }

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Got to move #${move}` : `Reset`
      return (
        <HStack spacing={2}>
          <Button
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            variant="outline"
            colorScheme="primary"
            onClick={() => jumpTo(move)}
            mt="2"
          >
            {destination}
          </Button>
        </HStack>
      )
    })

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <Box margin="20px auto">
        <Text fontSize="2xl">
          {winner
            ? `The Winner is: ${winner} 🎉 🎉 🎉 🎉`
            : `Next Player: ` + (xIsNext ? '🐱' : '🐭')}
        </Text>
      </Box>

      <Box margin="20px auto">{renderMoves()}</Box>
    </>
  )
}

export default Game
