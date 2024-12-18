const {Router} = require('express');
const {validarJWT} = require('../middlewares/validar-jwt')
const router = Router();
const {check} = require('express-validator')
const {validarCampos} = require('../middlewares/validar-campos')    
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/envents');
const { isDate } = require('../helpers/isDate');
// todas tienen que pasar por la validacion del token
router.use(validarJWT)


// obtener eventos
router.get('/',getEventos)


router.post('/', 
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalizacion es obligatoria').custom(isDate),
        validarCampos
    ]
    ,crearEvento)


router.put('/:id', actualizarEvento)


router.delete('/:id', eliminarEvento)


module.exports = router;