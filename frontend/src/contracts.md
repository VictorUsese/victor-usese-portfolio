"# Portfolio Website - Backend Integration Contracts

## Current State
Frontend-only portfolio website with mock data in `/app/frontend/src/mock.js`. Admin panel UI is functional but changes are not persisted.

## Backend Requirements

### 1. Database Models (MongoDB)

#### HeroSection Model
```
{
  _id: ObjectId,
  name: String,
  tagline: String,
  subtitle: String,
  quote: String,
  updatedAt: Date
}
```

#### AboutSection Model
```
{
  _id: ObjectId,
  content: String (multiline text),
  updatedAt: Date
}
```

#### Skills Model
```
{
  _id: ObjectId,
  frontend: [String],
  stateManagement: [String],
  backend: [String],
  tools: [String],
  practices: [String],
  familiarWith: [String],
  updatedAt: Date
}
```

#### Experience Model
```
{
  _id: ObjectId,
  title: String,
  company: String,
  location: String,
  period: String,
  achievements: [String],
  order: Number,
  createdAt: Date,
  updatedAt: Date
}
```

#### Project Model
```
{
  _id: ObjectId,
  title: String,
  description: String,
  technologies: [String],
  status: String,
  image: String (URL),
  liveLink: String (optional),
  order: Number,
  createdAt: Date,
  updatedAt: Date
}
```

#### ContactInfo Model
```
{
  _id: ObjectId,
  email: String,
  website: String,
  github: String,
  linkedin: String,
  message: String,
  updatedAt: Date
}
```

### 2. API Endpoints

#### Hero Section
- `GET /api/hero` - Get hero section data
- `PUT /api/hero` - Update hero section data

#### About Section
- `GET /api/about` - Get about section data
- `PUT /api/about` - Update about section data

#### Skills
- `GET /api/skills` - Get all skills data
- `PUT /api/skills` - Update skills data

#### Experience
- `GET /api/experience` - Get all experience entries (sorted by order)
- `POST /api/experience` - Create new experience entry
- `PUT /api/experience/:id` - Update experience entry
- `DELETE /api/experience/:id` - Delete experience entry

#### Projects
- `GET /api/projects` - Get all projects (sorted by order)
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

#### Contact Info
- `GET /api/contact` - Get contact information
- `PUT /api/contact` - Update contact information

### 3. Authentication (for Admin Panel)
- JWT-based authentication
- Admin login endpoint: `POST /api/auth/login`
- Protected routes for all PUT, POST, DELETE operations
- Admin credentials stored securely in database

### 4. Frontend Integration Changes

#### Remove Mock Data
- Delete `/app/frontend/src/mock.js`
- Replace with API calls to backend

#### API Service Layer
Create `/app/frontend/src/services/api.js`:
```javascript
import axios from 'axios';

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const heroAPI = {
  get: () => axios.get(`${API_URL}/hero`),
  update: (data) => axios.put(`${API_URL}/hero`, data)
};

// Similar for other endpoints
```

#### Component Updates
- **Hero.jsx**: Fetch from `/api/hero` on mount
- **About.jsx**: Fetch from `/api/about` on mount
- **Skills.jsx**: Fetch from `/api/skills` on mount
- **Experience.jsx**: Fetch from `/api/experience` on mount
- **Projects.jsx**: Fetch from `/api/projects` on mount
- **Contact.jsx**: Fetch from `/api/contact` on mount
- **Dashboard.jsx**: Implement actual save functionality with API calls

#### Admin Authentication Flow
1. Create login page at `/admin/login`
2. Store JWT token in localStorage
3. Add token to axios headers for protected routes
4. Redirect to dashboard after successful login
5. Logout functionality

### 5. Data Seeding
Create a seed script to populate the database with initial data from mock.js:
- `/app/backend/seed.py`
- Run once to initialize database with Victor's portfolio content

### 6. Error Handling
- Frontend: Display toast notifications for API errors
- Backend: Return appropriate HTTP status codes with error messages
- Loading states while fetching data

### 7. CORS Configuration
- Already configured in backend
- Ensure all new routes are accessible from frontend

## Implementation Order
1. Create database models
2. Implement API endpoints
3. Add authentication system
4. Create seed script and populate database
5. Update frontend components to use API
6. Test all CRUD operations
7. Deploy and verify

## Notes
- Contact form remains frontend-only (no database storage as per requirements)
- All content sections should be editable through admin panel
- Image uploads for projects can be added later (currently using placeholder URLs)
"