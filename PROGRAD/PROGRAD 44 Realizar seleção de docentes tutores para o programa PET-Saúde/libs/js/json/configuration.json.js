Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[PROGRAD] 44 Realizar seleção de docentes tutores para o programa PET-Saúde","publishDate":"21/07/2022 11:12:26","pages":[{"id":"4115dec9-e94c-4067-8595-b5be736ab789","name":"[PROGRAD] 44 Realizar seleção de docentes tutores para o programa PET-Saúde","version":"1.0","author":"ariel","image":"files\\diagrams\\PROGRAD]_44_Realizar_selecao_de_docentes_tutores_para_o_programa_PET_Saude.png","isSubprocessPage":false,"elements":[{"id":"ee71841b-0aef-4371-848d-b052c34cd588","name":"[PROGRAD] 44 Realizar seleção de docentes tutores para o programa PET-Saúde","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1202.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"661b92c3-208a-4895-ad37-6b4ccd7f1c46","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":145.0,"y":140.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"521d3923-0501-43f7-869d-8e2c5f2d0399","name":"Abrir processo de seleção de docentes tutores para o programa PET-Saúde","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":239.0,"y":115.0}],"radius":0.0,"height":80.0,"width":122.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6969cd93-de70-4df2-95e1-866b6fc657b5","name":"Incluir documento 917 - Edital","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":255.0,"y":251.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fdb6fda0-ba60-41bd-8d4b-758b3c720aff","name":"Publicar edital","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":410.0,"y":251.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"416c3971-11c4-4e7e-8bae-623417a548b9","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":576.0,"y":261.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"cf5e6ea8-3735-4243-9eb3-d86415f99370","name":"Há necessidade de retificação do edital?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":715.0,"y":261.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"ca6ea2ec-ca48-4e14-861c-4a3952376c16","name":"Incluir documento 198 - Retificação edital","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":684.0,"y":140.0}],"radius":0.0,"height":69.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d9499a61-86f1-4b2a-bf9e-24fdb7b695d7","name":"Publicar retificação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":863.0,"y":144.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"caaa6dd0-bd59-4d59-8522-0a7ebeefc84c","name":"Aguardar início de prazo de inscrições","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":581.0,"y":406.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"d834d358-c20f-40dd-b5ad-1446c27cae26","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":888.0,"y":261.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"8ba264e9-7ccb-4591-8289-b3968ddda166","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":993.0,"y":261.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"bf7588b1-d0ca-451c-8d0e-d41f8dadae60","name":"Aguardar fim de prazo de inscrições","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1131.0,"y":554.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"0b6a34af-d980-481a-96ac-739520bbd68f","name":"Realizar inscrição","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":968.0,"y":850.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3554aae5-b012-47ad-a230-3c7068c8fed2","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1126.0,"y":650.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"e6440d65-3d67-4b64-88b4-a4f7d982f570","name":"Incluir em PDF inscrições recebidas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1212.0,"y":640.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1e4e75a6-2f0d-48f2-8373-dbfb95e84d05","name":"Analisar as inscrições recebidas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1348.5,"y":640.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"780fa6ba-9fa7-4270-897e-5475189f1f0c","name":"Incluir documento 201 - Resultado seleção","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1340.0,"y":534.0}],"radius":0.0,"height":71.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b509ccb2-9b35-4435-9978-f041b6a2e36a","name":"Publicar resultado da seleção","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1509.0,"y":539.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"05c35d27-597b-4e70-98e3-425a4ba4e5da","name":"Cadastrar candidatos aprovados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1670.5,"y":539.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fed961cc-cc6a-4858-8db5-6bcdca1f52a2","name":"Enviar termo de compromisso para os candidatos aprovados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1660.5,"y":659.0}],"radius":0.0,"height":87.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d30cc1b2-b1d3-4e4b-8b27-61fc8d30f280","name":"Enviar em PDF termo de compromisso assinado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1666.0,"y":849.0}],"radius":0.0,"height":75.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4ab058bb-a1cf-402f-b600-66369191e153","name":"Incluir em PDF termos de compromisso recebidos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1946.0,"y":654.5}],"radius":0.0,"height":82.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b4d2bce8-d0ed-4320-a3f9-a5c7c0ed1a30","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2093.0,"y":660.0}],"radius":0.0,"height":71.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6dbe2a4b-67cb-47a0-8a0b-9d27592bd0e7","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2099.0,"y":1112.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"2f7ec2d2-788d-4fb4-8b88-6ee570a9dddb","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":2243.0,"y":1127.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"21ed4368-2aff-4371-adeb-5818b515cd59","name":"PROGRAD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":453.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0b445f92-a145-4f76-b9d2-b8d756a6d313","name":"Comissão de Avaliação do PET","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":473.0}],"radius":0.0,"height":294.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"cb0e2962-922f-4032-9c61-49a7a675f6d0","name":"Candidato","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":767.0}],"radius":0.0,"height":290.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"1856cd3c-d6a6-424c-aea6-201fcc9a19d2","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1057.0}],"radius":0.0,"height":165.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"4115dec9-e94c-4067-8595-b5be736ab789","containerName":"[PROGRAD] 44 Realizar seleção de docentes tutores para o programa PET-Saúde","isSubprocess":false,"elements":[{"id":"ee71841b-0aef-4371-848d-b052c34cd588","value":"[PROGRAD] 44 Realizar seleção de docentes tutores para o programa PET-Saúde"},{"id":"21ed4368-2aff-4371-adeb-5818b515cd59","value":"PROGRAD"},{"id":"0b445f92-a145-4f76-b9d2-b8d756a6d313","value":"Comissão de Avaliação do PET"},{"id":"cb0e2962-922f-4032-9c61-49a7a675f6d0","value":"Candidato"},{"id":"1856cd3c-d6a6-424c-aea6-201fcc9a19d2","value":"DIARQ"},{"id":"1e4e75a6-2f0d-48f2-8373-dbfb95e84d05","value":"Analisar as inscrições recebidas"},{"id":"2f7ec2d2-788d-4fb4-8b88-6ee570a9dddb","value":""},{"id":"6dbe2a4b-67cb-47a0-8a0b-9d27592bd0e7","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"0b6a34af-d980-481a-96ac-739520bbd68f","value":"Realizar inscrição"},{"id":"661b92c3-208a-4895-ad37-6b4ccd7f1c46","value":""},{"id":"521d3923-0501-43f7-869d-8e2c5f2d0399","value":"Abrir processo de seleção de docentes tutores para o programa PET-Saúde"},{"id":"6969cd93-de70-4df2-95e1-866b6fc657b5","value":"Incluir documento 917 - Edital"},{"id":"caaa6dd0-bd59-4d59-8522-0a7ebeefc84c","value":"Aguardar início de prazo de inscrições"},{"id":"cf5e6ea8-3735-4243-9eb3-d86415f99370","value":"Há necessidade de retificação do edital?"},{"id":"fdb6fda0-ba60-41bd-8d4b-758b3c720aff","value":"Publicar edital"},{"id":"ca6ea2ec-ca48-4e14-861c-4a3952376c16","value":"Incluir documento 198 - Retificação edital"},{"id":"d9499a61-86f1-4b2a-bf9e-24fdb7b695d7","value":"Publicar retificação"},{"id":"416c3971-11c4-4e7e-8bae-623417a548b9","value":""},{"id":"d834d358-c20f-40dd-b5ad-1446c27cae26","value":""},{"id":"8ba264e9-7ccb-4591-8289-b3968ddda166","value":""},{"id":"bf7588b1-d0ca-451c-8d0e-d41f8dadae60","value":"Aguardar fim de prazo de inscrições"},{"id":"3554aae5-b012-47ad-a230-3c7068c8fed2","value":""},{"id":"780fa6ba-9fa7-4270-897e-5475189f1f0c","value":"Incluir documento 201 - Resultado seleção"},{"id":"e6440d65-3d67-4b64-88b4-a4f7d982f570","value":"Incluir em PDF inscrições recebidas"},{"id":"b509ccb2-9b35-4435-9978-f041b6a2e36a","value":"Publicar resultado da seleção"},{"id":"05c35d27-597b-4e70-98e3-425a4ba4e5da","value":"Cadastrar candidatos aprovados"},{"id":"b4d2bce8-d0ed-4320-a3f9-a5c7c0ed1a30","value":"Incluir documento 872 - Despacho simples"},{"id":"fed961cc-cc6a-4858-8db5-6bcdca1f52a2","value":"Enviar termo de compromisso para os candidatos aprovados"},{"id":"d30cc1b2-b1d3-4e4b-8b27-61fc8d30f280","value":"Enviar em PDF termo de compromisso assinado"},{"id":"4ab058bb-a1cf-402f-b600-66369191e153","value":"Incluir em PDF termos de compromisso recebidos"},{"id":"135e4929-e229-4759-9fe7-8a5271cb2cad"},{"id":"9571a06a-f214-4be0-bf68-d648aa287013"},{"id":"ce9091c4-9b2e-4e3f-831c-55a91312915a"},{"id":"291bc06a-a77e-4a20-8275-7ead4427e8f3"},{"id":"07f5a55e-48ef-442f-8527-ab43270ec77b"},{"id":"0d3719fb-030a-4468-9cb3-031884ed4b82"},{"id":"f3adfe4a-f698-4b22-a188-52dc08624297"},{"id":"d6f0257e-4f15-4ce2-a7bb-7cc32d745a64"},{"id":"9db40015-bf6b-4519-9771-345ac56e5c11"},{"id":"fcee2960-1de7-46c1-861a-03a85de698b4"},{"id":"86553078-8ab2-4406-8785-39aed02f9103"},{"id":"753ba473-cae4-41c1-b086-144b86d5a901"},{"id":"15f7dd52-55b2-4270-a0f0-dc4534756115"},{"id":"8927b06e-17eb-4a8f-9425-651ec4c8f39a"},{"id":"d1075098-e154-4723-96f1-3ecdaf3a388c"},{"id":"897b97dc-746f-436e-a7c4-efa475eb046a"},{"id":"b3e72b27-666b-41df-b736-5dd7d83581cd"},{"id":"515b2a01-eede-46ed-a15a-fb3c6bfebebc"}]}]}