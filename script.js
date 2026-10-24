
const integrantes = {

    jose: {
        nombre: "José David Rodríguez Zelaya",
        genograma: "genogramas/jose.png"
    },
    jesly: {
        nombre: "Jesly Hassiel Escoto Pineda",
        genograma: "genogramas/jesly.png"
    },
    victor: {
        nombre: "Víctor Alfonso Oviedo Arteaga",
        genograma: "genogramas/victor.png"
    },
    ashling: {
        nombre: "Ashling Michelle Meza Sandigo",
        genograma: "genogramas/ashling.jpg"
    },
    britanny: {
        nombre: "Britanny Isabella Moreno Sandino",
        genograma: "genogramas/britanny.png"
    }
};


/* ==========================================
   INVESTIGACIONES ETNOGRÁFICAS
   CINCO FAMILIAS - INTERCULTURALIDAD UNI
========================================== */

const investigaciones = {

    // FAMILIA DE JOSÉ
    jose: {
        generaciones: [
            {
                titulo: "Primera generación",
                descripcion: "Antecedentes de los bisabuelos.",
                detalle: "En la rama paterna se registran antecedentes en Matagalpa. En la rama materna se identifican antecedentes en Matagalpa y Masaya."
            },
            {
                titulo: "Segunda generación",
                descripcion: "Generación de los abuelos.",
                detalle: "Los abuelos paternos proceden de Masaya y los abuelos maternos de Managua."
            },
            {
                titulo: "Tercera generación",
                descripcion: "Generación de los padres.",
                detalle: "Los nombres, lugares de residencia y experiencias culturales de esta generación están pendientes de incorporarse."
            },
            {
                titulo: "Cuarta generación",
                descripcion: "Generación actual.",
                detalle: "José nació en Managua, vivió un tiempo en Masaya y posteriormente regresó a Managua. Se identifica territorialmente con Masaya."
            }
        ],

        migracion: {
            origen: "Antecedentes familiares en Masaya, Matagalpa y Managua.",
            movimientos: "José ha residido en Managua y Masaya. Un tío y una tía emigraron a España."
        },

        tradiciones: {
            gastronomia: "Baho y nacatamales.",
            celebraciones: "Año Nuevo, Semana Santa, la Purísima, reuniones familiares y cumpleaños.",
            relatos: "Se registran antecedentes de agricultura y comercio como oficios familiares. Los relatos específicos permanecen pendientes de documentación."
        },

        identidad: {
            valores: "Se identifican reuniones y celebraciones familiares. Los valores específicos aún no han sido documentados.",
            lenguaje: "Se mencionan inglés, francés, alemán y otros idiomas, sin identificar qué familiares los hablan.",
            interculturalidad: "Familia de identidad mestiza, con predominio histórico de la religión católica y cambios religiosos. Presenta vínculos con distintos departamentos de Nicaragua y migración hacia España."
        }
    },

    // FAMILIA DE JESLY
    jesly: {
        generaciones: [
            {
                titulo: "Primera generación",
                descripcion: "Antecedentes familiares antiguos.",
                detalle: "Se documenta la presencia de una bisabuela como figura de convivencia familiar. No se especifican todos los datos de esta generación."
            },
            {
                titulo: "Segunda generación",
                descripcion: "Generación de los abuelos.",
                detalle: "Los abuelos proceden de El Cuá, Jinotega."
            },
            {
                titulo: "Tercera generación",
                descripcion: "Generación de los padres.",
                detalle: "Sus padres proceden de El Cuá, Jinotega, y se trasladaron a Managua antes de su nacimiento. Actualmente su madre reside en Managua y su padre en Jinotega."
            },
            {
                titulo: "Cuarta generación",
                descripcion: "Generación actual.",
                detalle: "Jesly nació en Managua. Durante su infancia realizó viajes entre Managua y Jinotega."
            }
        ],

        migracion: {
            origen: "Raíces familiares en El Cuá, departamento de Jinotega.",
            movimientos: "Sus padres se trasladaron de Jinotega a Managua antes de su nacimiento. Se registran viajes familiares entre ambos lugares y tías residentes en el extranjero, sin destinos especificados."
        },

        tradiciones: {
            gastronomia: "No se han confirmado comidas tradicionales específicas.",
            celebraciones: "Cenas de fin de año, cumpleaños familiares y reuniones por el cumpleaños de su bisabuela.",
            relatos: "Se recuerda la convivencia familiar en casa de su bisabuela. Se reportan cambios asociados al distanciamiento familiar y la migración."
        },

        identidad: {
            valores: "La convivencia y las reuniones familiares aparecen en las prácticas documentadas.",
            lenguaje: "No se han confirmado idiomas adicionales al español.",
            interculturalidad: "Predominio de la religión evangélica durante cinco generaciones, según el testimonio familiar. La migración y el distanciamiento han influido en las relaciones familiares. La pertenencia étnica no está confirmada."
        }
    },

    // FAMILIA DE VÍCTOR
    victor: {
        generaciones: [
            {
                titulo: "Primera generación",
                descripcion: "Antecedentes familiares antiguos.",
                detalle: "El genograma documenta cinco generaciones (G1 a G5), con raíces principalmente en Chinandega. La información detallada debe consultarse en el genograma."
            },
            {
                titulo: "Segunda generación",
                descripcion: "Continuidad de las ramas familiares.",
                detalle: "Se identifican las ramas Oviedo Juárez y Arteaga González, vinculadas principalmente con Chinandega."
            },
            {
                titulo: "Tercera generación",
                descripcion: "Antecedentes familiares intermedios.",
                detalle: "Se registran diversos oficios familiares, entre ellos agricultura, comercio, enseñanza, mecánica y administración, sin asignarlos a una generación específica."
            },
            {
                titulo: "Cuarta generación",
                descripcion: "Generaciones recientes.",
                detalle: "Sus padres son Carlos Alfonso Oviedo Juárez y Sandra Rebeca Arteaga González, originarios de Chinandega. En las generaciones jóvenes se documenta el uso del español e inglés."
            }
        ],

        migracion: {
            origen: "Raíces familiares principalmente en Chinandega.",
            movimientos: "Se reportan 19 registros migratorios: 14 internos hacia Managua, Rivas o León, y 5 internacionales hacia Estados Unidos y España. Los registros no representan necesariamente 19 personas diferentes."
        },

        tradiciones: {
            gastronomia: "Nacatamales, indio viejo, baho, vigorón, cajetas, sopas, mariscos y otros platillos tradicionales.",
            celebraciones: "La Purísima y la Gritería, incluyendo la tradición de cantar para recibir dulces. También se documentan reuniones y hospitalidad familiar.",
            relatos: "Se registran remedios tradicionales como té de limón, orégano y jengibre, caña fístula y otras prácticas herbales."
        },

        identidad: {
            valores: "Hospitalidad, convivencia y transmisión de tradiciones familiares.",
            lenguaje: "En las generaciones más jóvenes se documenta español e inglés; uno de sus integrantes está aprendiendo inglés.",
            interculturalidad: "La familia presenta diversidad de oficios, incluyendo agricultura, comercio, enseñanza, mecánica, administración, informática, ingeniería y salud. La religión y pertenencia étnica no están confirmadas."
        }
    },

    // FAMILIA DE ASHLING
    ashling: {
        generaciones: [
            {
                titulo: "Primera generación",
                descripcion: "Antecedentes familiares antiguos.",
                detalle: "Se documenta predominio de la religión católica a lo largo de cuatro generaciones. No se han detallado individualmente los antepasados de esta generación."
            },
            {
                titulo: "Segunda generación",
                descripcion: "Raíces familiares.",
                detalle: "La rama materna tiene antecedentes en Tecolostote y la paterna en Managua."
            },
            {
                titulo: "Tercera generación",
                descripcion: "Generación de los padres.",
                detalle: "Su madre y dos tías se trasladaron de Tecolostote a Managua. Su madre se identifica como cristiana, sin denominación especificada."
            },
            {
                titulo: "Cuarta generación",
                descripcion: "Generación actual.",
                detalle: "Ashling nació en Managua, vivió en Tecolostote y regresó a Managua a los 14 años. Se identifica como cristiana, sin denominación especificada."
            }
        ],

        migracion: {
            origen: "Rama materna de Tecolostote y rama paterna de Managua.",
            movimientos: "Su madre y dos tías migraron de Tecolostote a Managua; un tío se trasladó a Las Banderas. Ashling regresó a Managua a los 14 años. Familiares paternos emigraron a Estados Unidos y España."
        },

        tradiciones: {
            gastronomia: "No se han confirmado comidas tradicionales específicas.",
            celebraciones: "Cenas familiares de fin de año y cumpleaños, algunos celebrados conjuntamente.",
            relatos: "Se documentan experiencias familiares de movilidad entre Tecolostote y Managua."
        },

        identidad: {
            valores: "Las cenas y celebraciones reflejan espacios de convivencia familiar.",
            lenguaje: "No se han confirmado idiomas adicionales.",
            interculturalidad: "Se registra predominio histórico del catolicismo durante cuatro generaciones. Ashling y su madre se identifican como cristianas, sin denominación especificada. La pertenencia étnica no está confirmada."
        }
    },

    // FAMILIA DE BRITANNY
    britanny: {
        generaciones: [
            {
                titulo: "Primera generación",
                descripcion: "Antecedentes familiares antiguos.",
                detalle: "Se registran raíces familiares en la Costa Caribe, Granada, Managua, Río San Juan y Masaya, sin una distribución generacional completa."
            },
            {
                titulo: "Segunda generación",
                descripcion: "Ramas paterna y materna.",
                detalle: "La rama paterna presenta antecedentes en Costa Caribe, Granada, Managua y Río San Juan. La materna en Managua, Costa Caribe, Masaya y Granada."
            },
            {
                titulo: "Tercera generación",
                descripcion: "Generación de los padres.",
                detalle: "Sus padres son Januaryo Moreno Amador y Mirta Javiera Sandino Valverde. El núcleo familiar se encuentra en Managua."
            },
            {
                titulo: "Cuarta generación",
                descripcion: "Generación actual.",
                detalle: "Britanny tiene una hermana llamada Tiffany Julieth. Su núcleo familiar reside en Managua."
            }
        ],

        migracion: {
            origen: "Antecedentes familiares en Costa Caribe, Granada, Managua, Río San Juan y Masaya.",
            movimientos: "Se registran familiares residentes en Estados Unidos y España. Una tía planea regresar desde Estados Unidos. Los desplazamientos internos específicos están pendientes de confirmación."
        },

        tradiciones: {
            gastronomia: "Sopa de queso.",
            celebraciones: "Año Nuevo en Ometepe, Navidad en Granada, reuniones familiares y salidas de sábado.",
            relatos: "Se reportan cambios familiares relacionados con el distanciamiento y la residencia de familiares en el extranjero."
        },

        identidad: {
            valores: "Las reuniones, celebraciones y salidas familiares forman parte de las prácticas documentadas.",
            lenguaje: "No se han confirmado idiomas adicionales.",
            interculturalidad: "Predomina la religión cristiana evangélica. Se mencionan posibles vínculos ancestrales con pueblos Chorotega, Matagalpa y pueblos del Caribe, pero la pertenencia étnica de sus antepasados no está confirmada."
        }
    }
};



const ventana = document.getElementById("ventana-familia");
const titulo = document.getElementById("titulo-familia");
const imagen = document.getElementById("imagen-genograma");
const mensaje = document.getElementById("mensaje-genograma");

const pestanas = [
    "genograma",
    "generaciones",
    "migracion",
    "tradiciones",
    "identidad"
];

let botonAnterior = null;

// ABRIR EXPEDIENTE FAMILIAR
function abrirFamilia(id) {
    const familia = integrantes[id];

    if (!familia) return;

    botonAnterior = document.activeElement;

    titulo.textContent = familia.nombre;
    mostrarInvestigacion(id);

    // Mostrar la primera pestaña
    cambiarPestana("genograma");

    // Preparar imagen
    imagen.hidden = true;
    mensaje.hidden = false;
    mensaje.textContent = "Cargando genograma...";

    imagen.onload = function () {
        imagen.hidden = false;
        mensaje.hidden = true;
    };

    imagen.onerror = function () {
        imagen.hidden = true;
        mensaje.hidden = false;
        mensaje.textContent =
            "No se pudo cargar el genograma.";
    };

    imagen.alt = "Genograma familiar de " + familia.nombre;
    imagen.src = familia.genograma;

    ventana.hidden = false;
    // Actualizar el botón de volver arriba
    actualizarBotonArriba();

    document.body.style.overflow = "hidden";

    ventana.querySelector(".cerrar-modal").focus();
}

// CAMBIAR PESTAÑA
function cambiarPestana(nombre) {
    if (!pestanas.includes(nombre)) return;

    pestanas.forEach(function (pestana) {
        const boton = document.getElementById(
            "tab-" + pestana
        );

        const panel = document.getElementById(
            "panel-" + pestana
        );

        const activa = pestana === nombre;

        boton.classList.toggle("activa", activa);
        boton.setAttribute(
            "aria-selected",
            String(activa)
        );

        panel.hidden = !activa;
    });
}

// CERRAR EXPEDIENTE
function cerrarFamilia() {
    ventana.hidden = true;

    // Actualizar el botón de volver arriba
    actualizarBotonArriba();

    document.body.style.overflow = "";

    imagen.onload = null;
    imagen.onerror = null;

    imagen.removeAttribute("src");
    imagen.hidden = true;

    if (botonAnterior) {
        botonAnterior.focus();
    }
}

// CERRAR CON ESCAPE
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !ventana.hidden) {
        cerrarFamilia();
    }
});

// CERRAR AL HACER CLIC FUERA
ventana.addEventListener("click", function (event) {
    if (event.target === ventana) {
        cerrarFamilia();
    }
});

// AMPLIAR GENOGRAMA
function ampliarGenograma() {
    if (!imagen.src || imagen.hidden) return;

    window.open(
        imagen.src,
        "_blank",
        "noopener,noreferrer"
    );
}

// NAVEGACIÓN DE PESTAÑAS CON FLECHAS
document.querySelectorAll(".pestana").forEach(
    function (boton) {
        boton.addEventListener("keydown", function (event) {
            if (
                event.key !== "ArrowRight" &&
                event.key !== "ArrowLeft"
            ) {
                return;
            }

            event.preventDefault();

            const indiceActual = pestanas.indexOf(
                boton.id.replace("tab-", "")
            );

            const cambio =
                event.key === "ArrowRight" ? 1 : -1;

            const nuevoIndice = (
                indiceActual + cambio + pestanas.length
            ) % pestanas.length;

            const siguiente = pestanas[nuevoIndice];

            cambiarPestana(siguiente);

            document.getElementById(
                "tab-" + siguiente
            ).focus();
        });
    }
);


/* =====================================
   MOSTRAR INVESTIGACIÓN POR FAMILIA
===================================== */

function mostrarInvestigacion(id) {
    const datos = investigaciones[id];

    const generaciones = document.querySelectorAll(
        "#panel-generaciones .tarjeta-expediente"
    );

    const migracion = document.querySelectorAll(
        "#panel-migracion .tarjeta-expediente"
    );

    const tradiciones = document.querySelectorAll(
        "#panel-tradiciones .tarjeta-expediente"
    );

    const identidad = document.querySelectorAll(
        "#panel-identidad .tarjeta-expediente"
    );

    // Restaurar textos cuando aún no hay investigación
    const pendiente = "Información pendiente de investigación.";

    generaciones.forEach((tarjeta) => {
        const parrafos = tarjeta.querySelectorAll("p");
        if (parrafos.length > 1) {
            parrafos[1].textContent = pendiente;
        }
    });

    [...migracion, ...tradiciones, ...identidad].forEach(
        (tarjeta) => {
            const parrafo = tarjeta.querySelector("p");
            if (parrafo) parrafo.textContent = pendiente;
        }
    );

    if (!datos) return;

    // CUATRO GENERACIONES
    datos.generaciones.forEach((generacion, indice) => {
        if (!generaciones[indice]) return;

        const tarjeta = generaciones[indice];

        const titulo = tarjeta.querySelector("h4");
        const parrafos = tarjeta.querySelectorAll("p");

        if (titulo) titulo.textContent = generacion.titulo;

        if (parrafos[0]) {
            parrafos[0].textContent = generacion.descripcion;
        }

        if (parrafos[1]) {
            parrafos[1].textContent = generacion.detalle;
        }
    });

    // MIGRACIÓN
    if (migracion[0]) {
        migracion[0].querySelector("p").textContent =
            datos.migracion.origen;
    }

    if (migracion[1]) {
        migracion[1].querySelector("p").textContent =
            datos.migracion.movimientos;
    }

    // TRADICIONES
    const textosTradiciones = [
        datos.tradiciones.gastronomia,
        datos.tradiciones.celebraciones,
        datos.tradiciones.relatos
    ];

    tradiciones.forEach((tarjeta, indice) => {
        const parrafo = tarjeta.querySelector("p");

        if (parrafo) {
            parrafo.textContent = textosTradiciones[indice];
        }
    });

    // IDENTIDAD
    const textosIdentidad = [
        datos.identidad.valores,
        datos.identidad.lenguaje,
        datos.identidad.interculturalidad
    ];

    identidad.forEach((tarjeta, indice) => {
        const parrafo = tarjeta.querySelector("p");

        if (parrafo) {
            parrafo.textContent = textosIdentidad[indice];
        }
    });
}



document.getElementById("imagen-genograma")
    .addEventListener("keydown", function (event) {

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            ampliarGenograma();
        }

    });


/* ==========================================
   NAVEGACIÓN Y BOTÓN VOLVER ARRIBA
========================================== */

const botonArriba = document.getElementById("volver-arriba");

function actualizarBotonArriba() {
    botonArriba.hidden =
        window.scrollY < 350 || !ventana.hidden;
}

window.addEventListener("scroll", actualizarBotonArriba);

botonArriba.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

actualizarBotonArriba();
