import os
from together import Together
from flask import Flask, render_template, request

app = Flask(__name__)

# os.environ['TOGETHER_API_KEY'] = 'f8c8fa4fd70a01169d90a949a82246470d2d0e5620e80f026b4ea7453764598e'

# client = Together(api_key=os.environ.get('TOGETHER_API_KEY'))
client = Together(api_key="f8c8fa4fd70a01169d90a949a82246470d2d0e5620e80f026b4ea7453764598e")

@app.route('/', methods=['GET', 'POST'])
def index():
    response_text = ""
    
    if request.method == 'POST':
        prompt = request.form['prompt']
    
        # response = client.completions.create(
        #     model="meta-llama/Meta-Llama-3-70B",
        #     prompt=prompt,
        # )
        response = client.chat.completions.create(
        model="meta-llama/Llama-3-8b-chat-hf",
        messages=[{"role": "user", "content": f"{prompt}"}],
    )
        
        if response.choices:
            response_text = response.choices[0].message.content
        else:
            response_text = "No response generated"
    
    return render_template('index.html', response_text=response_text)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
