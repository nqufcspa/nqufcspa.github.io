Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DAP] 91 Acompanhar compromisso assumido de TAC","publishDate":"30/09/2021 14:09:35","pages":[{"id":"9289f525-4b7f-4813-b84b-a9da0f1717ed","name":"[DAP] 91 Acompanhar compromisso assumido de TAC","version":"1.0","author":"mstua","image":"files\\diagrams\\DAP]_91_Acompanhar_compromisso_assumido_de_TAC.png","isSubprocessPage":false,"properties":[],"elements":[{"id":"304da497-ec62-48e7-bd04-772357c58e02","name":"[DAP] 91 Acompanhar compromisso assumido de TAC","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1454.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"6acf2fa9-4c33-45ac-a799-39716e73f830","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":113.0,"y":71.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"851a97d1-516c-4602-b031-639c5c37013c","name":"Abrir processo de acompanhamento de compromisso assumido de TAC","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":260.5,"y":47.5}],"radius":0.0,"height":79.0,"width":129.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b318fe1f-3d18-4beb-b027-310a8c92ce5b","name":"Anexar em PDF TAC firmado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":279.0,"y":193.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d5ee8657-6e91-4a72-970a-7b102ab82089","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":279.0,"y":324.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7694f2ef-6bbd-413c-bc73-1a3c52dbf9c5","name":"Enviar ofício à chefia imediata do servidor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":279.0,"y":509.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1b2645af-b491-4494-a93c-d1d5617763a2","name":"Aguardar retorno da chefia imediata (15 dias)","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":309.0,"y":712.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"aaa60f8d-d812-403c-b3b8-f3cb197fb941","name":"Anexar em PDF e-mail recebido pela chefia imediata do servidor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":427.0,"y":686.0}],"radius":0.0,"height":82.0,"width":129.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1307383d-1a65-4b21-b5e7-fe94ee72974b","name":"Compromissos assumidos cumpridos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":616.0,"y":707.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"945ce815-6116-4886-a143-63746d6fe56f","name":"Findo o prazo do TAC?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":794.0,"y":707.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"170f1df4-bffa-4b50-8674-ed93af9ae817","name":"[DAP] 08 Incluir documentos no AFD","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":937.0,"y":697.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/DAP/%5bDAP%5d%2008%20Incluir%20documentos%20no%20AFD/#list","type":"url"}},{"id":"e81f21d8-7c6f-48f7-b15a-a8c9658401d2","name":"Incluir documento 872 - Despacho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":937.0,"y":828.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"87f3a8bb-d6eb-43d2-8900-fc1d0cb4bb10","name":"Incluir documento 872 - Despacho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":591.0,"y":828.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"73750570-383d-4ea7-9f6b-4eb8ec023050","name":"Incluir documento 872 - Despacho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":591.0,"y":1004.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4069dec8-d90d-4549-9db4-c6d71ca6b7c9","name":"[Reitoria] 13-01 Instruir processo de PAD ou SINAC","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":591.0,"y":1157.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/Reitoria/Reitoria%2013%20Apurar%20infracao%20disciplinar%20em%20rito%20ordinario/#diagram/33d8ad9d-a434-4650-8d4f-92c1d8d7602f","type":"url"}},{"id":"09a8c743-f94b-4729-965e-40f700a57b64","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":937.0,"y":1357.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"69a769e9-b232-4139-b601-50e50da9c81d","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1140.0,"y":1372.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"f2a044b8-e9d0-4e8a-b5b7-1c337a14b349","name":"DAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":909.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"b9d0f781-5ba7-43ec-86b3-2584563865cc","name":"Reitoria","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":929.0}],"radius":0.0,"height":341.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6f88460c-262d-4d69-a903-d181bf635a83","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1270.0}],"radius":0.0,"height":204.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"9289f525-4b7f-4813-b84b-a9da0f1717ed","containerName":"[DAP] 91 Acompanhar compromisso assumido de TAC","isSubprocess":false,"elements":[{"id":"304da497-ec62-48e7-bd04-772357c58e02","value":"[DAP] 91 Acompanhar compromisso assumido de TAC"},{"id":"f2a044b8-e9d0-4e8a-b5b7-1c337a14b349","value":"DAP"},{"id":"b9d0f781-5ba7-43ec-86b3-2584563865cc","value":"Reitoria"},{"id":"6f88460c-262d-4d69-a903-d181bf635a83","value":"DIARQ"},{"id":"6acf2fa9-4c33-45ac-a799-39716e73f830","value":""},{"id":"851a97d1-516c-4602-b031-639c5c37013c","value":"Abrir processo de acompanhamento de compromisso assumido de TAC"},{"id":"b318fe1f-3d18-4beb-b027-310a8c92ce5b","value":"Anexar em PDF TAC firmado"},{"id":"d5ee8657-6e91-4a72-970a-7b102ab82089","value":"Incluir documento 011 - Ofício"},{"id":"1307383d-1a65-4b21-b5e7-fe94ee72974b","value":"Compromissos assumidos cumpridos?"},{"id":"170f1df4-bffa-4b50-8674-ed93af9ae817","value":"[DAP] 08 Incluir documentos no AFD"},{"id":"09a8c743-f94b-4729-965e-40f700a57b64","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"69a769e9-b232-4139-b601-50e50da9c81d","value":""},{"id":"73750570-383d-4ea7-9f6b-4eb8ec023050","value":"Incluir documento 872 - Despacho"},{"id":"87f3a8bb-d6eb-43d2-8900-fc1d0cb4bb10","value":"Incluir documento 872 - Despacho"},{"id":"aaa60f8d-d812-403c-b3b8-f3cb197fb941","value":"Anexar em PDF e-mail recebido pela chefia imediata do servidor"},{"id":"4069dec8-d90d-4549-9db4-c6d71ca6b7c9","value":"[Reitoria] 13-01 Instruir processo de PAD ou SINAC"},{"id":"945ce815-6116-4886-a143-63746d6fe56f","value":"Findo o prazo do TAC?"},{"id":"e81f21d8-7c6f-48f7-b15a-a8c9658401d2","value":"Incluir documento 872 - Despacho"},{"id":"7694f2ef-6bbd-413c-bc73-1a3c52dbf9c5","value":"Enviar ofício à chefia imediata do servidor"},{"id":"1b2645af-b491-4494-a93c-d1d5617763a2","value":"Aguardar retorno da chefia imediata (15 dias)"},{"id":"3f94d8f8-d1f6-4d76-82b9-585ea7cb693f"},{"id":"6ae6dd17-a29a-4a3d-8ffe-78004c85ff1a"},{"id":"8a1892d4-765c-4822-8bad-e8b00368c779"},{"id":"c839004c-5517-46c9-967d-7e69ea4e8ab7"},{"id":"33ad34cd-5bd9-4c43-bffe-2ead9d80a78d"},{"id":"e3718f27-15b5-41fa-abbb-0a90ed8c12e9"},{"id":"48c06730-3ed4-4ece-8388-290c1378e9b2"},{"id":"af7a6d5f-a695-4862-83a0-01506dc55251"}]}]}