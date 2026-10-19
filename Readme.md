mongodb+srv://micaelaponce199622_db_user:vimi08@cluster0.dbkq7kv.mongodb.net/


## Endpoints
-Crear servicios :http://localhost:3000/api/servicios/
-metodo: POST
-Enviar un objeto con este formato:
---Crear servicios: `http://localhost:3000/api/servicios/`

Método: `POST`

Enviar un objeto con este formato:

```json
{
  "nombreServicio": "Desarrollo web",
  "precio": 450,
  "categoria": "Desarrollo Web",
  "descripcion": "Desarrollo web de 5 paginas",
  "imagen": "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg"
}
```