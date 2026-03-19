import os
from azure.cosmos import CosmosClient
from dotenv import load_dotenv

load_dotenv()

client = CosmosClient(os.getenv("COSMOS_URL"), os.getenv("COSMOS_KEY"))

database = client.create_database_if_not_exists(id="usersdb")
container = database.create_container_if_not_exists(
    id="users",
    partition_key={"paths": ["/username"], "kind": "Hash"}
)
