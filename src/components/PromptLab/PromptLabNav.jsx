import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Button, Switch, Menu, MenuItem, Box } from "@mui/material";
import { Save as SaveIcon, Settings as SettingsIcon, Add as AddIcon, MoreVert as MoreVertIcon } from "@mui/icons-material";

const PromptLabNav = () => {
  const [fileSaved, setFileSaved] = useState(false);
  const [aiGuidelines, setAiGuidelines] = useState(false);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);
  const [saveAnchorEl, setSaveAnchorEl] = useState(null);

  // Handle Save Actions
  const handleSaveFile = () => setFileSaved(true);
  const handleSaveAsClick = (event) => setSaveAnchorEl(event.currentTarget);
  const handleCloseSaveAs = () => setSaveAnchorEl(null);

  // Handle Settings Menu
  const handleSettingsClick = (event) => setSettingsAnchorEl(event.currentTarget);
  const handleCloseSettings = () => setSettingsAnchorEl(null);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#f5f5f5", color: "black", boxShadow: 1 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* File Path Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            /prompt-lab/myfile.txt
          </Typography>
        </Box>

        {/* Right Side Elements */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Save Status with Dropdown */}
          <Button
            variant="text"
            color={fileSaved ? "success" : "error"}
            sx={{ textTransform: "none", display: "flex", alignItems: "center", gap: 1 }}
            onClick={fileSaved ? null : handleSaveAsClick}
          >
            <SaveIcon fontSize="small" />
            {fileSaved ? "Saved" : "Unsaved"}
          </Button>

          {/* Dropdown for "Save As" option */}
          <Menu anchorEl={saveAnchorEl} open={Boolean(saveAnchorEl)} onClose={handleCloseSaveAs}>
            <MenuItem onClick={handleSaveFile}>
              <SaveIcon sx={{ marginRight: 1 }} /> Save As
            </MenuItem>
          </Menu>

          {/* New Prompt Button with + Icon */}
          <Button variant="outlined" size="small" startIcon={<AddIcon />}>
            New Prompt
          </Button>

          {/* AI Guidelines Toggle */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2">AI Guidelines</Typography>
            <Switch checked={aiGuidelines} onChange={() => setAiGuidelines(!aiGuidelines)} />
          </Box>

          {/* Settings Dropdown (Disabled if AI Guidelines OFF) */}
          <IconButton onClick={handleSettingsClick} disabled={!aiGuidelines}>
            <SettingsIcon />
          </IconButton>
          <Menu anchorEl={settingsAnchorEl} open={Boolean(settingsAnchorEl)} onClose={handleCloseSettings}>
            <MenuItem onClick={handleCloseSettings}>Profile</MenuItem>
            <MenuItem onClick={handleCloseSettings}>Preferences</MenuItem>
            <MenuItem onClick={handleCloseSettings}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default PromptLabNav;
