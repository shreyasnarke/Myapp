import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent, TextField, Link as MuiLink } from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom"; // Rename React Router Link

const MainPage = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: "#f4f4f4" }}>
      {/* Welcome Section */}
      <Typography variant="h4" gutterBottom>
        Welcome back, Shreyas
      </Typography>
      <Typography variant="body1" gutterBottom>
        Train, deploy, validate, and govern AI models responsibly.
      </Typography>
      <Button variant="outlined" sx={{ color: "blue", borderColor: "blue" }} endIcon={<ExpandMoreIcon />}>
        Customize my journey
      </Button>

      {/* AI Task Section */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="body2" gutterBottom>
          Open in: Shreyas's sandbox
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1">Chat and build prompts with foundation models</Typography>
                <TextField fullWidth placeholder="Start chatting..." variant="outlined" sx={{ marginTop: 1 }} />
                <MuiLink component={RouterLink} to="/prompt-lab" sx={{ display: "block", marginTop: 2, color: "blue" }}>
                  Open Prompt Lab
                </MuiLink>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1">Build an AI agent to automate tasks</Typography>
                <Typography variant="caption">with Agent Lab</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1">Tune a foundation model with labeled data</Typography>
                <Typography variant="caption">with Tuning Studio</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Recently Visited Section */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6">Jump back in</Typography>
        <Typography variant="body2">Recently visited pages</Typography>
        <Box sx={{ marginTop: 2 }}>
          <MuiLink href="#" sx={{ display: "block", color: "blue" }}>Shreyas's sandbox / RStudio</MuiLink>
          <MuiLink href="#" sx={{ display: "block", color: "blue" }}>Shreyas's sandbox / Prompt Lab</MuiLink>
          <MuiLink href="#" sx={{ display: "block", color: "blue" }}>Home / Deployments</MuiLink>
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;