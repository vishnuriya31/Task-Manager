# 📝 Task Manager App

A **Full Stack Task Manager App** built with **React (Frontend)**, **Node.js (Backend)**, and **MongoDB (Database)**. This application allows users to create, update, delete, and manage their tasks efficiently.

---

## 🚀 Features
✅ Create, Edit, and Delete Tasks  
✅ Mark Tasks as Complete  
✅ Responsive UI with React  
✅ Backend API with Node.js & Express  
✅ MongoDB Database for Storing Tasks  

---

## 🛠️ Tech Stack
- **Frontend**: React.js, HTML, CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Version Control**: Git & GitHub  

---

## 📂 Folder Structure
TaskManager/ │── backend/ # Node.js & Express backend │ ├── models/ # Mongoose models │ ├── routes/ # API routes │ ├── controllers/ # Business logic │ ├── server.js # Entry point for backend │── frontend/ # React frontend │ ├── src/ # React components │ ├── public/ # Static files │ ├── App.js # Main React App │ ├── index.js # React entry point │── .gitignore # Ignore unnecessary files │── README.md # Project documentation │── package.json # Dependencies for frontend/backend │── .env # Environment variables (not included)

yaml
Copy
Edit

---

## ⚙️ Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/YOUR-USERNAME/TaskManager.git
cd TaskManager
2️⃣ Install Dependencies
bash
Copy
Edit
cd backend
npm install
cd ../frontend
npm install
3️⃣ Set Up Environment Variables
Create a .env file inside the backend/ folder:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
4️⃣ Run the Project
Start Backend:

bash
Copy
Edit
cd backend
npm start
Start Frontend:

bash
Copy
Edit
cd frontend
npm start
🛠️ API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create a new task
PUT	/api/tasks/:id	Update a task
DELETE	/api/tasks/:id	Delete a task
📸 Screenshots
(Add screenshots of your UI here)

📝 License
This project is free to use and open-source.

