# Usage:

## Installing dependencies

Open terminal

### Frontend

```
cd frontend
npm install
```

### Backend

```
cd backend
npm install
```

---

## Creating an .env file

### Frontend

```
cd frontend
code .env
```

```
// Optional
VITE_IP_ADDRESS=<your_ip_address>
// Required
VITE_PORT=5000 // this is the default port used in the project
VITE_IMAGE_HOST=http://localhost:${VITE_PORT}
```

### Backend

```
cd backend
code .env
```

```
IP_ADDRESS=<your_ip_address>
PORT=5000 // this is the default port used in the project
MONGO_URI=<your_mongodb_uri>
```

---

## Running the environment

### Frontend

```
cd frontend
npm run dev
```

### Backend

```
cd backend
npm run dev
```
