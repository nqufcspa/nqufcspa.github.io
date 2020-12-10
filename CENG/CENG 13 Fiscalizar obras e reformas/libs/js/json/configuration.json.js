Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[CENG] 13 Fiscalizar obras e reformas","publishDate":"09/12/2020 19:07:39","pages":[{"id":"be309ad7-7235-44f4-a635-e3614698af00","name":"[CENG ] 13-01 Iniciar fiscalização","version":"1.0","author":"Leo","image":"files\\diagrams\\CENG_]_13_01_Iniciar_fiscalizacao.png","isSubprocessPage":false,"elements":[{"id":"8b1684cf-c169-440e-9ce9-e9db65e760cc","name":"[CENG ] 13-01 Iniciar fiscalização","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1868.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"6bcf9f2e-7631-47b7-bc12-2d339c08a383","name":"Nenhum início","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">ENTRADA: Processo de fiscaliza&ccedil;&atilde;o aberto.</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":131.0,"y":104.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"33f9737c-036c-43f9-90bf-cfde24689896","name":"Incluir documento 872 - despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":195.5,"y":84.0}],"radius":0.0,"height":70.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"df538bba-02c2-44c8-9d89-56b0366ff603","name":"Incluir documento 852 - portaria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":201.0,"y":298.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"52f75a24-938a-43d5-894e-7b7d01506be7","name":"Marcar data da reunião inicial","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":201.0,"y":1194.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8b1881ac-f413-435b-84d9-28ad4af24975","name":"Incluir documento 011 - ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":201.0,"y":1290.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7411e3ce-7a4c-4fa4-9286-da1c4e182ee2","name":"Enviar ofício ao fornecedor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":201.0,"y":1402.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"45931be4-fd84-4dde-8b1e-c1a31a3208e8","name":"Incluir em PDF, AR","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":201.0,"y":1506.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c8ce360d-9fe5-4047-acc8-09939f907bfb","name":"Realizar reunião","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":391.0,"y":1506.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d63d22a4-1b4e-46f7-bce3-d376230265f4","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":587.0,"y":1516.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"2ff0f07b-753c-48e0-a3ad-eece8ae43e07","name":"Incluir documento 904 - ata simplificada de reunião não periódica","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":912.5,"y":1498.0}],"radius":0.0,"height":76.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"672333a3-8aa9-4317-8684-48a39ded748a","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":951.0,"y":1278.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"75b97f47-3750-4493-a47c-fd193da7e829","name":"Assinar documento","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1086.0,"y":703.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"2e0aad7a-0402-4522-b4a5-b20b2586c5d2","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1060.0,"y":884.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"f56c5b37-b99d-4cb6-9cb3-d22cacfd754b","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1148.0,"y":1284.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"9aece484-2b6d-45f1-b3ca-1a13711b655c","name":"Incluir documento 872 - despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":557.0,"y":926.0}],"radius":0.0,"height":73.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d3842a1c-e27d-4a6f-9afc-3313cd5e5287","name":"Incluir documento 149 - ordem de início de execução","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":553.0,"y":309.0}],"radius":0.0,"height":82.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"faa9df70-e894-4987-b415-184f07569c9d","name":"Enviar ao fornecedor e à equipe de fiscalização a ordem de Execução de Serviço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":690.0,"y":916.0}],"radius":0.0,"height":101.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6d86e6d5-1d97-4572-80f0-222a2fa99eba","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1148.0,"y":1418.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"cfebee72-731d-4b33-bd3c-b32ad5acc9eb","name":"Comunicar início das obras à ASCOM","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1315.0,"y":1506.0}],"radius":0.0,"height":60.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ed9650ba-0a01-4b49-b2b2-8eead97c6aa2","name":"Incluir documento 872 - despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1539.0,"y":1502.0}],"radius":0.0,"height":68.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f65b0de0-0873-415f-9c60-3fdea5b9b873","name":"Incluir em PDF documentação inicial","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1544.0,"y":688.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c2d8eba1-fff4-4854-a810-1e9c528c749e","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1820.0,"y":1501.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"4053aa4e-6c5f-44ab-b180-689ac30004b7","name":"Analisar documentos referentes a segurança do trabalho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1786.5,"y":1769.5}],"radius":0.0,"height":78.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8191252c-4756-413a-9374-6e50530e9c1b","name":"Incluir documento 872 - despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2099.5,"y":1773.0}],"radius":0.0,"height":71.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e212057a-be8e-4197-ba77-35bc071a089a","name":"Analisar documentos administrativos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1950.0,"y":1490.0}],"radius":0.0,"height":63.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"930faf6e-36d7-4994-a95e-c8159900f987","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":2135.0,"y":1501.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"1289cf7d-d3a7-41e1-a486-5b5c08be854d","name":"Há alguma irregularidade na documentação?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2258.0,"y":1501.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"e21362fb-128e-424a-82b3-d533fa63baf5","name":"Incluir documento 133 - notificação fornecedores","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2226.5,"y":1331.0}],"radius":0.0,"height":83.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2732fa6d-d810-47c3-a59a-0bb4bd7a7d70","name":"Realizar correções","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2234.0,"y":705.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"dfa4a922-10d5-4635-831b-2169cefe923a","name":"Todas as correções foram realizadas dentro do prazo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2440.0,"y":1329.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"2992be38-a06c-42da-89fd-80daed424927","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":2656.0,"y":1329.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"02b01f0a-0771-4dfc-a95f-08635cc1596e","name":"Incluir documento 872 - despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2628.5,"y":1196.0}],"radius":0.0,"height":67.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4e3ce033-1c96-423c-8725-8dafbcad3ec7","name":"[DCC] 29 Aplicar sanção por descumprimento de prestação de serviços","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2631.0,"y":1005.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[]},{"id":"2d573a85-0342-4a14-8133-858860776f3a","name":"Anexar processo de aplicação de sanção","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2625.0,"y":866.0}],"radius":0.0,"height":77.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a9d38c4f-ff4f-4282-8947-3ca9a92cbf6c","name":"Incluir documento 872 - despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2761.5,"y":865.5}],"radius":0.0,"height":78.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"76412b3a-beb8-4f05-971c-5435be23f771","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":2789.0,"y":715.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"aea640d3-3bf0-46cb-be7f-2840cae9ca85","name":"Incluir documento 133 - notificação fornecedores","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2842.0,"y":1313.5}],"radius":0.0,"height":71.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"deff4f43-0d91-4f3d-b136-5ab1f385eab8","name":"Solicitar acesso de funcionários","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2415.0,"y":1491.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"448706f2-edc4-47d8-9379-01515873b6ea","name":"Comunicar interessado que os serviços podem ser iniciados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2647.0,"y":1490.0}],"radius":0.0,"height":65.0,"width":128.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cd5b76af-a692-49a7-89d7-b4b4e1bf0907","name":"Nenhum final","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">SA&Iacute;DA: autorizado in&iacute;cio da execu&ccedil;&atilde;o dos servi&ccedil;os.</span></p>","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":2904.0,"y":1506.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"dffa522c-590b-4879-b25e-c854b469dd6e","name":"Unidade requisitante","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"574debd7-e476-45a5-8662-a7533592d156","name":"PROAD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":220.0}],"radius":0.0,"height":260.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"ee4bf273-0a09-4e2c-80a7-5214b802df31","name":"Fornecedor","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":480.0}],"radius":0.0,"height":347.5,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"a7efb9fe-d2a9-4c1b-93bc-1a9076e3861a","name":"DICONT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":827.5}],"radius":0.0,"height":310.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"19e4cf6d-a527-40db-b9e3-c4d10245570a","name":"Equipe de fiscalização","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1137.5}],"radius":0.0,"height":620.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"daccd8d4-677f-4e5d-89d2-a01c523554fd","name":"DESEG","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1757.5}],"radius":0.0,"height":130.5,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"be309ad7-7235-44f4-a635-e3614698af00","containerName":"[CENG ] 13-01 Iniciar fiscalização","isSubprocess":false,"elements":[{"id":"8b1684cf-c169-440e-9ce9-e9db65e760cc","value":"[CENG ] 13-01 Iniciar fiscalização"},{"id":"dffa522c-590b-4879-b25e-c854b469dd6e","value":"Unidade requisitante"},{"id":"574debd7-e476-45a5-8662-a7533592d156","value":"PROAD"},{"id":"ee4bf273-0a09-4e2c-80a7-5214b802df31","value":"Fornecedor"},{"id":"a7efb9fe-d2a9-4c1b-93bc-1a9076e3861a","value":"DICONT"},{"id":"19e4cf6d-a527-40db-b9e3-c4d10245570a","value":"Equipe de fiscalização"},{"id":"daccd8d4-677f-4e5d-89d2-a01c523554fd","value":"DESEG"},{"id":"1289cf7d-d3a7-41e1-a486-5b5c08be854d","value":"Há alguma irregularidade na documentação?"},{"id":"cfebee72-731d-4b33-bd3c-b32ad5acc9eb","value":"Comunicar início das obras à ASCOM"},{"id":"c2d8eba1-fff4-4854-a810-1e9c528c749e","value":""},{"id":"9aece484-2b6d-45f1-b3ca-1a13711b655c","value":"Incluir documento 872 - despacho simples"},{"id":"e212057a-be8e-4197-ba77-35bc071a089a","value":"Analisar documentos administrativos"},{"id":"aea640d3-3bf0-46cb-be7f-2840cae9ca85","value":"Incluir documento 133 - notificação fornecedores"},{"id":"2e0aad7a-0402-4522-b4a5-b20b2586c5d2","value":"Assinar documento em bloco"},{"id":"e21362fb-128e-424a-82b3-d533fa63baf5","value":"Incluir documento 133 - notificação fornecedores"},{"id":"6d86e6d5-1d97-4572-80f0-222a2fa99eba","value":""},{"id":"faa9df70-e894-4987-b415-184f07569c9d","value":"Enviar ao fornecedor e à equipe de fiscalização a ordem de Execução de Serviço"},{"id":"d63d22a4-1b4e-46f7-bce3-d376230265f4","value":""},{"id":"2992be38-a06c-42da-89fd-80daed424927","value":""},{"id":"02b01f0a-0771-4dfc-a95f-08635cc1596e","value":"Incluir documento 872 - despacho simples"},{"id":"930faf6e-36d7-4994-a95e-c8159900f987","value":""},{"id":"deff4f43-0d91-4f3d-b136-5ab1f385eab8","value":"Solicitar acesso de funcionários"},{"id":"52f75a24-938a-43d5-894e-7b7d01506be7","value":"Marcar data da reunião inicial"},{"id":"75b97f47-3750-4493-a47c-fd193da7e829","value":"Assinar documento"},{"id":"dfa4a922-10d5-4635-831b-2169cefe923a","value":"Todas as correções foram realizadas dentro do prazo?"},{"id":"448706f2-edc4-47d8-9379-01515873b6ea","value":"Comunicar interessado que os serviços podem ser iniciados"},{"id":"2ff0f07b-753c-48e0-a3ad-eece8ae43e07","value":"Incluir documento 904 - ata simplificada de reunião não periódica"},{"id":"2732fa6d-d810-47c3-a59a-0bb4bd7a7d70","value":"Realizar correções"},{"id":"df538bba-02c2-44c8-9d89-56b0366ff603","value":"Incluir documento 852 - portaria"},{"id":"6bcf9f2e-7631-47b7-bc12-2d339c08a383","value":""},{"id":"d3842a1c-e27d-4a6f-9afc-3313cd5e5287","value":"Incluir documento 149 - ordem de início de execução"},{"id":"4053aa4e-6c5f-44ab-b180-689ac30004b7","value":"Analisar documentos referentes a segurança do trabalho"},{"id":"ed9650ba-0a01-4b49-b2b2-8eead97c6aa2","value":"Incluir documento 872 - despacho simples"},{"id":"33f9737c-036c-43f9-90bf-cfde24689896","value":"Incluir documento 872 - despacho simples"},{"id":"8b1881ac-f413-435b-84d9-28ad4af24975","value":"Incluir documento 011 - ofício"},{"id":"7411e3ce-7a4c-4fa4-9286-da1c4e182ee2","value":"Enviar ofício ao fornecedor"},{"id":"45931be4-fd84-4dde-8b1e-c1a31a3208e8","value":"Incluir em PDF, AR"},{"id":"c8ce360d-9fe5-4047-acc8-09939f907bfb","value":"Realizar reunião"},{"id":"672333a3-8aa9-4317-8684-48a39ded748a","value":""},{"id":"f56c5b37-b99d-4cb6-9cb3-d22cacfd754b","value":""},{"id":"f65b0de0-0873-415f-9c60-3fdea5b9b873","value":"Incluir em PDF documentação inicial"},{"id":"8191252c-4756-413a-9374-6e50530e9c1b","value":"Incluir documento 872 - despacho simples"},{"id":"4e3ce033-1c96-423c-8725-8dafbcad3ec7","value":"[DCC] 29 Aplicar sanção por descumprimento de prestação de serviços"},{"id":"2d573a85-0342-4a14-8133-858860776f3a","value":"Anexar processo de aplicação de sanção"},{"id":"a9d38c4f-ff4f-4282-8947-3ca9a92cbf6c","value":"Incluir documento 872 - despacho simples"},{"id":"76412b3a-beb8-4f05-971c-5435be23f771","value":""},{"id":"cd5b76af-a692-49a7-89d7-b4b4e1bf0907","value":""},{"id":"2e9a6ead-a75a-4e3f-9a83-172d1ad41462"},{"id":"435a8053-3b89-4b5f-91d6-cb664084ffff"},{"id":"cbd96f80-287e-4ec8-83ae-827212a4387d"},{"id":"07d067a0-05fe-4c43-b15f-a0acb06a4f87"},{"id":"47c8892f-bfc4-42ad-ad41-241c5bff392c"},{"id":"4984f8eb-ebce-498d-9f73-dc646eb75f1f"},{"id":"060e59ca-87d1-45bd-ae7a-d54185b0c583"},{"id":"98843994-646c-4c74-b41f-67fa41039665"},{"id":"ecb9b990-b13a-4dfd-bb21-5b25a274cf99"},{"id":"92e380d2-bdc0-4471-a242-fbaa93e1a1d8"},{"id":"f66a4a26-90da-4136-9fc7-bfbc3d0c3973"},{"id":"d851e307-1dfe-46e7-9ba7-1a654dcb9479"},{"id":"36c4d943-cdb2-431a-b3c2-a40915521798"},{"id":"38edaa1e-96d9-45ab-883e-2ab88de17512"},{"id":"68126e94-b606-46d7-90d5-888f26dd9253"},{"id":"bdd7008b-70ca-4c5f-92fa-3452f78498bf"},{"id":"c8be4207-ec91-4305-a379-5785f1b9bc2a"},{"id":"9877363a-0bd4-43ea-99e2-7ca3cdef0a12"},{"id":"29bdb9cf-196b-408b-b04f-5ef541fc2a36"},{"id":"7fe65606-d04f-4aec-baf2-2656bcc05557"},{"id":"bd0af30c-897c-4e6c-bff6-fc2983e651f1"},{"id":"ae96340c-6cb8-4986-be79-bc6ad3e03bf4"},{"id":"ddf1cd94-055f-4821-9cf5-e1f274a076e7"},{"id":"b396c905-5319-458b-98fc-7eb77f138b21"},{"id":"21ca4835-15d7-4e64-bfb2-5acca6bd4ebe"},{"id":"70a21cb8-e2ff-472e-9d27-734bf2405ba6"},{"id":"41fdf14a-5be6-41d2-905b-596a47f613c6"},{"id":"a01cbe1e-6985-4cfe-9c12-dfc58e0bea43"},{"id":"1886ec07-57ec-4c9f-977a-e3fce755f696"},{"id":"3f9b0bbf-5a0e-424b-b1ab-ef0d8b2d1f10"},{"id":"b290f92f-fb5b-4b7b-9619-ef7652173e13"},{"id":"f13d8c79-0bc8-44c6-9fda-16527262cff6"},{"id":"a8128725-29fe-43e5-9cba-805e2b1b3f0d"},{"id":"e3caeeaa-9ecb-4bbd-b5d9-14985d99e445"},{"id":"9b82dcee-4880-4756-ad51-bbf031f33e62"},{"id":"b5b617e6-6092-4df2-8480-c7f333d29832"},{"id":"360b4d83-ba9f-4138-ba35-8fe5237f399f"},{"id":"26073d53-9174-4592-b0ab-b35a9ae9fbd9"},{"id":"886c975f-313b-4300-b929-6d2c04c58419"},{"id":"c7d54b19-279f-4c19-aabf-d4b7c0ac2e21"},{"id":"44e58a9d-4faf-4894-896a-16fc5b84b752"},{"id":"34fcda6c-234a-4bfd-89c2-f858cf1fb4d6"},{"id":"ce3a2b37-3aab-4572-ba74-0398e3c455af"},{"id":"dc472755-edb9-48aa-935a-5653e33f98ac"},{"id":"7547aa2e-fe69-486e-be0b-3f0a9ae0c919"},{"id":"1ee1b029-21f2-4e94-8982-331f06e83d4b"},{"id":"28320b0e-427d-4f8f-b4c7-6b826b2e3114"},{"id":"e1d2cba4-4564-4e91-9f5e-eb6e2311114c"}]}]}