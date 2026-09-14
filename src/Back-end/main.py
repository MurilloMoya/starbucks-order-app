from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import get_db
import models
import schemas

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # em produção, restrinja ao domínio real do front
    allow_methods=["*"],
    allow_headers=["*"],
)


# Lista os produtos -> alimenta o dropdown "Produto" do seu form
@app.get("/products", response_model=list[schemas.ProductOut])
def list_products(db: Session = Depends(get_db)):
    return db.query(models.Product).all()


# Cria um pedido -> dispara quando clica em "Adicionar ao pedido"
@app.post("/orders", response_model=schemas.OrderOut)
def create_order(order: schemas.OrderCreate, db: Session = Depends(get_db)):
    product = db.query(models.Product).filter(models.Product.id == order.product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Produto não encontrado")

    new_order = models.Order(
        customer_name=order.customer_name,
        product_id=order.product_id,
        size=order.size,
        quantity=order.quantity,
    )
    db.add(new_order)
    db.commit()
    db.refresh(new_order)
    return new_order


# Deleta um pedido -> dispara quando clica na lixeira
@app.delete("/orders/{order_id}")
def delete_order(order_id: int, db: Session = Depends(get_db)):
    order = db.query(models.Order).filter(models.Order.id == order_id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Pedido não encontrado")

    db.delete(order)
    db.commit()
    return {"detail": "Pedido removido com sucesso"}