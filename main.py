# Import necessary libraries
import adafruit_dht #  sudo pip3 install adafruit-circuitpython-dht
import time
import board
from flask import Flask, jsonify

sensor = adafruit_dht.DHT11(board.D4, use_pulseio=False)
app = Flask(__name__)

@app.route('/api/data')
def get_data():
   
    data = {
        'temperature': 3,#sensor.temperature,
        'humidity': 50, #sensor.humidity,
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
