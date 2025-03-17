import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import {
  Home as HomeIcon,
  School as SchoolIcon,
} from "@mui/icons-material";

const SideNav = ()=>{
    return(
        <Box sx={{ display: "flex" }}>
            <Drawer
                    variant="permanent"
                    sx={{
                    width: { xs: 60, sm: 200 },
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: { xs: 60, sm: 200 },
                        boxSizing: "border-box",
                    },
                    }}
                >
                    <List>
                    {[
                        { text: "Home", icon: <HomeIcon /> },
                        { text: "Courses", icon: <SchoolIcon /> },
                    ].map((item, index) => (
                        <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText
                            primary={item.text}
                            sx={{ display: { xs: "none", sm: "block" } }}
                            />
                        </ListItemButton>
                        </ListItem>
                    ))}
                    </List>
            </Drawer>
        </Box>
    )
}
export default SideNav;