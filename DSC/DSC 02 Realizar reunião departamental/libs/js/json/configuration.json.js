Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DSC] 02 Realizar reunião departamental","publishDate":"09/12/2020 19:52:06","pages":[{"id":"9dd25710-8f88-4282-a19d-25860740a8b1","name":"[DSC]_02_Realizar_reunião_departamental","version":"1.0","author":"raphaelmsc","image":"files\\diagrams\\DSC]_02_Realizar_reuniao_departamental.png","isSubprocessPage":false,"properties":[],"elements":[{"id":"2cb7bc40-7ff3-4002-93e3-dc9e7cb95056","name":"[DSC] 02 Realizar reunião departamental","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":419.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"21cfbfb6-075e-4ff4-8c32-e20b71ea249f","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":142.0,"y":103.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"cbc7063d-fd27-454c-a7dc-03457af49a80","name":"Convocar para reunião","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":279.0,"y":88.0}],"radius":0.0,"height":60.0,"width":91.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d2502110-13e5-453d-9685-4599575021fc","name":"Comparecer à reunião ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":249.0,"y":308.0}],"radius":0.0,"height":60.0,"width":150.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e592de27-c823-4fad-b2f2-2e68592c0883","name":"Assinar as presenças","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":472.0,"y":308.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5d7fba72-7a44-45d0-bfe7-8cb6e3395bb2","name":"Escolher o redator da ata","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":649.0,"y":308.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"63ec102d-1b15-497c-9f3f-252b60ce08a3","name":"Ler e apresentar os temas em pauta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":617.5,"y":96.0}],"radius":0.0,"height":60.0,"width":153.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f989d6e0-e805-406b-ba91-055a7cf684ad","name":"50% de presenças?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":848.0,"y":256.0}],"radius":0.0,"height":60.0,"width":60.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"73c47eb4-48aa-42bd-990f-0a676f972dfb","name":"Discutir os pontos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1036.0,"y":256.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c00fd549-3b83-4d9b-a70b-aaf1242c9595","name":"Definir posição departamental sobre o ponto de pauta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1187.0,"y":256.0}],"radius":0.0,"height":60.0,"width":120.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0bfdf4f5-da6b-4815-97ef-1e81fc202f66","name":"Forma de obter opinião do grupo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1374.0,"y":266.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Realizar consenso","elementType":"SequenceFlow","properties":[]},{"name":"Realizar votação","elementType":"SequenceFlow","properties":[]}]},{"id":"7ae7fafc-6425-4f25-a7e6-d768642189c2","name":"Realizar consenso","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1496.0,"y":228.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c7f8ee5e-3de8-4a98-ae75-b79e37cd0756","name":"Realizar votação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1496.0,"y":307.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7c6e755f-9d9c-4837-91a4-60e60cc811a5","name":"Informar sobre o ponto de pauta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1202.0,"y":361.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"27c87d7d-92b7-45c8-8fb1-ec0a2fe0579e","name":"Registrar em ata","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1673.0,"y":256.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ba1fb075-86b1-4bec-8197-f0e30d6f7dcc","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1831.0,"y":271.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"36bbca59-b3d1-4eec-8469-258abededbb8","name":"Chefia do departamento ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":198.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"2637e4f8-0fc7-4e51-b1e6-d07aec623eb2","name":"Docentes do DSC","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":218.0}],"radius":0.0,"height":221.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"9dd25710-8f88-4282-a19d-25860740a8b1","containerName":"[DSC]_02_Realizar_reunião_departamental","isSubprocess":false,"elements":[{"id":"2cb7bc40-7ff3-4002-93e3-dc9e7cb95056","value":"[DSC] 02 Realizar reunião departamental"},{"id":"36bbca59-b3d1-4eec-8469-258abededbb8","value":"Chefia do departamento "},{"id":"2637e4f8-0fc7-4e51-b1e6-d07aec623eb2","value":"Docentes do DSC"},{"id":"21cfbfb6-075e-4ff4-8c32-e20b71ea249f","value":""},{"id":"cbc7063d-fd27-454c-a7dc-03457af49a80","value":"Convocar para reunião"},{"id":"d2502110-13e5-453d-9685-4599575021fc","value":"Comparecer à reunião "},{"id":"e592de27-c823-4fad-b2f2-2e68592c0883","value":"Assinar as presenças"},{"id":"5d7fba72-7a44-45d0-bfe7-8cb6e3395bb2","value":"Escolher o redator da ata"},{"id":"63ec102d-1b15-497c-9f3f-252b60ce08a3","value":"Ler e apresentar os temas em pauta"},{"id":"73c47eb4-48aa-42bd-990f-0a676f972dfb","value":"Discutir os pontos"},{"id":"c00fd549-3b83-4d9b-a70b-aaf1242c9595","value":"Definir posição departamental sobre o ponto de pauta"},{"id":"7c6e755f-9d9c-4837-91a4-60e60cc811a5","value":"Informar sobre o ponto de pauta"},{"id":"0bfdf4f5-da6b-4815-97ef-1e81fc202f66","value":"Forma de obter opinião do grupo?"},{"id":"7ae7fafc-6425-4f25-a7e6-d768642189c2","value":"Realizar consenso"},{"id":"c7f8ee5e-3de8-4a98-ae75-b79e37cd0756","value":"Realizar votação"},{"id":"27c87d7d-92b7-45c8-8fb1-ec0a2fe0579e","value":"Registrar em ata"},{"id":"ba1fb075-86b1-4bec-8197-f0e30d6f7dcc","value":""},{"id":"f989d6e0-e805-406b-ba91-055a7cf684ad","value":"50% de presenças?"},{"id":"55cdc5f9-303f-47a0-8c44-88107e24490b"},{"id":"3ec5d610-cdcc-444e-9c96-3113bbea716b"}]}]}