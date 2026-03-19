from fastapi import APIRouter, HTTPException
from app.database import container
from app.models import User, CreateUser

router = APIRouter(prefix="/api")

@router.post("/register")
def register(user: CreateUser):
    if user.password != user.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")

    query = f"SELECT * FROM c WHERE c.username='{user.username}'"
    items = list(container.query_items(query=query, enable_cross_partition_query=True))

    if items:
        raise HTTPException(status_code=400, detail="User already exists")

    container.create_item({
        "id": user.username,
        "username": user.username,
        "password": user.password
    })

    return {"message": "User created successfully"}


@router.post("/login")
def login(user: User):
    query = f"SELECT * FROM c WHERE c.username='{user.username}'"
    items = list(container.query_items(query=query, enable_cross_partition_query=True))

    if not items or items[0]["password"] != user.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return {"message": "Login successful"}
