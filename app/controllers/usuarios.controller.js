'use strict'

var self = null

function UsuariosController() {
  self = this
  self.usuarioService = new UsuarioService()
  self.usuarios = []
  self.listaUsuarios = $('#usuarios-list')

  self.carregarUsuarios()
}

UsuariosController.prototype.carregarUsuarios = function() {
  self.usuarioService.listarTodos(self.exibirUsuarios) 
}

UsuariosController.prototype.deletar = function(id) {
  var usuarios = self.usuarios.filter(function(usuario) {
    return usuario.id !== id
  })

  self.exibirUsuarios(usuarios)
}

UsuariosController.prototype.exibirUsuarios = function(usuarios) {
  var template = ''
  self.usuarios = usuarios
  
  for (var i = 0; i < self.usuarios.length; i++) {
    template += '' +
    '<div class="col-md-4">' + 
      '<div class="panel panel-default">' + 
        '<div class="panel-body">' + 
          '<img class="img-responsive" src="/assets/images/baymax.jpg" alt="Oi, eu sou o Baymax!"> ' + 
          '<h3>' + self.usuarios[i].nome + '</h3>' + 
          '<p><span class="glyphicon glyphicon-envelope"></span> ' + self.usuarios[i].email + '</p>' + 
          '<p><span class="glyphicon glyphicon-map-marker"></span> ' + self.usuarios[i].cidade + '</p>' +
        '</div>' +
        '<div class="panel-footer">' +
          '<button ' +
            'class="btn btn-block btn-danger" '+ 
            'onclick="userCtrl.deletar(' + self.usuarios[i].id + ')">Excluir</button>' +
        '</div>' +
      '</div>' + 
    '</div>'
  }

  self.listaUsuarios.html(template)
}

var userCtrl = new UsuariosController()
