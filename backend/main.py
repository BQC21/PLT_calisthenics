from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware

api_router = APIRouter() # direccionador de rutas

def create_app() -> FastAPI:
    app = FastAPI(
        title="PLT API",
        version="0.1.0",
    ) # crear la API

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://127.0.0.1:5173",                     
					"http://localhost:5173"],
        allow_credentials=False,
        allow_methods=["*"],
        allow_headers=["*"],
    ) # definir middleware

    app.include_router(api_router, prefix="/api") # conectar a la carpeta /api

    # Revision del estado de la app
    @app.get("/health")
    def health():
        return {"status": "ok"}

    return app


app = create_app() # crear la app