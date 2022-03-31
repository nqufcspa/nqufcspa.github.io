Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[UFCSPA] 16 Emitir atestado de participação em comissões, comitês ou grupos de trabalho","publishDate":"31/03/2022 14:22:29","pages":[{"id":"dd10b4a5-1d8c-4e74-9776-d226df61d04f","name":"[UFCSPA] 16 Emitir atestado de participação em comissões, comitês ou grupos de trabalho","version":"1.0","author":"ariel","image":"files\\diagrams\\UFCSPA]_16_Emitir_atestado_de_participacao_em_comissoes,_comites_ou_grupos_de_trabalho.png","isSubprocessPage":false,"elements":[{"id":"e0a20df5-ba6b-4106-9fc1-3979751cb4eb","name":"[UFCSPA] 16 Emitir atestado de participação em comissões, comitês ou grupos de trabalho","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1479.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"3db37624-805c-4c99-a627-3a4f32dcb4cc","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":149.0,"y":149.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"f4f228de-d420-46c4-9222-a8f45bd0f4af","name":"Abrir processo de solicitação de atestado/declaração de participação em comissões/ grupos/ orientações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":233.0,"y":120.0}],"radius":0.0,"height":88.0,"width":176.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2a33ff2c-6090-4b42-a776-9d80729c552e","name":"Solicitante é servidor da UFCSPA?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":533.0,"y":144.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"da27e011-079d-470f-b726-e3ff74e6c2b9","name":"Incluir documento 462 - Solicitação de atestados de participação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":498.0,"y":248.0}],"radius":0.0,"height":87.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2bb0c66a-f430-419c-a514-8cf60d89c458","name":"Liberar acesso externo para o interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":508.0,"y":417.25}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"42dc5213-18e6-44e3-bb98-09c5537e7f4e","name":"Enviar processo para a unidade competente pela emissão do documento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":500.5,"y":537.0}],"radius":0.0,"height":96.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"64f58330-59fd-4508-bdc3-3185df4d28b3","name":"Incluir documento 455 - Solicitação de comprovante de atividades","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":747.5,"y":126.0}],"radius":0.0,"height":76.0,"width":133.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c369954c-3668-4ccb-9335-d2824b52558d","name":"Enviar processo para a unidade competente para a emissão do documento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":761.0,"y":267.0}],"radius":0.0,"height":80.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"da9179ef-b83e-4f86-af51-9b66919c2180","name":"Realizar levantamento de dados para a emissão do documento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":760.0,"y":743.0}],"radius":0.0,"height":77.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"470be95c-2c31-4900-809d-91619eaef0eb","name":"Documento poderá ser emitido?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":793.0,"y":876.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"e75eb2a5-007e-45fc-bf02-1e0ec19dd6e8","name":"Tipo de documento a ser emitido","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":942.0,"y":876.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Atestado","elementType":"SequenceFlow","properties":[]},{"name":"Declaração","elementType":"SequenceFlow","properties":[]},{"name":"Documento já emitido em outro processo","elementType":"SequenceFlow","properties":[]}]},{"id":"0a6fae31-fca8-43a4-9c14-f1283557cc3c","name":"Incluir documento 158 - Atestado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1086.0,"y":750.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f6b9034a-ef8b-4649-aea5-dd60cb3dfa9e","name":"Incluir documento 987 - Declaração simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1083.0,"y":859.5}],"radius":0.0,"height":75.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6b4606c7-e5b4-45f8-b6c8-a8ae3e7569e3","name":"Incluir em PDF documento solicitado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1083.0,"y":990.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c75ab042-8f33-492b-8ee4-a5e3f65d0e24","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":761.0,"y":996.0}],"radius":0.0,"height":77.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"96057f9d-a7f8-47bf-bcc2-29439c3e3a2d","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1275.0,"y":1096.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"38ef98d5-3ff7-40e1-a4b1-d4effa6d06cb","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1268.0,"y":1203.0}],"radius":0.0,"height":74.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f453b924-0a42-4f88-b10c-a90a6edeb969","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1275.0,"y":1365.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"3408cd5a-6b27-4c04-90aa-dfb2e38220aa","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1452.0,"y":1380.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"f452b17e-5c1d-4594-85e0-b5e99bad8853","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":350.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6085a2c3-4de6-455c-a30f-2c6a4f410063","name":"DIPROT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":370.0}],"radius":0.0,"height":340.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"e53fb68f-0335-4364-89d1-8f18e9fd6692","name":"Unidade competente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":710.0}],"radius":0.0,"height":589.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"7b9ffcca-0e81-4313-98ed-07a3c69f40b4","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1299.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"dd10b4a5-1d8c-4e74-9776-d226df61d04f","containerName":"[UFCSPA] 16 Emitir atestado de participação em comissões, comitês ou grupos de trabalho","isSubprocess":false,"elements":[{"id":"e0a20df5-ba6b-4106-9fc1-3979751cb4eb","value":"[UFCSPA] 16 Emitir atestado de participação em comissões, comitês ou grupos de trabalho"},{"id":"f452b17e-5c1d-4594-85e0-b5e99bad8853","value":"Interessado"},{"id":"6085a2c3-4de6-455c-a30f-2c6a4f410063","value":"DIPROT"},{"id":"e53fb68f-0335-4364-89d1-8f18e9fd6692","value":"Unidade competente"},{"id":"7b9ffcca-0e81-4313-98ed-07a3c69f40b4","value":"DIARQ"},{"id":"3db37624-805c-4c99-a627-3a4f32dcb4cc","value":""},{"id":"f4f228de-d420-46c4-9222-a8f45bd0f4af","value":"Abrir processo de solicitação de atestado/declaração de participação em comissões/ grupos/ orientações"},{"id":"64f58330-59fd-4508-bdc3-3185df4d28b3","value":"Incluir documento 455 - Solicitação de comprovante de atividades"},{"id":"c369954c-3668-4ccb-9335-d2824b52558d","value":"Enviar processo para a unidade competente para a emissão do documento"},{"id":"da9179ef-b83e-4f86-af51-9b66919c2180","value":"Realizar levantamento de dados para a emissão do documento"},{"id":"470be95c-2c31-4900-809d-91619eaef0eb","value":"Documento poderá ser emitido?"},{"id":"e75eb2a5-007e-45fc-bf02-1e0ec19dd6e8","value":"Tipo de documento a ser emitido"},{"id":"0a6fae31-fca8-43a4-9c14-f1283557cc3c","value":"Incluir documento 158 - Atestado"},{"id":"f6b9034a-ef8b-4649-aea5-dd60cb3dfa9e","value":"Incluir documento 987 - Declaração simples"},{"id":"6b4606c7-e5b4-45f8-b6c8-a8ae3e7569e3","value":"Incluir em PDF documento solicitado"},{"id":"c75ab042-8f33-492b-8ee4-a5e3f65d0e24","value":"Incluir documento 872 - Despacho simples"},{"id":"96057f9d-a7f8-47bf-bcc2-29439c3e3a2d","value":"Comunicar interessado"},{"id":"38ef98d5-3ff7-40e1-a4b1-d4effa6d06cb","value":"Incluir documento 872 - Despacho simples"},{"id":"f453b924-0a42-4f88-b10c-a90a6edeb969","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"3408cd5a-6b27-4c04-90aa-dfb2e38220aa","value":""},{"id":"2a33ff2c-6090-4b42-a776-9d80729c552e","value":"Solicitante é servidor da UFCSPA?"},{"id":"da27e011-079d-470f-b726-e3ff74e6c2b9","value":"Incluir documento 462 - Solicitação de atestados de participação"},{"id":"2bb0c66a-f430-419c-a514-8cf60d89c458","value":"Liberar acesso externo para o interessado"},{"id":"42dc5213-18e6-44e3-bb98-09c5537e7f4e","value":"Enviar processo para a unidade competente pela emissão do documento"},{"id":"413fc0cd-13a3-43db-96f5-12b4a60a65b5"},{"id":"6f9a1d54-0a1f-4d80-ba85-6cff83e411a6"},{"id":"d8940ed1-a862-4356-a411-c7e04b45c1d7"},{"id":"1a9fc9a8-23da-41ed-8ce2-f1a94a888125"},{"id":"4bb83750-8cb1-4496-85b3-a9d6f995231d"},{"id":"a2ba62f1-a3ff-44c9-8cb6-59f6b707c571"},{"id":"3335dbe7-986b-485b-a4ad-b6679720324a"},{"id":"e5cc2bc8-9d08-45dd-a020-c467d6ce3d48"}]}]}