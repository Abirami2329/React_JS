import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function App() {
  return (
    <div className="App">
      
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }} >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <b> CRUD OPERATIONS </b>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Title"
        />
        </div>
        <br></br>
        </Box>
        <TextareaAutosize
         aria-label="minimum height"
         minRows={5}
         placeholder="Type your content"
          style={{ width: 200 }}
          />
          <br></br>
          <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
         <RadioGroup aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group" >
          <FormControlLabel value="less" control={<Radio />} label="Below 10,000" />
          <FormControlLabel value="medium" control={<Radio />} label="10,000 - 25,000" />
          <FormControlLabel value="high" control={<Radio />} label="Above 25,000" />
        </RadioGroup>
        </FormControl>
        <br></br>
        <Button
        onClick={() => {
        alert('clicked');
        }} >
        Submit
       </Button>
    </div>
  );
}

export default App;
