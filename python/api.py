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

if __name__ == "__main__":
    app.run(port=5000)
