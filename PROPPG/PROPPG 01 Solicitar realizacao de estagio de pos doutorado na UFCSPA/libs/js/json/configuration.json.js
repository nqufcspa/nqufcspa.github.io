Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[PROPPG] 01 Solicitar realização de estágio de pós-doutorado na UFCSPA","publishDate":"23/09/2021 10:53:54","pages":[{"id":"52ff8e90-2458-48dd-a570-d6b6a5a37463","name":"[PROPPG] 01 Solicitar realização de estágio de pós-doutorado na UFCSPA","version":"1.0","author":"bruna","image":"files\\diagrams\\PROPPG]_01_Solicitar_realizacao_de_estagio_de_pos_doutorado_na_UFCSPA.png","isSubprocessPage":false,"elements":[{"id":"2976dc99-838a-46cf-84e0-5e8846bd5b52","name":"[PROPPG] 01 Solicitar realização de estágio de pós-doutorado na UFCSPA","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1670.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"ad51f674-4f84-4ba1-9e47-85bd7ce85cef","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":122.0,"y":73.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"7f57af15-af13-4e65-827b-93b2b24c26d1","name":"Abrir processo de inscrição em programa de pós-doutorado UFCSPA","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":196.0,"y":53.0}],"radius":0.0,"height":71.0,"width":120.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"15fd87a6-eaf5-4595-8301-05adfe1a3350","name":"Incluir formulário 147 - Inscrição em estágio de pós-doutorado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":394.0,"y":56.0}],"radius":0.0,"height":65.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fda5aa03-2ff7-4d1f-9fae-36282d90864a","name":"Incluir em PDF documentos solicitados no Edital vigente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":398.0,"y":145.0}],"radius":0.0,"height":65.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f2f854f7-1788-4100-937f-fcbd949417d2","name":"Liberar acesso externo ao interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":404.0,"y":266.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e7c2620e-52c8-4058-a43a-ec3f8afe5846","name":"Analisar documentos encaminhados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":570.0,"y":260.0}],"radius":0.0,"height":73.0,"width":124.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f0f066be-5e3a-40bb-b41a-be15713590e4","name":"Documentos entregues de acordo com o Edital?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":612.0,"y":377.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"6d032316-3b93-46b6-b291-975bac05472d","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":771.5,"y":364.0}],"radius":0.0,"height":67.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a523515d-a98b-48ee-b740-068cd08e801c","name":"Encaminhar processo para o PPG correspondente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":769.0,"y":544.0}],"radius":0.0,"height":71.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b954b334-3211-4276-9db0-14223965c935","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":764.0,"y":748.3}],"radius":0.0,"height":66.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"78d138df-54c5-492d-b903-57b4cae4fd40","name":"Encaminhar processo para  avaliação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":771.0,"y":864.3}],"radius":0.0,"height":65.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8769f118-cb6c-4a48-ae56-30a808581857","name":"Atribuir processo para os professores avaliadores","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":773.0,"y":1035.3999}],"radius":0.0,"height":74.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"be0138fd-8fba-4c93-a894-dd37c229bebe","name":"Analisar os documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":775.5,"y":1225.3999}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f6634b2b-93db-4840-ab51-7bbaa2343886","name":"Incluir documento 191 - Parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":775.5,"y":1348.7}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6cc838e2-af43-448b-a151-f023668b8dc5","name":"Incluir documento 961 - Ofício de homologação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1197.0,"y":814.0}],"radius":0.0,"height":67.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ffce0116-3c0f-4834-ae88-da3cfdbbd68b","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1350.0,"y":817.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f8ed2f96-3857-4be0-8de5-db959f7bc32b","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1492.0,"y":814.0}],"radius":0.0,"height":66.0,"width":123.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0a564448-4903-44fb-b94a-33128d827443","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":581.0,"y":466.0}],"radius":0.0,"height":67.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bffd95e0-b8c3-418e-b737-fbf3377582d2","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":587.0,"y":591.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"369fd501-1aec-45f5-a9de-fab8db74b8c7","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1508.5,"y":1552.2}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"e3f34c21-bbb2-4b94-bd73-2c73d1e4c74e","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1650.0,"y":1567.2}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"731613d8-3601-413f-9ca8-474e1e97f5d2","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":207.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0680977c-0713-4cd4-bef9-5d82231e274b","name":"PROPPG","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":227.0}],"radius":0.0,"height":467.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"dfc1f416-6b9f-471f-ba45-0191ea405ae4","name":"PPG","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":694.0}],"radius":0.0,"height":274.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"971358dc-73ff-4d54-a11c-f3b2204d9aef","name":"Secretaria de PPG dos professores avaliadores","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":968.0}],"radius":0.0,"height":224.2,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"1c63e758-9579-472b-b9ac-13c0ec1edf8b","name":"Professor avaliador","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1192.2}],"radius":0.0,"height":297.5,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"ceea1454-d97e-4ad6-8092-58c295ead263","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1489.7}],"radius":0.0,"height":200.300049,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"52ff8e90-2458-48dd-a570-d6b6a5a37463","containerName":"[PROPPG] 01 Solicitar realização de estágio de pós-doutorado na UFCSPA","isSubprocess":false,"elements":[{"id":"2976dc99-838a-46cf-84e0-5e8846bd5b52","value":"[PROPPG] 01 Solicitar realização de estágio de pós-doutorado na UFCSPA"},{"id":"731613d8-3601-413f-9ca8-474e1e97f5d2","value":"Interessado"},{"id":"0680977c-0713-4cd4-bef9-5d82231e274b","value":"PROPPG"},{"id":"dfc1f416-6b9f-471f-ba45-0191ea405ae4","value":"PPG"},{"id":"971358dc-73ff-4d54-a11c-f3b2204d9aef","value":"Secretaria de PPG dos professores avaliadores"},{"id":"1c63e758-9579-472b-b9ac-13c0ec1edf8b","value":"Professor avaliador"},{"id":"ceea1454-d97e-4ad6-8092-58c295ead263","value":"DIARQ"},{"id":"ad51f674-4f84-4ba1-9e47-85bd7ce85cef","value":""},{"id":"7f57af15-af13-4e65-827b-93b2b24c26d1","value":"Abrir processo de inscrição em programa de pós-doutorado UFCSPA"},{"id":"15fd87a6-eaf5-4595-8301-05adfe1a3350","value":"Incluir formulário 147 - Inscrição em estágio de pós-doutorado"},{"id":"e7c2620e-52c8-4058-a43a-ec3f8afe5846","value":"Analisar documentos encaminhados"},{"id":"b954b334-3211-4276-9db0-14223965c935","value":"Incluir documento 872 - Despacho simples"},{"id":"be0138fd-8fba-4c93-a894-dd37c229bebe","value":"Analisar os documentos"},{"id":"f6634b2b-93db-4840-ab51-7bbaa2343886","value":"Incluir documento 191 - Parecer"},{"id":"fda5aa03-2ff7-4d1f-9fae-36282d90864a","value":"Incluir em PDF documentos solicitados no Edital vigente"},{"id":"f0f066be-5e3a-40bb-b41a-be15713590e4","value":"Documentos entregues de acordo com o Edital?"},{"id":"6d032316-3b93-46b6-b291-975bac05472d","value":"Incluir documento 872 - Despacho simples"},{"id":"0a564448-4903-44fb-b94a-33128d827443","value":"Incluir documento 872 - Despacho simples"},{"id":"bffd95e0-b8c3-418e-b737-fbf3377582d2","value":"Comunicar interessado"},{"id":"e3f34c21-bbb2-4b94-bd73-2c73d1e4c74e","value":""},{"id":"78d138df-54c5-492d-b903-57b4cae4fd40","value":"Encaminhar processo para  avaliação"},{"id":"6cc838e2-af43-448b-a151-f023668b8dc5","value":"Incluir documento 961 - Ofício de homologação"},{"id":"ffce0116-3c0f-4834-ae88-da3cfdbbd68b","value":"Comunicar interessado"},{"id":"8769f118-cb6c-4a48-ae56-30a808581857","value":"Atribuir processo para os professores avaliadores"},{"id":"a523515d-a98b-48ee-b740-068cd08e801c","value":"Encaminhar processo para o PPG correspondente"},{"id":"369fd501-1aec-45f5-a9de-fab8db74b8c7","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"f8ed2f96-3857-4be0-8de5-db959f7bc32b","value":"Incluir documento 872 - Despacho simples"},{"id":"f2f854f7-1788-4100-937f-fcbd949417d2","value":"Liberar acesso externo ao interessado"},{"id":"426a5908-8645-4488-ac4a-b497277664cc"},{"id":"5c49e251-adef-44cf-98ec-6e9ba0c4ed79"},{"id":"7295529c-150b-47f1-9f4f-506ba9ecadb6"},{"id":"1d44b9f0-2d73-43df-b94e-72c63eb1f3be"},{"id":"fcb1f80e-a28e-4afb-9809-32c9edaa8758"},{"id":"a6755748-e583-4ee1-87ba-a17ba2a1debd"},{"id":"879fe254-1f64-4592-8c09-ad0f462e2c11"},{"id":"661fb302-9336-4066-a377-16e5571366d4"},{"id":"86b00b93-c0fa-4b04-a03b-a9567e87201e"},{"id":"05424e73-6025-40e2-9d2b-55c795614483"},{"id":"523ad6ae-bd4f-43e6-a57a-c77d111daf12"},{"id":"e11973b2-0540-4db0-8d3e-ad6b10f783f6"},{"id":"ed03b878-8ea7-45b4-91e4-2e6327b740c2"},{"id":"fd32a1c3-f45d-483f-8f2a-564b42cc4a83"},{"id":"9eaa1ae1-4afd-4813-9668-8240f6182d87"},{"id":"ac427903-3dcd-48f0-9a7d-94c432c8fc80"},{"id":"4a684592-ce77-441c-bba5-d16ba04689d5"},{"id":"1256b321-38d2-40fe-9c29-54850ec83956"}]}]}