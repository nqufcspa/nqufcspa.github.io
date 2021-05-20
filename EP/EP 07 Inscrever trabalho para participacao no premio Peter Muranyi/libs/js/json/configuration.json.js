Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[EP] 07 Inscrever trabalho para participação no prêmio Péter Murányi","publishDate":"20/05/2021 14:42:21","pages":[{"id":"6eebb77d-c0ec-4461-b892-51ab128c0c98","name":"[EP] 07 Inscrever trabalho para participação no prêmio Péter Murányi","version":"1.0","author":"winter","image":"files\\diagrams\\EP]_07_Inscrever_trabalho_para_participacao_no_premio_Peter_Muranyi.png","isSubprocessPage":false,"elements":[{"id":"d8890a4c-4265-4394-bf08-84c6280b81a2","name":"[EP] 07 Inscrever trabalho para participação no prêmio Péter Murányi","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1720.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"1d11b1ad-5ef5-4fd5-9f84-c7c08f7a2f2e","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":161.0,"y":123.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"bfcab2bb-57d1-41b6-a9d3-c41e577e1703","name":"Abrir processo de inscrição de trabalho em premiação de trabalho de pós-graduação stricto sensu","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":253.0,"y":97.0}],"radius":0.0,"height":83.0,"width":138.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"68224278-f656-48c2-ac1a-1a900f77168a","name":"Incluir documento 150 - Inscrição do trabalho pelo autor ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":521.0,"y":103.0}],"radius":0.0,"height":71.0,"width":123.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"38e99f8f-4e21-4b98-ad8a-4d04d31f83a9","name":" Incluir em PDF documentação necessária para inscrição","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":526.5,"y":222.0}],"radius":0.0,"height":67.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7c6e63c0-188d-4a07-b207-126e89385087","name":"Proponente é usuário externo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":724.0,"y":235.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"b1fbef7d-ec76-429d-b9d9-556b1721940e","name":"Liberar acesso externo ao proponente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":537.5,"y":414.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"27057500-ae1c-4df7-a230-6f44a1bf9ebb","name":"Enviar processo ao EP","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":537.5,"y":516.5556}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ef79ccfe-019d-48ea-ad31-2093f1a27578","name":"Verificar documentos de acordo com o Edital","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":533.0,"y":666.0}],"radius":0.0,"height":72.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b90f6033-5d0c-456b-94b5-38896f09c354","name":"Documentos encaminhados dentro do prazo do Edital?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":562.5,"y":831.8}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"721d7bec-d190-4def-968f-a771906939c0","name":"Documentos encaminhados corretamente conforme solicitados em Edital?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":562.0,"y":1036.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"142b8a0c-88ba-4202-b203-679d5df23a86","name":"Solicitar correções ao proponente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":144.0,"y":1026.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"413dff9c-4c62-46d6-bb98-8c647cd35058","name":"Encaminhar documentos faltantes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":305.0,"y":267.0}],"radius":0.0,"height":69.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"515f5a3b-6713-4e6f-9014-3ecc56b2cb6a","name":"Enviar processo à PROPPG","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":668.0,"y":1026.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"85bcf622-b520-4ab0-9057-9f90a4583c63","name":"Analisar trabalho proposto","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":660.0,"y":1203.0}],"radius":0.0,"height":66.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"81755d6a-d59d-4026-a0a6-34503ecbc7d4","name":"Incluir documento 191 - Parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":807.0,"y":1202.0}],"radius":0.0,"height":68.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4fa5e77f-3669-49a9-9f0e-37e63275fd73","name":"Parecer favorável?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":895.0,"y":777.8}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"10d1c530-a2c2-4494-8c52-2326d699e1ac","name":"Incluir documento 367 - Carta de indicação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1003.0,"y":699.8}],"radius":0.0,"height":69.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ce327ea2-4c8e-4c5c-970d-5fad9fc68bc7","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1201.0,"y":1405.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"f7ccdb3b-6d5e-4c70-9f5d-e4a98603ed99","name":"Inscrever trabalho na premiação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1239.0,"y":823.3}],"radius":0.0,"height":67.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8493c37a-34b7-47b9-a53c-707b658fa678","name":"Aguardar finalização da premiação","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1404.0,"y":841.8}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"b0986ff2-d08b-4438-ae3f-c450e5e47fb8","name":"Inserir em PDF resultado da premiação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1374.5,"y":955.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b213a814-4440-412c-bbd4-fba9bf2bfbea","name":"Notificar o proponente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1004.0,"y":881.0}],"radius":0.0,"height":66.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0da49e36-0635-4c81-bfd9-d1fee8385fde","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":327.0,"y":816.3}],"radius":0.0,"height":71.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"14d6f1a7-cdd9-44cf-882d-45f72eac6cc1","name":"Comunicar proponente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":335.5,"y":929.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9e7dacb8-e97a-4d0b-8ee4-1d0d3ea620f5","name":"[DIARQ] 01 Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1374.5,"y":1624.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[]},{"id":"851d968e-7883-4629-899e-35aa5e18f1d4","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1531.0,"y":1639.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"6c1996df-543d-4c43-ae76-337f6c27f593","name":"Proponente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":367.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"f41e7e06-8a07-4d97-abf2-3331c6702813","name":"DIPROT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":387.0}],"radius":0.0,"height":230.8,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"d9ba0b87-c035-4f8e-ae98-363adbb2b78f","name":"EP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":617.8}],"radius":0.0,"height":522.2,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0fc23e16-daef-47f7-ade9-2449bdafde41","name":"PROPPG","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1140.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0dc2d7c6-4d80-4dc0-a12a-c78ed3b64855","name":"Reitoria","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1340.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"4be47490-d0ac-4e19-8db1-75841c462c6c","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1540.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"6eebb77d-c0ec-4461-b892-51ab128c0c98","containerName":"[EP] 07 Inscrever trabalho para participação no prêmio Péter Murányi","isSubprocess":false,"elements":[{"id":"d8890a4c-4265-4394-bf08-84c6280b81a2","value":"[EP] 07 Inscrever trabalho para participação no prêmio Péter Murányi"},{"id":"6c1996df-543d-4c43-ae76-337f6c27f593","value":"Proponente"},{"id":"f41e7e06-8a07-4d97-abf2-3331c6702813","value":"DIPROT"},{"id":"d9ba0b87-c035-4f8e-ae98-363adbb2b78f","value":"EP"},{"id":"0fc23e16-daef-47f7-ade9-2449bdafde41","value":"PROPPG"},{"id":"0dc2d7c6-4d80-4dc0-a12a-c78ed3b64855","value":"Reitoria"},{"id":"4be47490-d0ac-4e19-8db1-75841c462c6c","value":"DIARQ"},{"id":"1d11b1ad-5ef5-4fd5-9f84-c7c08f7a2f2e","value":""},{"id":"bfcab2bb-57d1-41b6-a9d3-c41e577e1703","value":"Abrir processo de inscrição de trabalho em premiação de trabalho de pós-graduação stricto sensu"},{"id":"38e99f8f-4e21-4b98-ad8a-4d04d31f83a9","value":" Incluir em PDF documentação necessária para inscrição"},{"id":"ef79ccfe-019d-48ea-ad31-2093f1a27578","value":"Verificar documentos de acordo com o Edital"},{"id":"b90f6033-5d0c-456b-94b5-38896f09c354","value":"Documentos encaminhados dentro do prazo do Edital?"},{"id":"515f5a3b-6713-4e6f-9014-3ecc56b2cb6a","value":"Enviar processo à PROPPG"},{"id":"85bcf622-b520-4ab0-9057-9f90a4583c63","value":"Analisar trabalho proposto"},{"id":"81755d6a-d59d-4026-a0a6-34503ecbc7d4","value":"Incluir documento 191 - Parecer"},{"id":"4fa5e77f-3669-49a9-9f0e-37e63275fd73","value":"Parecer favorável?"},{"id":"b213a814-4440-412c-bbd4-fba9bf2bfbea","value":"Notificar o proponente"},{"id":"10d1c530-a2c2-4494-8c52-2326d699e1ac","value":"Incluir documento 367 - Carta de indicação"},{"id":"f7ccdb3b-6d5e-4c70-9f5d-e4a98603ed99","value":"Inscrever trabalho na premiação"},{"id":"413dff9c-4c62-46d6-bb98-8c647cd35058","value":"Encaminhar documentos faltantes"},{"id":"8493c37a-34b7-47b9-a53c-707b658fa678","value":"Aguardar finalização da premiação"},{"id":"851d968e-7883-4629-899e-35aa5e18f1d4","value":""},{"id":"68224278-f656-48c2-ac1a-1a900f77168a","value":"Incluir documento 150 - Inscrição do trabalho pelo autor "},{"id":"14d6f1a7-cdd9-44cf-882d-45f72eac6cc1","value":"Comunicar proponente"},{"id":"ce327ea2-4c8e-4c5c-970d-5fad9fc68bc7","value":"Assinar documento em bloco"},{"id":"b1fbef7d-ec76-429d-b9d9-556b1721940e","value":"Liberar acesso externo ao proponente"},{"id":"27057500-ae1c-4df7-a230-6f44a1bf9ebb","value":"Enviar processo ao EP"},{"id":"7c6e63c0-188d-4a07-b207-126e89385087","value":"Proponente é usuário externo?"},{"id":"721d7bec-d190-4def-968f-a771906939c0","value":"Documentos encaminhados corretamente conforme solicitados em Edital?"},{"id":"0da49e36-0635-4c81-bfd9-d1fee8385fde","value":"Incluir documento 872 - Despacho simples"},{"id":"142b8a0c-88ba-4202-b203-679d5df23a86","value":"Solicitar correções ao proponente"},{"id":"b0986ff2-d08b-4438-ae3f-c450e5e47fb8","value":"Inserir em PDF resultado da premiação"},{"id":"9e7dacb8-e97a-4d0b-8ee4-1d0d3ea620f5","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"44695260-8bb0-4c3a-991b-fe3f9a9ee2ba"},{"id":"c27f783f-e329-4a4b-966e-763efd9f3d8d"},{"id":"b667c349-741d-49f4-90b0-11cf2344f593"},{"id":"342221e4-b5c1-4a2b-8db1-ff90d1f093f0"},{"id":"4009091f-4a9b-4def-80b7-5c41e22d7e44"},{"id":"65285116-d742-4599-9c55-b48315255214"},{"id":"ea0b8c18-da4e-461b-8908-c159fd36c3dd"},{"id":"e1634fd4-1873-41f0-b822-4482a02ea720"},{"id":"59a9d569-d8b6-4874-a33b-659aa2010673"},{"id":"542d05b7-1a9a-4521-bc29-ca6e76e0a6fb"},{"id":"9e6113fc-3f93-4c28-bc3d-5e4940cdbd15"},{"id":"29a62262-fe56-4a75-b82f-6dc55f0b3166"},{"id":"9da25323-dc99-453a-b4ee-504c40ace728"},{"id":"63800e4d-79ef-4c0d-8efa-543bb318dd4d"},{"id":"0d7775bb-5261-4cf1-a40e-36c1ce134e4c"},{"id":"a02986ec-aec5-42b1-b674-87474652245d"},{"id":"aa4d55fd-4f31-430c-9636-fddac89a434a"},{"id":"31f22741-3b46-4fd3-b899-66aaa26fe0a7"}]}]}