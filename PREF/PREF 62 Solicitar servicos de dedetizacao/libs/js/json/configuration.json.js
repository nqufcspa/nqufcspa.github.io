Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[PREF] 62 Solicitar serviços de dedetização","publishDate":"20/08/2021 11:19:09","pages":[{"id":"0dd3676a-5d52-4e05-b282-cea799d274f2","name":"[PREF] 62 Solicitar serviço de dedetização","version":"1.0","author":"camilabittencourt","image":"files\\diagrams\\PREF]_62_Solicitar_servico_de_dedetizacao.png","isSubprocessPage":false,"elements":[{"id":"8e2039b5-05e7-4a74-967a-308fdd41b070","name":"[PREF] 62 Solicitar serviço de dedetização","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1158.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"b2b9d0d3-ab93-418f-8a78-ee27b9a8e4e4","name":"Nenhum início","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">ENTRADAS: Sistema de Pedidos Internos (PI), Termo de Responsabilidade.</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":145.0,"y":185.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"faf5dcee-349b-48c9-8c96-60569ac33196","name":"Preencher formulário de \"Solicitação de serviços de dedetização\"","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":225.0,"y":160.5}],"radius":0.0,"height":79.0,"width":121.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3935d607-6cf8-4a9a-8a88-19b06b936b12","name":"Analisar dados do chamado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":158.0,"y":291.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"18f8b20e-9e60-46a1-b758-e5bb0f483208","name":"Os dados estão completos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":183.0,"y":383.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"be6b310c-7bbc-44bc-aafb-80bb9e2c2665","name":"Solicitar maiores informações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":291.0,"y":373.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a98c39a4-1a79-4e34-810a-d8554fe6f738","name":"Completar informações e/ou esclarecer dúvidas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":463.0,"y":163.0}],"radius":0.0,"height":71.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"12bb0d42-cb8b-4f44-a83a-ed5a9778d790","name":"Verificar tipo de serviço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":467.5,"y":435.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"790aa4fe-1f80-4dce-9999-bc40e9f39fbf","name":"O serviço é abrangido pelo contrato?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":622.0,"y":445.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"ad943026-3bdc-42a6-94c5-8ccce006f786","name":"Analisar a planta predial do local","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":597.0,"y":543.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"64998377-10c1-43ed-a3d1-d1eb9318abf6","name":"Agendar vistoria no local","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":597.0,"y":631.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ec1f6084-f16b-4c3e-abf7-b5c4f7120b87","name":"Realizar vistoria no local ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":597.0,"y":722.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"14de67b9-63c9-419d-941c-556db99b4529","name":"Há disponibilidade  da quantidade demandada na ata de SRP?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":622.0,"y":816.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"cc8a34ef-83ed-4aa4-9a61-916b7c90c66e","name":"Contatar empresa para a prestação do serviço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":733.0,"y":883.0}],"radius":0.0,"height":60.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d28fde05-3b4e-4bf7-b9ab-8d357d33093f","name":"Informar ao solicitante previsão para atendimento do serviço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":926.5,"y":866.0}],"radius":0.0,"height":94.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bc78c887-2cf2-4fd0-8fd8-844f6c6e2351","name":"Confirmar agendamento do serviço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1114.0,"y":883.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"359c5d45-4e59-4370-9014-82ac71944055","name":"Executar o serviço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1114.0,"y":1066.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5eb62fd6-1907-4ab4-b342-6ae38f27220c","name":"Comunicar o solicitante sobre a conclusão do serviço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1283.0,"y":587.0}],"radius":0.0,"height":83.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"072c1ef6-542b-4a97-9683-e3bba0264c2c","name":"Preencher o custo do serviço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1286.5,"y":466.0}],"radius":0.0,"height":68.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"54e8be55-f2e6-4d03-a707-44620711d48d","name":"Solucionar o chamado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1457.91736,"y":470.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"59af1068-f904-4bb0-8674-df7d4840b036","name":"Informar ao solicitante que não será possível atender à solicitação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":891.0,"y":360.0}],"radius":0.0,"height":79.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6312a3b4-9503-45df-8c56-8c8cf2fc4e5d","name":"Nenhum final","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">SA&Iacute;DA: Servi&ccedil;o de chaveiro.</span></p>","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1486.41736,"y":383.0}],"radius":16.5,"height":33.0,"width":33.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"45af256b-12b3-4595-9d31-fd5bc9a9ccd0","name":"Docentes e Técnico-administrativos","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":258.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"5f1bbea0-2f14-4b69-bfa7-fb74bfba5bde","name":"Técnico do grupo de trabalho \"Prefeitura - Dedetização\"","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":278.0}],"radius":0.0,"height":700.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"d5188988-3603-4d2c-b08e-b53269ed67e9","name":"Empresa contratada para serviço de dedetização","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":978.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"0dd3676a-5d52-4e05-b282-cea799d274f2","containerName":"[PREF] 62 Solicitar serviço de dedetização","isSubprocess":false,"elements":[{"id":"8e2039b5-05e7-4a74-967a-308fdd41b070","value":"[PREF] 62 Solicitar serviço de dedetização"},{"id":"45af256b-12b3-4595-9d31-fd5bc9a9ccd0","value":"Docentes e Técnico-administrativos"},{"id":"5f1bbea0-2f14-4b69-bfa7-fb74bfba5bde","value":"Técnico do grupo de trabalho \"Prefeitura - Dedetização\""},{"id":"d5188988-3603-4d2c-b08e-b53269ed67e9","value":"Empresa contratada para serviço de dedetização"},{"id":"b2b9d0d3-ab93-418f-8a78-ee27b9a8e4e4","value":""},{"id":"faf5dcee-349b-48c9-8c96-60569ac33196","value":"Preencher formulário de \"Solicitação de serviços de dedetização\""},{"id":"790aa4fe-1f80-4dce-9999-bc40e9f39fbf","value":"O serviço é abrangido pelo contrato?"},{"id":"59af1068-f904-4bb0-8674-df7d4840b036","value":"Informar ao solicitante que não será possível atender à solicitação"},{"id":"cc8a34ef-83ed-4aa4-9a61-916b7c90c66e","value":"Contatar empresa para a prestação do serviço"},{"id":"18f8b20e-9e60-46a1-b758-e5bb0f483208","value":"Os dados estão completos?"},{"id":"6312a3b4-9503-45df-8c56-8c8cf2fc4e5d","value":""},{"id":"d28fde05-3b4e-4bf7-b9ab-8d357d33093f","value":"Informar ao solicitante previsão para atendimento do serviço"},{"id":"a98c39a4-1a79-4e34-810a-d8554fe6f738","value":"Completar informações e/ou esclarecer dúvidas"},{"id":"be6b310c-7bbc-44bc-aafb-80bb9e2c2665","value":"Solicitar maiores informações"},{"id":"12bb0d42-cb8b-4f44-a83a-ed5a9778d790","value":"Verificar tipo de serviço"},{"id":"359c5d45-4e59-4370-9014-82ac71944055","value":"Executar o serviço"},{"id":"072c1ef6-542b-4a97-9683-e3bba0264c2c","value":"Preencher o custo do serviço"},{"id":"54e8be55-f2e6-4d03-a707-44620711d48d","value":"Solucionar o chamado"},{"id":"3935d607-6cf8-4a9a-8a88-19b06b936b12","value":"Analisar dados do chamado"},{"id":"ec1f6084-f16b-4c3e-abf7-b5c4f7120b87","value":"Realizar vistoria no local "},{"id":"ad943026-3bdc-42a6-94c5-8ccce006f786","value":"Analisar a planta predial do local"},{"id":"64998377-10c1-43ed-a3d1-d1eb9318abf6","value":"Agendar vistoria no local"},{"id":"14de67b9-63c9-419d-941c-556db99b4529","value":"Há disponibilidade  da quantidade demandada na ata de SRP?"},{"id":"bc78c887-2cf2-4fd0-8fd8-844f6c6e2351","value":"Confirmar agendamento do serviço"},{"id":"5eb62fd6-1907-4ab4-b342-6ae38f27220c","value":"Comunicar o solicitante sobre a conclusão do serviço"},{"id":"3f4f56e2-1b8e-4feb-8a76-e3a25bb8cc17"},{"id":"d1050867-5e81-4198-b6d2-db887b0b999c"},{"id":"71b6797b-f729-46a9-81f4-8159f4ad53ec"},{"id":"aafcedf7-a0a5-4f8b-a546-c5e3047a8203"},{"id":"c3e6bfc2-d044-4896-ab81-977793b609cd"},{"id":"3f858220-81e0-445a-b7e6-83950d328de1"},{"id":"fbfcf655-683a-4739-8886-d6bd5afded2a"},{"id":"374b678a-6897-4fcd-bfae-5c9d41aecaf5"},{"id":"0c3f5b2e-63c8-433f-98bd-0fa0f5a9e232"},{"id":"35d39f1c-6af0-42fe-94f4-5ec66705a6c4"},{"id":"5828ef67-a9fd-44e9-a598-bf0038205791"},{"id":"17ff65ce-d4a3-4903-8d1b-31b7106e0e65"},{"id":"776576ad-b4de-49fc-ae9f-ebd1dcd0b660"},{"id":"acd0ef14-bf10-4417-96d7-fbfbe1ae0a62"},{"id":"1344f9d7-156d-4087-9e1f-c02ca418179c"},{"id":"30e45927-7da6-43bd-b415-aa428431093a","value":""},{"id":"21e89b1c-76a9-40c8-8343-6cd8e59ee788"},{"id":"998bfcbd-f32b-480e-b1c7-bdef14891e3d"},{"id":"7f843011-f9ba-4e1f-8d31-9cb10688f456"},{"id":"c93aa560-b140-41a5-b101-7306a2ef056e"},{"id":"7beab396-8a26-4669-9728-01e0d298b69b"},{"id":"f3f4a494-1b46-4596-9c3a-4757b492221b"},{"id":"37ecd0f9-885f-4c0a-a202-f0214f11064e"},{"id":"09dcb838-a177-44f3-a259-895288f73623"},{"id":"6f709eba-1623-4b88-a069-e68aee4fb03b"},{"id":"2fd000fc-1f22-4f1f-9b59-b84e4f6f7888"}]}]}