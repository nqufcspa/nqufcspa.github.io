Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[COREME] 01 Emitir documentos para alunos da Residência Médica","publishDate":"17/06/2021 15:04:30","pages":[{"id":"8fb00296-c6f3-463d-a697-41d0d0b2913a","name":"[COREME] Emitir documentos para alunos da Residência Médica","version":"1.0","author":"User","image":"files\\diagrams\\COREME]_Emitir_documentos_para_alunos_da_Residencia_Medica.png","isSubprocessPage":false,"elements":[{"id":"33aa850f-8c11-40e6-aa62-a218cfe9bcef","name":"[COREME] 01 Emitir documentos para alunos da Residência Médica","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1093.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"f4106859-2613-4320-a1d6-813c52505f95","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":161.0,"y":113.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"25f4cd77-3ceb-4dbb-a56b-df7ffbe4056d","name":"Abrir processo de solicitação de documentos da Residência Médica","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":254.0,"y":89.0}],"radius":0.0,"height":79.0,"width":122.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0628f033-0ac9-4ed8-8b17-f123bddc8931","name":"Incluir documento 384 - Solicitação de documentos residência médica","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":483.0,"y":87.5}],"radius":0.0,"height":82.0,"width":123.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6d5ffaa8-8f53-4cd3-8a4a-48ec1e1200ca","name":"Liberar acesso externo para o interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":499.5,"y":361.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"002d72a6-8491-4ba4-8a4e-b8a028345ed5","name":"Verificar o tipo de documento solicitado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":641.0,"y":361.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"82c0fcb0-223d-44be-ab2b-a70946009915","name":"Incluir documento solicitado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1102.0,"y":704.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f2fa37fd-ae6a-4164-b89e-0a28f61cdc38","name":"Enviar documento para o interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1097.0,"y":589.0}],"radius":0.0,"height":68.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5b1fd024-710f-4676-accf-247e1f7da1f4","name":"[DIARQ] 01 Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1429.0,"y":996.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[]},{"id":"469a3c30-ba38-497f-bcd1-5517348acae2","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1567.0,"y":1011.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"a4ecf057-333e-4031-b016-8b264364e1d4","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":261.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c1f69ea8-a5a0-4a52-a1ba-1c7e4dbd96dc","name":"COREME","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":281.0}],"radius":0.0,"height":632.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"5e58f98e-fc4e-416c-8025-cffd358f6dc8","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":913.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"d5a569a4-c1d9-4617-9bae-5d71d225528f","name":"Documento já foi emitido?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":666.0,"y":471.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"fec53651-29e1-46f0-93b7-9be20089524f","name":"Documento foi emitido em papel?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":817.0,"y":471.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"803bee24-1968-4ba6-ae6e-32103aeba7db","name":"Documento está na Divisão de Arquivo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":955.0,"y":471.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"e06a3baa-6a41-4391-93a5-73a79dce0357","name":"[DIARQ] 02 Emprestar documentos ","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":930.0,"y":335.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2002%20Emprestar%20documentos/#list","type":"url"}},{"id":"975e75f2-4ec7-45a4-8198-1d6ca3aeaa9e","name":"Comunicar interessado para retirar o documento na secretaria da COREME","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1087.0,"y":451.5}],"radius":0.0,"height":81.0,"width":120.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"23a955f3-042a-4d65-a8a7-6db2e936ed77","name":"Incluir documento 171 - Declaração de retirada de documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1089.0,"y":322.0}],"radius":0.0,"height":71.0,"width":116.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fc180d44-fe85-43de-b507-25e7065cffdf","name":"Retirar documento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1102.0,"y":137.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ce397ae4-bb15-4e69-90b2-f9c481d3e250","name":"Assinar documento 171 - Declaração de retirada de documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1415.0,"y":129.5}],"radius":0.0,"height":77.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0afcefda-27ca-4903-8655-57f7af9fedee","name":"Incluir em PDF documento solicitado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":792.0,"y":593.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"63b1a610-51f4-46c5-bce8-2788c5870424","name":"Documento poderá ser emitido?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":666.0,"y":714.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"02cfdcf6-aad6-44e0-a5f1-db95869a327b","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":629.0,"y":814.0}],"radius":0.0,"height":78.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"39612778-8034-4872-8181-6a9a0fe4c8d5","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":821.0,"y":823.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"8fb00296-c6f3-463d-a697-41d0d0b2913a","containerName":"[COREME] Emitir documentos para alunos da Residência Médica","isSubprocess":false,"elements":[{"id":"33aa850f-8c11-40e6-aa62-a218cfe9bcef","value":"[COREME] 01 Emitir documentos para alunos da Residência Médica"},{"id":"a4ecf057-333e-4031-b016-8b264364e1d4","value":"Interessado"},{"id":"c1f69ea8-a5a0-4a52-a1ba-1c7e4dbd96dc","value":"COREME"},{"id":"5e58f98e-fc4e-416c-8025-cffd358f6dc8","value":"DIARQ"},{"id":"469a3c30-ba38-497f-bcd1-5517348acae2","value":""},{"id":"f4106859-2613-4320-a1d6-813c52505f95","value":""},{"id":"f2fa37fd-ae6a-4164-b89e-0a28f61cdc38","value":"Enviar documento para o interessado"},{"id":"82c0fcb0-223d-44be-ab2b-a70946009915","value":"Incluir documento solicitado"},{"id":"002d72a6-8491-4ba4-8a4e-b8a028345ed5","value":"Verificar o tipo de documento solicitado"},{"id":"6d5ffaa8-8f53-4cd3-8a4a-48ec1e1200ca","value":"Liberar acesso externo para o interessado"},{"id":"0628f033-0ac9-4ed8-8b17-f123bddc8931","value":"Incluir documento 384 - Solicitação de documentos residência médica"},{"id":"25f4cd77-3ceb-4dbb-a56b-df7ffbe4056d","value":"Abrir processo de solicitação de documentos da Residência Médica"},{"id":"5b1fd024-710f-4676-accf-247e1f7da1f4","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"63b1a610-51f4-46c5-bce8-2788c5870424","value":"Documento poderá ser emitido?"},{"id":"02cfdcf6-aad6-44e0-a5f1-db95869a327b","value":"Incluir documento 872 - Despacho simples"},{"id":"39612778-8034-4872-8181-6a9a0fe4c8d5","value":"Comunicar interessado"},{"id":"d5a569a4-c1d9-4617-9bae-5d71d225528f","value":"Documento já foi emitido?"},{"id":"fec53651-29e1-46f0-93b7-9be20089524f","value":"Documento foi emitido em papel?"},{"id":"0afcefda-27ca-4903-8655-57f7af9fedee","value":"Incluir em PDF documento solicitado"},{"id":"803bee24-1968-4ba6-ae6e-32103aeba7db","value":"Documento está na Divisão de Arquivo?"},{"id":"975e75f2-4ec7-45a4-8198-1d6ca3aeaa9e","value":"Comunicar interessado para retirar o documento na secretaria da COREME"},{"id":"23a955f3-042a-4d65-a8a7-6db2e936ed77","value":"Incluir documento 171 - Declaração de retirada de documentos"},{"id":"fc180d44-fe85-43de-b507-25e7065cffdf","value":"Retirar documento"},{"id":"ce397ae4-bb15-4e69-90b2-f9c481d3e250","value":"Assinar documento 171 - Declaração de retirada de documentos"},{"id":"e06a3baa-6a41-4391-93a5-73a79dce0357","value":"[DIARQ] 02 Emprestar documentos "},{"id":"9da894b2-d195-4fc4-8335-52c2ff74f455"},{"id":"2b1755bb-42f5-4e2d-87e6-963aab882653"},{"id":"fa709d42-fc65-4606-8588-79ddb2d910c8"},{"id":"b548e4b7-e4f1-4597-a09d-574296e2fa2e"},{"id":"24ee9423-3207-4974-85e8-2f2d2398ebc5"},{"id":"103dcb3a-d49e-4aad-bbb0-7e9e609490b3"},{"id":"d4c94b22-144b-4701-88cf-cd5a2064ed97"},{"id":"87baf59b-d2d8-48d1-95c9-e0fad8cf4680"},{"id":"1be22a85-4ff6-44c4-9925-99a419e8d7e2"},{"id":"74dc2379-d55b-483d-9a82-7ff37cf925a3"},{"id":"3e57500d-ae3c-43be-9eac-4e4e62089b60"},{"id":"81e4e1f2-ec5c-48d3-ab05-bd65156879f8"},{"id":"d579a86b-e187-48c4-b5c4-967f24b4419f"},{"id":"45754438-c06b-4c3a-9b00-0a16443a6361"},{"id":"765c061d-af56-434c-888b-490b78b3eee0"}]}]}