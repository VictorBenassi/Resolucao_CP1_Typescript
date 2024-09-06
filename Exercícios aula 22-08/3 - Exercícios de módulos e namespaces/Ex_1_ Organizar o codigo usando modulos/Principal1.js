"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importação da classe Pedido
var Pedido_1 = require("./Pedido");
var Cliente_1 = require("./Cliente");
// Criação de instâncias de Pedido e Cliente
var clienteExemplo = new Cliente_1.Cliente('Victor', 'victor@ig.com.br');
var pedidoExemplo = new Pedido_1.Pedido(clienteExemplo, 'Smartphone', 1800);
console.log(pedidoExemplo.exibirPedido());
