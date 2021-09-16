Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DAP] 02 Solicitar aceleração de promoção de docentes","publishDate":"16/09/2021 09:32:26","pages":[{"id":"7a7c798a-3b1f-4220-aa05-8ba850729b56","name":"[DAP] 02 Solicitar aceleração de promoção de docentes","version":"1.0","author":"winter","image":"files\\diagrams\\DAP]_02_Solicitar_aceleracao_de_promocao_de_docentes.png","isSubprocessPage":false,"elements":[{"id":"b4c86f66-a144-4dde-9404-6915567837ad","name":"[DAP] 02 Solicitar aceleração de promoção de docentes","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1032.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"350b8019-4248-4d3d-b432-3dc89461e9f6","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":143.0,"y":54.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"11707a9f-7bbb-44d8-a6cc-a485e1fa3a2f","name":"Abrir processo de aceleração de promoção","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":223.0,"y":38.0}],"radius":0.0,"height":63.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"02c16b9a-9b1a-42ad-b9f5-f9e1a609efef","name":"Incluir documento 857 - Formulário aceleração de  promoção","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":376.0,"y":32.0}],"radius":0.0,"height":75.0,"width":116.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7277a1c9-611c-43ae-91b8-2ef5eeeb277d","name":"Incluir em PDF documento comprobatório","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":554.0,"y":42.0}],"radius":0.0,"height":54.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"55cab6ce-3d00-434a-97cd-05fabc9ce3eb","name":"Verificar aprovação no estágio probatório","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":692.0,"y":261.0}],"radius":0.0,"height":68.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ae9bfac9-ac4c-493a-80ea-bfee53c759fc","name":"Requisito atendido?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":724.0,"y":359.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"1a9bcb74-da34-4e74-9d4a-9bdc82e940df","name":"Incluir em PDF resolução do CONSEPE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":699.0,"y":450.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fdf45c38-b57e-4f00-b1ad-6e73d9fc5dad","name":"Interstício efetivado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":724.0,"y":555.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"506d32e8-bb7b-47a7-b842-aa5fb8fb107c","name":"Aguardar completar o interstício","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":837.0,"y":560.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"50292c7e-bb31-4438-b666-b154e81cb93a","name":"Incluir documento 852 - Portaria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":692.0,"y":679.0}],"radius":0.0,"height":59.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5cec4620-a136-49df-8bb6-9a2e250e31d0","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":729.0,"y":828.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"7e44aac4-10e3-4d52-a8de-2d8f9eef6359","name":"Publicar a portaria no boletim de serviços eletrônico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":385.0,"y":697.0}],"radius":0.0,"height":67.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6140bd7d-f3c4-4f41-b11e-adbf479d57dc","name":"Registrar promoção no SIAPE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":398.0,"y":590.0}],"radius":0.0,"height":61.0,"width":85.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f3cf7343-ae6b-430f-8cbe-c21ca24d6647","name":"[DAP] 08 Incluir documentos no AFD","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":395.0,"y":491.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/DAP/%5bDAP%5d%2008%20Incluir%20documentos%20no%20AFD/#list","type":"url"}},{"id":"51d2c714-497f-434e-b178-87c60e7b6103","name":"Interessado incluiu certificado ou diploma?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":420.0,"y":409.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"d1b741b7-b7a7-4d42-a67a-d2c8f3739e08","name":"Enviar processo ao interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":395.0,"y":278.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b2a683fd-bedc-4acf-b36b-906ab3a5e689","name":"Incluir em PDF diploma ou certificado de conclusão de formação ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":378.5,"y":140.0}],"radius":0.0,"height":83.0,"width":125.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9726cfc4-15c2-4035-9f53-1b02073627fa","name":"Dar ciência no processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":112.0,"y":399.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"005029f0-6d0e-4b01-918a-b446f80245cb","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":234.0,"y":399.0}],"radius":0.0,"height":60.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a7b17771-c335-4bc2-bf2b-083d167791b8","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":883.0,"y":349.0}],"radius":0.0,"height":60.0,"width":88.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5feb38f9-5908-4229-bad5-76ce7151f631","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":875.0,"y":450.0}],"radius":0.0,"height":60.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f1f8efe8-e371-4250-9b44-c93c37290c7b","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":882.0,"y":943.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"3d42cc23-462c-4e8b-9b6a-b7366f084bc4","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1032.0,"y":958.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"f6645e4a-619b-4f5c-a273-666b998e233c","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":224.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6f82ba93-3d98-4fed-8ea7-24ab08d90be2","name":"DAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":244.0}],"radius":0.0,"height":569.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6b439cb9-66da-4fce-b9f8-6b5e0e09af9d","name":"Reitoria","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":813.0}],"radius":0.0,"height":106.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"4048efc7-b2cf-4f7e-8255-a6968b79a668","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":919.0}],"radius":0.0,"height":133.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"7a7c798a-3b1f-4220-aa05-8ba850729b56","containerName":"[DAP] 02 Solicitar aceleração de promoção de docentes","isSubprocess":false,"elements":[{"id":"b4c86f66-a144-4dde-9404-6915567837ad","value":"[DAP] 02 Solicitar aceleração de promoção de docentes"},{"id":"f6645e4a-619b-4f5c-a273-666b998e233c","value":"Interessado"},{"id":"6f82ba93-3d98-4fed-8ea7-24ab08d90be2","value":"DAP"},{"id":"6b439cb9-66da-4fce-b9f8-6b5e0e09af9d","value":"Reitoria"},{"id":"4048efc7-b2cf-4f7e-8255-a6968b79a668","value":"DIARQ"},{"id":"350b8019-4248-4d3d-b432-3dc89461e9f6","value":""},{"id":"50292c7e-bb31-4438-b666-b154e81cb93a","value":"Incluir documento 852 - Portaria"},{"id":"6140bd7d-f3c4-4f41-b11e-adbf479d57dc","value":"Registrar promoção no SIAPE"},{"id":"11707a9f-7bbb-44d8-a6cc-a485e1fa3a2f","value":"Abrir processo de aceleração de promoção"},{"id":"02c16b9a-9b1a-42ad-b9f5-f9e1a609efef","value":"Incluir documento 857 - Formulário aceleração de  promoção"},{"id":"55cab6ce-3d00-434a-97cd-05fabc9ce3eb","value":"Verificar aprovação no estágio probatório"},{"id":"ae9bfac9-ac4c-493a-80ea-bfee53c759fc","value":"Requisito atendido?"},{"id":"a7b17771-c335-4bc2-bf2b-083d167791b8","value":"Comunicar interessado"},{"id":"7277a1c9-611c-43ae-91b8-2ef5eeeb277d","value":"Incluir em PDF documento comprobatório"},{"id":"5cec4620-a136-49df-8bb6-9a2e250e31d0","value":"Assinar documento em bloco"},{"id":"1a9bcb74-da34-4e74-9d4a-9bdc82e940df","value":"Incluir em PDF resolução do CONSEPE"},{"id":"fdf45c38-b57e-4f00-b1ad-6e73d9fc5dad","value":"Interstício efetivado?"},{"id":"51d2c714-497f-434e-b178-87c60e7b6103","value":"Interessado incluiu certificado ou diploma?"},{"id":"d1b741b7-b7a7-4d42-a67a-d2c8f3739e08","value":"Enviar processo ao interessado"},{"id":"b2a683fd-bedc-4acf-b36b-906ab3a5e689","value":"Incluir em PDF diploma ou certificado de conclusão de formação "},{"id":"9726cfc4-15c2-4035-9f53-1b02073627fa","value":"Dar ciência no processo"},{"id":"506d32e8-bb7b-47a7-b842-aa5fb8fb107c","value":"Aguardar completar o interstício"},{"id":"3d42cc23-462c-4e8b-9b6a-b7366f084bc4","value":""},{"id":"7e44aac4-10e3-4d52-a8de-2d8f9eef6359","value":"Publicar a portaria no boletim de serviços eletrônico"},{"id":"f3cf7343-ae6b-430f-8cbe-c21ca24d6647","value":"[DAP] 08 Incluir documentos no AFD"},{"id":"f1f8efe8-e371-4250-9b44-c93c37290c7b","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"005029f0-6d0e-4b01-918a-b446f80245cb","value":"Incluir documento 872 - Despacho simples"},{"id":"5feb38f9-5908-4229-bad5-76ce7151f631","value":"Incluir documento 872 - Despacho simples"},{"id":"8b7f981e-5eb7-40ed-aa85-44c3ef98fc59"},{"id":"c92f8f67-2902-4dbb-8724-39bf7e4e343f"},{"id":"82651eaf-e073-4084-a92d-b7d4785327f1"},{"id":"9169debc-bbfe-40d2-be6a-cfddd797a40f"},{"id":"abe65829-8720-4a6a-b90c-59d97d9183f1"},{"id":"27801895-2729-43b4-949f-ec911e2a3168"},{"id":"8d7b273b-88f4-49d9-b6fd-eb60baba3994"},{"id":"10a15dcf-7884-4add-b944-ba3cc3183c0b"},{"id":"9333cb68-5f3a-4bf1-8b08-503b354663e9"},{"id":"7b8287fa-f62a-4778-861d-1bee51d66483"},{"id":"58a5d3e1-1274-4cae-b0ae-02aa31653740"},{"id":"a46400d2-8fdc-42d3-aa09-3d1e5a6162ff"},{"id":"80f00641-d26f-4a98-b54e-e90418c723b1"},{"id":"be9cbec3-e442-4ecc-86b8-592d141e2890"},{"id":"e0750738-fdd6-4b22-a2c7-7323d0fa2fff"},{"id":"e05293c5-3a4a-4ded-8b95-8f396e994865"}]}]}