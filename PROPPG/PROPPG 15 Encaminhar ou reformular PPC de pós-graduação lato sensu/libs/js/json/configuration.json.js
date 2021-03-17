Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[PROPPG] 15 Encaminhar ou reformular PPC de pós-graduação lato sensu","publishDate":"17/03/2021 14:39:32","pages":[{"id":"7e07aad7-a1ba-47ce-917f-9a4878f617e4","name":"[PROPPG] 15 Encaminhar ou reformular PPC de pós-graduação lato sensu","version":"1.0","author":"ariel","image":"files\\diagrams\\PROPPG]_15_Encaminhar_ou_reformular_PPC_de_pos_graduacao_lato_sensu.png","isSubprocessPage":false,"elements":[{"id":"86afdfaf-b4ab-4a8d-8134-46f72a80bcbc","name":"[PROPPG] 15 Encaminhar ou reformular PPC de pós-graduação lato sensu","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1540.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"3c841e7f-df91-4b51-840c-78f1c9dd12f8","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":164.0,"y":122.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"555c5a23-01d4-4f6c-a92d-ee9d179a1973","name":"Abrir processo de encaminhamento ou  reformulação de PPC de pós-graduação lato sensu","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":266.0,"y":78.0}],"radius":0.0,"height":119.0,"width":131.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"36cb8feb-f299-4343-b0b4-32583448e9df","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":482.0,"y":107.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c9644fb3-6475-4723-ba70-8f7c51b9c0b7","name":"Pedido de reformulação de PPC?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":507.0,"y":230.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"4f59354f-d9e7-4f1b-ab4a-74a09d4500f2","name":"Incluir documento 225 - Proposta de PPC","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":667.0,"y":217.5}],"radius":0.0,"height":67.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"91be4570-e706-4e43-83e6-85c6366ffa07","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":507.0,"y":318.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Analisar pedido","elementType":"SequenceFlow","properties":[]}]},{"id":"8819d6f7-bfbc-4fda-810e-92db0dfaa948","name":"Analisar pedido","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":758.0,"y":523.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f2fe974b-a85b-4621-a497-81611ca736ff","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":743.5,"y":632.0}],"radius":0.0,"height":72.0,"width":121.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bf9feb96-a985-4aa9-ae72-ada2fc205a13","name":"Necessita correções?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":966.0,"y":648.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"9ff291d7-060c-4f16-8dce-ba54b0ade3bd","name":"Realizar correções","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":941.0,"y":93.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f288e670-369f-43d0-888c-de9f7c1fd961","name":"Enviar processo à Comissão de Ensino","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":937.0,"y":1040.0}],"radius":0.0,"height":76.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ab76cab6-e170-4398-b5b1-61236cdc98ff","name":"Analisar proposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":941.0,"y":1294.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1f8c41c4-d963-400b-a594-10b7c3d5741e","name":"Incluir documento 191 - Parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1116.0,"y":1294.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"500c32e7-8390-431f-80b5-2866f14a3042","name":"Necessita correções?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1267.0,"y":1304.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"45043dae-83db-4c14-9ba7-a7e6f4f8897f","name":"Realizar correções","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1242.0,"y":93.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6d02bfb7-ce01-4f49-8f4a-2b94c7bb76da","name":"[SECON] 12 Pautar as sessões dos Conselhos Superiores","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1375.0,"y":1037.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/SECON/%5bSECON%5d%2012%20Pautar%20as%20sess%c3%b5es%20dos%20Conselhos%20Superiores/#list","type":"url"}},{"id":"0b7fd094-cf98-423f-9b2d-1ab89e8fe2bb","name":"Incluir documento 173 - Resolução","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1371.5,"y":832.5}],"radius":0.0,"height":67.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"86f77b03-0290-44ee-b530-0399ce9b093e","name":"Proposta aprovada?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1566.0,"y":845.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"ed2ff9f4-084d-43a3-ac17-8f4189f0b3e8","name":"Incluir documento 226 - Projeto pedagógico de curso (PPC)","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1532.0,"y":66.0}],"radius":0.0,"height":78.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"74f6b27e-7408-4727-a9b6-6ffbde7fe681","name":"Dar ciência no processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1628.0,"y":235.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"48b269bc-acb6-405e-8268-8d0d87cf23b4","name":"Dar ciência no processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1726.0,"y":546.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"78e22260-3518-400b-a7f7-1827cb241f71","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1726.0,"y":1461.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9571a783-ea04-4cf4-bf61-53b320c59da8","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1848.0,"y":1476.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"0f9fb7a2-3940-41bd-b614-ba5c77d0fda3","name":"COREME/ COREMU","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":383.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"02a034a0-3d9c-45a6-a85e-89d018633c4f","name":"PROPPG","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":403.0}],"radius":0.0,"height":366.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"e3d237d3-ac54-406b-b1f9-99f78b7a557e","name":"CONSEPE","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":769.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"5cccc979-35e7-41d7-94af-0039cf97970a","name":"SECON","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":969.0}],"radius":0.0,"height":253.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"11356749-f4f6-484e-9f73-7664a07b651f","name":"Comissão de Ensino","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1222.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"dba27a70-8eab-4eca-91cc-dc648605bfce","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1422.0}],"radius":0.0,"height":138.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"7e07aad7-a1ba-47ce-917f-9a4878f617e4","containerName":"[PROPPG] 15 Encaminhar ou reformular PPC de pós-graduação lato sensu","isSubprocess":false,"elements":[{"id":"86afdfaf-b4ab-4a8d-8134-46f72a80bcbc","value":"[PROPPG] 15 Encaminhar ou reformular PPC de pós-graduação lato sensu"},{"id":"0f9fb7a2-3940-41bd-b614-ba5c77d0fda3","value":"COREME/ COREMU"},{"id":"02a034a0-3d9c-45a6-a85e-89d018633c4f","value":"PROPPG"},{"id":"e3d237d3-ac54-406b-b1f9-99f78b7a557e","value":"CONSEPE"},{"id":"5cccc979-35e7-41d7-94af-0039cf97970a","value":"SECON"},{"id":"11356749-f4f6-484e-9f73-7664a07b651f","value":"Comissão de Ensino"},{"id":"dba27a70-8eab-4eca-91cc-dc648605bfce","value":"DIARQ"},{"id":"3c841e7f-df91-4b51-840c-78f1c9dd12f8","value":""},{"id":"555c5a23-01d4-4f6c-a92d-ee9d179a1973","value":"Abrir processo de encaminhamento ou  reformulação de PPC de pós-graduação lato sensu"},{"id":"36cb8feb-f299-4343-b0b4-32583448e9df","value":"Incluir documento 011 - Ofício"},{"id":"c9644fb3-6475-4723-ba70-8f7c51b9c0b7","value":"Pedido de reformulação de PPC?"},{"id":"4f59354f-d9e7-4f1b-ab4a-74a09d4500f2","value":"Incluir documento 225 - Proposta de PPC"},{"id":"91be4570-e706-4e43-83e6-85c6366ffa07","value":""},{"id":"8819d6f7-bfbc-4fda-810e-92db0dfaa948","value":"Analisar pedido"},{"id":"f2fe974b-a85b-4621-a497-81611ca736ff","value":"Incluir documento 872 - Despacho simples"},{"id":"bf9feb96-a985-4aa9-ae72-ada2fc205a13","value":"Necessita correções?"},{"id":"9ff291d7-060c-4f16-8dce-ba54b0ade3bd","value":"Realizar correções"},{"id":"ab76cab6-e170-4398-b5b1-61236cdc98ff","value":"Analisar proposta"},{"id":"500c32e7-8390-431f-80b5-2866f14a3042","value":"Necessita correções?"},{"id":"1f8c41c4-d963-400b-a594-10b7c3d5741e","value":"Incluir documento 191 - Parecer"},{"id":"45043dae-83db-4c14-9ba7-a7e6f4f8897f","value":"Realizar correções"},{"id":"6d02bfb7-ce01-4f49-8f4a-2b94c7bb76da","value":"[SECON] 12 Pautar as sessões dos Conselhos Superiores"},{"id":"0b7fd094-cf98-423f-9b2d-1ab89e8fe2bb","value":"Incluir documento 173 - Resolução"},{"id":"86f77b03-0290-44ee-b530-0399ce9b093e","value":"Proposta aprovada?"},{"id":"ed2ff9f4-084d-43a3-ac17-8f4189f0b3e8","value":"Incluir documento 226 - Projeto pedagógico de curso (PPC)"},{"id":"48b269bc-acb6-405e-8268-8d0d87cf23b4","value":"Dar ciência no processo"},{"id":"78e22260-3518-400b-a7f7-1827cb241f71","value":"Realizar tratamento arquivístico"},{"id":"9571a783-ea04-4cf4-bf61-53b320c59da8","value":""},{"id":"f288e670-369f-43d0-888c-de9f7c1fd961","value":"Enviar processo à Comissão de Ensino"},{"id":"74f6b27e-7408-4727-a9b6-6ffbde7fe681","value":"Dar ciência no processo"},{"id":"907ded14-48f3-48d7-8a1c-4a509e0afd07"},{"id":"759416aa-b93a-4f48-800c-50a7e5b2d604"},{"id":"375d63f3-29a2-436c-9988-4498f9e16eba"},{"id":"a9ffb242-9787-4fe7-895d-bd653f719c6a"},{"id":"f60a7fff-bb1a-4b31-a353-6fb5a8639f56"},{"id":"ff54b0b6-e9f7-45a3-8038-e1d4edd2ae21"},{"id":"d75e4dae-d729-4ab0-acda-e42d284feeeb"},{"id":"1e1c8264-42db-43ce-a2d6-58f46b4489b6"}]}]}