let mainController = {
    index: function(req, res) {
        return res.render('index', {title: 'Digital Science'});
    },

    creditos: function(req, res) {
        return res.render('creditos', {title: 'Creditos', autor: 'Francisco Schlusselblum'})
    }
}

module.exports = mainController