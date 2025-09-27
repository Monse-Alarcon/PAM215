function verfificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
    if (usuario === "admin") {
        resolve("Acceso concedido");
    } else {
        reject("Acceso denegado");
    }
    });
    }

    verfificarUsuario("admin")
        .then(res => console.log(res))
        .catch(err => console.error(err));

    verfificarUsuario("Monse")
        .then(res => console.log(res))
        .catch(err => console.error(err));
    