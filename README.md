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

- **PDF Resume Upload**: Upload PDF files for analysis
- **AI-Powered Analysis**: Uses Groq's language models for intelligent resume review
- **Comprehensive Feedback**: 
  - Strengths and weaknesses analysis
  - Actionable suggestions for improvement
  - ATS (Applicant Tracking System) compatibility score
  - Improved resume summary
- **Modern UI**: Clean and responsive Angular frontend

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

### Frontend
- **Angular 20** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Angular CLI** - Development tools
- **RxJS** - Reactive programming

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

## 📝 Development Notes

- The backend uses ES6 modules (`"type": "module"` in package.json)
- File uploads are stored temporarily in the `uploads/` directory
- The AI model used is `openai/gpt-oss-20b` via Groq's API
- CORS is enabled for development with the Angular frontend

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
