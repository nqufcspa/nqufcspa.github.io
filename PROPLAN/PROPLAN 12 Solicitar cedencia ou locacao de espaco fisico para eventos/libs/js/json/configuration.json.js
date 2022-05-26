Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[PROPLAN] 12 Solicitar cedência ou locação de espaço físico para eventos","publishDate":"26/05/2022 11:01:24","pages":[{"id":"79710a3c-5856-4861-8ca9-aae84a4da7bd","name":"[PROPLAN] 12 Solicitar cedência ou locação de espaço físico para eventos","version":"1.0","author":"lucianis","image":"files\\diagrams\\PROPLAN]_12_Solicitar_cedencia_ou_locacao_de_espaco_fisico_para_eventos.png","isSubprocessPage":false,"elements":[{"id":"839506fe-7fe8-4bb7-a43e-28972d79f876","name":"[PROPLAN] 12 Solicitar cedência ou locação de espaço físico para eventos","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1957.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"08a302c6-926c-4040-b0ed-9d66536a8d9d","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":158.0,"y":84.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"041c9735-fc3d-41e3-a1db-caa7a9105788","name":"Abri processo de solicitação de cedência/locação de espaço físico para eventos ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":261.5,"y":58.0}],"radius":0.0,"height":82.0,"width":121.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"54e62541-45f8-4f4b-b68c-e335697abed5","name":"Incluir documento 470 - Formulário de solicitação de espaço físico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":265.0,"y":172.0}],"radius":0.0,"height":68.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ed1aa14e-dbb4-4165-84c2-f91f02bd0d66","name":"Liberar acesso externo para o requerente externo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":270.0,"y":331.0}],"radius":0.0,"height":74.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5fc11588-0d42-49d0-87b0-20d07e5cd7a0","name":"Analisar formulário","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":276.0,"y":443.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"acc7b7ba-6a23-4e64-b0da-5f37ad0b4d81","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":268.0,"y":526.0}],"radius":0.0,"height":72.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1d25c3c9-168c-4837-85b8-2e39d21a5ff0","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":301.0,"y":654.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"54ee78a8-b38a-4b2d-b0a0-bf6b0bc8beee","name":"Tipo de solicitação","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":473.0,"y":654.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Locação","elementType":"SequenceFlow","properties":[]},{"name":"Cedência","elementType":"SequenceFlow","properties":[]}]},{"id":"ed35dfd2-b15f-4ef3-8392-c6ccea8a8988","name":"emitir GRU","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":588.0,"y":938.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"897ec34f-85ff-4772-a57c-852ca362b6e7","name":"Incluir em PDF GRU emitida","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":588.0,"y":1023.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b7e8e755-4319-4662-a2f1-78504cd107ef","name":"Comunicar requerente para realizar o pagamento da GRU","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":692.0,"y":713.0}],"radius":0.0,"height":92.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"046e842c-2eff-4f7c-8006-488909ca8b0b","name":"Realizar pagamento da GRU","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":700.0,"y":145.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"61246f1d-30fd-4f34-b234-49314f83a6bd","name":"Incluir em PDF comprovante de pagamento da GRU","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":916.5,"y":140.0}],"radius":0.0,"height":70.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e15f049f-20dd-428a-9d54-78408925d700","name":"Conferir pagamento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":923.0,"y":434.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d6425fca-36b0-49bf-8725-4430eeb3a0c0","name":"Pagamento realizado corretamente?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":948.0,"y":739.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"da399d44-ae10-4fee-b9a3-68e5c68d3bff","name":"Executar a reserva de sala","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":923.0,"y":1178.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d0038522-d1e3-4aa8-98ac-6305551ff2ce","name":"incluir documento 471 - Termo de responsabilidade uso espaço físico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":905.0,"y":1278.0}],"radius":0.0,"height":67.0,"width":126.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e904160a-91ca-422a-8503-90346717455e","name":"Assinar termo de responsabilidade","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1090.0,"y":140.0}],"radius":0.0,"height":71.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d64960d7-0d99-4bb0-b85e-99f26aa1102e","name":"Apoiar a organização do evento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1095.5,"y":1491.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"442755a7-3cc3-4b31-9e10-15b52f02c04f","name":"Aguardar finalização do evento","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1125.5,"y":1580.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"d364b2fc-2586-42be-a4e7-005030df5d25","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1088.5,"y":1658.0}],"radius":0.0,"height":80.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4a810f0d-3783-42ba-a151-561ca3bd5daa","name":"Comunicar requerente externo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":276.0,"y":774.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6d8fcd87-9142-40a1-b696-760b161e8cbe","name":"[DIARQ] 01 Realizar  tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1095.5,"y":1831.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"8d04eea4-ae3b-47c8-ab2f-a87d3779cdc7","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1229.0,"y":1846.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"af9910c4-c85c-41cc-a880-eabf205ece69","name":"Requerente externo","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":281.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"1f56854c-b382-4ac8-88b7-a9bbf7242427","name":"PROPLAN","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":301.0}],"radius":0.0,"height":612.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"87b94b80-6e5c-40b2-b1b2-2c783d78aecd","name":"DCF","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":913.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"1ef487be-51f8-4718-9cee-7dca51eeac1d","name":"NAS","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1113.0}],"radius":0.0,"height":341.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"522e2e5f-1313-41db-a310-d71082f53240","name":"NAE","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1454.0}],"radius":0.0,"height":323.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"f2f91bdf-3835-4bed-97e9-1c56b75a2889","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1777.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"79710a3c-5856-4861-8ca9-aae84a4da7bd","containerName":"[PROPLAN] 12 Solicitar cedência ou locação de espaço físico para eventos","isSubprocess":false,"elements":[{"id":"839506fe-7fe8-4bb7-a43e-28972d79f876","value":"[PROPLAN] 12 Solicitar cedência ou locação de espaço físico para eventos"},{"id":"af9910c4-c85c-41cc-a880-eabf205ece69","value":"Requerente externo"},{"id":"1f56854c-b382-4ac8-88b7-a9bbf7242427","value":"PROPLAN"},{"id":"87b94b80-6e5c-40b2-b1b2-2c783d78aecd","value":"DCF"},{"id":"1ef487be-51f8-4718-9cee-7dca51eeac1d","value":"NAS"},{"id":"522e2e5f-1313-41db-a310-d71082f53240","value":"NAE"},{"id":"f2f91bdf-3835-4bed-97e9-1c56b75a2889","value":"DIARQ"},{"id":"54e62541-45f8-4f4b-b68c-e335697abed5","value":"Incluir documento 470 - Formulário de solicitação de espaço físico"},{"id":"5fc11588-0d42-49d0-87b0-20d07e5cd7a0","value":"Analisar formulário"},{"id":"ed35dfd2-b15f-4ef3-8392-c6ccea8a8988","value":"emitir GRU"},{"id":"1d25c3c9-168c-4837-85b8-2e39d21a5ff0","value":""},{"id":"54ee78a8-b38a-4b2d-b0a0-bf6b0bc8beee","value":"Tipo de solicitação"},{"id":"da399d44-ae10-4fee-b9a3-68e5c68d3bff","value":"Executar a reserva de sala"},{"id":"08a302c6-926c-4040-b0ed-9d66536a8d9d","value":""},{"id":"d0038522-d1e3-4aa8-98ac-6305551ff2ce","value":"incluir documento 471 - Termo de responsabilidade uso espaço físico"},{"id":"d64960d7-0d99-4bb0-b85e-99f26aa1102e","value":"Apoiar a organização do evento"},{"id":"6d8fcd87-9142-40a1-b696-760b161e8cbe","value":"[DIARQ] 01 Realizar  tratamento arquivístico"},{"id":"8d04eea4-ae3b-47c8-ab2f-a87d3779cdc7","value":""},{"id":"ed1aa14e-dbb4-4165-84c2-f91f02bd0d66","value":"Liberar acesso externo para o requerente externo"},{"id":"acc7b7ba-6a23-4e64-b0da-5f37ad0b4d81","value":"Incluir documento 872 - Despacho simples"},{"id":"4a810f0d-3783-42ba-a151-561ca3bd5daa","value":"Comunicar requerente externo"},{"id":"041c9735-fc3d-41e3-a1db-caa7a9105788","value":"Abri processo de solicitação de cedência/locação de espaço físico para eventos "},{"id":"897ec34f-85ff-4772-a57c-852ca362b6e7","value":"Incluir em PDF GRU emitida"},{"id":"b7e8e755-4319-4662-a2f1-78504cd107ef","value":"Comunicar requerente para realizar o pagamento da GRU"},{"id":"046e842c-2eff-4f7c-8006-488909ca8b0b","value":"Realizar pagamento da GRU"},{"id":"61246f1d-30fd-4f34-b234-49314f83a6bd","value":"Incluir em PDF comprovante de pagamento da GRU"},{"id":"e904160a-91ca-422a-8503-90346717455e","value":"Assinar termo de responsabilidade"},{"id":"d364b2fc-2586-42be-a4e7-005030df5d25","value":"Incluir documento 872 - Despacho simples"},{"id":"e15f049f-20dd-428a-9d54-78408925d700","value":"Conferir pagamento"},{"id":"d6425fca-36b0-49bf-8725-4430eeb3a0c0","value":"Pagamento realizado corretamente?"},{"id":"442755a7-3cc3-4b31-9e10-15b52f02c04f","value":"Aguardar finalização do evento"},{"id":"566ef305-42c3-4f09-95da-daaeffc9353b"},{"id":"098afa5d-1640-40d9-ac98-f3b12bfaa61f"},{"id":"2f4b0c11-57f1-4c3b-a429-74d9b1f49f61"},{"id":"726747a6-a3b0-477b-b2cf-5f016778d382"},{"id":"26e2777b-5b6d-4de5-9dd5-aabb21a0aeff"},{"id":"6196c5d4-3bce-488d-b321-e0d9660acb52"},{"id":"1cf13067-c95c-4309-8c82-3ccfb118d56d"},{"id":"1c92a014-84f3-4b52-988a-a5f6d253371d"},{"id":"89c018aa-ac4e-499f-ac4b-1ed5ceb497c0"},{"id":"f1bd0119-4c20-4510-876e-8e385e50ac5d"},{"id":"e5109b6b-b5cb-4128-a47f-c449d7ffe7a6"},{"id":"422188ba-b071-4319-83a4-3becc52dc7ff"},{"id":"010a56b7-7b06-4195-aa16-5ee6e1a4aca5"},{"id":"dc2e198d-406f-43f0-9044-83352160509e"}]}]}