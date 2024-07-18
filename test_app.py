import os
from together import Together

client = Together(api_key="f8c8fa4fd70a01169d90a949a82246470d2d0e5620e80f026b4ea7453764598e")

# stream = client.chat.completions.create(
#   model="meta-llama/Llama-3-8b-chat-hf",
#   messages=[{"role": "user", "content": "What are some fun things to do in New York?"}],
#   stream=True,
# )

# for chunk in stream:
#   print(chunk.choices[0].delta.content or "", end="", flush=True)


# import os
# from together import Together

# client = Together(api_key=os.environ.get("TOGETHER_API_KEY"))

response = client.chat.completions.create(
    model="meta-llama/Llama-3-8b-chat-hf",
    messages=[{"role": "user", "content": "What are some fun things to do in New York?"}],
)

print(response.choices[0].message.content)