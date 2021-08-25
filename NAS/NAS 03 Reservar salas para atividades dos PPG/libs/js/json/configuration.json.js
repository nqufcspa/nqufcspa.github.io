Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[NAS] 03 Reservar salas para atividades dos PPG","publishDate":"25/08/2021 11:37:52","pages":[{"id":"727bb425-39c6-4b63-a125-04dbaf2c31a4","name":"[NAS] 03 Reservar salas para atividades dos PPG","version":"1.0","author":"alipiol","image":"files\\diagrams\\NAS]_03_Reservar_salas_para_atividades_dos_PPG.png","isSubprocessPage":false,"elements":[{"id":"c947850c-1847-41a3-baf0-53d71d2c9ead","name":"[NAS] 03 Reservar salas para atividades dos PPG","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":855.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"0d09a8ab-090c-4faa-8761-efdead12b8fe","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":150.0,"y":184.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"77d070a2-05af-4427-bbc7-da9ed1007909","name":"Solicitar  o agendamento  de salas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":239.5,"y":169.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a724ce44-147b-4466-ba00-32f6111e1ca3","name":"Procurar sala disponível nos prédios 1 e 2","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":234.0,"y":433.0}],"radius":0.0,"height":66.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8516a9a1-9bc7-4cd4-ba03-1d4a25df7caf","name":"Tem sala disponível?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":393.0,"y":446.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"ed75bb6f-a89b-4885-8dd5-da792f671832","name":"Agendar salas no sistema ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":509.0,"y":436.0}],"radius":0.0,"height":60.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e4557a34-aae3-4848-aab7-ccbd63537141","name":"Disponibilizar link com as reservas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":737.5,"y":436.0}],"radius":0.0,"height":60.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"012e25e0-9735-4a8e-baef-d2b84dbb5cdc","name":"Validar a reserva","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":548.0,"y":701.0}],"radius":0.0,"height":56.0,"width":93.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"38350b6e-e4ac-48e5-afe7-048584b26ac8","name":"Reserva validada?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":695.0,"y":709.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"49ea341a-b643-451f-9cc2-31084854475b","name":"Solicitar ao NAS a troca de sala","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":345.0,"y":794.0}],"radius":0.0,"height":60.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"334d7a2a-142a-41ac-b84f-45cd4ff0cd27","name":"Comunicar ao PPG ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":549.0,"y":311.0}],"radius":0.0,"height":60.0,"width":80.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"24f1320e-3e38-41b3-9729-90a27bb5fd40","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":929.0,"y":447.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"ac51a7f3-809b-4285-a09a-058fb9c2be6a","name":"Programa de PPG","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":283.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"bb15efef-ae6f-41d4-bac6-48191d72fda0","name":"Núcleo de Apoio a Salas","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":303.0}],"radius":0.0,"height":347.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"7fdf3804-37ad-4a16-8beb-8cba5c7749e4","name":"Professor","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":650.0}],"radius":0.0,"height":225.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"727bb425-39c6-4b63-a125-04dbaf2c31a4","containerName":"[NAS] 03 Reservar salas para atividades dos PPG","isSubprocess":false,"elements":[{"id":"c947850c-1847-41a3-baf0-53d71d2c9ead","value":"[NAS] 03 Reservar salas para atividades dos PPG"},{"id":"ac51a7f3-809b-4285-a09a-058fb9c2be6a","value":"Programa de PPG"},{"id":"bb15efef-ae6f-41d4-bac6-48191d72fda0","value":"Núcleo de Apoio a Salas"},{"id":"7fdf3804-37ad-4a16-8beb-8cba5c7749e4","value":"Professor"},{"id":"0d09a8ab-090c-4faa-8761-efdead12b8fe","value":""},{"id":"77d070a2-05af-4427-bbc7-da9ed1007909","value":"Solicitar  o agendamento  de salas"},{"id":"24f1320e-3e38-41b3-9729-90a27bb5fd40","value":""},{"id":"a724ce44-147b-4466-ba00-32f6111e1ca3","value":"Procurar sala disponível nos prédios 1 e 2"},{"id":"e4557a34-aae3-4848-aab7-ccbd63537141","value":"Disponibilizar link com as reservas"},{"id":"ed75bb6f-a89b-4885-8dd5-da792f671832","value":"Agendar salas no sistema "},{"id":"012e25e0-9735-4a8e-baef-d2b84dbb5cdc","value":"Validar a reserva"},{"id":"38350b6e-e4ac-48e5-afe7-048584b26ac8","value":"Reserva validada?"},{"id":"8516a9a1-9bc7-4cd4-ba03-1d4a25df7caf","value":"Tem sala disponível?"},{"id":"334d7a2a-142a-41ac-b84f-45cd4ff0cd27","value":"Comunicar ao PPG "},{"id":"49ea341a-b643-451f-9cc2-31084854475b","value":"Solicitar ao NAS a troca de sala"},{"id":"c65eafde-9890-47c6-9d54-41ae7e648567"},{"id":"10344a6c-d5d3-4017-b82a-8a2b01bc0f00"},{"id":"c374b60b-6666-4a75-994c-adad85618b88"},{"id":"50825ecc-292f-4474-aa85-bca74b97531e"},{"id":"a704aeb1-c359-432b-9498-ce0efeb67ba5"},{"id":"f395aee7-ae59-4fd9-bc5c-53cce107e9ba"},{"id":"72888792-e460-4d2e-b73c-8a9b0ad55dbf"},{"id":"92578315-0d88-4890-86ce-531eec77817d"},{"id":"a2830a3a-b67f-4b16-a754-67dc7864f9f4"},{"id":"4e7cb0ae-a154-4ec3-b4b4-ed3adb7f8267"},{"id":"c1241847-ad44-4648-a5b5-f9f485c960ec"},{"id":"2b47737f-92a4-4226-829c-f4448b423f9e"}]}]}