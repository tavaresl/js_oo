'use strict'

var self = null

function UsuarioService() {
  self = this
}

UsuarioService.prototype.listarTodos = function(callback) {
  $.ajax({
    type: 'GET',
    url: 'https://yg-api-multi-temp.herokuapp.com/usuario',
    crossDomain: true,
    success: function(data) { callback(data) }
  })
}

UsuarioService.prototype.cadastrar = function(usuario, callback) {
  $.ajax({
    type: 'POST',
    url: 'https://yg-api-multi-temp.herokuapp.com/usuario',
    data: usuario,
    crossDomain: true,
    success: function(data) { callback(data) }
  })
}
