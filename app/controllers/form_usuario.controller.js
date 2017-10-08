'use strict'

var self = null

function FormUsuarioController() {
  self = this

  self.user = null

  self.usuarioService = new UsuarioService()
  self.form = $('#usuario_form')
  self.nomeField = $('#nome_field')
  self.emailField = $('#email_field')
  self.cidadeField = $('#cidade_field')
  self.senhaField = $('#senha_field')
  self.confirmarSenhaField = $('#confirmar_senha_field')

  if (window.location.search) {
    self.user = window.location.search.slice(1).split('=')[1]
  }

  if (self.user) {
    self.usuarioService.listar(self.user, self.preencherUsuario)
  }
}

FormUsuarioController.prototype.senhasIguais = function() {
  return self.senhaField.val() === self.confirmarSenhaField.val()
}

FormUsuarioController.prototype.cadastrar = function(event) {
  var usuario = null

  if (self.form[0].checkValidity() && self.senhasIguais())
    usuario = self.form.serialize()
  else
    return

  if (!self.user)
    self.usuarioService.cadastrar(usuario, self.voltarParaLista)
  else
    self.atualizar()
}

FormUsuarioController.prototype.voltarParaLista = function () {
  window.location = '/app/views/usuarios.html'
}

FormUsuarioController.prototype.preencherUsuario = function (usuario) {
  self.nomeField.val(usuario.nome)
  self.emailField.val(usuario.email)
  self.cidadeField.val(usuario.cidade)
  self.senhaField.val(usuario.senha)
  self.confirmarSenhaField.val(usuario.senha)
}

FormUsuarioController.prototype.atualizar = function () {
  var usuario = self.form.serialize()
  usuario += '&id=' + self.user
  
  self.usuarioService.atualizar(usuario, self.voltarParaLista)
}

var formCtrl = new FormUsuarioController()
