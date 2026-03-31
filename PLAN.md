# Plano de Desenvolvimento - RideFlow App de Transporte

**Duracao total:** 3 semanas
**Orcamento:** USD 500 - 1,000
**Marcos de entrega:** 3

---

## Marco 1 - Base do Sistema e Cadastros (Semana 1)

**Entregaveis:**
- Estrutura do projeto (frontend e backend)
- Tela de login com autenticacao segura
- Cadastro de passageiro (dados pessoais, validacao)
- Cadastro de motorista (dados pessoais + detalhes do veiculo, documentos)
- Perfil de usuario para ambos os perfis (visualizar e editar)
- Design responsivo (mobile, tablet, desktop)
- Banco de dados configurado com modelos de usuario, veiculo e corrida

**Resultado:** Motoristas e passageiros conseguem se cadastrar, fazer login e gerenciar seus perfis.

---

## Marco 2 - Mapa, Corridas e Acompanhamento (Semana 2)

**Entregaveis:**
- Integracao com mapa (Google Maps / Mapbox)
- Localizacao de veiculos disponiveis proximo ao passageiro
- Sistema de solicitacao de corrida (origem e destino)
- Acompanhamento em tempo real da corrida no mapa
- Notificacoes de status da corrida (aceita, em andamento, finalizada)
- Painel do motorista para aceitar/recusar corridas
- Calculo de distancia e tempo estimado da corrida

**Resultado:** Passageiros podem solicitar corridas e acompanhar em tempo real, motoristas podem aceitar e gerenciar corridas.

---

## Marco 3 - Cobranca, Historico e Polimento Final (Semana 3)

**Entregaveis:**
- Sistema de cobranca da taxa fixa de USD 0.99 por corrida (motorista e passageiro)
- Historico de corridas com detalhes (rota, valor, data, motorista/passageiro)
- Sistema de avaliacao mutua (motorista avalia passageiro e vice-versa)
- Resumo financeiro para motoristas (ganhos diarios, semanais)
- Testes completos em dispositivos reais
- Correcoes de bugs e ajustes de performance
- Deploy e entrega final

**Resultado:** App completo e funcional, pronto para uso com cobranca automatica, historico e avaliacoes.

---

## Stack Tecnica

| Camada | Tecnologia |
|--------|-----------|
| Frontend Mobile | React Native (iOS + Android) |
| Backend | Node.js + Express |
| Banco de Dados | PostgreSQL |
| Mapa | Google Maps API / Mapbox |
| Tempo Real | WebSockets (Socket.io) |
| Pagamentos | Stripe / Mercado Pago |
| Hospedagem | AWS / Railway |
