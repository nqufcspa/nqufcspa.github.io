Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[ASCOM] 08 - Envio de releases à imprensa","publishDate":"25/11/2020 13:58:18","pages":[{"id":"9b4e54f1-a2ad-42e5-943d-6f1949e776a6","name":"[ASCOM] 08 - Envio de releases à imprensa","version":"1.0","author":"josel","image":"files\\diagrams\\ASCOM]_08___Envio_de_releases_a_imprensa.png","isSubprocessPage":false,"elements":[{"id":"a5ea4e41-2e29-4395-9072-20dad91a14c4","name":"[ASCOM] 08 - Envio de releases à imprensa","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":713.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"b0271aea-bc9a-4f40-bb64-dddb6ab3ac87","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":128.0,"y":91.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"c50030fe-739a-4d9d-9e95-f6db21417751","name":"Solicitar divulgação de atividade para a imprensa","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":213.5,"y":76.0}],"radius":0.0,"height":60.0,"width":157.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0ce9b017-1b1a-45f0-b0e8-165a2bdd59fe","name":"Avaliar interesse jornalístico da atividade","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":230.0,"y":399.0}],"radius":0.0,"height":60.0,"width":124.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c61ad660-65d7-4fdc-9ff2-65d0f298b54e","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":446.0,"y":409.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"0f92b7c1-0a6f-4989-9dbb-9d4e41991de4","name":"Redigir release ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":575.0,"y":399.0}],"radius":0.0,"height":60.0,"width":163.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f050de67-65b4-4a61-b7b7-54850306318e","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":797.0,"y":409.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"648dd0eb-b8fe-4f47-a50e-3642a6a414b1","name":"Solicitar fotografia","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1048.0,"y":450.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"611563e7-6638-4cdb-b685-f65b4a2606e3","name":"[ASCOM] 20 - Registro fotográfico","description":"","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":1048.0,"y":603.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SubProcess","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/Ascom/%5bASCOM%5d%2020%20-%20Registro%20fotogr%c3%a1fico/#list","type":"url"}},{"id":"e0b7e93b-09c9-44f8-83ad-e340a72c0405","name":"Enviar release e material fotográfico para destinatários de imprensa externa","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1188.0,"y":441.0}],"radius":0.0,"height":68.0,"width":156.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c2159735-3a7f-447f-912b-16141dc8ca8b","name":"Enviar release sem material fotográfico para destinatários de imprensa externa","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1184.0,"y":349.0}],"radius":0.0,"height":60.0,"width":165.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1dee4b99-a60a-43b9-9cc7-053ac75f5327","name":"Informar solicitante sobre impossibilidade de envio de release","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1181.0,"y":247.0}],"radius":0.0,"height":60.0,"width":177.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"39141448-9164-4ad7-8434-c15744f580af","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1453.0,"y":364.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"519001f7-3878-4fb6-a953-e258c45d980a","name":"Membro da comunidade interna","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":192.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"111fa4d9-efa2-47d4-bfdb-ebb1be740e12","name":"Jornalista","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":212.0}],"radius":0.0,"height":344.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"aac54e5e-f14d-47db-b3f5-e190584eed03","name":"Fotógrafo","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":556.0}],"radius":0.0,"height":177.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"9b4e54f1-a2ad-42e5-943d-6f1949e776a6","containerName":"[ASCOM] 08 - Envio de releases à imprensa","isSubprocess":false,"elements":[{"id":"a5ea4e41-2e29-4395-9072-20dad91a14c4","value":"[ASCOM] 08 - Envio de releases à imprensa"},{"id":"519001f7-3878-4fb6-a953-e258c45d980a","value":"Membro da comunidade interna"},{"id":"111fa4d9-efa2-47d4-bfdb-ebb1be740e12","value":"Jornalista"},{"id":"aac54e5e-f14d-47db-b3f5-e190584eed03","value":"Fotógrafo"},{"id":"b0271aea-bc9a-4f40-bb64-dddb6ab3ac87","value":""},{"id":"c50030fe-739a-4d9d-9e95-f6db21417751","value":"Solicitar divulgação de atividade para a imprensa"},{"id":"0ce9b017-1b1a-45f0-b0e8-165a2bdd59fe","value":"Avaliar interesse jornalístico da atividade"},{"id":"c61ad660-65d7-4fdc-9ff2-65d0f298b54e","value":""},{"id":"0f92b7c1-0a6f-4989-9dbb-9d4e41991de4","value":"Redigir release "},{"id":"1dee4b99-a60a-43b9-9cc7-053ac75f5327","value":"Informar solicitante sobre impossibilidade de envio de release"},{"id":"39141448-9164-4ad7-8434-c15744f580af","value":""},{"id":"f050de67-65b4-4a61-b7b7-54850306318e","value":""},{"id":"611563e7-6638-4cdb-b685-f65b4a2606e3","value":"[ASCOM] 20 - Registro fotográfico"},{"id":"e0b7e93b-09c9-44f8-83ad-e340a72c0405","value":"Enviar release e material fotográfico para destinatários de imprensa externa"},{"id":"c2159735-3a7f-447f-912b-16141dc8ca8b","value":"Enviar release sem material fotográfico para destinatários de imprensa externa"},{"id":"648dd0eb-b8fe-4f47-a50e-3642a6a414b1","value":"Solicitar fotografia"}]}]}