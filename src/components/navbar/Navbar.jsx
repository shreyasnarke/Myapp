import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Collapse,
} from "@mui/material";
import {
  Home as HomeIcon,
  Storage as DataIcon,
  Folder as ProjectsIcon,
  Security as GovernanceIcon,
  Cloud as DeploymentsIcon,
  LibraryBooks as ResourceHubIcon,
  AdminPanelSettings as AdminIcon,
  Support as SupportIcon,
  Notifications as NotificationsIcon,
  AccountCircle,
  ExpandMore as ExpandMoreIcon,
  Room as RoomIcon,
  Help as HelpIcon,
  Upgrade as UpgradeIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedMenus, setExpandedMenus] = useState({});

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Data", icon: <DataIcon /> },
    {
      text: "Projects",
      icon: <ProjectsIcon />, 
      subItems: ["View all projects", "Jobs"],
    },
    {
      text: "AI Governance",
      icon: <GovernanceIcon />, 
      subItems: ["AI use cases", "External models", "Inventories"],
    },
    { text: "Deployments", icon: <DeploymentsIcon /> },
    { text: "Resource Hub", icon: <ResourceHubIcon /> },
    {
      text: "Administration",
      icon: <AdminIcon />,
      subItems: ["Account and billing", "Services", "Access (IAM)", "Configurations and settings"],
    },
    {
      text: "Support",
      icon: <SupportIcon />,
      subItems: ["What's new", "Documentation", "FAQ", "Share an idea", "Manage tickets", "Developer access"],
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ "& .MuiDrawer-paper": { width: 240, backgroundColor: "black", color: "white" } }}
      >
        <Box sx={{ padding: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..."
            size="small"
            sx={{ backgroundColor: "white", borderRadius: 1 }}
            InputProps={{ startAdornment: <SearchIcon sx={{ marginRight: 1 }} /> }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>
        <List>
          {menuItems
            .filter(({ text }) => text.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(({ text, icon, subItems }) => (
              <>
                <ListItem button key={text} onClick={() => subItems ? toggleMenu(text) : setDrawerOpen(false)}>
                  <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
                  <ListItemText primary={text} sx={{ color: "white" }} />
                  {subItems && <ExpandMoreIcon sx={{ color: "white" }} />}
                </ListItem>
                {subItems && (
                  <Collapse in={expandedMenus[text]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {subItems.map((sub) => (
                        <ListItem button key={sub} sx={{ pl: 4 }}>
                          <ListItemText primary={sub} sx={{ color: "white" }} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </>
            ))}
        </List>
      </Drawer>

      <Box sx={{ flexGrow: 1 }}>
        {/* Navbar */}
        <AppBar position="static" sx={{ backgroundColor: "black", color: "white", boxShadow: 1 }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Left Side: Menu Icon + App Name */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: "white" }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">My App</Typography>
            </Box>

            {/* Right Side */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button sx={{ color: "blue", textTransform: "none", fontWeight: "bold" }} startIcon={<UpgradeIcon />}>Upgrade</Button>
              <IconButton sx={{ color: "white" }}>
                <HelpIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <NotificationsIcon />
              </IconButton>
              <Button onClick={handleMenuClick} endIcon={<ExpandMoreIcon />} sx={{ textTransform: "none", color: "white" }}>
                Student
              </Button>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
              <Button endIcon={<RoomIcon />} sx={{ textTransform: "none", color: "white" }}>
                Location
              </Button>
              <IconButton sx={{ color: "white" }}>
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Navbar;
