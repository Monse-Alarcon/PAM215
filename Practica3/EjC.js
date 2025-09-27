function simularPeticionAPI(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 3000);
    });
}

async function obtenerDatos(){
    const resultado = await simularPeticionAPI();
    console.log(resultado);
}

obtenerDatos();