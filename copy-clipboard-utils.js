const { exec } = require('child_process');
const os = require('os');

function copyToClipboard(text) {
    const platform = os.platform();
    let command;

    if (platform === 'win32') {
        // For Windows
        command = `echo ${text} | clip`;
    } else if (platform === 'darwin') {
        // For macOS
        command = `echo "${text}" | pbcopy`;
    } else if (platform === 'linux') {
        // For Linux
        command = `echo "${text}" | xclip -selection clipboard`;
    } else {
        console.error('❌ Error copying to clipboard: Unsupported platform');
        console.log("");
        return;
    }

    exec(command, (err) => {
        if (err) {
            console.error('❌ Error copying to clipboard:', err);
            console.log("");
        } else {
            console.log('✂️ Copied to clipboard!');
            console.log("");
        }
    });
}

module.exports = copyToClipboard;
