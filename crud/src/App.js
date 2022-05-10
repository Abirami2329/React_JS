import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const options = ["delete", "Edit"];
function App() {
  const [values, setValue] = useState({});
  const [valueList, setValueList] = useState([]);
  const getElementValue = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setValue((prevalues) => {
      return { ...prevalues, [name]: value };
    });
  };
  const ITEM_HEIGHT = 48;
  const handleSubmit = () => {
    const data = values;
    setValueList((list) => [...list, data]);
    console.log(valueList);
    setValue({});
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
                  value={values.title || ""}
                  onChange={getElementValue}
                />
              </div>
              <br></br>
              <div>
                <TextField
                  required
                  id="author"
                  label="Author"
                  color="secondary"
                  value={values.author || ""}
                  onChange={getElementValue}
                />
              </div>
              <div>
                <TextField
                  required
                  id="publisher"
                  label="Publisher"
                  color="secondary"
                  value={values.publisher || ""}
                  onChange={getElementValue}
                />
              </div>
              <div>
                <TextField
                  id="description"
                  label="Description"
                  multiline
                  rows={4}
                  color="secondary"
                  value={values.description || ""}
                  onChange={getElementValue}
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
                    value={values.price || ""}
                    onChange={getElementValue}
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

        <Grid item xs={6} md={4}>
          <div  className="card">
            {valueList.map((book) => (
              <div>
                <Card sx={{ maxWidth: 345 }} >
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        Book
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings" onClick={handleClick}>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={book.title}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image="./Image/download.jpeg"
                    alt=""
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {book.description}
                    </Typography>
                    <Typography paragraph>PRICE: {book.price}</Typography>
                    <Typography paragraph>AUTHOR: {book.author}</Typography>
                    <Typography paragraph>
                      PUBLISHER: {book.publisher}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
