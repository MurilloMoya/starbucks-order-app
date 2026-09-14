from pydantic import BaseModel
from datetime import datetime


class ProductOut(BaseModel):
    id: int
    name: str
    price_small: float
    price_medium: float
    price_large: float

    class Config:
        from_attributes = True


class OrderCreate(BaseModel):
    customer_name: str
    product_id: int
    size: str
    quantity: int = 1


class OrderOut(BaseModel):
    id: int
    customer_name: str
    product_id: int
    size: str
    quantity: int
    created_at: datetime

    class Config:
        from_attributes = True