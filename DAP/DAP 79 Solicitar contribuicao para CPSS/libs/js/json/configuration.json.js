Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DAP] 79 Solicitar contribuição para CPSS","publishDate":"16/09/2021 10:57:45","pages":[{"id":"682e2795-71a1-407b-b1fd-ebfaf5443ade","name":"[DAP] 79 Solicitar contribuição para CPSS","version":"1.0","author":"mauriciostuani","image":"files\\diagrams\\DAP]_79_Solicitar_contribuicao_para_CPSS.png","isSubprocessPage":false,"elements":[{"id":"d343fffe-04c5-4810-8bce-51752aed9bcc","name":"[DAP] 79 Solicitar contribuição para CPSS","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":811.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"413b99a7-232a-4dd6-a446-b758bcf16980","name":"Nenhum início","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Entrada: RG, CPF</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":159.0,"y":82.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"abe5a22c-ee1b-42a7-b747-2369babe0a3d","name":"Abrir processo de  contribuição para a seguridade social do servidor público","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":244.0,"y":60.0}],"radius":0.0,"height":74.0,"width":124.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d015cda7-0b1d-4e78-91c5-2bc5b0b70674","name":"Incluir documento 097 - Solicitação contribuição para  CPSS","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":254.0,"y":184.0}],"radius":0.0,"height":72.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1fa20978-b811-4afb-a560-5c3fb762c071","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":254.0,"y":608.0}],"radius":0.0,"height":60.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"61cae02d-cda0-4a62-9c69-1c285c4417c2","name":"Realizar pagamento da contribuição previdenciária","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":534.0,"y":71.0}],"radius":0.0,"height":67.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e4dc1777-453e-40df-b6ef-89183a2d4aa7","name":"Incluir em PDF comprovantes do pagamento da contribuição","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":531.0,"y":196.0}],"radius":0.0,"height":80.0,"width":120.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"47a51f49-59a1-47ea-9622-dcd20ad093dd","name":"Recolher parte da contribuição da autarquia","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":542.0,"y":340.0}],"radius":0.0,"height":79.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1cc1f482-64bc-4c8b-9c2e-780a8d0848e1","name":"Incluir em PDF comprovantes do recolhimento ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":538.0,"y":480.0}],"radius":0.0,"height":75.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c38c5fb7-8849-49d6-8527-365d1d60d839","name":"Interesse em continuar contribuindo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":850.0,"y":256.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"b8a2affa-2d5f-4265-9776-26490ce0a7c5","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":959.0,"y":246.0}],"radius":0.0,"height":60.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"44f915a3-5ccd-49c6-a843-f7549a5d9928","name":"Dar ciência no processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":964.0,"y":417.0}],"radius":0.0,"height":65.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8e489ec8-14f9-4472-b96a-9e6d2657b723","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":966.0,"y":730.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"d8a909d6-2f22-4ef4-9d45-576cb6ae91a3","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1115.0,"y":745.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"f792088b-511f-45ec-961e-5fc0c6fb06e9","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":308.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"3fb58dfc-2b62-4447-8be6-faafbd24be7c","name":"Departamento de Contabilidade e Finanças ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":328.0}],"radius":0.0,"height":241.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"ff1d7452-2d36-4494-90c9-b4310a20678c","name":"DAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":569.0}],"radius":0.0,"height":131.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"d70fea50-ce1a-4da2-b134-27f8bc5dc2b8","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":700.0}],"radius":0.0,"height":131.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"682e2795-71a1-407b-b1fd-ebfaf5443ade","containerName":"[DAP] 79 Solicitar contribuição para CPSS","isSubprocess":false,"elements":[{"id":"d343fffe-04c5-4810-8bce-51752aed9bcc","value":"[DAP] 79 Solicitar contribuição para CPSS"},{"id":"f792088b-511f-45ec-961e-5fc0c6fb06e9","value":"Interessado"},{"id":"3fb58dfc-2b62-4447-8be6-faafbd24be7c","value":"Departamento de Contabilidade e Finanças "},{"id":"ff1d7452-2d36-4494-90c9-b4310a20678c","value":"DAP"},{"id":"d70fea50-ce1a-4da2-b134-27f8bc5dc2b8","value":"DIARQ"},{"id":"413b99a7-232a-4dd6-a446-b758bcf16980","value":""},{"id":"abe5a22c-ee1b-42a7-b747-2369babe0a3d","value":"Abrir processo de  contribuição para a seguridade social do servidor público"},{"id":"d015cda7-0b1d-4e78-91c5-2bc5b0b70674","value":"Incluir documento 097 - Solicitação contribuição para  CPSS"},{"id":"1fa20978-b811-4afb-a560-5c3fb762c071","value":"Incluir documento 872 - Despacho simples"},{"id":"e4dc1777-453e-40df-b6ef-89183a2d4aa7","value":"Incluir em PDF comprovantes do pagamento da contribuição"},{"id":"47a51f49-59a1-47ea-9622-dcd20ad093dd","value":"Recolher parte da contribuição da autarquia"},{"id":"61cae02d-cda0-4a62-9c69-1c285c4417c2","value":"Realizar pagamento da contribuição previdenciária"},{"id":"1cc1f482-64bc-4c8b-9c2e-780a8d0848e1","value":"Incluir em PDF comprovantes do recolhimento "},{"id":"c38c5fb7-8849-49d6-8527-365d1d60d839","value":"Interesse em continuar contribuindo?"},{"id":"b8a2affa-2d5f-4265-9776-26490ce0a7c5","value":"Incluir documento 872 - Despacho simples"},{"id":"44f915a3-5ccd-49c6-a843-f7549a5d9928","value":"Dar ciência no processo"},{"id":"d8a909d6-2f22-4ef4-9d45-576cb6ae91a3","value":""},{"id":"8e489ec8-14f9-4472-b96a-9e6d2657b723","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"9878dba0-3c0b-48a4-be6f-aa013764bf69"},{"id":"52ee5adf-ca89-42bc-86cc-142d821b47df"},{"id":"093209f8-7d31-4a5f-9f2b-2ce0ee97873a"},{"id":"f49ae4af-421a-4bac-a7d0-77c5cd2e989a"},{"id":"fcbcf5b5-8e21-4328-96a6-421f53158ad7"},{"id":"4f44e3d7-3788-4e66-aace-d689c3e735f3"}]}]}