from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/data')
def get_data():
    return jsonify({'message': 'Hello from Python!'})

if __name__ == '__main__':
    app.run()
