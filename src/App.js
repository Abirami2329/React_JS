import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
//import IconButton from '@mui/material/IconButton';
//import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
//import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import img from './Image/download.jpeg';

function App() {

  const [Title,setTitle]=useState("");
  const [Author,setAuthor]=useState("");
  const [Publisher,setPublisher]=useState("");
  const [Description,setDescription]=useState("");
  const [Price,setPrice]=useState("");
  const [items,setItems]=useState("");
  const [status,setStatus]=useState("add");
  const[counter,setCounter]=useState(1);
  const[id,setId]=useState("");


  const onChangeTitle=(event)=>{
    setTitle(event.target.value);
  }
  const onChangeAuthor=(event)=>{
    setAuthor(event.target.value);
  }
  const onChangePublisher=(event)=>{
    setPublisher(event.target.value);
  }
  const onChangeDescription=(event)=>{
    setDescription(event.target.value);
  }
  const onChangePrice=(event)=>{
    setPrice(event.target.value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(status==="add"){
      let data={id:counter,
        Title,Author,Publisher,Description,Price};
    
    setCounter(counter+1);
    setItems([...items,data]);
  }
  else{
    let update=items.filter(item=>item.id!==id)
    let editedCard={Title,Author,Publisher,Description,Price}
    setItems([...update,editedCard]);
  }
    setTitle("")
    setAuthor("")
    setDescription("")
    setPublisher("")
    setPrice("")
    setStatus("edit")
  }
  const editItem=(id)=>{
    let editData=items.filter(item=>item.id===id)
    setTitle(editData[0].Title)
    setAuthor(editData[0].Author)
    setDescription(editData[0].Description)
    setPublisher(editData[0].Publisher)
    setPrice(editData[0].Price)
    setId(editData[0].id)
  }
  const deleteItem=(id)=>{
    let removeCard=items.filter(item=>item.id !==id)
    setItems(removeCard)
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <b> CRUD OPERATIONS </b>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            className="App"
          >
            <div>
              <div>
                <TextField
                  required
                  id="title"
                  label="Title"
                  color="secondary"
                  value={Title }
                  onChange={onChangeTitle}
                />
              </div>
              <br></br>
              <div>
                <TextField
                  required
                  id="author"
                  label="Author"
                  color="secondary"
                  value={Author }
                  onChange={onChangeAuthor}
                />
              </div>
              <div>
                <TextField
                  required
                  id="publisher"
                  label="Publisher"
                  color="secondary"
                  value={Publisher }
                  onChange={onChangePublisher}
                />
              </div>
              <div>
                <TextField
                  id="description"
                  label="Description"
                  multiline
                  rows={4}
                  color="secondary"
                  value={Description}
                  onChange={onChangeDescription}
                />
              </div>
              <div>
                <FormControl>
                  <InputLabel color="secondary">Price</InputLabel>
                  <OutlinedInput
                    id="price"
                    type="number"
                    startAdornment={
                      <InputAdornment position="start">₹</InputAdornment>
                    }
                    label="Amount"
                    color="secondary"
                    value={Price}
                    onChange={onChangePrice}
                  />
                </FormControl>
              </div>
            </div>
            <br></br>
            <div>
              <Button onClick={handleSubmit} variant="contained">
                SUBMIT
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid>
          <item>
            {
              items && items.map(display => {
                return(
                  <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        
        title={display.Title}
        
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {display.Description}
          <Typography>
          Price:{display.Price}
          </Typography>
          <Typography>
          Author:{display.Author}
          
          </Typography>
          <Typography>
          Publisher:{display.Publisher}
          </Typography>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="delete">
          <DeleteIcon onClick={()=>deleteItem(display.id)}/>
        </IconButton>
        <IconButton aria-label="edit">
          <EditIcon onClick={()=>editItem(display.id)}/>
        </IconButton>
        </CardActions>
      </Card>

                )
              })
            }
          </item>

        </Grid>

      </Grid>
    </div>
  );
}

export default App;
