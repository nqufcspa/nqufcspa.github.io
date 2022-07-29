Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DIST] 13 Manter registro de preços de peças de TI","publishDate":"29/07/2022 08:43:47","pages":[{"id":"91461a93-0ac2-4a32-bb7f-5c3419605a47","name":"[DIST] 13 Manter registro de preços de peças de TI","version":"1.0","author":"eltonf","image":"files\\diagrams\\DIST]_13_Manter_registro_de_precos_de_pecas_de_TI.png","isSubprocessPage":false,"elements":[{"id":"bff46c69-77ef-407e-9134-47b1015c4b29","name":"[DIST] 13 Manter registro de preços de peças de TI","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":804.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"0a6f2d8d-d496-4b47-8851-4af5d88b53dd","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":124.0,"y":65.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"65969570-a333-445e-b372-d4ba46cb27a4","name":"Abrir prazo para compra de peças","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":194.0,"y":50.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c9f1a92a-7d01-46b0-add6-6b0cf667608a","name":"Elaborar lista de compra de peças","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":194.0,"y":255.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d7d33e93-c723-42d9-a845-8f1d2e7d8036","name":"Realizar cotação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":447.0,"y":255.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d749991f-5ea7-42c1-86c2-703627cbbba3","name":"Encaminhar lista e cotações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":692.0,"y":255.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"487375f1-383e-4844-82d7-274216510655","name":"Homologar lista para Regristro de Preços","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":690.0,"y":53.5}],"radius":0.0,"height":65.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0f55017c-00dc-4ca5-83ab-d9c4437ebb8d","name":"Compra autorizada ?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":870.0,"y":65.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"713c8caa-6d47-475e-8c68-1c9a78c990b1","name":"Encaminhar documentos ao DCC","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":845.0,"y":255.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f8fbc3e9-6b0b-400b-829f-5f2560b8ddb6","name":"[DCC] 18 Adquirir material de consumo por pregão eletrônico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":845.0,"y":506.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DCC/DCC%2018%20Adquirir%20material%20de%20consumo%20por%20preg%C3%A3o%20eletr%C3%B4nico/#list","type":"url"}},{"id":"48d4601c-e782-498e-bf9a-f9bb2f07b790","name":"[DCC] 15 Gerir sistema de registro de preços","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":845.0,"y":702.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DCC/DCC%2015%20Gerir%20sistema%20de%20registro%20de%20pre%C3%A7os/index.html#list","type":"url"}},{"id":"12aa1cc0-3317-402d-9570-2bd5768b6152","name":"Receber peças","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1106.0,"y":291.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"04032e00-7828-4c8f-b34a-92bc4e313211","name":"Comunicar indeferimento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":966.0,"y":55.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"531f5065-3314-429d-86ca-4aceb835d39b","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1252.0,"y":306.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"0e275f56-7c75-400d-9f31-a82bad957567","name":"NTI","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":170.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"4844a107-4d8a-4748-acde-53dc1c4025d2","name":"DIST","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":190.0}],"radius":0.0,"height":266.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6e364e2d-3646-4001-a7f2-d452b4891700","name":"DCC","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":456.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"ec87d362-4309-4f74-aa20-c1b36272e067","name":"Gestor da Ata no DIST","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":656.0}],"radius":0.0,"height":168.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"91461a93-0ac2-4a32-bb7f-5c3419605a47","containerName":"[DIST] 13 Manter registro de preços de peças de TI","isSubprocess":false,"elements":[{"id":"bff46c69-77ef-407e-9134-47b1015c4b29","value":"[DIST] 13 Manter registro de preços de peças de TI"},{"id":"0e275f56-7c75-400d-9f31-a82bad957567","value":"NTI"},{"id":"4844a107-4d8a-4748-acde-53dc1c4025d2","value":"DIST"},{"id":"6e364e2d-3646-4001-a7f2-d452b4891700","value":"DCC"},{"id":"ec87d362-4309-4f74-aa20-c1b36272e067","value":"Gestor da Ata no DIST"},{"id":"0a6f2d8d-d496-4b47-8851-4af5d88b53dd","value":""},{"id":"65969570-a333-445e-b372-d4ba46cb27a4","value":"Abrir prazo para compra de peças"},{"id":"c9f1a92a-7d01-46b0-add6-6b0cf667608a","value":"Elaborar lista de compra de peças"},{"id":"d7d33e93-c723-42d9-a845-8f1d2e7d8036","value":"Realizar cotação"},{"id":"d749991f-5ea7-42c1-86c2-703627cbbba3","value":"Encaminhar lista e cotações"},{"id":"487375f1-383e-4844-82d7-274216510655","value":"Homologar lista para Regristro de Preços"},{"id":"0f55017c-00dc-4ca5-83ab-d9c4437ebb8d","value":"Compra autorizada ?"},{"id":"04032e00-7828-4c8f-b34a-92bc4e313211","value":"Comunicar indeferimento"},{"id":"713c8caa-6d47-475e-8c68-1c9a78c990b1","value":"Encaminhar documentos ao DCC"},{"id":"f8fbc3e9-6b0b-400b-829f-5f2560b8ddb6","value":"[DCC] 18 Adquirir material de consumo por pregão eletrônico"},{"id":"48d4601c-e782-498e-bf9a-f9bb2f07b790","value":"[DCC] 15 Gerir sistema de registro de preços"},{"id":"12aa1cc0-3317-402d-9570-2bd5768b6152","value":"Receber peças"},{"id":"531f5065-3314-429d-86ca-4aceb835d39b","value":""},{"id":"7a1c10c6-6e10-4c99-88f9-27518e2ad5a7"},{"id":"89a42492-cd7f-43f9-a20b-f87e64df0bd9"},{"id":"3e1d4687-4359-4e68-8657-be0c8832ffc2"},{"id":"3e6fd77d-68b4-4bb0-950c-c8d5aa7b0cdb"},{"id":"c31de94b-d90c-4ecd-915c-031e6b404e47"},{"id":"08182ce9-0bb5-48a0-9beb-8d3597ac2704"},{"id":"c2066969-6ce5-45ba-b5da-aa4e833578be"},{"id":"89f661c9-5e16-4901-960f-1a6c322cb50f"},{"id":"2d5d8bb1-90f3-48fa-9481-d4568f942ef8"},{"id":"b6690147-a4c9-4859-b756-4288a7c00941"},{"id":"8f12bd7d-1ddb-4493-ab8a-b3416262b7e8"},{"id":"17c8c5a1-59f0-4cfe-9aac-1fa577f0ebfd"},{"id":"4d060f25-cd35-4e52-a821-5cb1dcbd3692"},{"id":"7eb779cc-f68a-45e0-b1e7-dc765a8e1029"}]}]}