Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DSG] 04 Receber bens móveis doados para a UFCSPA","publishDate":"14/04/2022 15:22:40","pages":[{"id":"64751b92-cbe7-4dde-88d0-f23ae536e58e","name":"[DSG] 04 Receber bens móveis doados para a UFCSPA","version":"1.0","author":"marcelomo","image":"files\\diagrams\\DSG]_04_Receber_bens_moveis_doados_para_a_UFCSPA.png","isSubprocessPage":false,"elements":[{"id":"4c3d096f-b2d2-4711-8bf8-784daefd7a94","name":"[DSG] 04 Receber bens móveis doados para a UFCSPA","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":3100.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"744d48c4-dc96-4055-b55f-3a714b5dfbfc","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":132.0,"y":104.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"de00230b-7430-4856-a292-dd16ed98ce76","name":"Abrir processo de recebimento de bens doados para UFCSPA","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":270.0,"y":80.0}],"radius":0.0,"height":79.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"718e9643-6ffd-4425-a289-b9a302c0e89e","name":"Incluir documento 144 - Check list avaliação de bens e equipamentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":427.0,"y":2206.0}],"radius":0.0,"height":73.0,"width":162.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f621e83c-ed0c-4bd1-be88-d5ee11092a4d","name":"Há condições estruturais para recebimento do bem?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":488.0,"y":2345.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"baef8edd-a5d6-4f99-9ead-9fc6463b9710","name":"Há interesse institucional no recebimento do bem?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":706.0,"y":2510.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"87cf16a1-07d7-4de6-971d-e66c08d95916","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":436.5,"y":2499.0}],"radius":0.0,"height":62.0,"width":145.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2d93a84c-0ba4-427c-a384-d9ee4c6d380d","name":"Incluir documento 830 - Classificação contábil","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1002.0,"y":2786.3}],"radius":0.0,"height":62.0,"width":124.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4171e472-e4c4-4724-aa53-2c68d1a64a7b","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2387.0,"y":385.0}],"radius":0.0,"height":84.0,"width":132.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"57ba212e-a84d-4fb8-a8f8-9c008d2b6d78","name":"Registrar no SISPAT","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1679.0,"y":1498.0}],"radius":0.0,"height":60.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b7f41b2e-f939-41f4-a219-13c7c33f2fe1","name":"Incluir documento 990 - Informe de Documentos Gerados no SIAFI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1985.0,"y":2802.0}],"radius":0.0,"height":67.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bbf60cd3-a4ff-4c2b-b59a-c6a08c593283","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2183.0,"y":2979.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"aae0ef5b-9191-44e8-be88-afc892db2060","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":681.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"64c67472-dfe5-40e8-aef6-8a8f432030f9","name":"DIPAT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1101.0}],"radius":0.0,"height":849.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"e7913be9-a8c6-4c48-997b-9a1e103eb9b6","name":"CENG","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2150.0}],"radius":0.0,"height":291.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"7488ec9f-a0e6-4b61-bb49-cecaf25fd792","name":"REITORIA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2441.0}],"radius":0.0,"height":279.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"469af66b-4d5b-47c2-a102-d2f457fd9fbe","name":"DCF","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2720.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"35ab21c3-c01e-466f-a491-8fc543fbbd43","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2920.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"62f13e77-e96b-486f-b78e-d31ce1fea063","name":"Incluir documento 082 - Requerimento de doação bens e equipamentos ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":271.0,"y":200.0}],"radius":0.0,"height":79.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"10d3a4a0-ef1c-41e9-a0fd-1f1d5e172cbe","name":"Doação é proveniente de órgão público?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":305.5,"y":346.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"056abe73-7567-45bb-802a-dff2cc1b005e","name":"Incluir em PDF comprovante de anúncio realizado no REUSE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":453.0,"y":328.0}],"radius":0.0,"height":76.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f718127e-8408-4556-b0f9-c6a53608c6be","name":"Incluir em PDF nota fiscal do bem","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":462.0,"y":464.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"89199f6d-a325-44b0-99ec-6f5149524800","name":"Analisar documentos recebidos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":462.0,"y":1157.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c8614f26-d2c1-4d22-9bec-67bca1d11e37","name":"Documentação ok?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":487.0,"y":1321.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"3a574881-621c-469a-8033-b3f52b72bd3e","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":673.0,"y":1308.5}],"radius":0.0,"height":67.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9cedfb8f-c369-4ab4-abac-059edd6308fd","name":"Realizar ajustes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":680.0,"y":548.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e433478b-0af3-44b8-96dd-7f53aecda1e0","name":"Incluir em PDF documentos recebidos do doador","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":276.5,"y":514.0}],"radius":0.0,"height":76.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"07d50084-e298-44d7-913b-e7320681c028","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":280.5,"y":1425.0}],"radius":0.0,"height":78.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4e8db9e5-01b8-40c6-a649-26b65b9051f8","name":"Bem possui registro provisório?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":305.5,"y":1584.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"65a45bc4-8a99-4ae5-ac6a-d83af9b28d5c","name":"Bem será doado para o mesmo local onde já está instalado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":305.5,"y":1713.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"69ad5758-2e99-43fe-ae54-91d4e314c0c6","name":"Bem é oriundo de órgão público?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1044.0,"y":1662.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"0d5b4512-c443-4026-ba82-3144ad26210f","name":"Autorizar doação no sistema REUSE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1019.0,"y":1498.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c26acf42-22aa-4d96-a080-f58640327222","name":"Aguardar 10 dias corridos","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1049.0,"y":1416.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"757cfe84-885e-49c9-8678-1a1c9f3592f9","name":"Incluir em PDF documentos comprobatórios do REUSE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1013.5,"y":1279.0}],"radius":0.0,"height":70.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"38212065-c478-4b5f-a5b4-2068d6e05fda","name":"Incluir documento 145 - Termo de doação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1014.0,"y":1162.0}],"radius":0.0,"height":65.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4f5708a1-096c-4501-b072-17e6ae1edd8c","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":2098.0,"y":1174.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"9de10046-96bb-4910-963b-9e07763099b9","name":"Assinar termo de doação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2073.0,"y":788.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8a8c67bf-57e8-4116-85b5-3e9afcfe4609","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":2103.0,"y":2547.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"eeaacec0-ced0-44bd-a3d4-e684dbccdbbe","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":2259.0,"y":1175.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"9d1d19c4-ddbe-400f-bcd3-77da322720d4","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":2437.0,"y":2001.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"b06fe6b3-f79a-4b1e-9d16-1559e82af404","name":"Publicar termo de doação no DOU","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2407.0,"y":1559.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"87886d85-c446-4d5a-a753-2320ae234274","name":"Incluir em PDF comprovante de publicação no DOU","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2405.5,"y":1338.0}],"radius":0.0,"height":65.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"516d57ab-1ae3-4a93-be76-16e092507191","name":"Bem possui registro provisório?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1254.0,"y":1662.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"daa20e3e-a4cd-4522-95bb-75ee37fe3e4b","name":"Relacionar ao processo de registro provisório","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1226.5,"y":1492.0}],"radius":0.0,"height":72.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"33ebedf1-e3c5-4fcf-974b-8197f1aee14a","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1423.0,"y":1508.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Doação realizada pelo REUSE?","elementType":"SequenceFlow","properties":[]}]},{"id":"9414a478-0ab7-467e-9f26-10cc18276b47","name":"Doação realizada pelo REUSE?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1541.0,"y":1508.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"1bb52127-381d-48e3-899a-69e6bfd75a29","name":"Autorizar doação no sistema REUSE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1516.0,"y":1634.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c0d0c340-50af-46e0-bb0c-a4bf03cd91cd","name":"Incluir documentos comprobatórios do REUSE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1684.0,"y":1633.5}],"radius":0.0,"height":63.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5a9220c1-554d-4ea3-8553-2c93063d4335","name":"Incluir documento 090 - Termo de responsabilidade patrimonial","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1873.0,"y":1488.0}],"radius":0.0,"height":80.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0657688a-c9f5-4539-a957-0bdb44456fe6","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1914.5,"y":1014.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"ee7c7dab-3252-4f3d-b210-8fdc9ad20b9c","name":"Realizar emplacamento do bem","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1994.0,"y":1353.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b61702a7-257a-4cbd-b442-bb2e9f5a8d70","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2183.0,"y":2794.5}],"radius":0.0,"height":82.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"aee527d6-090c-47ac-a119-e02bbdf94f89","name":"Comunicar interessado e doador","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":681.0,"y":1778.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"422ce255-68b6-41c4-8a31-2c3c24642478","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":873.0,"y":1767.0}],"radius":0.0,"height":82.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cedfe617-3b3e-4419-a318-6de985aafc87","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":2339.0,"y":2994.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"349bfe7d-da8e-4a29-9ca5-24ab64739aa6","name":"Doador","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":701.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"d163cd7a-a2e4-4a61-98e5-41da6d05e350","name":"Responsável patrimonial","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":901.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"313de8e6-79b2-4594-b8e0-b4ca69ce5a8d","name":"Testemunhas","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1950.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"64751b92-cbe7-4dde-88d0-f23ae536e58e","containerName":"[DSG] 04 Receber bens móveis doados para a UFCSPA","isSubprocess":false,"elements":[{"id":"4c3d096f-b2d2-4711-8bf8-784daefd7a94","value":"[DSG] 04 Receber bens móveis doados para a UFCSPA"},{"id":"aae0ef5b-9191-44e8-be88-afc892db2060","value":"Interessado"},{"id":"349bfe7d-da8e-4a29-9ca5-24ab64739aa6","value":"Doador"},{"id":"d163cd7a-a2e4-4a61-98e5-41da6d05e350","value":"Responsável patrimonial"},{"id":"64c67472-dfe5-40e8-aef6-8a8f432030f9","value":"DIPAT"},{"id":"313de8e6-79b2-4594-b8e0-b4ca69ce5a8d","value":"Testemunhas"},{"id":"e7913be9-a8c6-4c48-997b-9a1e103eb9b6","value":"CENG"},{"id":"7488ec9f-a0e6-4b61-bb49-cecaf25fd792","value":"REITORIA"},{"id":"469af66b-4d5b-47c2-a102-d2f457fd9fbe","value":"DCF"},{"id":"35ab21c3-c01e-466f-a491-8fc543fbbd43","value":"DIARQ"},{"id":"744d48c4-dc96-4055-b55f-3a714b5dfbfc","value":""},{"id":"de00230b-7430-4856-a292-dd16ed98ce76","value":"Abrir processo de recebimento de bens doados para UFCSPA"},{"id":"718e9643-6ffd-4425-a289-b9a302c0e89e","value":"Incluir documento 144 - Check list avaliação de bens e equipamentos"},{"id":"f621e83c-ed0c-4bd1-be88-d5ee11092a4d","value":"Há condições estruturais para recebimento do bem?"},{"id":"baef8edd-a5d6-4f99-9ead-9fc6463b9710","value":"Há interesse institucional no recebimento do bem?"},{"id":"87cf16a1-07d7-4de6-971d-e66c08d95916","value":"Incluir documento 872 - Despacho simples"},{"id":"2d93a84c-0ba4-427c-a384-d9ee4c6d380d","value":"Incluir documento 830 - Classificação contábil"},{"id":"4171e472-e4c4-4724-aa53-2c68d1a64a7b","value":"Incluir documento 872 - Despacho simples"},{"id":"57ba212e-a84d-4fb8-a8f8-9c008d2b6d78","value":"Registrar no SISPAT"},{"id":"b7f41b2e-f939-41f4-a219-13c7c33f2fe1","value":"Incluir documento 990 - Informe de Documentos Gerados no SIAFI"},{"id":"62f13e77-e96b-486f-b78e-d31ce1fea063","value":"Incluir documento 082 - Requerimento de doação bens e equipamentos "},{"id":"cedfe617-3b3e-4419-a318-6de985aafc87","value":""},{"id":"89199f6d-a325-44b0-99ec-6f5149524800","value":"Analisar documentos recebidos"},{"id":"5a9220c1-554d-4ea3-8553-2c93063d4335","value":"Incluir documento 090 - Termo de responsabilidade patrimonial"},{"id":"0657688a-c9f5-4539-a957-0bdb44456fe6","value":"Assinar documento em bloco"},{"id":"38212065-c478-4b5f-a5b4-2068d6e05fda","value":"Incluir documento 145 - Termo de doação"},{"id":"4f5708a1-096c-4501-b072-17e6ae1edd8c","value":""},{"id":"8a8c67bf-57e8-4116-85b5-3e9afcfe4609","value":"Assinar documento em bloco"},{"id":"c8614f26-d2c1-4d22-9bec-67bca1d11e37","value":"Documentação ok?"},{"id":"3a574881-621c-469a-8033-b3f52b72bd3e","value":"Incluir documento 872 - Despacho simples"},{"id":"9cedfb8f-c369-4ab4-abac-059edd6308fd","value":"Realizar ajustes"},{"id":"aee527d6-090c-47ac-a119-e02bbdf94f89","value":"Comunicar interessado e doador"},{"id":"87886d85-c446-4d5a-a753-2320ae234274","value":"Incluir em PDF comprovante de publicação no DOU"},{"id":"eeaacec0-ced0-44bd-a3d4-e684dbccdbbe","value":""},{"id":"9d1d19c4-ddbe-400f-bcd3-77da322720d4","value":"Assinar documento em bloco"},{"id":"0d5b4512-c443-4026-ba82-3144ad26210f","value":"Autorizar doação no sistema REUSE"},{"id":"757cfe84-885e-49c9-8678-1a1c9f3592f9","value":"Incluir em PDF documentos comprobatórios do REUSE"},{"id":"ee7c7dab-3252-4f3d-b210-8fdc9ad20b9c","value":"Realizar emplacamento do bem"},{"id":"e433478b-0af3-44b8-96dd-7f53aecda1e0","value":"Incluir em PDF documentos recebidos do doador"},{"id":"07d50084-e298-44d7-913b-e7320681c028","value":"Incluir documento 872 - Despacho simples"},{"id":"69ad5758-2e99-43fe-ae54-91d4e314c0c6","value":"Bem é oriundo de órgão público?"},{"id":"516d57ab-1ae3-4a93-be76-16e092507191","value":"Bem possui registro provisório?"},{"id":"daa20e3e-a4cd-4522-95bb-75ee37fe3e4b","value":"Relacionar ao processo de registro provisório"},{"id":"b06fe6b3-f79a-4b1e-9d16-1559e82af404","value":"Publicar termo de doação no DOU"},{"id":"4e8db9e5-01b8-40c6-a649-26b65b9051f8","value":"Bem possui registro provisório?"},{"id":"65a45bc4-8a99-4ae5-ac6a-d83af9b28d5c","value":"Bem será doado para o mesmo local onde já está instalado?"},{"id":"1bb52127-381d-48e3-899a-69e6bfd75a29","value":"Autorizar doação no sistema REUSE"},{"id":"c0d0c340-50af-46e0-bb0c-a4bf03cd91cd","value":"Incluir documentos comprobatórios do REUSE"},{"id":"33ebedf1-e3c5-4fcf-974b-8197f1aee14a","value":""},{"id":"9414a478-0ab7-467e-9f26-10cc18276b47","value":"Doação realizada pelo REUSE?"},{"id":"10d3a4a0-ef1c-41e9-a0fd-1f1d5e172cbe","value":"Doação é proveniente de órgão público?"},{"id":"056abe73-7567-45bb-802a-dff2cc1b005e","value":"Incluir em PDF comprovante de anúncio realizado no REUSE"},{"id":"f718127e-8408-4556-b0f9-c6a53608c6be","value":"Incluir em PDF nota fiscal do bem"},{"id":"c26acf42-22aa-4d96-a080-f58640327222","value":"Aguardar 10 dias corridos"},{"id":"9de10046-96bb-4910-963b-9e07763099b9","value":"Assinar termo de doação"},{"id":"bbf60cd3-a4ff-4c2b-b59a-c6a08c593283","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"422ce255-68b6-41c4-8a31-2c3c24642478","value":"Incluir documento 872 - Despacho simples"},{"id":"b61702a7-257a-4cbd-b442-bb2e9f5a8d70","value":"Incluir documento 872 - Despacho simples"},{"id":"b8e30a39-7de5-44d4-8804-0c0d9f5301b2"},{"id":"dc42ae61-7edc-4376-a6eb-b49171360e99"},{"id":"712f31c3-7138-4d51-a627-f3d9141f3d46"},{"id":"d34efe62-0576-4a7e-939e-c302113e0371"},{"id":"39caa2c3-65de-450f-b035-a107b0c2ec34"},{"id":"51c67d0e-747b-48da-bd4e-0e33a73e0601"},{"id":"9bf70b89-110d-48f1-9340-c1d253beacb3"},{"id":"f037dc3c-ffba-457d-b313-2e09567ba1d8"},{"id":"a38cbbf7-47f6-416c-8d92-27de46d0e656"},{"id":"54bf0703-b154-4248-b11f-c1135ac8eb64"},{"id":"617c2819-441a-4ec4-96df-e0061a49c10f"},{"id":"fc1f0e67-f574-4248-9031-aeb7313dc9da"},{"id":"4072c485-0428-4668-95e7-85a44fd3f211"},{"id":"0478cacd-50ff-4cb3-b3fe-94def5994d0e"},{"id":"ea6533c1-2596-43d0-b21a-71e17962ea41"},{"id":"4cdf683e-2ce0-476f-908b-b565690db329"},{"id":"f2899ca4-6b09-4677-84a3-a70737f1d139"},{"id":"c5c88fe7-c166-48c8-9730-06a8b4d6c632"},{"id":"58f6ea10-2468-4273-87f5-015ee3792a9b"},{"id":"8ccd0149-5376-4d4e-9b1c-3ad21ff9d73d"},{"id":"a0109681-e2fc-45f8-93b1-ed0776fada42"},{"id":"7fe08f65-9a49-4447-8436-d9a46ca6728f"}]}]}