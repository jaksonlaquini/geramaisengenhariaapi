var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true, 
  auth: {
  	user: "noreply@geramaisengenharia.com.br",
  	pass: "geramais2020"
  },
  tls: { rejectUnauthorized: false }
});

var mailOptions = {
  from: 'noreply@geramaisengenharia.com.br',
  to: '',
  subject: '',
  html: ''
};

/* GET home page. */
router.get('/', function(req, res, next) {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.json({teste: 'teste dois'});
});

/* Post home page. */
router.post('/enviar', function(req, res, next) {
  const nome =  req.body.nome;
  const telefone = req.body.telefone;
  const email = req.body.email;
  const mensagem = req.body.mensagem;

  mailOptions.to = 'contato@geramaisengenharia.com.br';
  mailOptions.subject = 'Contato';
  mailOptions.html = '<h1>Email de contato</h1><br><p><b>NOME:</b>  ' + nome + ' </p><p><b>TELEFONE: </b> ' + telefone + ' </p><p><b>EMAIL: </b> ' + email + ' </p><p><b>MENSAGEM: </b> ' + mensagem + ' </p>';

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.json({sucesso: false, data: error});
    } else {
      res.json({sucesso: true, data: info.response});
    }
  });
});

router.post('/enviarOrcamento', function(req, res, next) {

  const nome =  req.body.nome;
  const telefone = req.body.telefone;
  const email = req.body.email;
  const endereco = req.body.endereco;
  const mensagem = req.body.mensagem;

  mailOptions.to = 'contato@geramaisengenharia.com.br';
  mailOptions.subject = 'Orçamento';
  mailOptions.html = '<h1>Solicitação de Orçamento</h1><br><p><b>NOME:  </b> ' + nome + ' </p><p><b>TELEFONE:  </b> ' + telefone + ' </p><p><b>EMAIL: </b> ' + email + ' </p><p><b>ENDEREÇO: </b> ' + endereco + ' </p><p><b>MENSAGEM:  </b>' + mensagem + ' </p>';

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.json({sucesso: false, data: error});
    } else {
      res.json({sucesso: true, data: info.response});
    }
  });
});

module.exports = router;
