Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DCF] 16 Cadastrar e habilitar usuários no SIAFI","publishDate":"29/07/2021 10:43:35","pages":[{"id":"a09378cb-072b-4b09-8df1-1f9d7bd66d01","name":"[DCF] 16 Cadastrar e habilitar usuários no SIAFI","version":"1.0","author":"tomash","image":"files\\diagrams\\DCF]_16_Cadastrar_e_habilitar_usuarios_no_SIAFI.png","isSubprocessPage":false,"elements":[{"id":"b7d82c49-1804-44e7-b73c-d47e15f1e70e","name":"[DCF] 16 Cadastrar e habilitar usuários no SIAFI","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1580.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"5bfeb868-6f3d-45d5-8493-c91838aadd8c","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":131.0,"y":120.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"0b5840cb-457f-408e-8979-ef4c56d98081","name":"Abrir processo de  solicitação de cadastro e habilitação no SIAFI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":223.0,"y":93.0}],"radius":0.0,"height":85.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b79350df-c39a-46b7-a703-a98412676f8e","name":"Incluir documento 400 - Formulário de cadastro no SIAFI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":412.0,"y":94.5}],"radius":0.0,"height":82.0,"width":134.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b04fecfb-fffd-4bb5-9216-f8949558731d","name":"Chefia imediata está lotada na mesma unidade do interessado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":459.0,"y":245.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"0c7c97c5-dec0-4571-af9b-a7160f9f9b8a","name":"Atribuir processo para a chefia imediata","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":429.5,"y":332.0}],"radius":0.0,"height":70.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6114127f-a55a-4a20-90e4-539da4c8d6b5","name":"Assinar formulário de cadastro no SIAFI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":425.5,"y":627.0}],"radius":0.0,"height":77.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b0225ae9-e4bc-4cd7-9ccb-aa11719089b2","name":"Incluir formulário de cadastro no SIAFI em bloco de assinaturas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":617.0,"y":228.5}],"radius":0.0,"height":75.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3ecb291a-f28c-4daa-b485-2db412ef38e8","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":658.0,"y":515.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"6e45fa59-59cd-455e-9ee9-29a514e8f813","name":"Enviar processo para a PROAD","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":794.0,"y":347.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"592f226d-2571-4528-a212-145e4c0f24a3","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":855.0,"y":796.0}],"radius":0.0,"height":68.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5c4465da-1245-479f-ba5a-35d44f89e2e0","name":"Cadastro autorizado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":885.0,"y":908.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"a129661d-75d8-40a9-bfab-a031d6fff619","name":"Realizar cadastro e habilitação no SIAFI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1043.0,"y":1105.0}],"radius":0.0,"height":67.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"70a46a97-c33b-4e85-953a-9f67ff42c722","name":"Comunicar o interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1044.0,"y":1218.5}],"radius":0.0,"height":67.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1087b99f-8bda-40de-b95f-939ad01c92c7","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1214.5,"y":1216.0}],"radius":0.0,"height":70.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"81ed278f-bb9f-40c2-b5c1-051392d4d47e","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1221.0,"y":1481.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"a012e119-391d-499b-bd7e-219ead571877","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1397.0,"y":1496.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"c88be237-6407-430c-9eeb-82c5bc879016","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":420.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"a238a0a9-22a0-4bfb-894c-7fd6f7d67f4e","name":"Chefia imediata","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":440.0}],"radius":0.0,"height":302.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"cc375ae3-67ce-4f80-a4ce-c1b7b3c525fc","name":"PROAD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":742.0}],"radius":0.0,"height":294.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"4d1bdc20-76b5-4dc3-be45-3dbba1fc5301","name":"DCF","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1036.0}],"radius":0.0,"height":364.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"b4e0a9eb-9eca-49a9-aac4-5db86db0ff3d","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1400.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"a09378cb-072b-4b09-8df1-1f9d7bd66d01","containerName":"[DCF] 16 Cadastrar e habilitar usuários no SIAFI","isSubprocess":false,"elements":[{"id":"b7d82c49-1804-44e7-b73c-d47e15f1e70e","value":"[DCF] 16 Cadastrar e habilitar usuários no SIAFI"},{"id":"c88be237-6407-430c-9eeb-82c5bc879016","value":"Interessado"},{"id":"a238a0a9-22a0-4bfb-894c-7fd6f7d67f4e","value":"Chefia imediata"},{"id":"cc375ae3-67ce-4f80-a4ce-c1b7b3c525fc","value":"PROAD"},{"id":"4d1bdc20-76b5-4dc3-be45-3dbba1fc5301","value":"DCF"},{"id":"b4e0a9eb-9eca-49a9-aac4-5db86db0ff3d","value":"DIARQ"},{"id":"5bfeb868-6f3d-45d5-8493-c91838aadd8c","value":""},{"id":"0b5840cb-457f-408e-8979-ef4c56d98081","value":"Abrir processo de  solicitação de cadastro e habilitação no SIAFI"},{"id":"b79350df-c39a-46b7-a703-a98412676f8e","value":"Incluir documento 400 - Formulário de cadastro no SIAFI"},{"id":"a129661d-75d8-40a9-bfab-a031d6fff619","value":"Realizar cadastro e habilitação no SIAFI"},{"id":"70a46a97-c33b-4e85-953a-9f67ff42c722","value":"Comunicar o interessado"},{"id":"6114127f-a55a-4a20-90e4-539da4c8d6b5","value":"Assinar formulário de cadastro no SIAFI"},{"id":"592f226d-2571-4528-a212-145e4c0f24a3","value":"Incluir documento 872 - Despacho simples"},{"id":"5c4465da-1245-479f-ba5a-35d44f89e2e0","value":"Cadastro autorizado?"},{"id":"b04fecfb-fffd-4bb5-9216-f8949558731d","value":"Chefia imediata está lotada na mesma unidade do interessado?"},{"id":"0c7c97c5-dec0-4571-af9b-a7160f9f9b8a","value":"Atribuir processo para a chefia imediata"},{"id":"b0225ae9-e4bc-4cd7-9ccb-aa11719089b2","value":"Incluir formulário de cadastro no SIAFI em bloco de assinaturas"},{"id":"3ecb291a-f28c-4daa-b485-2db412ef38e8","value":"Assinar documento em bloco"},{"id":"6e45fa59-59cd-455e-9ee9-29a514e8f813","value":"Enviar processo para a PROAD"},{"id":"a012e119-391d-499b-bd7e-219ead571877","value":""},{"id":"1087b99f-8bda-40de-b95f-939ad01c92c7","value":"Incluir documento 872 - Despacho simples"},{"id":"81ed278f-bb9f-40c2-b5c1-051392d4d47e","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"96986c6e-df14-49f1-b0d6-7b5b7fa16636"},{"id":"355a32cc-53e3-4b2f-8334-90d6a96881b0"},{"id":"c0b81d40-d9a9-4ba9-bdd3-b249d1853cf9"},{"id":"51c6f07b-7e59-4cb7-9f16-77632f6619c5"}]}]}