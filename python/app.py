from flask import Flask, request, jsonify
from flask_cors import CORS
import insurance
import swap
import oracle

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000"]}})

@app.route('/calculate_insurance', methods=['POST'])
def calculate_insurance():
    data = request.json
    n_days = data.get('days', 0)
    n_vals = data.get('vals', 0)
    deductible_val = data.get('deductible_amount', 0)
    deductible_type = data.get('deductible_type', 'eth')
    
    response = insurance.quote(n_days, n_vals, deductible_val, deductible_type)
    return jsonify(response)

@app.route('/calculate_swap', methods=['POST'])
def calculate_swap():
    data = request.json
    n_days = data.get('days', 0)
    n_vals = data.get('vals', 0)
    
    response = jsonify(swap.quote(n_days, n_vals))
    return response

@app.route('/get_rate', methods=['GET'])
def get_rate():
    try:
        # If deep enough history is available, use chronicle
        rate = oracle.get_wsteth_rate_from_chronicle()
    except:
        rate = oracle.get_wsteth_rate_from_mainnet()
    response = jsonify({'yield': rate})
    return response

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

if __name__ == "__main__":
    app.run(port=5000)
