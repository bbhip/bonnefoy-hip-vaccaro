var trabajos = [{
    figure: "media/trabajo1-milu.png",
    figure2: "media/trabajo1-milu2.png",
    alt: "Persona usando MILU",
    title: "MILU",
    about: "Espacio modular para personas en situación de albergue temporal.",
    autor: "Javiera Vaccaro"
}, {
    figure: "media/trabajo6-chiriz.png",
    figure2: "media/trabajo6-chiriz2.png",
    alt: "Descripción de la imagen",
    title: "Chiriz",
    about: "Helado con sabor a humita y cono de maíz inspirados en las costumbres andinas.",
    autor: "Rosario Bonnefoy"
}, {
    figure: "media/trabajo8-alcor.png",
    figure2: "media/trabajo8-alcor2.png",
    alt: "Alcor en uso",
    title: "Alcor",
    about: "Exhibidor de vinos y elemento escultórico fabricado en madera, basado en las cordilleras y mares de Chile.",
    autor: "Betina Hip"
}, {
    figure: "media/trabajo4-qactus.png",
    figure2: "media/trabajo4-qactus2.png",
    alt: "Set de lápiz 3D",
    title: "Qactus",
    about: "Rediseño de packaging e interacción del lápiz 3D de Qactus.",
    autor: "Rosario Bonnefoy"
}, {
    figure: "media/trabajo9-tanin.png",
    figure2: "media/trabajo9-tanin2.png",
    alt: "Descripción de la imagen",
    title: "Tanin",
    about: "Producto alimenticio hecho a partir de mate deshidratado.",
    autor: "Betina Hip"
}, {
    figure: "media/trabajo2-muak.png",
    figure2: "media/trabajo2-muak2.png",
    alt: "Logo de la marca",
    title: "MUAk",
    about: "Línea de maquillaje ecológica fabricada a partir de desechos de frutas y verduras.",
    autor: "Javiera Vaccaro"
}, {
    figure: "media/trabajo7-magma.png",
    figure2: "media/trabajo7-magma2.png",
    alt: "Descripción de la imagen",
    title: "Magma",
    about: "Luminaria que nace a partir de la experimentación del verter estaño líquido sobre esferas de hidrogel.",
    autor: "Betina Hip"
}, {
    figure: "media/trabajo3-bibom.png",
    figure2: "media/trabajo3-bibom2.png",
    alt: "Packaging de BiBom",
    title: "BiBom",
    about: "Pastillas efervescentes para lavar la loza.",
    autor: "Javiera Vaccaro"
  }, {
    figure: "media/trabajo5-napsis.png",
    figure2: "media/trabajo5-napsis2.png",
    alt: "Luminaria en el techo",
    title: "Napsis",
    about: "Luminaria hecha a partir de una tensoestructura de silicona tejida.",
    autor: "Rosario Bonnefoy"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<div class="parent"><figure><img class="deslizar1" src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt +'"/><img class="deslizar2" src="' + trabajos[i].figure2 +'"/></figure></div>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<div class="autor"><p>' + trabajos[i].autor + '</p></div>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro +'</div>')
});
