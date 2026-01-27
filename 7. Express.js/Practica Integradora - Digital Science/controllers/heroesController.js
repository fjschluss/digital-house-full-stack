const science = require("../db/science");

const heroesController = {

  index: (req, res) => {
    res.render('heroes', { title: 'Heroes', heroes: science });
  },

  detalle: (req, res) => {
    const id = Number(req.params.id);
    const heroe = science.find(h => h.id === id);

    if (!heroe) {
      return res.send("No encontramos al científico indicado. Por favor, elija otro id");
    }

    res.render('detalles', { title: 'Detalles del Heroe', heroe });
  },

  bio: (req, res) => {
    const id = Number(req.params.id);
    const ok = req.params.ok;
    const heroe = science.find(h => h.id === id);

    if (!heroe) {
      return res.send("No encontramos al científico indicado para mostrar su biografía");
    }

    res.render('bio', { title: 'Biografia', heroe, ok });
  }
};

module.exports = heroesController;