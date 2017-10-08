'use strict'

var self = null

function FormUsuarioController() {
  self = this

  self.usuarioService = new UsuarioService()
  self.form = $('#usuario_form')
  self.nomeField = $('#nome_field')
  self.emailField = $('#email_field')
  self.cidadeField = $('#cidade_field')
  self.senhaField = $('#senha_field')
  self.confirmarSenhaField = $('#confirmar_senha_field')
}

FormUsuarioController.prototype.senhasIguais = function() {
  return self.senhaField.val() === self.confirmarSenhaField.val()
}

FormUsuarioController.prototype.cadastrar = function(event) {
  var usuario = null

  if (self.form[0].checkValidity() && self.senhasIguais()) {
    usuario = self.form.serialize()
    self.usuarioService.cadastrar(usuario, self.voltarParaLista)
  }
}

FormUsuarioController.prototype.voltarParaLista = function () {
  console.log('BAMMIE WHAM')
  window.location = '/app/views/usuarios.html'
}

var formCtrl = new FormUsuarioController()
