/*const datosXML = `<?xml version="1.0" encoding="UTF-8"?>
<biblioteca>
    <item id="001" tipo="articulo_tecnico">
        <imagen_ruta>manual_servidor.png</imagen_ruta>
        <textos>
            <contenido xml:lang="es">
                <titulo>Configuración del Servidor Interno</titulo>
                <descripcion>Guía paso a paso para configurar el entorno local.</descripcion>
            </contenido>
        </textos>
    </item>
</biblioteca>`;

// En lugar de fetch, procesamos directamente la variable de texto 'datosXML'
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(datosXML, "text/xml");

const item = xmlDoc.querySelector(`item[id="${idBuscado}"]`);
if (item) {
    const rutaImagen = item.querySelector('imagen_ruta').textContent;
    const tipoInterno = item.getAttribute('tipo');
    const bloqueTexto = item.querySelector(`contenido[xml\\:lang="${idiomaSeleccionado}"]`);
    
    let titulo = "Sin título";
    let descripcion = "Sin descripción";
    if (bloqueTexto) {
        titulo = bloqueTexto.querySelector('titulo').textContent;
        descripcion = bloqueTexto.querySelector('descripcion').textContent;
    }

    document.getElementById('fondo-pantalla').style.backgroundImage = `url('${rutaImagen}')`;
    document.getElementById('titulo').textContent = titulo;
    document.getElementById('descripcion').textContent = descripcion;
    document.getElementById('metadatos').textContent = `ID: ${idBuscado} | Tipo: ${tipoInterno}`;
} else {
    document.getElementById('titulo').textContent = `El ID ${idBuscado} no existe`;
}*/
// biblioteca.js
const datosXML = `<?xml version="1.0" encoding="UTF-8"?>
<biblioteca>
    <item id="001" tipo="articulo_tecnico">
        <imagen_ruta>/assets/images/manual_servidor.png</imagen_ruta>
        <textos>
            <contenido xml:lang="es">
                <titulo>Configuración del Servidor Interno</titulo>
                <descripcion>Guía paso a paso para configurar el entorno local sin XAMPP.</descripcion>
            </contenido>            
            <contenido xml:lang="en">
                <titulo>Internal Server Setup</titulo>
                <descripcion>Step-by-step guide to configure the local environment without XAMPP.</descripcion>
            </contenido>            
            <contenido xml:lang="fr">
                <titulo>Configuration du Serveur Interne</titulo>
                <descripcion>Guide étape par étape pour configurer l'environnement local sans XAMPP.</descripcion>
            </contenido>
        </textos>
    </item>

    <item id="002" tipo="guia_usuario">
        <imagen_ruta>/assets/images/usuario_perfil.png</imagen_ruta>
        <textos>
            <contenido xml:lang="es">
                <titulo>Manual de Usuario</titulo>
                <descripcion>Bienvenido a la red interna de la empresa  002.</descripcion>
            </contenido>
            <contenido xml:lang="en">
                <titulo>User Manual</titulo>
                <descripcion>Welcome to the company's internal network  002.</descripcion>
            </contenido>
            <contenido xml:lang="fr">
                <titulo>Manuel de l'Utilisateur</titulo>
                <descripcion>Bienvenue sur le réseau interne de l'entreprise  002.</descripcion>
            </contenido>
        </textos>
    </item>

    <item id="003" tipo="guia_usuario">
        <imagen_ruta>/assets/images/usuario_perfil.png</imagen_ruta>
        <textos>
            <contenido xml:lang="es">
                <titulo>Manual de Usuario</titulo>
                <descripcion>Bienvenido a la red interna de la empresa  003.</descripcion>
            </contenido>
            <contenido xml:lang="en">
                <titulo>User Manual</titulo>
                <descripcion>Welcome to the company's internal network  003.</descripcion>
            </contenido>
            <contenido xml:lang="fr">
                <titulo>Manuel de l'Utilisateur</titulo>
                <descripcion>Bienvenue sur le réseau interne de l'entreprise  003.</descripcion>
            </contenido>
        </textos>
    </item>
</biblioteca>`;