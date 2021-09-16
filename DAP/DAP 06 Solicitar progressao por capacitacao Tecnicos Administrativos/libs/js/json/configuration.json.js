Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DAP] 06 Solicitar progressão por capacitação-Técnicos Administrativos","publishDate":"16/09/2021 09:34:23","pages":[{"id":"7a7c798a-3b1f-4220-aa05-8ba850729b56","name":"[DAP] 06 Solicitar progressão por capacitação-Técnicos Administrativos","version":"1.0","author":"winter","image":"files\\diagrams\\DAP]_06_Solicitar_progressao_por_capacitacao_Tecnicos_Administrativos.png","isSubprocessPage":false,"elements":[{"id":"b4c86f66-a144-4dde-9404-6915567837ad","name":"[DAP] 06 Solicitar progressão por capacitação-Técnicos Administrativos","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1149.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"350b8019-4248-4d3d-b432-3dc89461e9f6","name":"Nenhum início","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Entrada: Certificado de cursos, capacitações.</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":135.0,"y":87.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"39efc9ff-f2c3-4471-8cab-f6bbb077d7fc","name":"Abrir processo de progressão por capacitação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":215.0,"y":69.0}],"radius":0.0,"height":66.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a822c72f-74c2-44e6-9cbd-67334de7deed","name":"Incluir documento 862 - Formulário de progressão por capacitação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":356.0,"y":67.0}],"radius":0.0,"height":71.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"69aae3ef-e7e2-45a5-9525-be105c5f919c","name":"Incluir em PDF certificados para progressão por capacitação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":357.0,"y":169.0}],"radius":0.0,"height":72.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b4b5f325-efc0-403c-b62d-1a1c674a6e4f","name":"Verificar se interstício e documentação estão corretos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":354.500031,"y":403.0}],"radius":0.0,"height":76.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8d61860c-8790-40ed-ad8d-f80430eb3cbe","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":355.0,"y":530.0}],"radius":0.0,"height":60.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"98c806f2-de97-4f41-8464-c9570ce28801","name":"Condições atendidas?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":219.0,"y":660.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"c261ef4f-60c2-478c-b298-892d100d64da","name":"É possível o ajuste ou a complementação da documentação?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":432.0,"y":660.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"13aee4d2-325b-4d71-97b5-a9f6f5bd8aff","name":"Fazer  correções necessárias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":605.0,"y":277.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"50292c7e-bb31-4438-b666-b154e81cb93a","name":"Incluir documento 852 - Portaria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":186.0,"y":773.0}],"radius":0.0,"height":61.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f9e656c4-5330-443e-9a6c-c86997c99ce1","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":358.5,"y":947.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"6140bd7d-f3c4-4f41-b11e-adbf479d57dc","name":"Registrar no SIAPE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":449.0,"y":817.0}],"radius":0.0,"height":56.0,"width":85.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fe2d16fe-5180-4151-a225-20e2041ae144","name":"Publicar no Boletim de Serviços","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":563.0,"y":815.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2c63216c-75a0-4005-8986-247f20bf7bd8","name":"[DAP] 08 Incluir documentos no AFD","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":695.0,"y":815.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/DAP/%5bDAP%5d%2008%20Incluir%20documentos%20no%20AFD/#list","type":"url"}},{"id":"28e0130b-541f-4ddc-86f4-93ad7a4d1ddc","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":838.5,"y":815.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ea319bf0-d787-4284-9003-b51dc48732e2","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":838.0,"y":1062.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"3d42cc23-462c-4e8b-9b6a-b7366f084bc4","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":959.0,"y":1077.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"04cbc8c6-ca83-414f-9156-809c835babb6","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":338.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6f82ba93-3d98-4fed-8ea7-24ab08d90be2","name":"DAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":358.0}],"radius":0.0,"height":580.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6b439cb9-66da-4fce-b9f8-6b5e0e09af9d","name":"Reitoria","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":938.0}],"radius":0.0,"height":107.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"402ab890-9a64-434b-b7c7-0560a10bc77a","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1045.0}],"radius":0.0,"height":124.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"7a7c798a-3b1f-4220-aa05-8ba850729b56","containerName":"[DAP] 06 Solicitar progressão por capacitação-Técnicos Administrativos","isSubprocess":false,"elements":[{"id":"b4c86f66-a144-4dde-9404-6915567837ad","value":"[DAP] 06 Solicitar progressão por capacitação-Técnicos Administrativos"},{"id":"04cbc8c6-ca83-414f-9156-809c835babb6","value":"Interessado"},{"id":"6f82ba93-3d98-4fed-8ea7-24ab08d90be2","value":"DAP"},{"id":"6b439cb9-66da-4fce-b9f8-6b5e0e09af9d","value":"Reitoria"},{"id":"402ab890-9a64-434b-b7c7-0560a10bc77a","value":"DIARQ"},{"id":"350b8019-4248-4d3d-b432-3dc89461e9f6","value":""},{"id":"50292c7e-bb31-4438-b666-b154e81cb93a","value":"Incluir documento 852 - Portaria"},{"id":"6140bd7d-f3c4-4f41-b11e-adbf479d57dc","value":"Registrar no SIAPE"},{"id":"3d42cc23-462c-4e8b-9b6a-b7366f084bc4","value":""},{"id":"b4b5f325-efc0-403c-b62d-1a1c674a6e4f","value":"Verificar se interstício e documentação estão corretos"},{"id":"98c806f2-de97-4f41-8464-c9570ce28801","value":"Condições atendidas?"},{"id":"69aae3ef-e7e2-45a5-9525-be105c5f919c","value":"Incluir em PDF certificados para progressão por capacitação"},{"id":"c261ef4f-60c2-478c-b298-892d100d64da","value":"É possível o ajuste ou a complementação da documentação?"},{"id":"39efc9ff-f2c3-4471-8cab-f6bbb077d7fc","value":"Abrir processo de progressão por capacitação"},{"id":"a822c72f-74c2-44e6-9cbd-67334de7deed","value":"Incluir documento 862 - Formulário de progressão por capacitação"},{"id":"13aee4d2-325b-4d71-97b5-a9f6f5bd8aff","value":"Fazer  correções necessárias"},{"id":"f9e656c4-5330-443e-9a6c-c86997c99ce1","value":"Assinar documento em bloco"},{"id":"28e0130b-541f-4ddc-86f4-93ad7a4d1ddc","value":"Comunicar interessado"},{"id":"fe2d16fe-5180-4151-a225-20e2041ae144","value":"Publicar no Boletim de Serviços"},{"id":"8d61860c-8790-40ed-ad8d-f80430eb3cbe","value":"Incluir documento 872 - Despacho simples"},{"id":"2c63216c-75a0-4005-8986-247f20bf7bd8","value":"[DAP] 08 Incluir documentos no AFD"},{"id":"ea319bf0-d787-4284-9003-b51dc48732e2","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"ee3881d2-9abc-4e6e-a3c5-97f616b019a5"},{"id":"db460e66-b756-4501-a871-30457159ab94"},{"id":"9d3f83ad-3a17-41aa-b2ad-122442908ee7"},{"id":"323f4a7b-81ef-420e-abe1-febcc8aedfa2"},{"id":"ed867f68-4fdb-432d-9bbd-786209af24e9"},{"id":"f3cf871a-e085-4613-9089-d2409dba3fe2"},{"id":"155a00b5-39c6-4230-8c0d-f80631ea397f"},{"id":"83ee497e-f2d2-44e1-9600-6d27d5516132"},{"id":"0a179695-8676-4fde-af9e-5a9106946ff2"},{"id":"e2b73eb6-79ab-48be-aa01-58657efcadb2"},{"id":"e34885d9-eb01-41f7-9878-b3fe157c865c"},{"id":"06046b65-3071-4689-8d97-fe8d7b32cd11"},{"id":"469783ce-129a-4b6a-bf9e-57233fabde7d"},{"id":"8ce326ce-1e1a-4094-8d9f-210096f96002"},{"id":"a7eb27ee-0d0a-4434-a899-1e73a6e172c4"},{"id":"ad476215-a515-4f23-bd4b-5b18d71a8f81"},{"id":"e471be93-f998-4702-a2ed-fd5542ce2715"}]}]}