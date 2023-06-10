import { Todo } from '../../pages/auth/access/dadosPage'
import { Card, CardButtons, done} from './styles'

type CardProps = {
    todo: Todo;
    completeTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
  }

export default function index({ todo, completeTodo, deleteTodo }: CardProps) {
    function handleCompleteTodo() {
        completeTodo(todo.id)
      }

    function handleDeleteTodo() {
        deleteTodo(todo.id)
    }
  
    return (
    <>
    <Card className={`Card ${todo.completed ? done : ''}`}>
        <h2>{todo.title}</h2>
        <CardButtons>
            <button className='completed' onClick={handleCompleteTodo}>{todo.completed ? 'Retomar' : 'Completar'}</button>
            <button onClick={handleDeleteTodo}>Deletar</button>
        </CardButtons>
    </Card>
    </>
  )
}
