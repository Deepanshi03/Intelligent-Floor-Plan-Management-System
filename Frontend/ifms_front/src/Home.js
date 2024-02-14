import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import map from './map.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import add from './add.jpg'
import view from './view.webp'
import del from './delete.jpg'
import seat from './seat.jpg'
import room from './room.webp'


function Home() {
  return (
    <div className="home-background">
      <div className="content">
        <Typography variant="h4" align="center" gutterBottom sx={{color:"white", fontWeight:'bold', fontSize:'3rem', marginTop:'40%'}}>
          Welcome to Intelligent Floor Plan Management System (IFMS)
        </Typography>
        <img src={map} alt="Example Image" className="home-image" style={{marginTop:'50px'}}/>
        <div className="cards-container" style={{marginTop:'110px', marginBottom:'40px'}}>
          <Card className="card" component={Link} to="/add-floor-map" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' , textDecoration:'none' }}>
            <CardMedia
              component="img"
              height="140"
              image={add}
              alt="Add Floor Map"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Add Floor Map
              </Typography>
            </CardContent>
          </Card>
          
          <Card className="card" component={Link} to="/view-floor-map" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' , textDecoration:'none' }}>
            <CardMedia
              component="img"
              height="140"
              image={view}
              alt="View Floor Map"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Modify Floor Map
              </Typography>
            </CardContent>
          </Card>

          <Card className="card" component={Link} to="/delete-floor-map" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' , textDecoration:'none'}}>
            <CardMedia
              component="img"
              height="140"
              image={del}
              alt="Delete Floor Map"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Delete Floor Map
              </Typography>
            </CardContent>
          </Card>

          <Card className="card" component={Link} to="/book-room" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' , textDecoration:'none' }}>
            <CardMedia
              component="img"
              height="140"
              image={room}
              alt="Book a Room"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Book a Room
              </Typography>
            </CardContent>
          </Card>

          <Card className="card" component={Link} to="/book-seats" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' , textDecoration:'none' }}>
            <CardMedia
              component="img"
              height="140"
              image={seat}
              alt="Book Seats"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Book Seats
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;

