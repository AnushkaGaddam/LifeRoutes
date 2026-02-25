# LifeRoutes
Smart Ambulance Management System

Project Description:
LifeRoute is an AI-powered emergency response and hospital routing system.
The system helps patients reach the most suitable hospital during medical emergencies.
It selects hospitals based on facility availability, not just distance.
The platform reduces emergency response time and improves coordination between patient, hospital, and traffic systems.

Problem Addressed:
Patients often go to the nearest hospital without knowing if required facilities are available.
Hospitals are not prepared before patient arrival.
Traffic congestion delays ambulances.
There is no smart coordination between hospital, ambulance, and traffic systems.
Emergency severity is not assessed before routing.
The main objective is to ensure the right treatment at the right time.

System Workflow:
User selects emergency type or uses AI Voice or LensAI.
System detects user location.
Nearby hospitals are fetched.
Readiness score is calculated.
Best hospital is selected.
Emergency alert is sent to hospital dashboard.
Route is displayed on map.
Traffic prediction alerts are triggered.
Hospital prepares before ambulance arrival.

Key Features:
Smart Hospital Recommendation: The system intelligently recommends the most suitable hospital based on real-time facility availability and distance from the patient.
Automatic Location Detection: User location is automatically detected to fetch nearby hospitals using OpenStreetMap integration.
Facility-Based Readiness Scoring: Each hospital is assigned a readiness score based on ICU availability, ventilators, trauma care, maternity services, and specialist doctors.
Multi-Language AI Voice Assistant: The platform supports emergency detection in English, Telugu, and Hindi through voice input.
LensAI Severity Detection: An AI-powered module analyzes speech and camera input to classify emergency severity as Stable, Moderate, or Critical.
Real-Time Route Optimization: The application calculates optimized routes using the OSRM routing engine and displays them on an interactive map.
Instant Hospital Alerts: Emergency details and estimated arrival time (ETA) are sent in real-time to the hospital dashboard using Socket.IO.
Traffic Prediction Simulation: The system simulates heavy and moderate traffic zones and adjusts ambulance routing dynamically.
Pre-Arrival Traffic Alerts: Traffic authorities can receive early alerts to clear congestion before the ambulance reaches critical zones.

Hospital Preparation Module: The hospital dashboard enables medical teams to prepare in advance based on real-time patient alerts and ETA updates.
System detects user location.
Nearby hospitals are fetched.
Readiness score is calculated.
Best hospital is selected.
Emergency alert is sent to hospital dashboard.

Setup Instructions:
Clone the repository.
Install Node.js dependencies using npm install.
Start the backend using node server.js.
Open index.html in browser.
Open dashboard.html to view hospital dashboard.
Route is displayed on map.
Traffic prediction alerts are triggered.
Hospital prepares before ambulance arrival.

Future Enhancements:
Integration with real government hospital databases.
Mobile application deployment.
IoT-based vital monitoring integration.
