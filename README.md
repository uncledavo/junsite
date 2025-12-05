## Local Development Setup

### Prerequisites
- Node.js (v24.11.1 or compatible) - ✅ Already installed
- npm (comes with Node.js) - ✅ Already installed

### Running the Development Server

1. **Install dependencies** (first time only, or after pulling updates):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   - The server will start at `http://localhost:3000`
   - The page will automatically reload when you make changes to files
   - You'll see any errors in the terminal and browser

4. **Stop the server**:
   - Press `Ctrl + C` in the terminal

### Testing on Mobile Devices

To test your site on your phone or tablet:

1. **Make sure your phone is on the same Wi-Fi network** as your computer

2. **Find your computer's IP address**:
   ```bash
   ifconfig | grep "inet " | grep -v 127.0.0.1
   ```
   Or on macOS, you can also check: System Settings → Network → Wi-Fi → Details

3. **Access from your mobile device**:
   - Open your phone's browser
   - Go to: `http://192.168.50.152:3000` (replace with your actual IP if different)
   - The site will load and update in real-time as you make changes

**Note**: Your computer's IP address is: **192.168.50.152** (this may change if you reconnect to Wi-Fi)

### Making Changes Safely

- Edit files in the `src/` directory
- Changes are visible immediately in the browser (hot reload)
- Test thoroughly before deploying to production
- The development server is only visible on your computer (not public)

### Other Useful Commands

- `npm run build` - Build the production version (for testing before deploy)
- `npm run start` - Run the production build locally
- `npm run lint` - Check for code issues

---

### To Do
- [x] Update mixes as journal entries page, including new tracklist images. Should feature accordions with the name of the mix, toggle to see the small embed + description, and tracklist if available
- [x] Update other mediums page, with embed of the material, title below, stacked (no toggle)
- [x] Change images in other mediums page to be 50%
- [x] Fix issue of bg changing size in other mediums page on toggle
- [x] Add new font
- [ ] Think of design
- [ ] Fix metadata