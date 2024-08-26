import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

function TodoItem({ todo,fetchDetailsOfCurrentTodo }) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography variant="h5" key={todo} color={"text.secondary"}>
          {todo?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
        onClick={()=>fetchDetailsOfCurrentTodo(todo.id)}
          sx={{
            backgroundColor: "black",
            color: "white",
            opacity: "0.75",
            "&:hover": {
              backgroundColor: "black",
              color: "blue ",
              opacity: "1",
            },
          }}
        >
           Details
        </Button>
      </CardActions>
    </Card>
  );
}
export default TodoItem;
