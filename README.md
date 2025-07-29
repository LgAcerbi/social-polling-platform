# Social Polling Platform

> Important - This project purposes are expand both NX knowledge and backend portfolio

A scalable, real-time polling platform built with TypeScript, Node.js, and MongoDB using a microservices architecture.

Create polls, vote, and see real-time results — all backed by robust backend engineering.

---

## 🔧 Tech Stack

- **Language:** TypeScript
- **Backend:** Node.js (Fastify / Express / NestJS)
- **Database:** MongoDB (Mongoose)
- **Real-time:** WebSocket (Socket.IO)
- **Message Queue:** Redis (BullMQ / PubSub)
- **Auth:** JWT (with refresh token support)
- **Containers:** Docker + Docker Compose

---

## 🧩 Microservices Overview

| Service             | Responsibility                                      |
|---------------------|-----------------------------------------------------|
| **Auth Service**     | User registration, login, JWT issuance              |
| **Poll Service**     | Create, list, and expire polls                      |
| **Vote Service**     | Handles voting and vote validation                  |
| **Results Service**  | Real-time result updates via WebSockets            |
| **Scheduler Service**| Expires polls periodically using a background job   |
| **(Optional) Gateway** | Routes external API calls to the correct service |

---

## ✅ Features

- 🧑‍💼 JWT Authentication (register/login)
- 📊 Create single or multiple-choice polls with expiration
- 🗳️ Vote on active polls with validation and duplication protection
- 🔄 Real-time results via WebSocket
- ⏲️ Scheduler service to expire polls automatically
- 🔌 Microservice communication via Redis
- 🐳 Fully containerized (Docker + Docker Compose)

---


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/social-polling-platform.git
cd social-polling-platform
```

### 2. Setup Environment Variables
Create .env files for each service based on .env.example provided inside each services/* directory.

### 3. Run with Docker Compose
```bash
docker-compose up --build
```
MongoDB, Redis, and all services will run locally via Docker.


# 🧠 Learnings & Concepts
- Microservice orchestration with Docker Compose
- Real-time backend with WebSocket and pub/sub
- MongoDB data modeling for dynamic schemas
- Stateless JWT authentication
- Inter-service messaging via Redis
- Background jobs & task scheduling

# 👤 Author
#### Luiz Acerbi

Backend Software Engineer

GitHub • LinkedIn