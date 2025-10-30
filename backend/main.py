import random
from fastapi import FastAPI
from quotes import random_quotes
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

#request allowed by backend server from specified origins
origins = [
    'http://localhost:5173',
]


#cores settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



#route sends api response based on category selected by user
@app.get("/randomquote/{category}/")
async def random_random(category:str):
    random_quote=random.choice(random_quotes['quotes'][category])
    quote=random_quote['text']
    author=random_quote['author']
    return {"category":category,"quote":quote,"author":author}
    

