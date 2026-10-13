export const prueba = (req , res)=>{
    console.log('prueba demi primer controlador')
    res.status(200).json({mensaje:'Primer controlador exitoso'})
}
//export aqui existiran muchas funciones