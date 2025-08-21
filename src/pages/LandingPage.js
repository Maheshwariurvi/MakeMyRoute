import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  AppBar,
  Toolbar,
  Box,
  TextField,
  InputAdornment,
  Chip,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  IconButton,
  ListItemIcon,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleIcon from "@mui/icons-material/People";
import FlightIcon from "@mui/icons-material/Flight";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import HotelIcon from "@mui/icons-material/Hotel";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ShieldIcon from "@mui/icons-material/Shield";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import VehicleList from "./VehicleList";

// AI-generated color palette (travel-inspired)
const colors = {
  primary: "#0d47a1",       // Deep ocean blue
  secondary: "#ff6f00",     // Vibrant sunset orange
  accent: "#43a047",        // Nature green
  light: "#29b6f6",         // Sky blue
  background: "#f5f9ff",    // Light sky background
  textDark: "#263238",      // Dark text
  textLight: "#ffffff",     // White text
  card: "#ffffff",          // Pure white cards
};

const LandingPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // NEW: Travel mode state
  const [travelMode, setTravelMode] = useState("flight"); // 'flight' | 'train' | 'bus'

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // UPDATED: Search now routes based on travelMode
  const handleSearch = () => {
    if (travelMode === "flight") navigate("/flights");
    else if (travelMode === "train") navigate("/trains");
    else if (travelMode === "bus") navigate("/buses");
    else navigate("/search");
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    navigate("/login");
    handleMenuClose();
  };

  const handleRegister = () => {
    navigate("/register");
    handleMenuClose();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    handleMenuClose();
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/profile");
    handleMenuClose();
  };

  const handleMyBookings = () => {
    navigate("/bookings");
    handleMenuClose();
  };

  const featuredDestinations = [
    {
      name: "Paris, France",
      description: "The city of love and lights",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80",
      tags: ["Romantic", "Historical", "Food"],
    },
    {
      name: "Tokyo, Japan",
      description: "Where tradition meets innovation",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80",
      tags: ["Cultural", "Modern", "Shopping"],
    },
    {
      name: "Bali, Indonesia",
      description: "Tropical paradise with stunning beaches",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80",
      tags: ["Beach", "Relaxing", "Adventure"],
    },
  ];

  const travelOptions = [
    {
      icon: <FlightIcon fontSize="large" sx={{ color: colors.light }} />,
      name: "Flights",
      action: () => navigate("/flights"),
    },
    {
      icon: <TrainIcon fontSize="large" sx={{ color: colors.light }} />,
      name: "Trains",
      action: () => navigate("/trains"),
    },
    {
      icon: <DirectionsBusIcon fontSize="large" sx={{ color: colors.light }} />,
      name: "Buses",
      action: () => navigate("/buses"),
    },
  ];

  const deals = [
    { title: "Early Bird Special", discount: "30% OFF", code: "EARLY30" },
    { title: "Weekend Gateway", discount: "Buy 1 Get 1", code: "WEEKEND" },
    { title: "Family Package", discount: "Kids Travel Free", code: "FAMILY" },
  ];

  // Helper: icon for current mode in the select's adornment
  const modeAdornmentIcon =
    travelMode === "flight" ? (
      <FlightIcon color="primary" />
    ) : travelMode === "train" ? (
      <TrainIcon color="primary" />
    ) : (
      <DirectionsBusIcon color="primary" />
    );

  return (
    <Box
      sx={{
        backgroundColor: colors.background,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Modern App Bar */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${colors.primary}20`,
          py: 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.light})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.5px",
              }}
            >
              MakeMyRoute
            </Typography>

            <Box>
              <IconButton
                onClick={handleProfileMenuOpen}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ bgcolor: colors.primary }}>
                  <PersonIcon />
                </Avatar>
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleMenuClose}
                onClick={handleMenuClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.1))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                {isLoggedIn ? (
                  <>
                    <MenuItem onClick={handleProfile}>
                      <ListItemIcon>
                        <AccountCircleIcon fontSize="small" />
                      </ListItemIcon>
                      My Profile
                    </MenuItem>
                    <MenuItem onClick={handleMyBookings}>
                      <ListItemIcon>
                        <BookmarkIcon fontSize="small" />
                      </ListItemIcon>
                      My Bookings
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleLogout}>
                      <ListItemIcon>
                        <ExitToAppIcon fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem onClick={handleLogin}>
                      <ListItemIcon>
                        <ExitToAppIcon fontSize="small" />
                      </ListItemIcon>
                      Login
                    </MenuItem>
                    <MenuItem onClick={handleRegister}>
                      <ListItemIcon>
                        <PersonIcon fontSize="small" />
                      </ListItemIcon>
                      Register
                    </MenuItem>
                  </>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Content - Centered */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {/* Hero Section with Modern Gradient */}
        <Box
          sx={{
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.light})`,
            color: colors.textLight,
            py: 8,
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url("https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.15,
              zIndex: 0,
            },
          }}
        >
          <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <Typography
              variant="h2"
              fontWeight={800}
              gutterBottom
              sx={{
                textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                letterSpacing: "-0.5px",
              }}
            >
              Travel Smarter, Not Harder
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                fontWeight: 300,
                maxWidth: "600px",
                mx: "auto",
                textShadow: "0 1px 2px rgba(0,0,0,0.2)",
              }}
            >
              Find the best routes, compare prices, and book with confidence
            </Typography>

            {/* Search Card - Centered */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: 4,
                  backgroundColor: "rgba(255,255,255,0.95)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  maxWidth: 800,
                  width: "100%",
                }}
              >
                <Grid container spacing={2} alignItems="center">
                  {/* From City */}
                  <Grid item xs={12} md={3}>
                    <TextField
                      fullWidth
                      placeholder="From City or Airport"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationOnIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>

                  {/* To City */}
                  <Grid item xs={12} md={3}>
                    <TextField
                      fullWidth
                      placeholder="To City or Airport"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationOnIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>

                  {/* Date */}
                  <Grid item xs={12} md={2}>
                    <TextField
                      fullWidth
                      type="date"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CalendarTodayIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>

                  {/* Travel Mode Select */}
                  <Grid item xs={12} md={2}>
                    <TextField
                      select
                      fullWidth
                      label="Mode"
                      value={travelMode}
                      onChange={(e) => setTravelMode(e.target.value)}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">{modeAdornmentIcon}</InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    >
                      <MenuItem value="flight">
                        <FlightIcon sx={{ mr: 1 }} /> Flight
                      </MenuItem>
                      <MenuItem value="train">
                        <TrainIcon sx={{ mr: 1 }} /> Train
                      </MenuItem>
                      <MenuItem value="bus">
                        <DirectionsBusIcon sx={{ mr: 1 }} /> Bus
                      </MenuItem>
                    </TextField>
                  </Grid>

                  {/* Search Button */}
                  <Grid item xs={12} md={2}>
                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      startIcon={<SearchIcon />}
                      sx={{
                        height: "56px",
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 700,
                        fontSize: "1rem",
                        backgroundColor: colors.secondary,
                        "&:hover": {
                          backgroundColor: "#e65c00",
                          boxShadow: `0 4px 12px ${colors.secondary}50`,
                        },
                      }}
                      onClick={handleSearch}
                    >
                      Search
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Box>

            {/* Quick Filters - Centered */}
            <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
              {["Round Trip", "One Way", "Multi-City"].map((option) => (
                <Chip
                  key={option}
                  label={option}
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.2)",
                    color: "white",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.3)",
                    },
                  }}
                />
              ))}
            </Box>
          </Container>
        </Box>

        {/* Travel Options - Centered */}
        <Container sx={{ py: 8, textAlign: "center" }}>
          <Typography variant="h4" fontWeight={700} gutterBottom sx={{ color: colors.textDark }}>
            Your Journey, Your Choice
          </Typography>
          <Typography variant="subtitle1" sx={{ color: colors.textDark, mb: 4, maxWidth: "600px", mx: "auto" }}>
            Flexible travel options for every type of traveler
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Grid container spacing={3} sx={{ maxWidth: 1200 }}>
              {travelOptions.map((option, index) => (
                <Grid item xs={12} md={3} key={index}>
                  <Card
                    sx={{
                      textAlign: "center",
                      p: 4,
                      borderRadius: 4,
                      cursor: "pointer",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                      backgroundColor: colors.card,
                      transition: "all 0.3s ease-in-out",
                      border: "1px solid rgba(0,0,0,0.05)",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                        borderColor: `${colors.primary}20`,
                      },
                    }}
                    onClick={option.action}
                  >
                    <Box sx={{ mb: 2 }}>{option.icon}</Box>
                    <Typography variant="h6" fontWeight={700} sx={{ color: colors.textDark }}>
                      {option.name}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>

        {/* Special Offers - Centered */}
        <Box sx={{ py: 6, backgroundColor: "white" }}>
          <Container sx={{ textAlign: "center" }}>
            <Box sx={{ mb: 4 }}>
              <Chip
                label="Limited Time Offers"
                color="primary"
                sx={{
                  backgroundColor: `${colors.secondary}15`,
                  color: colors.secondary,
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  px: 2,
                  py: 1,
                }}
              />
              <Typography variant="h4" fontWeight={700} gutterBottom sx={{ color: colors.textDark, mt: 2 }}>
                Exclusive Travel Deals
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Grid container spacing={3} sx={{ maxWidth: 1200 }}>
                {deals.map((deal, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Card
                      sx={{
                        borderRadius: 4,
                        overflow: "hidden",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.light})`,
                        color: "white",
                        position: "relative",
                        "&:hover": {
                          transform: "scale(1.02)",
                          boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      <CardContent sx={{ p: 4, position: "relative", zIndex: 2 }}>
                        <Typography variant="h5" fontWeight={700} gutterBottom>
                          {deal.title}
                        </Typography>
                        <Typography variant="h3" fontWeight={800} sx={{ my: 2 }}>
                          {deal.discount}
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: 0.9, mb: 3 }}>
                          Use code: <strong>{deal.code}</strong>
                        </Typography>
                        <Button
                          variant="contained"
                          size="large"
                          sx={{
                            backgroundColor: colors.secondary,
                            color: "white",
                            fontWeight: 700,
                            borderRadius: 2,
                            px: 4,
                            "&:hover": {
                              backgroundColor: "#e65c00",
                            },
                          }}
                        >
                          Book Now
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>

        {/* Featured Destinations - Centered */}
        <Box sx={{ py: 8, backgroundColor: colors.background }}>
          <Container sx={{ textAlign: "center" }}>
            <Typography variant="h4" fontWeight={700} gutterBottom sx={{ color: colors.textDark }}>
              Trending Destinations
            </Typography>
            <Typography variant="subtitle1" sx={{ color: colors.textDark, mb: 6, maxWidth: "600px", mx: "auto" }}>
              Discover the most popular destinations this season
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Grid container spacing={4} sx={{ maxWidth: 1200 }}>
                {featuredDestinations.map((destination, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Card
                      sx={{
                        borderRadius: 4,
                        overflow: "hidden",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      <CardMedia component="img" height="240" image={destination.image} alt={destination.name} />
                      <CardContent sx={{ p: 3 }}>
                        <Typography variant="h6" fontWeight={700} sx={{ color: colors.textDark }}>
                          {destination.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: colors.textDark, my: 2 }}>
                          {destination.description}
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
                          {destination.tags.map((tag, idx) => (
                            <Chip
                              key={idx}
                              label={tag}
                              size="small"
                              sx={{
                                backgroundColor: `${colors.light}15`,
                                color: colors.light,
                                fontWeight: 500,
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                      <CardActions sx={{ px: 3, pb: 3 }}>
                        <Button
                          size="medium"
                          variant="contained"
                          sx={{
                            backgroundColor: colors.primary,
                            fontWeight: 600,
                            borderRadius: 2,
                            px: 3,
                            "&:hover": { backgroundColor: "#0b3d91" },
                          }}
                          onClick={() => navigate("/search")}
                        >
                          Book Now
                        </Button>
                        <Button
                          size="medium"
                          variant="outlined"
                          sx={{
                            borderColor: colors.primary,
                            color: colors.primary,
                            fontWeight: 600,
                            borderRadius: 2,
                            px: 3,
                            "&:hover": {
                              backgroundColor: `${colors.primary}10`,
                              borderColor: colors.primary,
                            },
                          }}
                        >
                          Explore
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>

        {/* Value Proposition - Centered */}
        <Box sx={{ py: 8, backgroundColor: "white" }}>
          <Container>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography variant="h4" fontWeight={700} gutterBottom sx={{ color: colors.textDark }}>
                Why Choose MakeMyRoute?
              </Typography>
              <Typography variant="body1" sx={{ color: colors.textDark, maxWidth: 800, mx: "auto" }}>
                We're revolutionizing travel planning with innovative technology and customer-centric services.
              </Typography>
            </Box>

            <Grid container spacing={6} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={6} sx={{ maxWidth: 600 }}>
                <Grid container spacing={3} sx={{ mt: 4 }}>
                  {[
                    {
                      icon: <ShieldIcon fontSize="large" sx={{ color: colors.primary }} />,
                      title: "Secure Booking",
                      desc: "Your data and payments are protected with bank-level security",
                    },
                    {
                      icon: <SupportAgentIcon fontSize="large" sx={{ color: colors.primary }} />,
                      title: "24/7 Support",
                      desc: "Our travel experts are available anytime you need assistance",
                    },
                    {
                      icon: <LocalOfferIcon fontSize="large" sx={{ color: colors.primary }} />,
                      title: "Best Price Guarantee",
                      desc: "Find a lower price? We'll match it and give you extra credit",
                    },
                  ].map((item, index) => (
                    <Grid item xs={12} key={index}>
                      <Box sx={{ display: "flex", gap: 3 }}>
                        <Box sx={{ flexShrink: 0 }}>{item.icon}</Box>
                        <Box sx={{ textAlign: "left" }}>
                          <Typography variant="h6" fontWeight={600} sx={{ color: colors.textDark }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: colors.textDark }}>
                            {item.desc}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} md={6} sx={{ maxWidth: 600 }}>
                <Box
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
                    height: "400px",
                    backgroundImage: `url("https://images.unsplash.com/photo-1551632811-561732d1e306?q=80")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: colors.textDark, color: colors.textLight, py: 6 }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4} sx={{ maxWidth: 400 }}>
              <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
                MakeMyRoute
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                Your journey begins with us. Discover the world with confidence and ease.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                <Button variant="contained" sx={{ backgroundColor: colors.primary }}>
                  <InstagramIcon />
                </Button>
                <Button variant="contained" sx={{ backgroundColor: colors.primary }}>
                  <FacebookIcon />
                </Button>
                <Button variant="contained" sx={{ backgroundColor: colors.primary }}>
                  <TwitterIcon />
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={2} sx={{ maxWidth: 200 }}>
              <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                Company
              </Typography>
              {["About Us", "Careers", "Blog", "Press"].map((item) => (
                <Typography key={item} variant="body2" sx={{ mb: 1, opacity: 0.8, cursor: "pointer", "&:hover": { opacity: 1 } }}>
                  {item}
                </Typography>
              ))}
            </Grid>

            <Grid item xs={12} md={3} sx={{ maxWidth: 300 }}>
              <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                Support
              </Typography>
              {["Help Center", "FAQ", "Cancellation Policy", "Contact Us"].map((item) => (
                <Typography key={item} variant="body2" sx={{ mb: 1, opacity: 0.8, cursor: "pointer", "&:hover": { opacity: 1 } }}>
                  {item}
                </Typography>
              ))}
            </Grid>

            <Grid item xs={12} md={3} sx={{ maxWidth: 300 }}>
              <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                Download App
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Button variant="contained" sx={{ backgroundColor: colors.primary, justifyContent: "flex-start" }}>
                  Google Play
                </Button>
                <Button variant="contained" sx={{ backgroundColor: colors.primary, justifyContent: "flex-start" }}>
                  App Store
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.1)", mt: 4, pt: 4, textAlign: "center" }}>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              © {new Date().getFullYear()} MakeMyRoute Technologies Pvt. Ltd. All Rights Reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
