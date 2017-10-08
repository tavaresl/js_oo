'use strict'

function UsuarioService() {}

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

UsuarioService.prototype.atualizar = function(usuario, callback) {
  $.ajax({
    type: 'PUT',
    url: 'https://yg-api-multi-temp.herokuapp.com/usuario',
    data: usuario,
    crossDomain: true,
    success: function(data) { callback(data) }
  })
}

UsuarioService.prototype.listar = function(usuario, callback) {
  $.ajax({
    type: 'GET',
    url: 'https://yg-api-multi-temp.herokuapp.com/usuario/' + usuario,
    crossDomain: true,
    success: function(data) { callback(data) }
  })
}
