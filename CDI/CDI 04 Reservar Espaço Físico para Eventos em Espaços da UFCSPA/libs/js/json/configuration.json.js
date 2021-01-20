Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[CDI] 04 Reservar Espaço Físico para Eventos em Espaços da UFCSPA","publishDate":"19/01/2021 21:32:28","pages":[{"id":"1ef6c800-c8d0-4f13-8085-6f011480c725","name":"[CDI] 04 Reservar Espaço Físico para Eventos em Espaços Institucionais","version":"1.0","author":"celok","image":"files\\diagrams\\CDI]_04_Reservar_Espaco_Fisico_para_Eventos_em_Espacos_Institucionais.png","isSubprocessPage":false,"elements":[{"id":"7931b507-2e38-4e51-9d2b-22754b76c6e5","name":"[CDI] 04 Reservar Espaço Físico para Eventos em Espaços Institucionais","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":797.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"aaa09307-a496-4c98-beb5-b84f932d70ce","name":"Necessidade de espaço físico para evento","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Entrada: Solicita&ccedil;&atilde;o de espa&ccedil;o f&iacute;sico para evento</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":129.0,"y":109.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"7e38315b-cd2e-49b6-a03d-19a397a0bcb0","name":"Solicitar reserva de espaço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":203.0,"y":94.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9ccb3873-98f0-4fcf-88f6-f691c027f86c","name":"Verificar no sistema a disponibilidade do espaço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":198.0,"y":289.0}],"radius":0.0,"height":67.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"181c760c-2801-4b84-a8e3-5a45c5ac5a2b","name":"Fazer a pré-reserva","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":192.0,"y":487.0}],"radius":0.0,"height":52.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6bf349e3-c17c-403b-9668-d377f0ba8d6e","name":"Comunicar ao requerente a disponibilidade do espaço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":357.0,"y":288.0}],"radius":0.0,"height":68.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b50a7138-fe98-499a-805a-41ff07f26377","name":"Há pagamento de locação?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":510.0,"y":302.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"9aa62e64-4c26-42d6-ac11-44ed4fb3b23f","name":"Encaminhar GRU ao requerente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":612.0,"y":292.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"daa8b5e1-dafc-49dc-98b9-7b8fa7028e38","name":"Fazer o pagamento via GRU","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":752.0,"y":99.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"54dce874-0ec7-4488-b631-8dde4b9211b2","name":"Encaminhar autorização de reserva ao setor de apoio","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":745.5001,"y":287.0}],"radius":0.0,"height":68.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9a3eca2e-3012-4cb2-b1c6-86484da71bc8","name":"Efetuar a reserva","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":752.0,"y":478.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fe231f2c-c47b-46aa-99c9-90054abca6c1","name":"Comunicar a Prefeitura do Campus","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":916.0,"y":290.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1419b79b-3d6d-4eda-af28-fb1c3af17017","name":"Adotar providências relativas a vigilância, acesso e limpeza","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":900.0,"y":683.0}],"radius":0.0,"height":82.0,"width":122.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4d4b45dc-775e-44d5-acf0-7a2634e6477b","name":"Nenhum final","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Sa&iacute;da: Espa&ccedil;o f&iacute;sico reservado</span></p>","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1086.0,"y":709.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"0d016832-18b0-47f9-9987-7f3979e16e61","name":"Requerente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"cc1a68d0-630e-4462-afac-68c108a99676","name":"CDI","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":220.0}],"radius":0.0,"height":197.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c66809cb-7b49-4863-92b0-e2b2d8231250","name":"Setor de Apoio às Salas","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":417.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"1c04f172-e8d3-4c09-aa49-58fc7fe00571","name":"Prefeitura do Campus","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":617.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"1ef6c800-c8d0-4f13-8085-6f011480c725","containerName":"[CDI] 04 Reservar Espaço Físico para Eventos em Espaços Institucionais","isSubprocess":false,"elements":[{"id":"7931b507-2e38-4e51-9d2b-22754b76c6e5","value":"[CDI] 04 Reservar Espaço Físico para Eventos em Espaços Institucionais"},{"id":"0d016832-18b0-47f9-9987-7f3979e16e61","value":"Requerente"},{"id":"cc1a68d0-630e-4462-afac-68c108a99676","value":"CDI"},{"id":"c66809cb-7b49-4863-92b0-e2b2d8231250","value":"Setor de Apoio às Salas"},{"id":"1c04f172-e8d3-4c09-aa49-58fc7fe00571","value":"Prefeitura do Campus"},{"id":"aaa09307-a496-4c98-beb5-b84f932d70ce","value":"Necessidade de espaço físico para evento"},{"id":"7e38315b-cd2e-49b6-a03d-19a397a0bcb0","value":"Solicitar reserva de espaço"},{"id":"9ccb3873-98f0-4fcf-88f6-f691c027f86c","value":"Verificar no sistema a disponibilidade do espaço"},{"id":"181c760c-2801-4b84-a8e3-5a45c5ac5a2b","value":"Fazer a pré-reserva"},{"id":"6bf349e3-c17c-403b-9668-d377f0ba8d6e","value":"Comunicar ao requerente a disponibilidade do espaço"},{"id":"b50a7138-fe98-499a-805a-41ff07f26377","value":"Há pagamento de locação?"},{"id":"9a3eca2e-3012-4cb2-b1c6-86484da71bc8","value":"Efetuar a reserva"},{"id":"9aa62e64-4c26-42d6-ac11-44ed4fb3b23f","value":"Encaminhar GRU ao requerente"},{"id":"daa8b5e1-dafc-49dc-98b9-7b8fa7028e38","value":"Fazer o pagamento via GRU"},{"id":"54dce874-0ec7-4488-b631-8dde4b9211b2","value":"Encaminhar autorização de reserva ao setor de apoio"},{"id":"fe231f2c-c47b-46aa-99c9-90054abca6c1","value":"Comunicar a Prefeitura do Campus"},{"id":"1419b79b-3d6d-4eda-af28-fb1c3af17017","value":"Adotar providências relativas a vigilância, acesso e limpeza"},{"id":"4d4b45dc-775e-44d5-acf0-7a2634e6477b","value":""}]}]}