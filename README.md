# Chat App with RabbitMQ, Prometheus, and Grafana

[![Chat App](readme-pic/chat-app.png)](https://nextjs.org/)

A simple chat app built with Next.js to demonstrate the use of RabbitMQ, Prometheus, and Grafana. First learn what they are:

1. **[RabbitMQ](https://www.rabbitmq.com/)**:
   RabbitMQ is an open-source message broker software that enables different applications, services, and systems to communicate with each other by sending and receiving messages. It is based on the Advanced Message Queuing Protocol (AMQP) and supports various messaging patterns, such as point-to-point, publish/subscribe, and request/response. RabbitMQ provides a reliable and scalable messaging solution, making it ideal for decoupling components and building distributed systems.

2. **[Prometheus ](https://prometheus.io/)**:
   Prometheus is an open-source monitoring and alerting toolkit designed for containerized environments and cloud-native applications. It collects time-series data from various sources, such as applications, services, and infrastructure components, and stores it in a time-series database. Prometheus allows you to monitor the performance and health of your systems, set up alerts based on predefined rules, and visualize the data through various graphical interfaces.

3. **[Grafana](https://grafana.com/)**:
   Grafana is an open-source analytics and visualization platform that allows you to create, explore, and share interactive dashboards and graphs. It supports a wide range of data sources, including Prometheus, and provides a user-friendly interface to build custom dashboards for monitoring and visualizing metrics and logs from various sources. Grafana is widely used in DevOps and IT operations for real-time monitoring and observability.

These tools are widely used in modern software development and infrastructure management, and they play a significant role in building scalable, reliable, and observable systems. so lets find out who to implement them in this demo project.

## Prerequisites

Before you proceed, ensure that you have Docker and Docker Compose installed on your system.

## Configuration

Update the environment variables in the `next.config.js` file:

```javascript
env: {
  DB_URL: `mongodb+srv://xxx:xxx@xxx.xxx.mongodb.net/xxx`,
  RABBIT_MQ_USER: "guest",
  RABBIT_MQ_PASSWORD: "guest",
},
```

## Getting Started

To set up the project, follow these steps:

1. Clone the repository and navigate to the project's root directory.

```bash
git clone https://github.com/sunil-9/chat-app.git
cd chat-app
```

2. Run the required Docker Compose script:

```bash
docker-compose up -d
```

## RabbitMQ Server Dashboard

Access the RabbitMQ server dashboard by opening [http://localhost:15672](http://localhost:15672) in your browser. The default username and password are both "guest".

![RabbitMQ Dashboard](readme-pic/rabbitmq.png)

## Setting up Prometheus Dashboard

View the Prometheus dashboard by opening [http://localhost:9090](http://localhost:9090) in your browser.

![Prometheus Dashboard](readme-pic/prometheus.png)

## Setting up Grafana Dashboard

1. Open [http://localhost:3000](http://localhost:3000) in your browser to access the Grafana dashboard.

2. Login using the following credentials:

   - Username: admin
   - Password: admin

3. Add a Prometheus datasource.

4. Import the dashboard using the dashboard ID 10991.

5. Add the datasource to the dashboard.

6. Run the project and explore the dashboard.

![Grafana Dashboard](readme-pic/grafana.png)

## Checking the Web Server

### Using the UI

1. Open [http://localhost:3001](http://localhost:3001) in your browser.

2. Write your name and message, then click the "Send" button to send the message.

### Using ThunderClient Extension

Use the following endpoints with ThunderClient:

- `GET /api/chat`: Get all chat messages.
- `POST /api/chat`: Create a new chat message (data: { name: string, message: string, uniqueId: string }).

This project showcases how to implement RabbitMQ, Prometheus, and Grafana in a Next.js project. Explore and enjoy the Chat App!

---
