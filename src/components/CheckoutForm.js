import React, { useState } from 'react';
import { CartContextUse } from '../context/CartContext.js';
import { Container, Button } from 'react-bootstrap';
import { writeBatch, Timestamp, collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firebase/firebase.js';





const CheckoutForm = () =>{

    const { cart, totalPrice } = CartContextUse();

    const batch = writeBatch(db);
    const outOfStock = [];
    const [key, setKey] = useState();
    const [processingOrder, setProcessingOrder] = useState(false);
    const [form, setForm] = useState({ nombre: '', telefono: '', email: '' });

    console.log(form);

    const fillForm = (e) =>{
        const { name, value } = e.target;
        setForm({
            ...form,
            [name] : value,
        });
    };

    

    const checkout = () =>{
        

        const order = {
            buyer: { nombre: form.nombre, telefono: form.telefono, email: form.email },
            items: cart,
            total: totalPrice,
            date: Timestamp.fromDate(new Date()),
        };

        

        if(outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), order).then(({id}) =>{
                batch.commit().then(() =>{
                    setProcessingOrder(true);
                    setKey(id)
                    console.log(id)
                    console.log(order)
                })
            }).catch((error) =>{
                console.log(error, 'error ejecutando la orden')
            })
        }



    }

    return (
        <>
                            <Container className="formDisplay">
                                
                                    <div>
                                        {!processingOrder ? (
                                            <form >
                                            <div>
                                                <h3>Ingrese sus datos para finalizar la compra</h3>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Direccion de Email</label>
                                                <input type="email" class="form-control" name="email" id="email" required onChange={fillForm} />
                                                <div id="emailHelp" class="form-text">No compartiremos sus datos con nadie.</div>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Nombre</label>
                                                <input type="text" class="form-control" name="nombre" id="nombre" required onChange={fillForm} />
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Numero de telefono</label>
                                                <input type="number" class="form-control" name="telefono" id="telefono" required onChange={fillForm} />
                                            </div>
                                            <div className="mb-3">
                                                <p>Total de tu compra: ${totalPrice}</p>
                                            </div>
                                            <Button  className="btn" style={{backgroundColor: "#ED7B30" }} onClick={checkout}>Finalizar Compra</Button>
                                        </form>
                                        ) : (
                                            <div>
                                                <h1 style={{color: "green"}}>Excelente! Tu orden ha sido procesada con éxito.</h1>
                                                <h3>Tu id de compra es: "{key}"</h3>
                                                <p>Se te enviará un mail con los datos de tu compra.</p>                                                    
                                            </div>
                                        )}
                                    </div>
                                    
                                
                                
                            </Container>
        </>

    )
}

export default CheckoutForm;