Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DSG] 19 Receber materiais de consumo","publishDate":"10/12/2020 12:26:04","pages":[{"id":"4439063a-5713-4c7b-a09d-adf240e3f86a","name":"[DSG] 19 Receber materiais de consumo","version":"1.0","author":"michelo","image":"files\\diagrams\\DSG]_19_Receber_materiais_de_consumo.png","isSubprocessPage":false,"elements":[{"id":"a2c2823e-de0b-440c-b122-f7b08c1f625e","name":"[DSG] 19 Receber materiais de consumo","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1121.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"ec11b79f-8574-4118-bf24-1d6a1e16f326","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":104.0,"y":105.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"28c30e23-7cb8-4fe8-8fcb-7cd2e8b70dd4","name":"Abrir processo de  recebimento de materiais de consumo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":153.5,"y":81.0}],"radius":0.0,"height":78.0,"width":128.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"846c9bc0-6ce0-48cb-8e0d-55bfbbbc8d23","name":"Incluir documento 140 - Ordem de compra ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":169.5,"y":210.0}],"radius":0.0,"height":65.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7a970de0-5f83-4c3a-b58c-a2aab10eabf4","name":"Aguardar recebimento dos materiais","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":172.5,"y":350.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"24998154-3b5a-4094-95f7-ded90c0359a0","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":400.25,"y":100.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"72c43e2d-ace4-43b1-b9f4-9efb5856859b","name":"[DSG] 19-1 Distrubuir  materiais","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":553.0,"y":90.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":false,"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"[DSG] 19-1 Distribuir materiais - [DSG] 18-1 Distribuir materiais","type":"text"}]},{"id":"a4a1bccf-baea-46c0-a2a2-54d37c69d9ba","name":"Material entregue no prazo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":699.0,"y":100.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"9332bfc5-a7e8-40ee-b5bb-f15f475e8588","name":"Sim","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":849.0,"y":100.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Foram entregues todos os itens do empenho?","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"5a561d70-ad77-4c7a-904b-0fb7756c096f","name":"Incluir documento 133 - Notificação fornecedores","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":366.25,"y":192.0}],"radius":0.0,"height":60.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0c0496da-834b-49a3-a1b2-fdf1feb65ce5","name":"Enviar notificação ao fornecedor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":375.25,"y":313.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"48b933e8-ac73-44cb-bef2-02d520f463f9","name":"Aguardando defesa do fornecedor","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":405.25,"y":402.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"eb5886f6-e3ab-4df9-ae22-e543bd042284","name":"Incluir documento 872 - despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":370.25,"y":504.0}],"radius":0.0,"height":69.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5b18aa62-b152-4d0f-b8bc-78b2f0ac807b","name":"Incluir em PDF documentos comprobatórios, quando houver","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":368.25,"y":603.0}],"radius":0.0,"height":64.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5f4fcfe7-5f70-48fd-a662-5fe894d7821e","name":"Analisar justificativa do fornecedor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":375.25,"y":846.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c8cdb4ff-80be-496f-b1c3-f2c03eb225e2","name":"Justificativa aceita?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":400.25,"y":941.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"2f7a1740-f5eb-487b-bf8a-b612d368a216","name":"Incluir documento 135 - Decisão administrativa","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":586.0,"y":927.000061}],"radius":0.0,"height":68.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fa4f4705-3847-47ef-b048-0ff481d86c60","name":"Incluir em PDF planilha de recebimento de materiais","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":988.0,"y":88.0}],"radius":0.0,"height":64.0,"width":125.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7b7ad9ba-7261-490b-af97-7e894146c7d3","name":"Inclui documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1204.0,"y":90.0}],"radius":0.0,"height":60.0,"width":119.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"97b8123e-abb4-4f3a-9a5e-76cf664cfafa","name":"incluir documento 989 - Apropriação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1208.0,"y":722.5}],"radius":0.0,"height":63.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0c0358eb-065d-48ea-8432-8ba45cd6cc20","name":"incluir  documento 990 - Informe de documentos gerados no SIAFI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1400.0,"y":722.5}],"radius":0.0,"height":63.0,"width":123.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"20be3c09-256c-46ba-9dc9-6a4fdbf11819","name":"[DSG] 02 Aplicar sanções de descumprimento contratual","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":375.25,"y":1016.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/DSG/%5bDSG%5d%2002%20Conformidade%20de%20registro%20de%20gest%c3%a3o/#list","type":"url"}},{"id":"f71b3f36-07e8-4a16-95fa-d382c9cf1f55","name":"Anexar processo de sanção","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":595.0,"y":1016.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6b41d0c2-dd63-4f3a-b2b7-a2031e40448a","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1710.0,"y":250.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"00f146f7-3d41-4fbd-ae39-0870166ec248","name":"DIALMOX","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":667.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"99b9dd98-0ac5-42b1-85dd-eeaa4d9d1892","name":"DCF","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":687.0}],"radius":0.0,"height":139.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"e49c921a-7f6a-492e-bc76-df6d69b294e8","name":"DSG","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":826.0}],"radius":0.0,"height":315.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"4439063a-5713-4c7b-a09d-adf240e3f86a","containerName":"[DSG] 19 Receber materiais de consumo","isSubprocess":false,"elements":[{"id":"a2c2823e-de0b-440c-b122-f7b08c1f625e","value":"[DSG] 19 Receber materiais de consumo"},{"id":"00f146f7-3d41-4fbd-ae39-0870166ec248","value":"DIALMOX"},{"id":"99b9dd98-0ac5-42b1-85dd-eeaa4d9d1892","value":"DCF"},{"id":"e49c921a-7f6a-492e-bc76-df6d69b294e8","value":"DSG"},{"id":"7b7ad9ba-7261-490b-af97-7e894146c7d3","value":"Inclui documento 872 - Despacho simples"},{"id":"ec11b79f-8574-4118-bf24-1d6a1e16f326","value":""},{"id":"28c30e23-7cb8-4fe8-8fcb-7cd2e8b70dd4","value":"Abrir processo de  recebimento de materiais de consumo"},{"id":"9332bfc5-a7e8-40ee-b5bb-f15f475e8588","value":"Sim"},{"id":"5a561d70-ad77-4c7a-904b-0fb7756c096f","value":"Incluir documento 133 - Notificação fornecedores"},{"id":"0c0358eb-065d-48ea-8432-8ba45cd6cc20","value":"incluir  documento 990 - Informe de documentos gerados no SIAFI"},{"id":"eb5886f6-e3ab-4df9-ae22-e543bd042284","value":"Incluir documento 872 - despacho simples"},{"id":"24998154-3b5a-4094-95f7-ded90c0359a0","value":""},{"id":"97b8123e-abb4-4f3a-9a5e-76cf664cfafa","value":"incluir documento 989 - Apropriação"},{"id":"fa4f4705-3847-47ef-b048-0ff481d86c60","value":"Incluir em PDF planilha de recebimento de materiais"},{"id":"5b18aa62-b152-4d0f-b8bc-78b2f0ac807b","value":"Incluir em PDF documentos comprobatórios, quando houver"},{"id":"20be3c09-256c-46ba-9dc9-6a4fdbf11819","value":"[DSG] 02 Aplicar sanções de descumprimento contratual"},{"id":"7a970de0-5f83-4c3a-b58c-a2aab10eabf4","value":"Aguardar recebimento dos materiais"},{"id":"72c43e2d-ace4-43b1-b9f4-9efb5856859b","value":"[DSG] 19-1 Distrubuir  materiais"},{"id":"6b41d0c2-dd63-4f3a-b2b7-a2031e40448a","value":""},{"id":"0c0496da-834b-49a3-a1b2-fdf1feb65ce5","value":"Enviar notificação ao fornecedor"},{"id":"a4a1bccf-baea-46c0-a2a2-54d37c69d9ba","value":"Material entregue no prazo?"},{"id":"846c9bc0-6ce0-48cb-8e0d-55bfbbbc8d23","value":"Incluir documento 140 - Ordem de compra "},{"id":"5f4fcfe7-5f70-48fd-a662-5fe894d7821e","value":"Analisar justificativa do fornecedor"},{"id":"c8cdb4ff-80be-496f-b1c3-f2c03eb225e2","value":"Justificativa aceita?"},{"id":"2f7a1740-f5eb-487b-bf8a-b612d368a216","value":"Incluir documento 135 - Decisão administrativa"},{"id":"f71b3f36-07e8-4a16-95fa-d382c9cf1f55","value":"Anexar processo de sanção"},{"id":"48b933e8-ac73-44cb-bef2-02d520f463f9","value":"Aguardando defesa do fornecedor"},{"id":"275e4d84-19c2-402d-87bc-8bd21e31ac86"},{"id":"a42b6a56-6ddc-47e1-a77e-371e7f0fc062"},{"id":"f7d4c70d-faf7-40b5-b884-53b798f3c131"},{"id":"c3cbf011-646b-44aa-a29b-1cecce30b2cd"},{"id":"d85f7693-9b9f-40c0-9a0e-a4f5372dafcd"},{"id":"c8b90c64-6fec-4914-b046-582121161d96"},{"id":"c5a84186-3513-4c3c-8c5c-bee998debd5a"},{"id":"cef3dc53-14fc-4bf9-8258-e5115b1a3a2e"},{"id":"979c0ce9-4a8b-4be1-ac01-862b0a7e8b19"},{"id":"2f5152fd-d4e6-411d-84e6-b9a7b8d45e22"},{"id":"60d31077-c511-4422-b0a8-4c7333822492"},{"id":"52eaf1da-8357-4d74-9d49-a59a223fb700"},{"id":"e9cab11a-5504-4fb8-b520-5800abfef074"},{"id":"00c7254a-7f24-4c98-97d4-4c2c8c82196b"},{"id":"bec840c1-6128-4e68-901d-fa7943b338f6"},{"id":"b5778e91-aed1-4347-9b34-70ba75c92ca5"}]}]}