# Resume Reviewer

A full-stack web application that provides AI-powered resume analysis and feedback using Groq's language models. The application allows users to upload PDF resumes and receive comprehensive feedback including strengths, weaknesses, suggestions, ATS compatibility scores, and improved summaries.

## 🏗️ Project Structure

```
Resume-Reviewer/
├── Backend/                 # Node.js/Express API server
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   ├── .env               # Environment variables (create this)
│   └── uploads/           # Temporary file storage
├── Frontend/               # Angular web application
│   ├── src/               # Angular source code
│   ├── package.json       # Frontend dependencies
│   └── angular.json       # Angular configuration
└── README.md              # This file
```

## 🚀 Features

### Core Functionality
- **PDF Resume Upload**: Upload PDF files for analysis with drag-and-drop support
- **AI-Powered Analysis**: Uses Groq's language models for intelligent resume review
- **Comprehensive Feedback**: 
  - Strengths and weaknesses analysis
  - Actionable suggestions for improvement
  - ATS (Applicant Tracking System) compatibility score with color-coded visualization
  - Improved resume summary
- **Download Reports**: Export analysis results as text files

### Modern UI/UX Features
- **Glassmorphic Design**: Modern glassmorphism effects with backdrop blur
- **Gradient Backgrounds**: Beautiful purple-blue gradient backgrounds
- **Advanced Animations**: 
  - Floating logo animation
  - Pulsing upload icons
  - Thinking brain animation during processing
  - Bouncing loading dots
  - Smooth fade-in transitions for results
- **Interactive Elements**:
  - Hover effects on all buttons and cards
  - Drag-and-drop file upload with visual feedback
  - Dynamic ATS score circle with color coding (green/yellow/red)
  - Shimmer effects on buttons
  - Icon animations and transformations
- **Responsive Design**: Fully responsive layout optimized for desktop and mobile
- **Modern Typography**: Clean fonts with gradient text effects
- **Card-Based Layout**: Organized result cards with color-coded headers
- **Smart Navigation**: Back button with glassmorphic design for easy navigation
- **File Management**: File preview with size display and remove functionality

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn**
- **Angular CLI** (v20 or higher)
- **Git**

## 🛠️ Installation & Setup

### Step 1: Clone the Repository

```bash
git clone <your-repository-url>
cd Resume-Reviewer
```

### Step 2: Backend Setup

1. **Navigate to the Backend directory:**
   ```bash
   cd Backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create Environment Variables:**
   Create a `.env` file in the Backend directory with the following content:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```

   **To get your Groq API Key:**
   - Visit [Groq Console](https://console.groq.com/)
   - Sign up or log in
   - Navigate to API Keys section
   - Create a new API key
   - Copy the key and add it to your `.env` file

4. **Start the Backend Server:**
   ```bash
   node server.js
   ```
   
   The backend server will start on `http://localhost:5000`

### Step 3: Frontend Setup

1. **Navigate to the Frontend directory:**
   ```bash
   cd ../Frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the Angular Development Server:**
   ```bash
   ng serve
   ```
   
   The frontend application will start on `http://localhost:4200`

## 🔧 Running the Application

### Method 1: Run Both Services Separately

1. **Terminal 1 - Backend:**
   ```bash
   cd Backend
   node server.js
   ```

2. **Terminal 2 - Frontend:**
   ```bash
   cd Frontend
   ng serve
   ```

3. Open your browser and navigate to `http://localhost:4200`

### Method 2: Run with Concurrent (Optional)

If you prefer running both services with a single command:

1. **Install concurrently globally:**
   ```bash
   npm install -g concurrently
   ```

2. **Create a start script in the root directory** (optional):
   ```json
   {
     "scripts": {
       "start": "concurrently \"cd Backend && node server.js\" \"cd Frontend && ng serve\""
     }
   }
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

## 📁 Environment Variables

### Backend Environment Variables (.env)

| Variable | Description | Required |
|----------|-------------|----------|
| `GROQ_API_KEY` | Your Groq API key for AI processing | Yes |

## 🌐 API Endpoints

### Backend API (Port 5000)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/review` | Upload and analyze a PDF resume |

**Request:** `multipart/form-data` with a file field named "resume"

**Response:** JSON object containing:
```json
{
  "feedback": {
    "strengths": [],
    "weaknesses": [],
    "suggestions": [],
    "ats_score": "",
    "improved_summary": ""
  }
}
```

## 🛠️ Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Multer** - File upload handling
- **pdf-parse** - PDF text extraction
- **Groq API** - AI model integration
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **Angular 20** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Angular CLI** - Development tools
- **RxJS** - Reactive programming
- **FontAwesome 6** - Icon library
- **Modern CSS3** - Advanced styling and animations
- **CSS Grid & Flexbox** - Responsive layouts
- **CSS Variables** - Custom properties for theming
- **Backdrop Filter** - Glassmorphism effects
- **CSS Animations** - Smooth transitions and micro-interactions

## 🐛 Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Kill process on port 5000 (Backend)
   lsof -ti:5000 | xargs kill -9
   
   # Kill process on port 4200 (Frontend)
   lsof -ti:4200 | xargs kill -9
   ```

2. **API Key Issues**
   - Ensure your `.env` file is in the Backend directory
   - Verify your Groq API key is valid and has sufficient credits
   - Restart the backend server after updating the `.env` file

3. **PDF Upload Issues**
   - Ensure the uploaded file is a valid PDF
   - Check file size limits (default: ~50MB)
   - Verify the uploads directory exists and has write permissions

4. **Angular Build Issues**
   ```bash
   # Clear Angular cache
   ng cache clean
   
   # Delete node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

5. **Backend Dependencies**
   ```bash
   # Clear npm cache and reinstall
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

## 🎨 UI/UX Design

### Design System
- **Color Palette**: Purple-blue gradient theme with semantic color coding
  - Primary: `#6366f1` (Indigo)
  - Success: `#10b981` (Green) for strengths
  - Warning: `#f59e0b` (Amber) for weaknesses
  - Info: `#22d3ee` (Cyan) for suggestions
- **Typography**: Modern sans-serif fonts with gradient text effects
- **Spacing**: Consistent padding and margins using CSS variables
- **Shadows**: Multi-layered shadow system for depth and hierarchy

### Interactive Elements
- **Buttons**: Glassmorphic design with shimmer effects and hover animations
- **Cards**: Elevated cards with color-coded borders and hover transformations
- **File Upload**: Drag-and-drop zone with visual feedback and file preview
- **Loading States**: Animated brain icon with bouncing dots
- **Score Visualization**: Dynamic circular progress indicators

### Animations
- **Micro-interactions**: Button hover states, icon transformations
- **Page Transitions**: Smooth fade-in effects for results
- **Loading Animations**: Thinking brain, bouncing dots, pulsing icons
- **Hover Effects**: Card elevations, button scaling, icon movements

### Responsive Design
- **Mobile-First**: Optimized for devices 320px and up
- **Breakpoints**: 768px (tablet), 480px (mobile)
- **Flexible Grid**: CSS Grid with auto-fit for responsive card layouts
- **Touch-Friendly**: Large tap targets and accessible interactions

## 📝 Development Notes

### Backend Architecture
- The backend uses ES6 modules (`"type": "module"` in package.json)
- File uploads are stored temporarily in the `uploads/` directory
- The AI model used is `openai/gpt-oss-20b` via Groq's API
- CORS is enabled for development with the Angular frontend
- Environment variables are managed through `.env` file

### Frontend Architecture
- **Standalone Components**: Angular 20 standalone components architecture
- **Component Structure**: Single component architecture with embedded styles
- **State Management**: Component-level state management with reactive properties
- **File Handling**: Drag-and-drop with FileReader API for client-side validation
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Performance**: Optimized animations using CSS transforms and transitions

### CSS Architecture
- **CSS Variables**: Centralized design tokens for colors, spacing, and effects
- **Component Scoping**: Styles scoped to components using Angular's style isolation
- **Animation Performance**: Hardware-accelerated animations using transform and opacity
- **Responsive Design**: Mobile-first approach with flexible grid systems

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Verify all environment variables are set correctly
3. Ensure both backend and frontend are running
4. Check browser console and terminal logs for error messages

---

**Happy Resume Reviewing! 🚀**
