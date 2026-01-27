const bandas = require("../db/index");

const bandasController = {

    index: function(req, res) {
        return res.render('index', {title: 'Listado de Bandas', bandas: bandas.listas})
    },

    bandas: function(req, res) {
        const id = Number(req.params.id);
        const banda = bandas.listas.find(b => b.id === id);

        if (!banda) {
            return res.render('banda', {
                title: 'Banda no encontrada',
                error: 'La banda solicitada no existe',
                banda: null
            });
        }

        return res.render('banda', {
            title: banda.nombre,
            banda: banda,
            error: null
        });
    },

    genero: function(req, res) {
        const genero = req.params.genero;
        const bandasFiltradas = bandas.listas.filter(b => b.genero.toLowerCase() === genero.toLowerCase());


        if (bandasFiltradas.length === 0) {
        return res.render('genero', { title: `Bandas de ${genero}`, genero, bandas: [], error: 'No hay bandas para ese género' });
        }


        res.render('genero', { title: `Bandas de ${genero}`, genero, bandas: bandasFiltradas, error: null });
    }
}


module.exports = bandasController