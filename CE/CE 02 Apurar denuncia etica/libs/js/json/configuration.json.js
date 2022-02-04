Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[CE] 02 Apurar denúncia ética","publishDate":"04/02/2022 10:03:09","pages":[{"id":"77f183f6-bdc6-4292-a2e1-6e52c837067c","name":"[CE] 02 Apurar denúncia ética","version":"1.0","author":"ariel","image":"files\\diagrams\\CE]_02_Apurar_denuncia_etica.png","isSubprocessPage":false,"elements":[{"id":"eb2aae07-0a2a-4bf2-b8f5-e56800dd53ca","name":"[CE] 02 Apurar denúncia ética","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1861.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"d07f61eb-9ddd-4925-9693-2575c03e472a","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":149.0,"y":145.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"85f1b209-3d10-4d86-b90c-21f3dc4aeef7","name":"Abrir processo de apuração ética ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":279.0,"y":130.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5f46b555-1243-4053-a301-2f726b32250c","name":"Incluir documento 443 - Formulário de denúncia ética","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":471.0,"y":127.0}],"radius":0.0,"height":66.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"39f24830-2667-4608-a70f-f97ebcf6f09a","name":"Instruir processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":476.0,"y":267.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4f556b0d-8d5e-41ee-9fad-e3f913917d74","name":"Incluir documento 159 - Relatório","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":471.0,"y":431.0}],"radius":0.0,"height":60.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ad372704-6da1-4dc1-bc1c-f5c1bb6d2e8e","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":501.0,"y":558.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"bebbc79f-24e7-4b90-a3a4-8cbab670df72","name":"Denunciante é anônimo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":734.0,"y":558.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"701f1be2-b9a6-4b17-af21-2c91a111967d","name":"Incluir documento 207 - Notificação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":894.0,"y":543.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d9ac88b8-8c63-4c8e-81d3-dde19c962bd7","name":"Enviar notificação ao denunciante","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":899.0,"y":689.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d3f407d4-e629-4b36-8d86-c84ade936d09","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":734.0,"y":916.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Portão","elementType":"SequenceFlow","properties":[]}]},{"id":"2f272f9c-4046-49af-bbe0-f7818a68560c","name":"Incluir documento 207 - Notificação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":467.0,"y":664.0}],"radius":0.0,"height":75.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8a0a3c52-6dad-433f-aee9-d4059c551662","name":"Enviar notificação ao denunciado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":476.0,"y":791.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"72c59131-ef37-479d-a630-157b76b51008","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":501.0,"y":916.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"6fc355f2-a99d-4cd3-86a8-df43c6e13bd7","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":501.0,"y":1041.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"5b597a96-a320-42a7-bb33-bd199c865fbc","name":"Irá recorrer da decisão?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":501.0,"y":1465.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"0cc3aac4-9a35-4b0e-86d2-638a31f2ca38","name":"Incluir em PDF pedido de reconsideração","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":476.0,"y":1566.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5774a42f-2339-4905-8ffa-8de78b7d6f3e","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":747.0,"y":1465.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Portão","elementType":"SequenceFlow","properties":[]}]},{"id":"5cd35d3a-ad93-4388-babb-550daf0b3c83","name":"Aguardar final do prazo para reconsideração","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":622.0,"y":1046.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"5ce6c406-a23c-4610-b58e-68e79a48a355","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":747.0,"y":1041.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"8011c511-7c6c-400d-a927-b743159a50bd","name":"Denunciado solicitou reconsideração da decisão?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":892.0,"y":1041.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"db0d9cbd-c0ca-48f0-9fc1-21025b9afc83","name":"Analisar pedido de reconsideração","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":867.0,"y":1170.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"31a9f0d3-a3a6-4b94-b928-a7cc92a4e28d","name":"Decisão mantida?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1040.0,"y":1180.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"9aeedc35-4377-46f0-9e41-f911e83229b1","name":"Incluir documento 159 - Relatório","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1010.5,"y":1292.0}],"radius":0.0,"height":60.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f12bff2a-2350-4743-a449-96b1cc9db03c","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1187.0,"y":1180.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"incluir documento 135 - Decisão administrativa","elementType":"SequenceFlow","properties":[]}]},{"id":"b1d5a182-ffee-4d09-a197-96013796d4f3","name":"incluir documento 135 - Decisão administrativa","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1154.5,"y":1026.5}],"radius":0.0,"height":71.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3522a16b-09ca-4d69-a830-1c5d91403f2a","name":"Decisão tomada","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1353.0,"y":1041.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Envio para Reitoria para providências","elementType":"SequenceFlow","properties":[]},{"name":"Aplicação de  censura ética","elementType":"SequenceFlow","properties":[]},{"name":"Arquivamento","elementType":"SequenceFlow","properties":[]}]},{"id":"e89f6ac2-fea8-4763-98b1-a55ead0c939c","name":"Incluir documento 191 - Parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1453.0,"y":810.0}],"radius":0.0,"height":60.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b513ddcf-b3f7-444e-b026-76d87b55b1c6","name":"Publicar documento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1731.0,"y":810.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"57e3e6b5-cf87-452e-a23d-b93e4f7952e5","name":"Incluir documento 872- Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1727.5,"y":966.0}],"radius":0.0,"height":84.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"174e1526-4a8a-499b-b9eb-a2f8a26d80da","name":"[UFCSPA] 14 Realizar comunicação oficial no âmbito da UFCSPA","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1503.0,"y":1031.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/UFCSPA/UFCSPA%2014%20Realizar%20comunicacao%20oficial%20no%20ambito%20da%20UFCSPA/#list","type":"url"}},{"id":"91519a4e-60fe-45b9-a0e5-c804117386e1","name":"Incluir documento 872- Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1325.5,"y":1205.0}],"radius":0.0,"height":71.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"efc00e92-0240-4776-853a-79bba01d1ccb","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1731.0,"y":1752.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"88028f5c-d7c9-467e-84df-377f4182442e","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1873.0,"y":1767.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"45a2884d-b88f-4305-a768-add6a3699b7c","name":"CE","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":1400.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"eae2a529-268e-4bfe-87af-a5885aa463bb","name":"Denunciado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1420.0}],"radius":0.0,"height":261.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"4ddd5e11-f209-45e0-af03-25f712ec8a23","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1681.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"77f183f6-bdc6-4292-a2e1-6e52c837067c","containerName":"[CE] 02 Apurar denúncia ética","isSubprocess":false,"elements":[{"id":"eb2aae07-0a2a-4bf2-b8f5-e56800dd53ca","value":"[CE] 02 Apurar denúncia ética"},{"id":"45a2884d-b88f-4305-a768-add6a3699b7c","value":"CE"},{"id":"eae2a529-268e-4bfe-87af-a5885aa463bb","value":"Denunciado"},{"id":"4ddd5e11-f209-45e0-af03-25f712ec8a23","value":"DIARQ"},{"id":"d07f61eb-9ddd-4925-9693-2575c03e472a","value":""},{"id":"85f1b209-3d10-4d86-b90c-21f3dc4aeef7","value":"Abrir processo de apuração ética "},{"id":"174e1526-4a8a-499b-b9eb-a2f8a26d80da","value":"[UFCSPA] 14 Realizar comunicação oficial no âmbito da UFCSPA"},{"id":"5f46b555-1243-4053-a301-2f726b32250c","value":"Incluir documento 443 - Formulário de denúncia ética"},{"id":"39f24830-2667-4608-a70f-f97ebcf6f09a","value":"Instruir processo"},{"id":"4f556b0d-8d5e-41ee-9fad-e3f913917d74","value":"Incluir documento 159 - Relatório"},{"id":"2f272f9c-4046-49af-bbe0-f7818a68560c","value":"Incluir documento 207 - Notificação"},{"id":"bebbc79f-24e7-4b90-a3a4-8cbab670df72","value":"Denunciante é anônimo?"},{"id":"701f1be2-b9a6-4b17-af21-2c91a111967d","value":"Incluir documento 207 - Notificação"},{"id":"ad372704-6da1-4dc1-bc1c-f5c1bb6d2e8e","value":""},{"id":"8a0a3c52-6dad-433f-aee9-d4059c551662","value":"Enviar notificação ao denunciado"},{"id":"5b597a96-a320-42a7-bb33-bd199c865fbc","value":"Irá recorrer da decisão?"},{"id":"0cc3aac4-9a35-4b0e-86d2-638a31f2ca38","value":"Incluir em PDF pedido de reconsideração"},{"id":"5774a42f-2339-4905-8ffa-8de78b7d6f3e","value":""},{"id":"6fc355f2-a99d-4cd3-86a8-df43c6e13bd7","value":""},{"id":"5cd35d3a-ad93-4388-babb-550daf0b3c83","value":"Aguardar final do prazo para reconsideração"},{"id":"8011c511-7c6c-400d-a927-b743159a50bd","value":"Denunciado solicitou reconsideração da decisão?"},{"id":"72c59131-ef37-479d-a630-157b76b51008","value":""},{"id":"d3f407d4-e629-4b36-8d86-c84ade936d09","value":""},{"id":"d9ac88b8-8c63-4c8e-81d3-dde19c962bd7","value":"Enviar notificação ao denunciante"},{"id":"5ce6c406-a23c-4610-b58e-68e79a48a355","value":""},{"id":"db0d9cbd-c0ca-48f0-9fc1-21025b9afc83","value":"Analisar pedido de reconsideração"},{"id":"31a9f0d3-a3a6-4b94-b928-a7cc92a4e28d","value":"Decisão mantida?"},{"id":"9aeedc35-4377-46f0-9e41-f911e83229b1","value":"Incluir documento 159 - Relatório"},{"id":"b1d5a182-ffee-4d09-a197-96013796d4f3","value":"incluir documento 135 - Decisão administrativa"},{"id":"3522a16b-09ca-4d69-a830-1c5d91403f2a","value":"Decisão tomada"},{"id":"efc00e92-0240-4776-853a-79bba01d1ccb","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"e89f6ac2-fea8-4763-98b1-a55ead0c939c","value":"Incluir documento 191 - Parecer"},{"id":"b513ddcf-b3f7-444e-b026-76d87b55b1c6","value":"Publicar documento"},{"id":"88028f5c-d7c9-467e-84df-377f4182442e","value":""},{"id":"f12bff2a-2350-4743-a449-96b1cc9db03c","value":""},{"id":"57e3e6b5-cf87-452e-a23d-b93e4f7952e5","value":"Incluir documento 872- Despacho simples"},{"id":"91519a4e-60fe-45b9-a0e5-c804117386e1","value":"Incluir documento 872- Despacho simples"},{"id":"13c618b1-9540-484f-a75a-6f7d8ce1fb3c"},{"id":"ac4d3521-271a-4f63-8dd3-3534b3673715"},{"id":"859bb5c9-d729-4f85-b036-af32e1b8689c"},{"id":"2b764132-08fb-47fc-bcc9-7db82e4554ae"},{"id":"a67e1cd1-5c01-4d7b-9485-92cf999a722b"},{"id":"241ae7c2-88fb-4c1f-bd68-2c710fa483d7"},{"id":"5f0b71e9-0fec-4b88-957f-a3167d57759c"},{"id":"17acf803-9128-44f6-8f9d-88d946c25e4c"},{"id":"812106ee-3d74-4312-ae67-d2a1838b92b0"},{"id":"e16b88fc-303f-484c-9842-5a0f2a7dd27c"},{"id":"a641c608-fc39-4312-89a1-67c43cd812dd"},{"id":"0a399418-b112-4bec-9f6d-b47ce31bcf29"},{"id":"564e3541-a835-48eb-bfe6-eb9f2fb91edd"},{"id":"573a4c24-7d62-494f-9f5b-1bba4c334f5c"},{"id":"0c6372ee-ddad-4e57-adfb-a3af41f78b00"},{"id":"bb76c35f-455f-4e1b-885e-76689a04eeec"},{"id":"0aff5cf3-c547-46ff-90ec-c54eeab2cb6b"},{"id":"0da65d35-108e-4e42-b3d9-39190e47e514"},{"id":"903b0c80-9745-4ccf-a9ee-4cfd44c98f63"},{"id":"f4e573f5-f916-4edc-91e0-ddb4c731bcea"},{"id":"0fa64364-cc3e-40b9-a53d-90c6416ab491"},{"id":"2539bd1a-4a4e-4ff3-8d71-991feb9fd900"},{"id":"3a4fadd9-df3a-4180-9fbd-1f63747caea1"},{"id":"e42f6b24-1887-4445-8c27-803fdd51d0a5"},{"id":"7f65aa4d-9def-4020-a293-f525b1c6cf3c"},{"id":"4780b06c-2099-40a2-be02-fc36d3f03736"}]}]}