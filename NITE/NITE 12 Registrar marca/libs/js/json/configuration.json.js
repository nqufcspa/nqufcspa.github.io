Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[NITE] 12 Registrar marca","publishDate":"26/11/2020 14:20:05","pages":[{"id":"bacdcbc6-3904-4736-86b0-d47e1a910647","name":"[NITE] 12 Registrar marca","version":"1.0","author":"ariel","image":"files\\diagrams\\NITE]_12_Registrar_marca.png","isSubprocessPage":false,"elements":[{"id":"e3968895-9d31-465b-bad1-f923210be49c","name":"[NITE] 12 Registrar marca","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":775.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"620c0555-2ca6-4d34-9744-fec54829707a","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":179.0,"y":130.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"c74a0642-ac60-4214-a2d3-a903b3c053d5","name":"Abrir processo de registro de propriedade intelectual - marca","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":298.0,"y":109.0}],"radius":0.0,"height":72.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"58a68e9b-8116-49e6-9586-cdacbf510b21","name":"Incluir documento 021 - Intenção de registro propriedade intelectual","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":487.0,"y":107.5}],"radius":0.0,"height":77.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"464b596f-03a0-430f-8ee2-9702491aee6b","name":"[NITE] 12-01 Analisar pedido de registro de marca","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":500.5,"y":354.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"[NITE] 12-01 Analisar pedido de registro de marca - [NITE] 12-01 Analisar pedido de registro de marca","type":"url","pageRef":"6fb3c566-9924-4c07-a254-69617587c6cc","processPageRef":"48e3cd4c-e447-4a32-9726-bafe69cae851"}]},{"id":"3e5550eb-3eec-43ab-92e4-870fc90e5c79","name":"Registro de marca aprovado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":693.0,"y":364.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"67100d57-b063-456b-b832-4c924332e17e","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":668.0,"y":468.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7c00437d-4a87-4d8b-86bd-9aa8214ff5eb","name":"[NITE] 12-02 Finalizar o registro de marca","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":857.2223,"y":354.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"[NITE] 12-02 Finalizar o registro de marca - [NITE] 12-02 Finalizar o registro de marca","type":"url","pageRef":"317aa535-d36d-4e37-bc48-edd85d2ad5d2","processPageRef":"4e91093c-2000-40c9-8812-705237450dbf"}]},{"id":"5ac5fd07-af8e-47f1-bd65-dffa33d9f7e3","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":668.0,"y":617.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e561583a-42d4-419e-9f37-af3de472ed97","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":698.0,"y":724.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"6afda2f2-32ab-402d-bbe6-7db818a8f918","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":270.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"2e1f969c-09b7-4a0c-8aa1-75283592c524","name":"NITE","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":290.0}],"radius":0.0,"height":279.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c8e80b7e-83e6-4e76-98ea-9dc17b0d1513","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":569.0}],"radius":0.0,"height":226.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]},{"id":"6fb3c566-9924-4c07-a254-69617587c6cc","name":"[NITE] 12-01 Analisar pedido de registro de marca","version":"1.0","author":"brunacorrea","image":"files\\diagrams\\NITE]_12_01_Analisar_pedido_de_registro_de_marca.png","isSubprocessPage":false,"elements":[{"id":"48e3cd4c-e447-4a32-9726-bafe69cae851","name":"[NITE] 12-01 Analisar pedido de registro de marca","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1037.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"6206be9c-9b8e-493b-a512-beee673f6646","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":148.0,"y":105.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"8eb4d9e2-1553-4156-957f-df26272c0a36","name":"Abrir processo de análise de pedido de registro de propriedade intelectual","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":247.0,"y":71.5}],"radius":0.0,"height":99.0,"width":120.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"57d7d4a9-cc7a-415c-87c1-b6f2a4b2776b","name":"Tornar processo sigiloso","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":433.0,"y":90.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b1745c01-de83-403f-914b-0da2e08a8343","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":612.0,"y":86.0}],"radius":0.0,"height":69.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0a0252f9-abf5-4158-96e7-718711943e83","name":"Conceder credencial de acesso para o interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":614.0,"y":206.0}],"radius":0.0,"height":70.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"46bbcaaa-4590-4aae-ab08-cc09c5dde9e0","name":"Incluir documento 273 - Carta encaminhamento propriedade intelectual","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":224.0,"y":669.0}],"radius":0.0,"height":91.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c3f8beab-5ee4-49b1-9cee-139fe40ab2c1","name":"Incluir em PDF relatório de invenção","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":228.0,"y":820.0}],"radius":0.0,"height":62.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8ea978c8-7602-4514-be8c-2abf1b5e1166","name":"Rejeitar a credencial de acesso","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":521.0,"y":946.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"dd5903af-a5c7-4794-a417-ffbdb8fb28d1","name":"Tornar processo restrito","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":814.0,"y":222.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bca50998-6c00-4d25-80d3-a208ec351c9d","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":794.0,"y":81.0}],"radius":0.0,"height":70.0,"width":128.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c7c45a5a-5ef4-40b7-84d2-4c542b6ee129","name":"Liberar acesso externo para o Escritório de Consultoria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":965.0,"y":170.0}],"radius":0.0,"height":66.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"73a9fd87-fc7c-4b06-bc11-e3052a6da1b8","name":"Analisar a viabilidade do projeto","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":957.0,"y":450.0}],"radius":0.0,"height":67.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a5dc760d-e9bc-4db1-baaf-66bbcdc41803","name":"Incluir em PDF parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1142.0,"y":454.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0d88718a-bf39-4f36-8dd5-005d7ccbe0e7","name":"Enviar parecer do Escritório de Consultoria para o interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1136.0,"y":246.0}],"radius":0.0,"height":73.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"20e141c4-c6c0-4386-9b2c-d62b3bb9201c","name":"Arquivar este processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1142.0,"y":143.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"55761c1d-8a4d-4aa0-a536-b3e67e335497","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1172.0,"y":59.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"6aec3bcd-4c2e-431c-b615-daf0eee64cb7","name":"NITE","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":335.7,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"331ae76a-7bf1-41a2-8366-1c041bfaa5d0","name":"Escritório de Consultoria","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":355.7}],"radius":0.0,"height":268.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"db6a2ec7-d443-4566-a252-858acf378cab","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":623.7}],"radius":0.0,"height":433.3,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]},{"id":"317aa535-d36d-4e37-bc48-edd85d2ad5d2","name":"[NITE] 12-02 Finalizar o registro de marca","version":"1.0","author":"ariel","image":"files\\diagrams\\NITE]_12_02_Finalizar_o_registro_de_marca.png","isSubprocessPage":false,"elements":[{"id":"4e91093c-2000-40c9-8812-705237450dbf","name":"[NITE] 12-02 Finalizar o registro de marca","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1583.2,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"ce77147f-2add-4085-b759-4837a0f1fc7c","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":151.0,"y":156.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"8ea2373a-6885-46be-b011-f90ec59d2279","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":276.0,"y":133.0}],"radius":0.0,"height":77.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"09f426d3-0fd1-40fd-9823-a31d9326a02c","name":"Liberar acesso externo para o Escritório de Consultoria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":280.0,"y":275.0}],"radius":0.0,"height":71.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6db6a1b7-a9d9-4f4a-b72c-008bf9bdb49f","name":"Realizar o cadastro no portal do INPI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":279.0,"y":961.199951}],"radius":0.0,"height":68.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6dd90045-2500-4177-ae25-6c0fbd6f947a","name":"Gerar GRU para pagamento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":456.0,"y":963.199951}],"radius":0.0,"height":64.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c4fbc857-2f3b-4aed-b092-47dcefe2d9e2","name":"Incluir em PDF a GRU para pagamento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":633.0,"y":965.199951}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2a88ef5b-98ed-43eb-b9aa-795b28f73fca","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":621.0,"y":147.0}],"radius":0.0,"height":64.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"85d918ec-3755-46e0-8ee4-4e6f847ce453","name":"Incluir documento 860 - Despacho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":772.0,"y":731.0}],"radius":0.0,"height":67.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e7a226e2-dad6-4831-b959-8398f1a95ef0","name":"Pagamento autorizado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":952.0,"y":744.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"385c0653-7bfd-4c55-aa1e-08ad4ad3e56b","name":"Incluir documento 036 - Análise e deliberação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":918.500061,"y":1211.2}],"radius":0.0,"height":71.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"45895e98-c0cd-47da-8a83-6d39c233a111","name":"Incluir documento 989 - Apropriação/ Liquidação ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":921.000061,"y":1380.2}],"radius":0.0,"height":69.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e6535f88-b79a-4b39-a665-7d01296128e2","name":"Incluir documento 990 - Informe de documentos gerados no SIAFI ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":920.500061,"y":1490.2}],"radius":0.0,"height":71.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e4539903-05b1-4ce9-9850-2f69e4ef82f9","name":"Incluir em PDF comprovante de pagamento da GRU","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1112.0,"y":1487.2}],"radius":0.0,"height":77.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"577e81b5-0409-4aee-a70b-cdd2a8ade8d8","name":"Incluir documento 274 - Termo de concordância registro de patente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1106.0,"y":459.0}],"radius":0.0,"height":79.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e8da76fe-580f-4161-849e-5c37f4bd45d8","name":"Enviar GRU paga ao Escritório de Consultoria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1109.5,"y":327.0}],"radius":0.0,"height":67.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e0437bea-a891-48fa-b6e4-b66c1289ff5f","name":"Acompanhar registro da marca","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1142.0,"y":200.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"a7170f83-96ab-4d21-bf77-14a29b9eb768","name":"Enviar despacho da Reitoria para o interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":920.5,"y":78.5}],"radius":0.0,"height":73.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c2381bd3-4b85-4265-91a9-36a394bc6e32","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1142.0,"y":99.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"000851fd-1576-465b-9b44-212a283b93ca","name":"NITE","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":607.1,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"e413a6f9-7707-4cdf-931c-4358109ef694","name":"REITORIA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":627.1}],"radius":0.0,"height":262.9,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"b4d917f8-8d1a-487c-8901-9acbdb32ffad","name":"Escritório de Consultoria","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":890.0}],"radius":0.0,"height":268.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"02e9d3a1-1a33-46e4-bd18-232a98fed32c","name":"PROAD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1158.0}],"radius":0.0,"height":179.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"4c55e0bd-0154-4e7b-b139-48267c37f801","name":"DCF","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1337.0}],"radius":0.0,"height":266.199951,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"317aa535-d36d-4e37-bc48-edd85d2ad5d2","containerName":"[NITE] 12-02 Finalizar o registro de marca","isSubprocess":false,"elements":[{"id":"4e91093c-2000-40c9-8812-705237450dbf","value":"[NITE] 12-02 Finalizar o registro de marca"},{"id":"000851fd-1576-465b-9b44-212a283b93ca","value":"NITE"},{"id":"e413a6f9-7707-4cdf-931c-4358109ef694","value":"REITORIA"},{"id":"b4d917f8-8d1a-487c-8901-9acbdb32ffad","value":"Escritório de Consultoria"},{"id":"02e9d3a1-1a33-46e4-bd18-232a98fed32c","value":"PROAD"},{"id":"4c55e0bd-0154-4e7b-b139-48267c37f801","value":"DCF"},{"id":"e8da76fe-580f-4161-849e-5c37f4bd45d8","value":"Enviar GRU paga ao Escritório de Consultoria"},{"id":"e6535f88-b79a-4b39-a665-7d01296128e2","value":"Incluir documento 990 - Informe de documentos gerados no SIAFI "},{"id":"e4539903-05b1-4ce9-9850-2f69e4ef82f9","value":"Incluir em PDF comprovante de pagamento da GRU"},{"id":"385c0653-7bfd-4c55-aa1e-08ad4ad3e56b","value":"Incluir documento 036 - Análise e deliberação"},{"id":"577e81b5-0409-4aee-a70b-cdd2a8ade8d8","value":"Incluir documento 274 - Termo de concordância registro de patente"},{"id":"45895e98-c0cd-47da-8a83-6d39c233a111","value":"Incluir documento 989 - Apropriação/ Liquidação "},{"id":"8ea2373a-6885-46be-b011-f90ec59d2279","value":"Incluir documento 872 - Despacho simples"},{"id":"2a88ef5b-98ed-43eb-b9aa-795b28f73fca","value":"Incluir documento 872 - Despacho simples"},{"id":"c4fbc857-2f3b-4aed-b092-47dcefe2d9e2","value":"Incluir em PDF a GRU para pagamento"},{"id":"e0437bea-a891-48fa-b6e4-b66c1289ff5f","value":"Acompanhar registro da marca"},{"id":"6dd90045-2500-4177-ae25-6c0fbd6f947a","value":"Gerar GRU para pagamento"},{"id":"6db6a1b7-a9d9-4f4a-b72c-008bf9bdb49f","value":"Realizar o cadastro no portal do INPI"},{"id":"ce77147f-2add-4085-b759-4837a0f1fc7c","value":""},{"id":"c2381bd3-4b85-4265-91a9-36a394bc6e32","value":""},{"id":"09f426d3-0fd1-40fd-9823-a31d9326a02c","value":"Liberar acesso externo para o Escritório de Consultoria"},{"id":"85d918ec-3755-46e0-8ee4-4e6f847ce453","value":"Incluir documento 860 - Despacho"},{"id":"e7a226e2-dad6-4831-b959-8398f1a95ef0","value":"Pagamento autorizado?"},{"id":"a7170f83-96ab-4d21-bf77-14a29b9eb768","value":"Enviar despacho da Reitoria para o interessado"},{"id":"c9eebd2d-413c-43e1-8a53-ed3a20b036fa"},{"id":"205b2d32-807f-4be4-95a5-02fb7b001cf7"},{"id":"7b8aa00e-b8f9-4e8a-926a-b82ca3e74d03"},{"id":"833373d3-7ac6-4e79-94ed-278b51b5c257"},{"id":"110dad9d-3740-4ed7-88e2-50bfb6d842ac"},{"id":"fc5da1ed-fc0b-441e-8d59-b2dab115643c"},{"id":"040f1ed6-fc43-438d-88f7-d5458d916be1"},{"id":"a34e3acc-cb28-45a1-a19f-4369877a2e19"},{"id":"4d1cfb49-288e-4224-ab2f-d2d727f804fe"},{"id":"ad8d4c9e-01ec-4d0d-b4b7-b3acba781cb1"},{"id":"95e23fce-1238-4af6-834f-db93da7dec40"},{"id":"1eb80681-68e9-428a-97f0-5f1ac100f92b"}]},{"containerId":"6fb3c566-9924-4c07-a254-69617587c6cc","containerName":"[NITE] 12-01 Analisar pedido de registro de marca","isSubprocess":false,"elements":[{"id":"48e3cd4c-e447-4a32-9726-bafe69cae851","value":"[NITE] 12-01 Analisar pedido de registro de marca"},{"id":"6aec3bcd-4c2e-431c-b615-daf0eee64cb7","value":"NITE"},{"id":"331ae76a-7bf1-41a2-8366-1c041bfaa5d0","value":"Escritório de Consultoria"},{"id":"db6a2ec7-d443-4566-a252-858acf378cab","value":"Interessado"},{"id":"6206be9c-9b8e-493b-a512-beee673f6646","value":""},{"id":"bca50998-6c00-4d25-80d3-a208ec351c9d","value":"Incluir documento 872 - Despacho simples"},{"id":"73a9fd87-fc7c-4b06-bc11-e3052a6da1b8","value":"Analisar a viabilidade do projeto"},{"id":"46bbcaaa-4590-4aae-ab08-cc09c5dde9e0","value":"Incluir documento 273 - Carta encaminhamento propriedade intelectual"},{"id":"c3f8beab-5ee4-49b1-9cee-139fe40ab2c1","value":"Incluir em PDF relatório de invenção"},{"id":"a5dc760d-e9bc-4db1-baaf-66bbcdc41803","value":"Incluir em PDF parecer"},{"id":"8eb4d9e2-1553-4156-957f-df26272c0a36","value":"Abrir processo de análise de pedido de registro de propriedade intelectual"},{"id":"57d7d4a9-cc7a-415c-87c1-b6f2a4b2776b","value":"Tornar processo sigiloso"},{"id":"b1745c01-de83-403f-914b-0da2e08a8343","value":"Incluir documento 872 - Despacho simples"},{"id":"0a0252f9-abf5-4158-96e7-718711943e83","value":"Conceder credencial de acesso para o interessado"},{"id":"8ea978c8-7602-4514-be8c-2abf1b5e1166","value":"Rejeitar a credencial de acesso"},{"id":"c7c45a5a-5ef4-40b7-84d2-4c542b6ee129","value":"Liberar acesso externo para o Escritório de Consultoria"},{"id":"55761c1d-8a4d-4aa0-a536-b3e67e335497","value":""},{"id":"dd5903af-a5c7-4794-a417-ffbdb8fb28d1","value":"Tornar processo restrito"},{"id":"0d88718a-bf39-4f36-8dd5-005d7ccbe0e7","value":"Enviar parecer do Escritório de Consultoria para o interessado"},{"id":"20e141c4-c6c0-4386-9b2c-d62b3bb9201c","value":"Arquivar este processo"},{"id":"b56f3ae2-9465-4b7b-8216-33fd48003958"},{"id":"c517e9a5-65cb-43a3-9f84-7040c958e315"},{"id":"6a202d20-13a7-48e0-958b-a921538bbabf"},{"id":"9b54e94a-9291-4665-8ba6-fe7e52ddb455"},{"id":"794c8c8c-6564-4200-bef4-fea3a3fd99f4"},{"id":"315e23d5-1a26-4d5a-bc5a-2735c6e5a6d0"},{"id":"1473ff50-d63d-4175-9034-147b66ad95c7"},{"id":"378ef2c1-fefc-401a-a3f3-3ff73c220158"},{"id":"6ed3e1b5-3e0f-415d-a607-e084d4b4a764"},{"id":"4b6d8c36-cdc4-45f6-9ebc-e4ec03bab090"},{"id":"dc592f54-7d5a-4abf-bbe0-a4437c3eafa3"},{"id":"82570747-218e-459f-857c-35fcacd0e2ae"},{"id":"62060412-7403-48cd-aadf-151f75d21a53"},{"id":"de5b6e3a-027d-4715-a57b-c20584bcc126"},{"id":"484141b1-f5c2-4ea1-8cf4-f8df91cbcf8b"},{"id":"66d45b71-2c47-40ef-910a-d4bd85c7a40d"}]},{"containerId":"bacdcbc6-3904-4736-86b0-d47e1a910647","containerName":"[NITE] 12 Registrar marca","isSubprocess":false,"elements":[{"id":"e3968895-9d31-465b-bad1-f923210be49c","value":"[NITE] 12 Registrar marca"},{"id":"6afda2f2-32ab-402d-bbe6-7db818a8f918","value":"Interessado"},{"id":"2e1f969c-09b7-4a0c-8aa1-75283592c524","value":"NITE"},{"id":"c8e80b7e-83e6-4e76-98ea-9dc17b0d1513","value":"DIARQ"},{"id":"620c0555-2ca6-4d34-9744-fec54829707a","value":""},{"id":"c74a0642-ac60-4214-a2d3-a903b3c053d5","value":"Abrir processo de registro de propriedade intelectual - marca"},{"id":"58a68e9b-8116-49e6-9586-cdacbf510b21","value":"Incluir documento 021 - Intenção de registro propriedade intelectual"},{"id":"464b596f-03a0-430f-8ee2-9702491aee6b","value":"[NITE] 12-01 Analisar pedido de registro de marca"},{"id":"3e5550eb-3eec-43ab-92e4-870fc90e5c79","value":"Registro de marca aprovado?"},{"id":"67100d57-b063-456b-b832-4c924332e17e","value":"Comunicar interessado"},{"id":"5ac5fd07-af8e-47f1-bd65-dffa33d9f7e3","value":"Realizar tratamento arquivístico"},{"id":"e561583a-42d4-419e-9f37-af3de472ed97","value":""},{"id":"7c00437d-4a87-4d8b-86bd-9aa8214ff5eb","value":"[NITE] 12-02 Finalizar o registro de marca"},{"id":"826acf94-3cbd-4fad-bb23-9af0f4677539"},{"id":"11901d02-c65e-4ee7-92c5-41970db42bee"},{"id":"fb14012f-0d87-4928-a579-8b60f9166ad9"},{"id":"24914ebd-2647-4afa-b1cf-9226203b83aa"},{"id":"4fd07fe2-a463-4429-a690-fbbf250a96ba"},{"id":"0c9d5728-6d0a-47e8-b511-57c4d219860a"}]}]}