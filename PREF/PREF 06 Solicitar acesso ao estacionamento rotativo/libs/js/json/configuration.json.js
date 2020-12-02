Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[PREF] 06 Solicitar acesso ao estacionamento rotativo","publishDate":"02/12/2020 14:27:05","pages":[{"id":"ef963081-cff0-4577-b54f-eb303b1a622a","name":"[PREF] 06 Solicitar acesso ao estacionamento rotativo","version":"1.0","author":"charisem","image":"files\\diagrams\\PREF]_06_Solicitar_acesso_ao_estacionamento_rotativo.png","isSubprocessPage":false,"elements":[{"id":"ad1656cf-3999-49d8-b783-930d46d70da3","name":"[PREF] 06 Solicitar acesso ao estacionamento rotativo","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":50.0,"y":48.0}],"radius":0.0,"height":625.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"12b0dcde-253f-4cfb-9e09-c9b63327a113","name":"Nenhum início","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">ENTRADAS: Sistema de Pedidos Internos (PI), lista do estacionamento rotativo.</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":198.0,"y":210.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"6a58db53-c8f4-44e2-85e9-1ff041b8f0c1","name":"Preencher formulário de \"Solicitação de reserva no estacionamento\"","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":276.0,"y":186.0}],"radius":0.0,"height":79.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"597a60e7-fe6b-4e91-b1f5-e1e8987e94e3","name":"Analisar dados do chamado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":286.0,"y":373.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c0b15e2c-8fc3-4df4-8a1a-669824b5251e","name":"Os dados estão completos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":311.0,"y":461.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"7175db36-ec16-4f20-9024-1f9bb5bd89a6","name":"Solicitar maiores informações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":507.0,"y":451.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e7a95716-4d52-4b65-93b6-a3e15df5b743","name":"Completar informações e/ou esclarecer dúvidas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":504.5,"y":193.0}],"radius":0.0,"height":63.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"68a110a1-fcc3-4d19-a09f-6d89827d4a6c","name":"Verificar tipo de solicitação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":560.0,"y":547.0}],"radius":0.0,"height":54.0,"width":134.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a5b9bcf3-e96c-41f0-97e7-2c4d3666bb41","name":"Incluir os dados na lista do estacionamento rotativo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":716.0,"y":515.0}],"radius":0.0,"height":63.0,"width":139.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6a735d26-33b8-4feb-ac88-98d14aeed3f5","name":"Imprimir a lista atualizada com data, assinatura e carimbo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":886.0,"y":514.0}],"radius":0.0,"height":65.0,"width":134.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d71d20db-59d5-4286-ac4e-5f032c48e8b0","name":"Disponibilizar cópia na guarita 1","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1049.0,"y":515.5}],"radius":0.0,"height":62.0,"width":125.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"75ac2338-1051-4fb5-9415-f9bd5752cc8a","name":"Confirmar ao solicitante a sua inclusão na lista de autorizados a acessar o estacionamento rotativo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1213.0,"y":501.5}],"radius":0.0,"height":90.0,"width":126.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8db65fda-82ed-470c-bab4-fcdcf90057d9","name":"Nenhum final","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">SA&Iacute;DA: Cadastro para acesso ao estacionamento rotativo.</span></p>","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1366.1571,"y":531.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"763d08f1-ad9d-4aed-81be-dbb551e1597a","name":"Docente ou Técnico-administrativo","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":100.0,"y":48.0}],"radius":0.0,"height":305.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"e63e5e87-78af-4aad-beac-46026898cd40","name":"Técnico do grupo de trabalho \"Prefeitura - Estacionamento\"","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":100.0,"y":353.0}],"radius":0.0,"height":320.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"ef963081-cff0-4577-b54f-eb303b1a622a","containerName":"[PREF] 06 Solicitar acesso ao estacionamento rotativo","isSubprocess":false,"elements":[{"id":"ad1656cf-3999-49d8-b783-930d46d70da3","value":"[PREF] 06 Solicitar acesso ao estacionamento rotativo"},{"id":"763d08f1-ad9d-4aed-81be-dbb551e1597a","value":"Docente ou Técnico-administrativo"},{"id":"e63e5e87-78af-4aad-beac-46026898cd40","value":"Técnico do grupo de trabalho \"Prefeitura - Estacionamento\""},{"id":"12b0dcde-253f-4cfb-9e09-c9b63327a113","value":""},{"id":"c0b15e2c-8fc3-4df4-8a1a-669824b5251e","value":"Os dados estão completos?"},{"id":"6a58db53-c8f4-44e2-85e9-1ff041b8f0c1","value":"Preencher formulário de \"Solicitação de reserva no estacionamento\""},{"id":"a5b9bcf3-e96c-41f0-97e7-2c4d3666bb41","value":"Incluir os dados na lista do estacionamento rotativo"},{"id":"6a735d26-33b8-4feb-ac88-98d14aeed3f5","value":"Imprimir a lista atualizada com data, assinatura e carimbo"},{"id":"d71d20db-59d5-4286-ac4e-5f032c48e8b0","value":"Disponibilizar cópia na guarita 1"},{"id":"7175db36-ec16-4f20-9024-1f9bb5bd89a6","value":"Solicitar maiores informações"},{"id":"68a110a1-fcc3-4d19-a09f-6d89827d4a6c","value":"Verificar tipo de solicitação"},{"id":"75ac2338-1051-4fb5-9415-f9bd5752cc8a","value":"Confirmar ao solicitante a sua inclusão na lista de autorizados a acessar o estacionamento rotativo"},{"id":"8db65fda-82ed-470c-bab4-fcdcf90057d9","value":""},{"id":"e7a95716-4d52-4b65-93b6-a3e15df5b743","value":"Completar informações e/ou esclarecer dúvidas"},{"id":"597a60e7-fe6b-4e91-b1f5-e1e8987e94e3","value":"Analisar dados do chamado"},{"id":"8c859bb6-341c-4f54-bec8-a30f50f25fe3"},{"id":"a8ead8e9-3971-4a1e-80f1-effb805f7898"},{"id":"0006c631-d5e0-499a-9f0f-0f603efd2677"},{"id":"c84cdc32-edf1-4482-bed8-2bd17da3094b"},{"id":"ef68bdd4-7593-446e-8619-feebd856abf6"},{"id":"e1f661ad-79fd-42aa-886e-8eb99142f339"},{"id":"6438d1e7-ab9a-4522-adc7-77dfa13c31a2"},{"id":"b7bfc2fb-753d-48b5-bc4a-690245b91599"},{"id":"4c39c379-f1a9-4226-a821-5fdff2c416c2"},{"id":"9fb6f453-fffc-46ff-a035-bd5ae125284f"},{"id":"91c2546d-8730-475c-b781-513923572922"},{"id":"f2c8753c-7a28-4330-8f77-b0c20d137d70"},{"id":"de2774bd-2049-42af-a292-9853eefcd72e","value":""}]}]}