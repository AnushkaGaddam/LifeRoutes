const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const PORT = 5000;

let connectedClients = 0;

io.on("connection", (socket) => {

    connectedClients++;
    console.log("Client connected:", socket.id);
    console.log("Total connected clients:", connectedClients);

    // ===============================
    // PATIENT ALERT (FROM INDEX PAGE)
    // ===============================
    socket.on("patientAlert", (data) => {

        console.log("Patient Alert Received:", data);

        if (!data || !data.location) {
            console.log("Invalid patient data.");
            return;
        }

        io.emit("patientAlert", data);
        console.log("Patient alert broadcasted.");
    });

    // ===============================
    // HOSPITAL PREPARE (5 MIN BEFORE ARRIVAL)
    // ===============================
    socket.on("hospitalPrepare", (data) => {

        console.log("Hospital Prepare Event:", data);

        io.emit("dashboardPrepare", data);

        console.log("Prepare signal sent to dashboards.");
    });

    // ===============================
    // AMBULANCE REACHED
    // ===============================
    socket.on("ambulanceReached", (data) => {

        console.log("Ambulance Reached:", data);

        io.emit("dashboardReached", data);

        console.log("Arrival signal sent to dashboards.");
    });

    // ===============================
    // DISCONNECT
    // ===============================
    socket.on("disconnect", () => {
        connectedClients--;
        console.log("Client disconnected:", socket.id);
        console.log("Total connected clients:", connectedClients);
    });

});

server.listen(PORT, () => {
    console.log("=================================");
    console.log(`Socket.IO Server running on port ${PORT}`);
    console.log("=================================");
});