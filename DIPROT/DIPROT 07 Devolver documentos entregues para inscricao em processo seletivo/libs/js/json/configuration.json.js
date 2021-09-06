Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DIPROT] 07 Devolver documentos entregues para inscrição em processo seletivo","publishDate":"29/07/2021 14:55:37","pages":[{"id":"2c209c46-46ba-426c-9e9b-a886152309b0","name":"[DIPROT] 07 Devolver documentos entregues para inscrição em processo seletivo","version":"1.0","author":"ariel","image":"files\\diagrams\\DIPROT]_07_Devolver_documentos_entregues_para_inscricao_em_processo_seletivo.png","isSubprocessPage":false,"elements":[{"id":"bdc19fb7-477e-40ad-9f88-fc6629208f1e","name":"[DIPROT] 07 Devolver documentos entregues para inscrição em processo seletivo","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":2148.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"de4922c4-3088-439b-82f4-de7474caa334","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":141.0,"y":92.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"3eb3d521-4738-4e9c-936a-766cf2fba649","name":"Abrir processo de solicitação de devolução de documentos entregues em inscrição para processo seletivo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":247.0,"y":60.5}],"radius":0.0,"height":95.0,"width":172.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b0c024d2-731c-4e0b-9419-be724a09b7bd","name":"Incluir documento 170 - Devolução documentos entregues em inscrição","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":480.0,"y":71.5}],"radius":0.0,"height":73.0,"width":150.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"642bfc15-81c2-4239-a2f5-095efce3b973","name":"A retirada será realizada pelo próprio interessado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":535.0,"y":233.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"4c8f5be7-b17b-45cf-bc6f-d4d79b6fe07d","name":"Incluir em PDF documento de identificação do retirante","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":656.0,"y":218.0}],"radius":0.0,"height":71.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9fa5b2f7-f3e8-46e3-a502-ee8e8b657890","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":535.0,"y":347.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Liberar acesso externo para o interessado","elementType":"SequenceFlow","properties":[]}]},{"id":"0e4f314c-51d0-4cd6-944d-6030083e3529","name":"Liberar acesso externo para o interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":510.0,"y":801.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b1a0ab2d-4600-4ac5-9eeb-5cbe6a753634","name":"Edital permite a devolução dos documentos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":535.0,"y":923.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"8467ea14-a0d2-489b-8a92-14f43608513a","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":689.0,"y":905.0}],"radius":0.0,"height":76.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3961522f-b96f-4df2-b3ea-419f2a3dd5ac","name":"Documentos já foram arquivado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":726.0,"y":1413.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"719aa5ba-24db-45bd-a95c-95f4b6dbf0a9","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":694.0,"y":1503.0}],"radius":0.0,"height":69.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3009e66b-b750-4860-9cf3-7296c8c3a80b","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1070.0,"y":1155.0}],"radius":0.0,"height":69.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"82530946-4b0c-4c36-af4f-7a1af9d8ae50","name":"Separar documentos solicitados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1183.0,"y":1769.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8af3fc67-547f-45f7-be6d-dd95be26a929","name":"Incluir documento 045 - Formulário de envio de documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1172.5,"y":1857.0}],"radius":0.0,"height":74.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7e18c8de-e5a4-46f7-9c05-bb269f35cb06","name":"[PREF] 26 Reservar veículo institucional","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1183.0,"y":1975.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/PREF/PREF%2026%20Solicitar%20reserva%20de%20ve%C3%ADculo%20institucional/#list","type":"url"}},{"id":"1fc49ef2-036b-4b03-b7e7-50eaaf129e6c","name":"Incluir em PDF cópia do PI aberto","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1335.0,"y":1971.5}],"radius":0.0,"height":69.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ed22b561-aab8-43f6-9b6b-a35d9d67217e","name":"Enviar processo para a Divisão de Protocolo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1339.0,"y":1855.0}],"radius":0.0,"height":66.0,"width":93.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8bb3fe0a-be28-47d5-84dc-d91a6ba390e2","name":"Aguardar recebimento dos documentos","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1370.5,"y":1165.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"72b9de30-a3e3-4906-a9e7-d5a23e5ab32f","name":"Enviar documentos à Divisão de Protocolo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":869.0,"y":1398.5}],"radius":0.0,"height":71.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"13dc258d-10ce-4bd7-8341-3b0906976d12","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1329.5,"y":902.5}],"radius":0.0,"height":80.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0a395586-1d48-4b0b-af4b-7ed642017658","name":"Comunicar o interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1489.0,"y":904.0}],"radius":0.0,"height":77.0,"width":126.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2f80568e-3e01-4120-a450-aa57b98593c6","name":"Incluir em PDF comprovante de recebimento do e-mail","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1491.5,"y":1033.0}],"radius":0.0,"height":77.0,"width":123.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ba4359e8-2e32-42b0-9fdf-df8543cbd9c0","name":"Incluir documento 171 - Declaração de retirada de documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1666.0,"y":1034.5}],"radius":0.0,"height":74.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f95ebd24-add0-4f09-b6f4-7699aa1585a7","name":"Aguardar  retirada dos documentos","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1707.5,"y":927.0001}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"e3b1534e-7ae1-4ae2-bc23-c2754f417987","name":"Retirante compareceu no prazo estipulado para buscar os documentos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1837.0,"y":922.0001}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"981fa92e-f41d-4f02-b060-f15f5c85c8d4","name":"Editar o documento 171 - Declaração de retirada de documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2140.0,"y":899.5001}],"radius":0.0,"height":85.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8ffece39-ae1e-4902-9408-162765b7a8c6","name":"Documento estava na Divisão de Arquivo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2337.0,"y":921.0001}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"7031f556-9093-46d6-b568-8626bbcbf3bf","name":"Devolver documentos para a Divisão de Arquivo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2308.0,"y":1041.0}],"radius":0.0,"height":70.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f4255b25-af80-43e8-9ab1-690f4e40084d","name":"[PREF] 26 Reservar veículo institucional","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2312.0,"y":1159.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/PREF/PREF%2026%20Solicitar%20reserva%20de%20ve%C3%ADculo%20institucional/#list","type":"url"}},{"id":"e5cc4ed2-d58a-49fc-8017-410d10c59545","name":"Incluir em PDF cópia do PI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2312.0,"y":1261.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2d111b11-d121-4286-9f08-3cfc3b2d83af","name":"Devolver documentos para a unidade responsável pela seleção","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2452.0,"y":896.0001}],"radius":0.0,"height":90.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b2a24eb5-cd08-46ff-a6d6-4529cf4dd84e","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2451.0,"y":1052.0}],"radius":0.0,"height":73.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b6ad6062-ea79-4911-ba1c-d0bf118841f1","name":"Retirar documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1812.0,"y":518.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"10a64981-5f4d-4b0d-9b29-a7fbf6dc709f","name":"Assinar documento 171 - Declaração de retirada de documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1960.0,"y":509.0}],"radius":0.0,"height":78.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8fa0d97a-19a2-42a5-a01c-acd6a494ecf1","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":501.5,"y":1024.0}],"radius":0.0,"height":60.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cf157780-73d9-4396-a5d9-9249ca6fdde0","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":510.0,"y":1124.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3a0a9f67-b958-4b54-9dba-4860299f95e1","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2442.0,"y":2057.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"1efecde3-3898-462d-a394-9a0f0aa17d3e","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":2587.0,"y":2072.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"39d9bf1b-d705-47d7-8419-67833ec295ba","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":429.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"3c90541d-6991-4461-9150-68ba320a0a95","name":"Retirante","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":449.0}],"radius":0.0,"height":303.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"acfdd554-502b-4387-9649-65a7eeb4b2ac","name":"DIPROT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":752.0}],"radius":0.0,"height":603.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"9257ed91-aa12-4ccf-ba1e-ef5801cc311f","name":"Unidade responsável pela seleção","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1355.0}],"radius":0.0,"height":352.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"1fc18f68-06df-4fd3-8705-857e754667d3","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1707.0}],"radius":0.0,"height":461.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"2c209c46-46ba-426c-9e9b-a886152309b0","containerName":"[DIPROT] 07 Devolver documentos entregues para inscrição em processo seletivo","isSubprocess":false,"elements":[{"id":"bdc19fb7-477e-40ad-9f88-fc6629208f1e","value":"[DIPROT] 07 Devolver documentos entregues para inscrição em processo seletivo"},{"id":"39d9bf1b-d705-47d7-8419-67833ec295ba","value":"Interessado"},{"id":"3c90541d-6991-4461-9150-68ba320a0a95","value":"Retirante"},{"id":"acfdd554-502b-4387-9649-65a7eeb4b2ac","value":"DIPROT"},{"id":"9257ed91-aa12-4ccf-ba1e-ef5801cc311f","value":"Unidade responsável pela seleção"},{"id":"1fc18f68-06df-4fd3-8705-857e754667d3","value":"DIARQ"},{"id":"de4922c4-3088-439b-82f4-de7474caa334","value":""},{"id":"3eb3d521-4738-4e9c-936a-766cf2fba649","value":"Abrir processo de solicitação de devolução de documentos entregues em inscrição para processo seletivo"},{"id":"b0c024d2-731c-4e0b-9419-be724a09b7bd","value":"Incluir documento 170 - Devolução documentos entregues em inscrição"},{"id":"b1a0ab2d-4600-4ac5-9eeb-5cbe6a753634","value":"Edital permite a devolução dos documentos?"},{"id":"cf157780-73d9-4396-a5d9-9249ca6fdde0","value":"Comunicar interessado"},{"id":"1efecde3-3898-462d-a394-9a0f0aa17d3e","value":""},{"id":"0a395586-1d48-4b0b-af4b-7ed642017658","value":"Comunicar o interessado"},{"id":"3961522f-b96f-4df2-b3ea-419f2a3dd5ac","value":"Documentos já foram arquivado?"},{"id":"2f80568e-3e01-4120-a450-aa57b98593c6","value":"Incluir em PDF comprovante de recebimento do e-mail"},{"id":"f95ebd24-add0-4f09-b6f4-7699aa1585a7","value":"Aguardar  retirada dos documentos"},{"id":"ba4359e8-2e32-42b0-9fdf-df8543cbd9c0","value":"Incluir documento 171 - Declaração de retirada de documentos"},{"id":"981fa92e-f41d-4f02-b060-f15f5c85c8d4","value":"Editar o documento 171 - Declaração de retirada de documentos"},{"id":"719aa5ba-24db-45bd-a95c-95f4b6dbf0a9","value":"Incluir documento 872 - Despacho simples"},{"id":"8af3fc67-547f-45f7-be6d-dd95be26a929","value":"Incluir documento 045 - Formulário de envio de documentos"},{"id":"642bfc15-81c2-4239-a2f5-095efce3b973","value":"A retirada será realizada pelo próprio interessado?"},{"id":"9fa5b2f7-f3e8-46e3-a502-ee8e8b657890","value":""},{"id":"4c8f5be7-b17b-45cf-bc6f-d4d79b6fe07d","value":"Incluir em PDF documento de identificação do retirante"},{"id":"1fc49ef2-036b-4b03-b7e7-50eaaf129e6c","value":"Incluir em PDF cópia do PI aberto"},{"id":"0e4f314c-51d0-4cd6-944d-6030083e3529","value":"Liberar acesso externo para o interessado"},{"id":"10a64981-5f4d-4b0d-9b29-a7fbf6dc709f","value":"Assinar documento 171 - Declaração de retirada de documentos"},{"id":"8fa0d97a-19a2-42a5-a01c-acd6a494ecf1","value":"Incluir documento 872 - Despacho simples"},{"id":"8467ea14-a0d2-489b-8a92-14f43608513a","value":"Incluir documento 872 - Despacho simples"},{"id":"72b9de30-a3e3-4906-a9e7-d5a23e5ab32f","value":"Enviar documentos à Divisão de Protocolo"},{"id":"13dc258d-10ce-4bd7-8341-3b0906976d12","value":"Incluir documento 872 - Despacho simples"},{"id":"3009e66b-b750-4860-9cf3-7296c8c3a80b","value":"Incluir documento 872 - Despacho simples"},{"id":"82530946-4b0c-4c36-af4f-7a1af9d8ae50","value":"Separar documentos solicitados"},{"id":"7e18c8de-e5a4-46f7-9c05-bb269f35cb06","value":"[PREF] 26 Reservar veículo institucional"},{"id":"ed22b561-aab8-43f6-9b6b-a35d9d67217e","value":"Enviar processo para a Divisão de Protocolo"},{"id":"3a0a9f67-b958-4b54-9dba-4860299f95e1","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"8bb3fe0a-be28-47d5-84dc-d91a6ba390e2","value":"Aguardar recebimento dos documentos"},{"id":"b6ad6062-ea79-4911-ba1c-d0bf118841f1","value":"Retirar documentos"},{"id":"f4255b25-af80-43e8-9ab1-690f4e40084d","value":"[PREF] 26 Reservar veículo institucional"},{"id":"7031f556-9093-46d6-b568-8626bbcbf3bf","value":"Devolver documentos para a Divisão de Arquivo"},{"id":"8ffece39-ae1e-4902-9408-162765b7a8c6","value":"Documento estava na Divisão de Arquivo?"},{"id":"e5cc4ed2-d58a-49fc-8017-410d10c59545","value":"Incluir em PDF cópia do PI"},{"id":"2d111b11-d121-4286-9f08-3cfc3b2d83af","value":"Devolver documentos para a unidade responsável pela seleção"},{"id":"b2a24eb5-cd08-46ff-a6d6-4529cf4dd84e","value":"Incluir documento 872 - Despacho simples"},{"id":"e3b1534e-7ae1-4ae2-bc23-c2754f417987","value":"Retirante compareceu no prazo estipulado para buscar os documentos?"},{"id":"aa665516-c180-4d70-a44d-c9cffeee3772"},{"id":"fdb06ae9-758a-4791-963a-928a07f7d2ef"},{"id":"2925d058-0130-4802-a1f6-38f813e2827f"},{"id":"84a4925e-53dc-4d52-86f5-c7a10b62f7e8"},{"id":"1bf31630-e8a5-4883-9939-b82612a5914d"},{"id":"17a96b11-c21a-4ad8-98e3-eca1adcca500"},{"id":"88d91ebc-1297-4a35-bb04-be5984eaa9a0"},{"id":"abcee3ef-a195-4df2-8273-15e41b9fd044"},{"id":"a39ba704-5b0c-4582-8b44-adb06f0d0bf7"},{"id":"eb17fc42-a253-423a-b224-d7f6f761e0a8"},{"id":"28ef271b-6441-4439-bbfb-97ade534554b"},{"id":"ec4ad66f-a9cc-4e31-9a17-ff29ac832618"},{"id":"1d133eea-8542-407a-9575-8091320e6e4d"},{"id":"5304e900-a22c-487d-82c8-f3bf23d05c3d"},{"id":"2d491bc7-1373-4b81-b21a-3ca35ad4289a"},{"id":"710410b3-d67c-40df-a237-413b1dc74238"},{"id":"b6802e65-2a61-468f-9565-fc230173be62"},{"id":"0104000e-d3be-40cc-90bb-1df9dc7243ff"},{"id":"f4acb10b-cfba-443a-8fcb-d3c04ffc92af"},{"id":"00694945-1c49-45d2-b4ed-1d0c6c74579f"},{"id":"aac77004-6d54-427e-a90c-602c8fdbccf2"},{"id":"b3199af0-a456-4084-936d-ca863bfd1ea5"}]}]}