# Import necessary libraries
import adafruit_dht #  sudo pip3 install adafruit-circuitpython-dht
import time
import board    
from flask import Flask, jsonify
from flask_cors import CORS # pip install flask_cors

sensor = adafruit_dht.DHT11(board.D4, use_pulseio=False)
app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"temperature": sensor.temperature, "humidity": sensor.humidity})

if __name__ == '__main__':
    app.run(debug=False, host = '0.0.0.0', port=5000)                                                                                