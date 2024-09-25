import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Menu,
  MenuItem,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import logopic from '../../Assets/logoplant.jpg';

export default function Product() {
  const [openDialog, setOpenDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [data, setData] = useState([]);
  const [selectedPlantIndex, setSelectedPlantIndex] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("plant"));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleMenuClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedPlantIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteClick = () => {
    if (selectedPlantIndex !== null) {
      const updatedData = data.filter((_, index) => index !== selectedPlantIndex);
      setData(updatedData);
      localStorage.setItem("plant", JSON.stringify(updatedData));
    }
    setAnchorEl(null);
    setOpenDialog(false);
  };

  return (
    <div>
      <Grid container spacing={5}>
        {data.map((plant, index) => (
          <Grid item key={index}>
            <Card sx={{ maxWidth: 345, marginBottom: 4, borderRadius: "20px" }}>
              <CardHeader
                avatar={<Avatar alt="logo" src={logopic} />}
                action={
                  <>
                    <IconButton aria-label="settings" onClick={(event) => handleMenuClick(event, index)}>
                      <MoreVertIcon />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                      <MenuItem onClick={handleClickOpen}>Delete</MenuItem>
                    </Menu>
                  </>
                }
                title={<h3 style={{ fontFamily: "Times New Roman" }}>{plant.productname}</h3>}
              />
              <CardMedia
                component="img"
                image={plant.imagelink}
                alt={plant.productname}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {plant.discription}
                </Typography>
                <br />
                <Typography variant="body2" color="black">
                  {plant.availability}: <h2><sup>₹</sup>{plant.price}</h2>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleDeleteClick}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}