from pydantic import BaseModel

class User(BaseModel):
    username: str
    password: str

class CreateUser(BaseModel):
    username: str
    password: str
    confirm_password: str
