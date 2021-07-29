Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[CMED] 05 Solicitar troca de ordem de estágio","publishDate":"29/07/2021 10:39:04","pages":[{"id":"9ba29055-e47e-462c-9433-137ed1043de3","name":"[CMED] 05 Solicitar troca de ordem de estágio","version":"1.0","author":"cristianem","image":"files\\diagrams\\CMED]_05_Solicitar_troca_de_ordem_de_estagio.png","isSubprocessPage":false,"elements":[{"id":"a894ba86-086d-4ac9-8fc7-930418817cad","name":"[CMED] 05 Solicitar troca de ordem de estágio","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1536.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"4280ffce-da0b-443d-b493-5bfa6391ed19","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":124.0,"y":63.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"187b488c-5ce3-4f59-bd80-0e5536f56353","name":"Abrir processo de troca de ordem de estágios do internato","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":191.0,"y":37.0}],"radius":0.0,"height":83.0,"width":140.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f96c73ba-d8f4-49f8-acc1-18e4c06a5227","name":"Incluir documento 399 - Formulário de troca de ordem de estágio","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":200.0,"y":161.0}],"radius":0.0,"height":69.0,"width":122.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5a94934a-93ad-4eff-b3a0-d51ee53e6eb2","name":"Liberar acesso externo ao aluno","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":216.0,"y":305.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"95630bab-4465-4789-a242-0ba3598c4f66","name":"Atribuir processo ao secretário do curso","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":211.0,"y":397.0}],"radius":0.0,"height":68.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"86529dd0-9fb8-4966-8898-49564a642567","name":"Verificar a disponibilidade de vagas no estágio solicitado pelo aluno","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":202.0,"y":544.0}],"radius":0.0,"height":84.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"188ac8c0-30b4-4be2-8700-72273523623c","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":208.5,"y":664.0}],"radius":0.0,"height":70.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bcf5f531-4f85-4644-a965-ab0e0a48b295","name":"Há vagas disponiveis?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":241.0,"y":801.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"1750d505-54ca-430e-9448-2e8e3a187593","name":"Atribuir processo para a Coordenação de Curso","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":181.0,"y":895.0}],"radius":0.0,"height":60.0,"width":160.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6ed6c059-056e-4fc9-8d0d-99a407c20637","name":"Assinar documento  872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":196.0,"y":1074.0}],"radius":0.0,"height":60.0,"width":130.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3723dab7-a28b-48ce-85bc-1942e8830b9f","name":"Enviar o processo ao DERCA para registro e ciência ao aluno","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":412.0,"y":911.0}],"radius":0.0,"height":60.0,"width":129.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c42e494d-976c-480a-ab5f-c35892e47596","name":"Registrar alteração da ordem do estágio","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":424.5,"y":1284.0}],"radius":0.0,"height":76.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2e379918-6781-456d-97f1-5a78cf619b46","name":"Comunicar aluno","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":552.0,"y":1292.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e389cbfe-4313-454a-a4c9-840bc8a2e1d5","name":"Assinar documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":433.0,"y":783.0}],"radius":0.0,"height":76.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7511da20-23cd-4ff5-9eea-0e8db31d301f","name":"Comunicar aluno","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":644.0,"y":791.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6e4ed1d3-179b-4820-af37-3fa6c9f6a987","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":644.0,"y":1422.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"e1902a4a-04ca-4ed9-9c54-3ecf8b59c7b5","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":777.0,"y":1437.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"7a4cd2c6-b221-47a0-bbe9-0cb4c3011eec","name":"Aluno","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":242.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"8537e920-9091-44cf-a4fb-1b363ce8cc6f","name":"CESTMED","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":262.0}],"radius":0.0,"height":234.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"7d392d10-a91c-4fba-9fe0-1bd871ade280","name":"Secretário do Curso","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":496.0}],"radius":0.0,"height":511.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"e9864c54-d595-47ee-8098-9a9000ab95b4","name":"Coordenação do Curso","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1007.0}],"radius":0.0,"height":168.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"702c3422-8b74-4a55-9133-4fb8f9ef1a12","name":"DERCA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1175.0}],"radius":0.0,"height":210.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"47e3f364-9b2e-4c93-867a-bdcfd757211e","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1385.0}],"radius":0.0,"height":171.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"9ba29055-e47e-462c-9433-137ed1043de3","containerName":"[CMED] 05 Solicitar troca de ordem de estágio","isSubprocess":false,"elements":[{"id":"a894ba86-086d-4ac9-8fc7-930418817cad","value":"[CMED] 05 Solicitar troca de ordem de estágio"},{"id":"7a4cd2c6-b221-47a0-bbe9-0cb4c3011eec","value":"Aluno"},{"id":"8537e920-9091-44cf-a4fb-1b363ce8cc6f","value":"CESTMED"},{"id":"7d392d10-a91c-4fba-9fe0-1bd871ade280","value":"Secretário do Curso"},{"id":"e9864c54-d595-47ee-8098-9a9000ab95b4","value":"Coordenação do Curso"},{"id":"702c3422-8b74-4a55-9133-4fb8f9ef1a12","value":"DERCA"},{"id":"47e3f364-9b2e-4c93-867a-bdcfd757211e","value":"DIARQ"},{"id":"4280ffce-da0b-443d-b493-5bfa6391ed19","value":""},{"id":"187b488c-5ce3-4f59-bd80-0e5536f56353","value":"Abrir processo de troca de ordem de estágios do internato"},{"id":"f96c73ba-d8f4-49f8-acc1-18e4c06a5227","value":"Incluir documento 399 - Formulário de troca de ordem de estágio"},{"id":"5a94934a-93ad-4eff-b3a0-d51ee53e6eb2","value":"Liberar acesso externo ao aluno"},{"id":"95630bab-4465-4789-a242-0ba3598c4f66","value":"Atribuir processo ao secretário do curso"},{"id":"86529dd0-9fb8-4966-8898-49564a642567","value":"Verificar a disponibilidade de vagas no estágio solicitado pelo aluno"},{"id":"bcf5f531-4f85-4644-a965-ab0e0a48b295","value":"Há vagas disponiveis?"},{"id":"e389cbfe-4313-454a-a4c9-840bc8a2e1d5","value":"Assinar documento 872 - Despacho simples"},{"id":"1750d505-54ca-430e-9448-2e8e3a187593","value":"Atribuir processo para a Coordenação de Curso"},{"id":"6ed6c059-056e-4fc9-8d0d-99a407c20637","value":"Assinar documento  872 - Despacho simples"},{"id":"3723dab7-a28b-48ce-85bc-1942e8830b9f","value":"Enviar o processo ao DERCA para registro e ciência ao aluno"},{"id":"e1902a4a-04ca-4ed9-9c54-3ecf8b59c7b5","value":""},{"id":"c42e494d-976c-480a-ab5f-c35892e47596","value":"Registrar alteração da ordem do estágio"},{"id":"6e4ed1d3-179b-4820-af37-3fa6c9f6a987","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"2e379918-6781-456d-97f1-5a78cf619b46","value":"Comunicar aluno"},{"id":"188ac8c0-30b4-4be2-8700-72273523623c","value":"Incluir documento 872 - Despacho simples"},{"id":"7511da20-23cd-4ff5-9eea-0e8db31d301f","value":"Comunicar aluno"},{"id":"072c8217-bafc-43af-bdae-36ec637fc3c3"},{"id":"0ea4d5a1-53f4-44eb-a468-0969339aacfc"},{"id":"0092a920-4f9d-4511-8d45-a7081d171dfe"},{"id":"42857cf9-58b8-472c-8f35-d64636721437"},{"id":"7482ed0f-0ae0-49ce-bc8c-b841b4e8e324"},{"id":"faeb9e8f-0132-4e46-908d-debca9b4de7f"},{"id":"0e7fe82c-4146-4691-b2c2-c819153b4604"},{"id":"f139507b-2ca4-4905-b97d-cc70cc4313a8"}]}]}