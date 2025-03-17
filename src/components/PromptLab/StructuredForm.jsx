import React, { useState } from "react";
import { Box, Typography, TextField, Button, IconButton, Paper } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

const StructuredForm = () => {
  const [examples, setExamples] = useState([{ input: "", output: "" }]);

  // Add example row
  const addExample = () => {
    setExamples([...examples, { input: "", output: "" }]);
  };

  // Remove example row
  const removeExample = (index) => {
    setExamples(examples.filter((_, i) => i !== index));
  };

  // Handle input changes
  const handleChange = (index, field, value) => {
    const newExamples = [...examples];
    newExamples[index][field] = value;
    setExamples(newExamples);
  };

  return (
    <Box sx={{ padding: 3 }}>
      {/* Set Up Section */}
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>Set up</Typography>

      {/* Instruction Input */}
      <TextField
        fullWidth
        variant="outlined"
        label="Instruction (optional)"
        placeholder="Tell the model what to do. For example: Summarize the transcript."
        sx={{ my: 2 }}
      />

      {/* Examples Section */}
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>Examples (optional)</Typography>
      {examples.map((example, index) => (
        <Paper key={index} sx={{ display: "flex", alignItems: "center", p: 2, mt: 1 }}>
          <TextField
            label="Input"
            variant="outlined"
            fullWidth
            value={example.input}
            onChange={(e) => handleChange(index, "input", e.target.value)}
            sx={{ mr: 2 }}
          />
          <TextField
            label="Output"
            variant="outlined"
            fullWidth
            value={example.output}
            onChange={(e) => handleChange(index, "output", e.target.value)}
            sx={{ mr: 2 }}
          />
          <IconButton onClick={() => removeExample(index)}><DeleteIcon /></IconButton>
        </Paper>
      ))}
      <Button onClick={addExample} sx={{ mt: 2 }}>+ Add example</Button>

      {/* Try Section */}
      <Typography variant="h6" sx={{ mt: 4, fontWeight: "bold" }}>Try</Typography>
      <Paper sx={{ display: "flex", alignItems: "center", p: 2, mt: 1 }}>
        <TextField label="Input" variant="outlined" fullWidth sx={{ mr: 2 }} />
        <TextField label="Output" variant="outlined" fullWidth sx={{ mr: 2 }} />
      </Paper>
    </Box>
  );
};

export default StructuredForm;
