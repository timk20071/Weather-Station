# Weather Station

This project runs on an raspberry pi, which comunicaties temperature, humidity and a live video of your current weather. <br>
Data between sensor / Camera and Website is transferred with a REST-Api

- Sensor: DHT-11 or DHT-22
- Camera: e.g. Sunfounder Camera v.1.3 or any other which can be connected onto the raspberry pi camera port/Interface

To start the servers, just execute __temp_sensor_server.py__ & __camera_server.py__. <br>
For the next step you can start the react website with __npm run dev -- --host 0.0.0.0__ <br>
Head into a browser and enter the ip of your raspberry pi with __port 5173__.
