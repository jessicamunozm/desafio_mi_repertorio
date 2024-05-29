import base_de_datos from "../config/base_de_datos.js"

// crear función crud
const traerData = async () => {
    try {
        const consultarCancion = { 
            text: 'SELECT * FROM canciones'
        };
        const response = await base_de_datos.query(consultarCancion);
        return response.rows;
    } catch (error) {
        console.log(error.message);
    }
};

const addData = async (cancion) => {
    
    try {
        const insertarCancion = { 
            text: 'INSERT INTO canciones (id, titulo, artista, tono) VALUES ($1, $2, $3) returning *',
            values: [cancion]
        };
        const response = await base_de_datos.query(insertarCancion);
        return response.rows;
    } catch (error) {
        console.log(error.message);
    }
}        

export {traerData, addData}
