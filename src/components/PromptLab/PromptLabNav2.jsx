import React from "react";
import { AppBar, Toolbar, ToggleButton, ToggleButtonGroup, Box, Typography, IconButton } from "@mui/material";
import { Settings as SettingsIcon, Description as TxtIcon, Code as CodeIcon, Article as DocIcon } from "@mui/icons-material";

const PromptLabNav2 = ({ mode, setMode }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff", color: "black", boxShadow: 1 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Mode Selection */}
        <Box>
          <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={(event, newMode) => setMode(newMode || mode)} // Prevent null value
            sx={{ border: "1px solid #ccc", borderRadius: "5px", overflow: "hidden" }}
          >
            <ToggleButton value="Chat">Chat</ToggleButton>
            <ToggleButton value="Structured">Structured</ToggleButton>
            <ToggleButton value="Freeform">Freeform</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* AI Model Selection */}
        <Box>
          <Typography variant="body1">
            AI Model: <strong>granite-3-8b-instruct</strong>
          </Typography>
        </Box>

        {/* Right Side Options */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton><SettingsIcon /></IconButton>
          <IconButton><DocIcon /></IconButton>
          <IconButton><TxtIcon /></IconButton>
          <IconButton><CodeIcon /></IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default PromptLabNav2;
