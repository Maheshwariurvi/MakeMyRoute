import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
  Avatar,
  Rating,
} from "@mui/material";
import {
  EventSeat,
  LocationOn,
  CalendarToday,
  DirectionsBus,
  Train,
  Flight,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import axios from "axios";

// Styled Vehicle Card
const VehicleCard = styled(Card)(({ theme, isFlight, filter }) => ({
  borderRadius: 20,
  overflow: "hidden",
  position: "relative",
  boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
  },
  background: isFlight ? "linear-gradient(135deg, #4facfe, #00f2fe)" : "#fff",
  color: isFlight ? "#fff" : "inherit",
}));

// Gradient price text
const PriceText = styled(Typography)(({ isFlight }) => ({
  fontWeight: 800,
  fontSize: "1.5rem",
  color: isFlight ? "#fff" : "#4facfe",
}));

// Badge for vehicle type
const VehicleBadge = styled(Chip)(({ isFlight }) => ({
  fontWeight: 700,
  textTransform: "uppercase",
  backgroundColor: isFlight ? "rgba(255,255,255,0.3)" : "#4facfe",
  color: isFlight ? "#fff" : "#fff",
}));

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/vehicles")
      .then((res) => setVehicles(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const filteredVehicles = vehicles.filter((v) =>
    ["train", "bus", "flight"].includes(v.type.toLowerCase())
  );

  const getVehicleIcon = (type) => {
    switch (type?.toLowerCase()) {
      case "bus":
        return <DirectionsBus />;
      case "train":
        return <Train />;
      case "flight":
        return <Flight />;
      default:
        return null;
    }
  };

  if (loading)
    return (
      <Typography textAlign="center" mt={10}>
        Loading...
      </Typography>
    );

  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        mb={6}
        sx={{
          background: "linear-gradient(90deg,#4facfe,#00f2fe)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Explore Trains, Buses & Flights
      </Typography>

      <Grid container spacing={5}>
        {filteredVehicles.length === 0 ? (
          <Typography variant="h6" textAlign="center" sx={{ width: "100%" }}>
            Sorry, no vehicles available at the moment.
          </Typography>
        ) : (
          filteredVehicles.map((vehicle) => {
            const isFlight = vehicle.type.toLowerCase() === "flight";

            return (
              <Grid item xs={12} sm={6} md={4} key={vehicle._id}>
                <VehicleCard isFlight={isFlight}>
                  <CardContent sx={{ position: "relative", zIndex: 2 }}>
                    {/* Header */}
                    <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                      <Typography variant="h6" fontWeight={700}>
                        {vehicle.name}
                      </Typography>
                      <VehicleBadge
                        icon={getVehicleIcon(vehicle.type)}
                        label={vehicle.type}
                        isFlight={isFlight}
                        size="small"
                      />
                    </Box>

                    {/* Rating */}
                    <Box display="flex" alignItems="center" mb={2}>
                      <Rating value={4.5} precision={0.5} size="small" readOnly />
                      <Typography variant="body2" sx={{ ml: 1 }}>
                        (128 reviews)
                      </Typography>
                    </Box>

                    {/* Route */}
                    <Box display="flex" alignItems="center" mb={1}>
                      <LocationOn sx={{ mr: 1 }} />
                      <Typography variant="body2">
                        {vehicle.route ? `${vehicle.route.from} → ${vehicle.route.to}` : "N/A"}
                      </Typography>
                    </Box>

                    {/* Seats & Date */}
                    <Box display="flex" justifyContent="space-between" mb={2} mt={1}>
                      <Box display="flex" alignItems="center">
                        <EventSeat sx={{ mr: 0.5 }} />
                        <Typography variant="body2">{vehicle.availableSeats} Seats</Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <CalendarToday sx={{ mr: 0.5 }} />
                        <Typography variant="body2">
                          {vehicle.date ? new Date(vehicle.date).toLocaleDateString() : "N/A"}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Driver/Pilot */}
                    <Box display="flex" alignItems="center" mb={3}>
                      <Avatar sx={{ width: 36, height: 36, mr: 1.5 }}>D</Avatar>
                      <Typography variant="body2">
                        {isFlight ? "Pilot: John D." : "Driver: John D."}
                      </Typography>
                    </Box>

                    {/* Price & Book */}
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <PriceText isFlight={isFlight}>${vehicle.price}</PriceText>
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: 3,
                          px: 4,
                          py: 1.5,
                          fontWeight: 700,
                          backgroundColor: isFlight ? "#fff" : "#4facfe",
                          color: isFlight ? "#00aaff" : "#fff",
                          "&:hover": {
                            opacity: 0.9,
                          },
                        }}
                      >
                        Book Now
                      </Button>
                    </Box>
                  </CardContent>

                  {/* Plane icon overlay */}
                  {isFlight && (
                    <Flight
                      sx={{
                        position: "absolute",
                        top: -10,
                        right: -10,
                        fontSize: 120,
                        color: "rgba(255,255,255,0.15)",
                        transform: "rotate(20deg)",
                        zIndex: 1,
                      }}
                    />
                  )}
                </VehicleCard>
              </Grid>
            );
          })
        )}
      </Grid>
    </Container>
  );
};

export default VehicleList;
