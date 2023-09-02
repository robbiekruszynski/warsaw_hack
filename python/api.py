from flask import Flask, request, jsonify
import insurance

app = Flask(__name__)

@app.route('/calculate_insurance', methods=['POST'])
def calculate_insurance():
    data = request.json
    n_days = data.get('days', 0)
    n_vals = data.get('vals', 0)
    deductible_val = data.get('deductible_amount', 0)
    deductible_type = data.get('deductible_type', 'eth')
    
    response = insurance.quote(n_days, n_vals, deductible_val, deductible_type)
    return jsonify(response)

@app.route('/get_rate', methods=['GET'])
def get_rate():
    try:
        # If deep enough history is available, use chronicle
        rate = insurance.get_wsteth_rate_from_chronicle()
    except:
        rate = insurance.get_wsteth_rate_from_mainnet()
    return jsonify({'yield': rate})

if __name__ == "__main__":
    app.run(port=5000)
