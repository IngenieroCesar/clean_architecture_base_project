
const express = require('express');
const response = require('../../utils/requestResponse');
const ServicenameService = require('./controller');
const router = express.Router();

//-----------Endpoint para el inicio de la tarea--------------- 
const servicenameApi = new ServicenameService()

router.post('/', (req, res) => { 

    servicenameApi.getServiceName()
    .then((message) => {
      response.success(req, res, message, 200);
    })
    .catch(e => {
      response.error(req, res, 'Información invalida', 400, 'Error en el controlador.');
    });

});

module.exports = router;