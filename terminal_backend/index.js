const express = require('express');
const { exec, spawn } = require('child_process');

const app = express();
const port = 3001;

let terminalProcess = null; // To store the terminal process

// API to open a new terminal and establish an SSH connection
app.get('/open-terminal', (req, res) => {
    const sshCommand = 'ssh nobel@192.168.240.225 -p 2121';
    const terminalCommand = `xterm -e "${sshCommand}"`; // Use xterm or another terminal emulator

    // Spawn the terminal process with increased size
    terminalProcess = spawn('xterm', ['-geometry', '120x40', '-e', sshCommand]);

    terminalProcess.on('error', (err) => {
        console.error(`Error opening terminal: ${err.message}`);
        return res.status(500).json({ error: err.message });
    });

    terminalProcess.on('close', (code) => {
        console.log(`Terminal closed with code: ${code}`);
        terminalProcess = null; // Reset the process variable
    });

    res.json({ message: 'Terminal opened' });
});

// API to close the terminal
app.get('/close-terminal', (req, res) => {
    if (terminalProcess) {
        terminalProcess.kill('SIGTERM'); // Send the termination signal to close the terminal
        res.json({ message: 'Terminal closed' });
    } else {
        res.status(400).json({ error: 'No terminal process running' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
