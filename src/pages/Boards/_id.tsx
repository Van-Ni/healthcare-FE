import { Container } from '@mui/material';
import { AppBar } from '@components/AppBar';
import { BoardBar } from './BoardBar';
import { BoardContent } from './BoardContent';
export const Board = () => {
  return (
    <Container maxWidth={false} sx={{ backgroundColor: 'primary.main'  }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}