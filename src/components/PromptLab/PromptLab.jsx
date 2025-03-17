import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import PromptLabNav from "./PromptLabNav";  
import PromptLabNav2 from "./PromptLabNav2";
import StructuredForm from "./StructuredForm";

const PromptLab = () => {
  const [mode, setMode] = useState("Chat");

  return (
    <Box>
      {/* Top Navbar (File Management, AI Guidelines, Save Options) */}
      <PromptLabNav />

      {/* Navbar for Switching Modes */}
      <PromptLabNav2 mode={mode} setMode={setMode} />

      {/* Dynamic Content Section */}
      <Box sx={{ padding: 3 }}>
        {mode === "Chat" && <Typography variant="h5">Chat Mode - Start a conversation with AI</Typography>}
        {mode === "Structured" && <StructuredForm />}
        {mode === "Freeform" && <Typography variant="h5">Freeform Mode - Write freely without constraints</Typography>}
      </Box>
    </Box>
  );
};

export default PromptLab;
