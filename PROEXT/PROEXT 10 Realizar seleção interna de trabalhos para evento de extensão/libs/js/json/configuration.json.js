Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[PROEXT] 10 Realizar seleção interna de trabalhos para evento de extensão","publishDate":"15/07/2022 10:24:57","pages":[{"id":"83e93c5d-641c-4859-b9f8-89ce4f1caa5c","name":"[PROEXT] 10 Realizar seleção interna de trabalhos para evento de extensão","version":"1.0","author":"ritas","image":"files\\diagrams\\PROEXT]_10_Realizar_selecao_interna_de_trabalhos_para_evento_de_extensao.png","isSubprocessPage":false,"elements":[{"id":"959619d9-ea80-413e-832c-8a5e187a0fa7","name":"[PROEXT] 10 Realizar seleção interna de trabalhos para evento de extensão","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1633.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"460b8609-0a41-4e33-bab3-9841e1423dc3","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":114.0,"y":74.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"62071edb-bfe5-4a04-b154-c1cac0c5f085","name":"Abrir processo de seleção de trabalhos para participação em evento de extensão","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":263.0,"y":54.0}],"radius":0.0,"height":70.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1b43882d-fb2f-4514-bdd2-5990ec7a4e6f","name":"Incluir documento 917 - Edital","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":277.0,"y":193.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1b0a0c43-ec1a-42f9-8ccb-075126ef0f3a","name":"Publicar edital","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":277.0,"y":296.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7bdb6728-1c9b-48da-8003-941d8c8d6367","name":"Solicitar publicação de notícia sobre lançamento de edital","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":455.0,"y":122.0}],"radius":0.0,"height":71.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b23a63c6-0769-4e50-91b0-f1a60632259e","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":645.75,"y":137.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"716bd9c0-03e4-46b9-8a19-4c20cbd1059c","name":"Necessidade de retificação do Edital? ","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":762.0,"y":137.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"ed884ef9-aa71-4995-b287-155e0d39e8b2","name":"Incluir documento 198 - Retificação edital","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":912.5,"y":125.0}],"radius":0.0,"height":65.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a20cfab9-8c65-42a6-9de2-8cdc04271ed8","name":"Publicar retificação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":917.0,"y":311.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a58b8001-223e-40c5-9df7-8795c6a0e681","name":"Aguardar início do prazo de cadastramento de propostas","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":650.75,"y":326.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"f8c6ce4c-4d11-4237-9719-1cf78f6793d0","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":762.0,"y":321.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"b307d805-2f81-41c7-95fd-345b85c0f7de","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":762.0,"y":440.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"78a84cf2-a03c-4e55-aa9e-46255286c3cd","name":"Aguardar fim de prazo para cadastramento de propostas","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":906.0,"y":445.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"d4a0905d-8977-406b-bc36-552ab509882c","name":"Cadastrar propostas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":737.0,"y":984.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"387b959b-e20f-463d-bcc7-76552b64b439","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":901.0,"y":606.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"789c38d0-06bc-4a4d-b612-5436ecf4a4ac","name":"Enviar propostas para avaliação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1002.0,"y":596.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e7c735ec-4389-45ca-8de2-5ef6b51eccdb","name":"Avaliar propostas encaminhadas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1149.5,"y":1320.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8767ca65-1605-4c0f-89bd-59fef770e7a7","name":"Incluir documento 201 - Resultado seleção","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1143.0,"y":796.0}],"radius":0.0,"height":59.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2192cac5-6211-46df-ac4d-b421e0266568","name":"Publicar resultado ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1149.0,"y":620.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8f9b7e6a-8e38-49ff-9a84-830ba5a8cb0f","name":"Enviar resultado para publicação de notícia","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1142.0,"y":508.0}],"radius":0.0,"height":57.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"dd491925-a761-4de2-a8c5-211a2a479b2f","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1375.0,"y":776.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"c17ffb88-f651-430e-ae2d-8d6d4e717fdd","name":"Irá interpor recurso da seleção?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1375.0,"y":968.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"b3b53c23-7384-40fc-80a0-c96e5111debb","name":"[PROEXT] 10-01 Interpor recurso para a seleção de trabalhos para evento de extensão","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1350.0,"y":1082.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"[PROEXT] 10-01 Interpor recurso para a seleção de trabalhos para evento de extensão - [PROEXT] 10-01 Interpor recurso para a seleção de trabalhos para evento de extensão","type":"url","pageRef":"4115dec9-e94c-4067-8595-b5be736ab789","processPageRef":"ee71841b-0aef-4371-848d-b052c34cd588"}]},{"id":"3857906a-05e0-43f3-bcc7-369b3baa1474","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1521.0,"y":968.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Portão","elementType":"SequenceFlow","properties":[]}]},{"id":"db160289-5592-45f0-9c36-261ee2261ea5","name":"Aguardar prazo de recursos","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1455.0,"y":781.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"51a06916-651a-44d0-baa3-e37ef0d8ecfb","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1521.0,"y":776.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"edbaeeef-fb5e-4b7a-a655-61d7c23b7291","name":"Incluir documento 201 - Resultado seleção","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1490.5,"y":541.0}],"radius":0.0,"height":58.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0c587021-62c8-4cff-94eb-7f2e08df05e6","name":"Publicar resultados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1496.0,"y":396.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c8ff20e6-dceb-4f74-bcd2-7ed470a2d4f7","name":"Submeter os resumos aprovados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1699.0,"y":396.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"969e6ac9-9f9c-4e3c-bf82-bf50c9684481","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1692.0,"y":500.0}],"radius":0.0,"height":66.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"368dbf76-fc30-4410-8734-374b6724621b","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1699.0,"y":1507.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"566caafc-40d4-4f99-8abf-74adfc45347e","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1834.0,"y":1522.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"52c55dbc-fc0d-41d5-a6de-f5de2752b3c8","name":"PROEXT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":877.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"f6242834-a16c-44f1-8fc7-b28fd2965e33","name":"Proponente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":897.0}],"radius":0.0,"height":339.5,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"137564fb-f557-4660-8a55-37e4d3e031c1","name":"Avaliadores/ COMEX","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1236.5}],"radius":0.0,"height":227.099976,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"318921a2-3a7a-4427-b9ee-75628346d3e4","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1463.6}],"radius":0.0,"height":189.400024,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]},{"id":"4115dec9-e94c-4067-8595-b5be736ab789","name":"[PROEXT] 10-01 Interpor recurso para a seleção de trabalhos para evento de extensão","version":"1.0","author":"ariel","image":"files\\diagrams\\PROEXT]_10_01_Interpor_recurso_para_a_selecao_de_trabalhos_para_evento_de_extensao.png","isSubprocessPage":false,"elements":[{"id":"ee71841b-0aef-4371-848d-b052c34cd588","name":"[PROEXT] 10-01 Interpor recurso para a seleção de trabalhos para evento de extensão","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":974.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"22f55166-bbec-477b-be4e-a647a7d34636","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":154.0,"y":125.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"5dd78684-a960-4d80-a03d-a043930f5aa5","name":"Abrir processo de interposição de recurso da seleção de trabalhos para evento de extensão","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":257.0,"y":100.0}],"radius":0.0,"height":80.0,"width":119.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ba09668a-2f11-4319-b892-ca328e12d31a","name":"Incluir documento 005 - Requerimento interposição de recurso ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":447.0,"y":106.0}],"radius":0.0,"height":69.0,"width":131.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ea83c1e0-ba98-4397-bf42-59b5ac4b862b","name":"Incluir em PDF documentos pertinentes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":467.5,"y":225.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1e4e75a6-2f0d-48f2-8373-dbfb95e84d05","name":"Enviar documentos recebidos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":467.0,"y":411.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"194b38e4-4059-4320-8282-02129eed113d","name":"Analisar documentos recebidos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":467.0,"y":647.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"58c62079-a08e-4ea5-9453-0e67427c68de","name":"Enviar análise realizada para a PROEXT","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":467.0,"y":743.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7fd6891e-2182-4e26-bf51-6e45cc20aaec","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":626.0,"y":405.0}],"radius":0.0,"height":58.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1d6a2a86-2113-473f-bdfb-feb775f3bb94","name":"Encaminhar resposta ao proponente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":796.0,"y":404.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f207898e-c246-41cb-9246-70038aaa4182","name":"Recurso deferido?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":957.0,"y":414.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"e26aa384-a71e-4a8b-abf6-2b7a94ad8aca","name":"Incluir proposta na lista de propostas aceitas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1053.0,"y":404.0}],"radius":0.0,"height":61.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6dbe2a4b-67cb-47a0-8a0b-9d27592bd0e7","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1063.0,"y":871.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"2f7ec2d2-788d-4fb4-8b88-6ee570a9dddb","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1202.0,"y":886.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"cb0e2962-922f-4032-9c61-49a7a675f6d0","name":"Proponente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":332.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0b445f92-a145-4f76-b9d2-b8d756a6d313","name":"PROEXT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":352.0}],"radius":0.0,"height":252.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6db87271-9db7-4a11-9507-cb7a91df5fb9","name":"Avaliadores/ COMEX","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":604.0}],"radius":0.0,"height":222.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"1856cd3c-d6a6-424c-aea6-201fcc9a19d2","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":826.0}],"radius":0.0,"height":168.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"4115dec9-e94c-4067-8595-b5be736ab789","containerName":"[PROEXT] 10-01 Interpor recurso para a seleção de trabalhos para evento de extensão","isSubprocess":false,"elements":[{"id":"ee71841b-0aef-4371-848d-b052c34cd588","value":"[PROEXT] 10-01 Interpor recurso para a seleção de trabalhos para evento de extensão"},{"id":"cb0e2962-922f-4032-9c61-49a7a675f6d0","value":"Proponente"},{"id":"0b445f92-a145-4f76-b9d2-b8d756a6d313","value":"PROEXT"},{"id":"6db87271-9db7-4a11-9507-cb7a91df5fb9","value":"Avaliadores/ COMEX"},{"id":"1856cd3c-d6a6-424c-aea6-201fcc9a19d2","value":"DIARQ"},{"id":"22f55166-bbec-477b-be4e-a647a7d34636","value":""},{"id":"5dd78684-a960-4d80-a03d-a043930f5aa5","value":"Abrir processo de interposição de recurso da seleção de trabalhos para evento de extensão"},{"id":"ba09668a-2f11-4319-b892-ca328e12d31a","value":"Incluir documento 005 - Requerimento interposição de recurso "},{"id":"ea83c1e0-ba98-4397-bf42-59b5ac4b862b","value":"Incluir em PDF documentos pertinentes"},{"id":"1e4e75a6-2f0d-48f2-8373-dbfb95e84d05","value":"Enviar documentos recebidos"},{"id":"194b38e4-4059-4320-8282-02129eed113d","value":"Analisar documentos recebidos"},{"id":"58c62079-a08e-4ea5-9453-0e67427c68de","value":"Enviar análise realizada para a PROEXT"},{"id":"7fd6891e-2182-4e26-bf51-6e45cc20aaec","value":"Incluir documento 872 - Despacho simples"},{"id":"1d6a2a86-2113-473f-bdfb-feb775f3bb94","value":"Encaminhar resposta ao proponente"},{"id":"f207898e-c246-41cb-9246-70038aaa4182","value":"Recurso deferido?"},{"id":"2f7ec2d2-788d-4fb4-8b88-6ee570a9dddb","value":""},{"id":"e26aa384-a71e-4a8b-abf6-2b7a94ad8aca","value":"Incluir proposta na lista de propostas aceitas"},{"id":"6dbe2a4b-67cb-47a0-8a0b-9d27592bd0e7","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"135e4929-e229-4759-9fe7-8a5271cb2cad"},{"id":"1d10338a-03b0-43b5-9ccc-100f8eb093d5"},{"id":"95d6bff8-06c9-4c04-93f0-06ff7deaf71a"},{"id":"9fded7de-1e87-45f9-98b0-28a9a0c9080f"},{"id":"ce235f3a-1e7d-4ed8-b614-94dd5f16f826"},{"id":"e066947c-b32e-4489-8e60-3ac874c5133f"},{"id":"73a963b4-8704-4021-a50a-6a77f2318b1a"},{"id":"d5726f4e-5cc5-4a08-8ed8-764b2ae87a98"},{"id":"102db12e-86ac-4c24-bf71-edcf09137400"},{"id":"9dca56aa-d67b-460a-940e-9e91e184c9f8"},{"id":"7c7ab083-7fcb-4d86-a078-bc36a0b04e1e"},{"id":"fcee2960-1de7-46c1-861a-03a85de698b4"},{"id":"19fc0064-932d-470e-96d8-131c673eb087"},{"id":"bb20606a-f90d-4e12-9eaf-cd91bd71fef6"},{"id":"823ef813-2241-49f1-93fa-e164f4f89542"},{"id":"b3d1076c-59b2-44e9-a0a2-e2df7095768e"},{"id":"7bf35151-f8d2-4daa-aec4-4caf308a0a4e"},{"id":"9c81709f-d465-4a91-b136-8aa9c10b6d75"},{"id":"7dc5ab05-afd6-4deb-b8da-c2d1a3d36881"},{"id":"ae9de515-7d67-4bda-b49f-8858790872f4"},{"id":"eb8b214e-902b-4910-a651-8b1ce1b81a63"},{"id":"65f31fdf-c8aa-4035-b382-3caa49a30a59"}]},{"containerId":"83e93c5d-641c-4859-b9f8-89ce4f1caa5c","containerName":"[PROEXT] 10 Realizar seleção interna de trabalhos para evento de extensão","isSubprocess":false,"elements":[{"id":"959619d9-ea80-413e-832c-8a5e187a0fa7","value":"[PROEXT] 10 Realizar seleção interna de trabalhos para evento de extensão"},{"id":"52c55dbc-fc0d-41d5-a6de-f5de2752b3c8","value":"PROEXT"},{"id":"f6242834-a16c-44f1-8fc7-b28fd2965e33","value":"Proponente"},{"id":"137564fb-f557-4660-8a55-37e4d3e031c1","value":"Avaliadores/ COMEX"},{"id":"318921a2-3a7a-4427-b9ee-75628346d3e4","value":"DIARQ"},{"id":"460b8609-0a41-4e33-bab3-9841e1423dc3","value":""},{"id":"1b43882d-fb2f-4514-bdd2-5990ec7a4e6f","value":"Incluir documento 917 - Edital"},{"id":"1b0a0c43-ec1a-42f9-8ccb-075126ef0f3a","value":"Publicar edital"},{"id":"716bd9c0-03e4-46b9-8a19-4c20cbd1059c","value":"Necessidade de retificação do Edital? "},{"id":"ed884ef9-aa71-4995-b287-155e0d39e8b2","value":"Incluir documento 198 - Retificação edital"},{"id":"a20cfab9-8c65-42a6-9de2-8cdc04271ed8","value":"Publicar retificação"},{"id":"d4a0905d-8977-406b-bc36-552ab509882c","value":"Cadastrar propostas"},{"id":"e7c735ec-4389-45ca-8de2-5ef6b51eccdb","value":"Avaliar propostas encaminhadas"},{"id":"8f9b7e6a-8e38-49ff-9a84-830ba5a8cb0f","value":"Enviar resultado para publicação de notícia"},{"id":"969e6ac9-9f9c-4e3c-bf82-bf50c9684481","value":"Incluir documento 872 - Despacho simples"},{"id":"62071edb-bfe5-4a04-b154-c1cac0c5f085","value":"Abrir processo de seleção de trabalhos para participação em evento de extensão"},{"id":"b307d805-2f81-41c7-95fd-345b85c0f7de","value":""},{"id":"78a84cf2-a03c-4e55-aa9e-46255286c3cd","value":"Aguardar fim de prazo para cadastramento de propostas"},{"id":"387b959b-e20f-463d-bcc7-76552b64b439","value":""},{"id":"8767ca65-1605-4c0f-89bd-59fef770e7a7","value":"Incluir documento 201 - Resultado seleção"},{"id":"c8ff20e6-dceb-4f74-bcd2-7ed470a2d4f7","value":"Submeter os resumos aprovados"},{"id":"0c587021-62c8-4cff-94eb-7f2e08df05e6","value":"Publicar resultados"},{"id":"edbaeeef-fb5e-4b7a-a655-61d7c23b7291","value":"Incluir documento 201 - Resultado seleção"},{"id":"566caafc-40d4-4f99-8abf-74adfc45347e","value":""},{"id":"dd491925-a761-4de2-a8c5-211a2a479b2f","value":""},{"id":"db160289-5592-45f0-9c36-261ee2261ea5","value":"Aguardar prazo de recursos"},{"id":"51a06916-651a-44d0-baa3-e37ef0d8ecfb","value":""},{"id":"b3b53c23-7384-40fc-80a0-c96e5111debb","value":"[PROEXT] 10-01 Interpor recurso para a seleção de trabalhos para evento de extensão"},{"id":"c17ffb88-f651-430e-ae2d-8d6d4e717fdd","value":"Irá interpor recurso da seleção?"},{"id":"3857906a-05e0-43f3-bcc7-369b3baa1474","value":""},{"id":"789c38d0-06bc-4a4d-b612-5436ecf4a4ac","value":"Enviar propostas para avaliação"},{"id":"2192cac5-6211-46df-ac4d-b421e0266568","value":"Publicar resultado "},{"id":"7bdb6728-1c9b-48da-8003-941d8c8d6367","value":"Solicitar publicação de notícia sobre lançamento de edital"},{"id":"b23a63c6-0769-4e50-91b0-f1a60632259e","value":""},{"id":"f8c6ce4c-4d11-4237-9719-1cf78f6793d0","value":""},{"id":"a58b8001-223e-40c5-9df7-8795c6a0e681","value":"Aguardar início do prazo de cadastramento de propostas"},{"id":"368dbf76-fc30-4410-8734-374b6724621b","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"5fa7861a-3377-4e3b-9f5b-3ffe27847c4b"},{"id":"76ad9d39-ee96-400a-a65f-916126c78a6b"},{"id":"376dd742-967b-45b5-b124-0c1a5ecf1ba9"},{"id":"15f15991-5766-4720-b9f6-47ac720538b8"},{"id":"571432db-e620-4753-8ac5-c8e7ab2db96e"},{"id":"215342aa-fb34-4b5a-9ab5-f07953712559"},{"id":"dfc97acb-ef15-4fac-80de-56f255b1c06b"},{"id":"01a9c1a0-4aff-4e28-b644-d99e78f02679"},{"id":"86b1c730-78e7-4931-8918-e1b396bdf157"},{"id":"75fea551-a70f-49e1-93bd-a31e395bfb8c"},{"id":"8ea43a87-6f4c-4294-9951-6cf6625e29dc"},{"id":"1dea5d23-8ccb-4df9-bebc-c983d546752f"},{"id":"f34803d8-e616-407c-a79b-444f36651142"},{"id":"d3dbda43-e92b-44ed-b0f2-02cbf0e08db2"},{"id":"7a24e102-edad-4f92-b867-86cf7920c979"},{"id":"9653347e-db2b-4fef-98bf-454b2279af1d"},{"id":"1baa3faf-1640-47ac-8d31-1a6b4e5ab295"},{"id":"f696d11a-ad8c-4c78-85e3-5f15b0473a06"},{"id":"ac63c142-2019-42e3-a96d-d51e83fa55f8"},{"id":"2aad8c9d-21d8-4f31-9ead-c05c2847c2d1"},{"id":"353a7a60-cc7b-496d-a03d-e75ed40ce946"},{"id":"8b32a51b-7491-48cb-86d6-d617c94415d9"},{"id":"52961b42-5f8c-449c-b59a-196a8efd5543"},{"id":"7108a9d9-2894-4c4e-9563-3595173e7ead"},{"id":"d681c994-c05c-4879-a539-2c53af102904"},{"id":"23515955-d271-41a0-b4b4-7be3d346af50"},{"id":"bd45f858-bde1-4690-9b92-44494dcb27c1"},{"id":"ff2e683d-9909-4fb4-9fbb-805e98c3230b"},{"id":"e29dd5f6-89fc-4e30-91cb-6c871dc52371"},{"id":"15e1ebb4-bb74-408b-bc47-426523266186"},{"id":"c7ef9c2e-b1fa-44f7-918b-95fabbd1eca2"},{"id":"54ff8782-4376-477b-bae8-3129190db653"}]}]}