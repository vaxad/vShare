# vShare - Secret Sharing App

vShare is a secret-sharing application deployed on [vercel](https://v-share-obmjob5ot-vaxad.vercel.app/) that provides a platform for users to share their thoughts, experiences, and secrets anonymously. It ensures a secure and confidential environment, allowing users to interact with shared content while maintaining their privacy.

## Features

- **Anonymous Secret Sharing:** Users can post secrets without revealing their identity.
- **User Authentication:** Secure user accounts with signup, login, and profile retrieval functionalities.
- **View and Interact:** Users can view all secrets, their own secrets, like/unlike secrets, and comment on secrets.
- **Comments:** Users can leave comments on secrets to express their thoughts.

## Technology Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **User Authentication:** JWT (JSON Web Tokens)
- **Frontend:** (Not provided in the code)

## Setup

1. Clone the repository:

```bash
git clone https://github.com/vaxad/vShare.git
cd vShare
```

2. Install dependencies:

```bash
cd backend
npm install
```

3. Configure the MongoDB connection:

   - Create a `.env` file in the `backend` directory.
   - Add the following line with your MongoDB connection string:

     ```env
     MONGO_URI=<your-mongo-connection-string>
     JWT_SECRET=<your-jwt-secret>
     ```

4. Run the server:

```bash
npm start
```

The server will start at `http://localhost:5000`.

## API Endpoints

### Backend

#### Secrets

##### 1. Fetch All Secrets

- **Endpoint:** `GET /secrets/`
- **Description:** Retrieve all secrets from the database, excluding user information for anonymity.
- **Middleware:** `fetchuser` - Validates and fetches user information.
- **Response:** Returns an array of secrets.

```javascript
// Example Response
[
  { "_id": "123", "title": "Secret Title", "content": "Confidential content", "createdAt": "2024-01-17T12:00:00Z", "updatedAt": "2024-01-17T12:30:00Z" },
  //...
]
```

##### 2. Add New Secret

- **Endpoint:** `POST /secrets/`
- **Description:** Create and save a new secret in the database.
- **Middleware:** `fetchuser` - Validates and fetches user information.
- **Request Body:** 
  - `title` (string): Secret title.
  - `content` (string): Secret content.
- **Response:** Returns the created secret.

```javascript
// Example Request Body
{
  "title": "New Secret",
  "content": "This is a confidential secret."
}

// Example Response
{
  "_id": "456", "title": "New Secret", "content": "This is a confidential secret.", "createdAt": "2024-01-17T13:00:00Z", "updatedAt": "2024-01-17T13:00:00Z"
}
```

##### 3. Update Secret

- **Endpoint:** `PUT /secrets/:id`
- **Description:** Update an existing secret by ID.
- **Middleware:** `fetchuser` - Validates and fetches user information.
- **Request Body:** 
  - `title` (string, optional): New secret title.
  - `content` (string, optional): New secret content.
- **Response:** Returns the updated secret.

```javascript
// Example Request Body
{
  "title": "Updated Title",
  "content": "Updated content."
}

// Example Response
{
  "_id": "456", "title": "Updated Title", "content": "Updated content.", "createdAt": "2024-01-17T13:00:00Z", "updatedAt": "2024-01-17T13:30:00Z"
}
```

##### 4. Delete Secret

- **Endpoint:** `DELETE /secrets/:id`
- **Description:** Delete a secret by ID.
- **Middleware:** `fetchuser` - Validates and fetches user information.
- **Response:** Returns a success message.

```javascript
// Example Response
{ "message": "This secret was deleted", "secret": { "_id": "456", "title": "Updated Title", "content": "Updated content." } }
```

##### 5. Fetch Secret by ID

- **Endpoint:** `GET /secrets/fetch/:id`
- **Description:** Retrieve a specific secret by ID.
- **Middleware:** `fetchuser` - Validates and fetches user information.
- **Response:** Returns the requested secret.

```javascript
// Example Response
{ "_id": "456", "title": "Updated Title", "content": "Updated content.", "createdAt": "2024-01-17T13:00:00Z", "updatedAt": "2024-01-17T13:30:00Z" }
```

##### 6. Fetch User's Secrets

- **Endpoint:** `GET /secrets/fetchmy`
- **Description:** Retrieve secrets posted by the authenticated user.
- **Middleware:** `fetchuser` - Validates and fetches user information.
- **Response:** Returns an array of user's secrets.

```javascript
// Example Response
[
  { "_id": "456", "title": "Updated Title", "content": "Updated content.", "createdAt": "2024-01-17T13:00:00Z", "updatedAt": "2024-01-17T13:30:00Z" },
  //...
]
```

##### 7. Like/Unlike a Secret

- **Endpoint:** `PATCH /secrets/like/:id`
- **Description:** Toggle like/unlike status for a secret by ID.
- **Middleware:** `fetchuser` - Validates and fetches user information.
- **Response:** Returns the updated secret.

```javascript
// Example Response
{ "_id": "456", "title": "Updated Title", "content": "Updated content.", "likes": ["user1", "user2"], "createdAt": "2024-01-17T13:00:00Z", "updatedAt": "2024-01-17T13:30:00Z" }
```

##### 8. Comment on Secret

- **Endpoint:** `POST /secrets/comment/:id`
- **Description:** Add a comment to a specific secret by ID.
- **Middleware:** `fetchuser` - Validates and fetches user information.
- **Request Body:** 
  - `content` (string): Comment content.
- **Response:** Returns the created comment.

```javascript
// Example Request Body
{
  "content": "Great secret!"
}

// Example Response
{ "_id": "789", "content": "Great secret!", "user": "user1", "about": "456", "createdAt": "2024-01-17T14:00:00Z", "updatedAt": "2024-01-17T14:00:00Z" }
```

##### 9. Fetch Comments on Secret

- **Endpoint:** `GET /secrets/comment/:id`
- **Description:** Retrieve comments for a specific secret by ID.
- **Middleware:** `fetchuser` - Validates and fetches user information.
- **Response:** Returns an array of comments.

```javascript
// Example Response
[
  { "_id": "789", "content": "Great secret!", "user": "user1", "about": "456", "createdAt": "2024-01-17T14:00:00Z", "updatedAt": "2024-01-17T14:00:00Z" },
  //...
]
```

#### Auth

##### 1. Create User (Sign Up)

- **Endpoint:** `POST /auth/signup`
- **Description:** Create a new user account.
- **Request Body:** 
  - `name` (string): User's name.
  - `email` (string): User's email address.
  - `password` (string): User's password (at least one digit, one lowercase and one uppercase letter, and at least 6 characters long).
- **Response:** Returns an authentication token.

```javascript
// Example Request Body
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "StrongPassword123"
}
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

- Landing Page
- Home: Homepage to view/post secrets
- Me: View your shared secrets
- View/[id]: View post with the given id and its comments (Frontend code not provided)

## Contributors

- [Varad](https://vaxad.vercel.app)
