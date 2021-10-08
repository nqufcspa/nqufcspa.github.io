Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DIARQ] 04 Eliminar documentos","publishDate":"30/09/2021 10:32:36","pages":[{"id":"2a193f1d-7140-48c0-8317-fb98fefd3fc5","name":"[DIARQ] 04 Eliminar documentos","version":"1.0","author":"karinars","image":"files\\diagrams\\DIARQ]_04_Eliminar_documentos.png","isSubprocessPage":false,"elements":[{"id":"8b7f1da2-905d-4486-85ca-c2aa7e02583e","name":"[DIARQ] 04 Eliminar documentos","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":2378.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"e7cbf400-8031-476c-8042-79ae3809cd05","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":113.0,"y":91.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart","properties":[{"id":"05cacdee-17dd-408c-a0dd-b8cb4b0fe54c","name":"Arquivo anexo","value":"C:\\Users\\karinars\\Desktop\\Eliminar documentos_Attachments\\Cópia de      DSG_Planejamento Estratégico.xlsx","type":"fileLinked","urlText":"Cópia de      DSG_Planejamento Estratégico.xlsx"}]},{"id":"41e760b3-5e2d-4db5-8dc3-476e2a0b1c7f","name":"Abrir processo de elminação de documentos ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":177.5,"y":70.5}],"radius":0.0,"height":73.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b3ceb989-5c14-41fd-9c26-e139ac19ac37","name":"Incluir documento 085 - Listagem de eliminação de documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":172.0,"y":203.0}],"radius":0.0,"height":71.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8277ea3a-199b-4129-b50f-a6beb05fbaa0","name":"Agendar reunião dos membros da CPAD","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":177.5,"y":741.0}],"radius":0.0,"height":61.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b55a0133-1697-4fc2-a1f8-e91bca26575f","name":"Analisar listagem","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":353.0,"y":860.0}],"radius":0.0,"height":65.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"502c8564-80fa-47ce-a7f6-99e3935a6794","name":"Incluir documento 904 - Ata simplificada de reunião não periódica ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":520.0,"y":843.5}],"radius":0.0,"height":98.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fb509019-1756-4181-a6db-7271da065111","name":"Há possibilidade de eliminação de todos documentos constantes na listagem?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":695.0,"y":872.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"8a2dc6d0-6d86-4c65-b4ae-283914b07ff6","name":"Incluir Documento 085 - Listagem de eliminação de documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":840.0,"y":855.0}],"radius":0.0,"height":74.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fec006ec-3af3-4869-aad6-e5916a85c860","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1045.0,"y":859.0}],"radius":0.0,"height":66.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3a2870a7-a943-444a-814b-c7a0b0a01714","name":"Avaliar listagem","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1049.5,"y":1639.2}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2840545a-1e3a-44c4-8484-66f5e1b55412","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1045.5,"y":1751.0}],"radius":0.0,"height":66.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b89bb293-b483-4d1b-b003-f10032ebe838","name":"Avaliação da listagem","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1075.0,"y":1899.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Listagem totalmente aprovada","elementType":"SequenceFlow","properties":[]},{"name":"Listagem parcialmente aprovada","elementType":"SequenceFlow","properties":[]},{"name":"Listagem totalmente reprovada","elementType":"SequenceFlow","properties":[]}]},{"id":"97f45fe4-165b-4fae-98e0-76acf946e63d","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1080.0,"y":2058.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"cc631503-1d18-470a-b0a4-726d587acd2f","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1040.0,"y":2212.1}],"radius":0.0,"height":73.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"75923919-3714-4cc8-9404-8b40b73779ea","name":"Eliminação autorizada?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1245.0,"y":2228.1}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"9ca5ebbe-4222-4d41-85a3-5044ec210684","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1373.0,"y":2233.1}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"a6a187cc-b7f0-4769-951d-7471f6554084","name":"Incluir documento 917 - Edital","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1337.0,"y":1241.0}],"radius":0.0,"height":49.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d440ae96-3fcd-4384-8cb4-f654e7dde2b0","name":"Publicar edital","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1343.5,"y":1147.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4aea1037-40f5-4f1b-bcbf-497f40d2c8c5","name":"Incluir em PDF comprovante de publicação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1341.0,"y":1050.0}],"radius":0.0,"height":65.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"288b5f6a-c0c0-444f-8348-a45876e7d1a4","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1573.0,"y":1062.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"87b982e6-a2ad-431f-b00e-2cb6e9859437","name":"Irá solicitar a retirada de algum documento da lista de eliminação divulgada no edital?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1573.0,"y":1375.1}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"f55c4f79-d78d-45ef-8157-d5c1825e2139","name":"Solicitar retirada de documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1548.0,"y":1489.1}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2f33d39b-8c9a-4d42-8de2-58ac3bd779ac","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1736.0,"y":1375.1}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Portão","elementType":"SequenceFlow","properties":[]}]},{"id":"cfa0d211-6cc8-4a2b-99bf-9ecac427bae0","name":"Aguardar prazo para solicitação de retirada de documentos","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1667.0,"y":1067.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"f464e752-dda4-4c8a-ad56-8035f861a471","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1736.0,"y":1062.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"ffb62145-34f4-48b6-aaf0-4045df8220c3","name":"Foi solicitada a retirada de documentos constantes na lista de eliminação?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1866.0,"y":1062.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"2f507828-cd84-482a-a2e8-9eda9ed7e190","name":"Incluir em PDF e-mails recebidos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1993.0,"y":1052.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"86cfaa6e-c450-49a1-a620-3aab4b69b844","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1987.0,"y":1150.0}],"radius":0.0,"height":71.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a29686ad-5203-44a5-8ef6-8213c95456f1","name":"[PREF] 26 Solicitar reserva de veículo institucional","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2068.0,"y":183.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/PREF/PREF%2026%20Solicitar%20reserva%20de%20ve%C3%ADculo%20institucional/#list","type":"url"}},{"id":"6bc1dd71-4c70-4a46-8325-66740c316f67","name":"Solicitante da devolução de documentos é pessoa de fora da UFCSPA?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2224.0,"y":193.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"bc7670ab-175d-4992-bd62-a89ff2b59e5f","name":"Encaminhar documentos para a DIPROT","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2364.0,"y":337.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9e44190f-926a-40c0-8b04-e64534dc8b5d","name":"Proceder a devolução dos documentos para os solicitantes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2352.0,"y":549.0}],"radius":0.0,"height":85.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4d44edf7-7652-4e49-a90d-2fc64ce398d2","name":"Proceder a devolução dos documentos para os solicitantes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2187.0,"y":332.0}],"radius":0.0,"height":85.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8eb62eff-95e0-4c00-ab22-3b6df195ac7f","name":"Incluir Documento 084 - Termo de eliminação de documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1830.0,"y":948.0}],"radius":0.0,"height":74.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5640e695-23e3-472c-9d2f-da558180cac3","name":"Publicar termo de eliminação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1841.0,"y":866.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"71524c65-e9dc-4b24-9d18-8a855d77e478","name":"Enviar termo de eliminação para o Arquivo Nacional","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1841.0,"y":743.0}],"radius":0.0,"height":76.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f4b2304d-d44e-4394-929b-5a58438b55f9","name":"Enviar documentos para eliminação ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1836.0,"y":392.0}],"radius":0.0,"height":63.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f70320f3-5a56-4684-82f5-f1a7e89f5f34","name":"Registrar eliminação no Winisis","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1841.0,"y":287.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c3d271b1-285c-42fd-9340-b014758ba7fe","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1837.5,"y":178.0}],"radius":0.0,"height":66.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e01f1cc7-12c7-4afc-b512-6bce55bc83be","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1202.6,"y":830.0}],"radius":0.0,"height":89.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6d38d8d0-52bb-48d9-bfde-811b51af933f","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1841.0,"y":78.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"009c4043-34f6-45e4-809d-9a48b5e2cd4f","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1999.0,"y":93.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"44d03ddd-2709-463b-b2d3-5bd6263e6461","name":"Incluir documento 191 - Parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":663.0,"y":733.0}],"radius":0.0,"height":53.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c28dec50-1abc-4363-ab59-5167d843c4cc","name":"Fazer correções necessárias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":670.0,"y":124.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3b213e6c-473a-4f70-a913-9e27eae2aaff","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":478.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"7261f471-b757-4926-ad47-2ed9aefc876c","name":"DIPROT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":498.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"e9f5d467-cb98-4618-b21f-f6bcd1e9ac9e","name":"CPAD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":698.0}],"radius":0.0,"height":631.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"23e9b76d-19e8-4efb-82f1-e2632d636da9","name":"Comunidade","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1329.0}],"radius":0.0,"height":280.1,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"959ca8be-53eb-4f60-ae73-37f4506aa178","name":"Pró-reitoria competente/ Reitoria","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1609.1}],"radius":0.0,"height":554.9,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"7b28abba-6c16-4300-bd5d-8161a2ba15b2","name":"REITORIA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2164.0}],"radius":0.0,"height":234.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"2a193f1d-7140-48c0-8317-fb98fefd3fc5","containerName":"[DIARQ] 04 Eliminar documentos","isSubprocess":false,"elements":[{"id":"8b7f1da2-905d-4486-85ca-c2aa7e02583e","value":"[DIARQ] 04 Eliminar documentos"},{"id":"3b213e6c-473a-4f70-a913-9e27eae2aaff","value":"DIARQ"},{"id":"7261f471-b757-4926-ad47-2ed9aefc876c","value":"DIPROT"},{"id":"e9f5d467-cb98-4618-b21f-f6bcd1e9ac9e","value":"CPAD"},{"id":"23e9b76d-19e8-4efb-82f1-e2632d636da9","value":"Comunidade"},{"id":"959ca8be-53eb-4f60-ae73-37f4506aa178","value":"Pró-reitoria competente/ Reitoria"},{"id":"7b28abba-6c16-4300-bd5d-8161a2ba15b2","value":"REITORIA"},{"id":"e7cbf400-8031-476c-8042-79ae3809cd05","value":""},{"id":"8277ea3a-199b-4129-b50f-a6beb05fbaa0","value":"Agendar reunião dos membros da CPAD"},{"id":"b55a0133-1697-4fc2-a1f8-e91bca26575f","value":"Analisar listagem"},{"id":"2840545a-1e3a-44c4-8484-66f5e1b55412","value":"Incluir documento 872 - Despacho simples"},{"id":"a6a187cc-b7f0-4769-951d-7471f6554084","value":"Incluir documento 917 - Edital"},{"id":"8eb62eff-95e0-4c00-ab22-3b6df195ac7f","value":"Incluir Documento 084 - Termo de eliminação de documentos"},{"id":"f4b2304d-d44e-4394-929b-5a58438b55f9","value":"Enviar documentos para eliminação "},{"id":"009c4043-34f6-45e4-809d-9a48b5e2cd4f","value":""},{"id":"41e760b3-5e2d-4db5-8dc3-476e2a0b1c7f","value":"Abrir processo de elminação de documentos "},{"id":"b3ceb989-5c14-41fd-9c26-e139ac19ac37","value":"Incluir documento 085 - Listagem de eliminação de documentos"},{"id":"fb509019-1756-4181-a6db-7271da065111","value":"Há possibilidade de eliminação de todos documentos constantes na listagem?"},{"id":"c28dec50-1abc-4363-ab59-5167d843c4cc","value":"Fazer correções necessárias"},{"id":"8a2dc6d0-6d86-4c65-b4ae-283914b07ff6","value":"Incluir Documento 085 - Listagem de eliminação de documentos"},{"id":"44d03ddd-2709-463b-b2d3-5bd6263e6461","value":"Incluir documento 191 - Parecer"},{"id":"fec006ec-3af3-4869-aad6-e5916a85c860","value":"Incluir documento 872 - Despacho simples"},{"id":"b89bb293-b483-4d1b-b003-f10032ebe838","value":"Avaliação da listagem"},{"id":"cc631503-1d18-470a-b0a4-726d587acd2f","value":"Incluir documento 872 - Despacho simples"},{"id":"75923919-3714-4cc8-9404-8b40b73779ea","value":"Eliminação autorizada?"},{"id":"d440ae96-3fcd-4384-8cb4-f654e7dde2b0","value":"Publicar edital"},{"id":"502c8564-80fa-47ce-a7f6-99e3935a6794","value":"Incluir documento 904 - Ata simplificada de reunião não periódica "},{"id":"4aea1037-40f5-4f1b-bcbf-497f40d2c8c5","value":"Incluir em PDF comprovante de publicação"},{"id":"3a2870a7-a943-444a-814b-c7a0b0a01714","value":"Avaliar listagem"},{"id":"e01f1cc7-12c7-4afc-b512-6bce55bc83be","value":"Incluir documento 872 - Despacho simples"},{"id":"6d38d8d0-52bb-48d9-bfde-811b51af933f","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"288b5f6a-c0c0-444f-8348-a45876e7d1a4","value":""},{"id":"cfa0d211-6cc8-4a2b-99bf-9ecac427bae0","value":"Aguardar prazo para solicitação de retirada de documentos"},{"id":"87b982e6-a2ad-431f-b00e-2cb6e9859437","value":"Irá solicitar a retirada de algum documento da lista de eliminação divulgada no edital?"},{"id":"f55c4f79-d78d-45ef-8157-d5c1825e2139","value":"Solicitar retirada de documentos"},{"id":"2f33d39b-8c9a-4d42-8de2-58ac3bd779ac","value":""},{"id":"f464e752-dda4-4c8a-ad56-8035f861a471","value":""},{"id":"ffb62145-34f4-48b6-aaf0-4045df8220c3","value":"Foi solicitada a retirada de documentos constantes na lista de eliminação?"},{"id":"2f507828-cd84-482a-a2e8-9eda9ed7e190","value":"Incluir em PDF e-mails recebidos"},{"id":"86cfaa6e-c450-49a1-a620-3aab4b69b844","value":"Incluir documento 872 - Despacho simples"},{"id":"4d44edf7-7652-4e49-a90d-2fc64ce398d2","value":"Proceder a devolução dos documentos para os solicitantes"},{"id":"a29686ad-5203-44a5-8ef6-8213c95456f1","value":"[PREF] 26 Solicitar reserva de veículo institucional"},{"id":"5640e695-23e3-472c-9d2f-da558180cac3","value":"Publicar termo de eliminação"},{"id":"71524c65-e9dc-4b24-9d18-8a855d77e478","value":"Enviar termo de eliminação para o Arquivo Nacional"},{"id":"f70320f3-5a56-4684-82f5-f1a7e89f5f34","value":"Registrar eliminação no Winisis"},{"id":"c3d271b1-285c-42fd-9340-b014758ba7fe","value":"Incluir documento 872 - Despacho simples"},{"id":"9ca5ebbe-4222-4d41-85a3-5044ec210684","value":"Assinar documento em bloco"},{"id":"97f45fe4-165b-4fae-98e0-76acf946e63d","value":"Assinar documento em bloco"},{"id":"6bc1dd71-4c70-4a46-8325-66740c316f67","value":"Solicitante da devolução de documentos é pessoa de fora da UFCSPA?"},{"id":"bc7670ab-175d-4992-bd62-a89ff2b59e5f","value":"Encaminhar documentos para a DIPROT"},{"id":"9e44190f-926a-40c0-8b04-e64534dc8b5d","value":"Proceder a devolução dos documentos para os solicitantes"},{"id":"8140558d-66f1-4243-841d-57956b17a8a7"},{"id":"ef212391-c3e3-4ed0-be8e-40fb3a41ccb4"},{"id":"b30c9de6-e5c6-47f6-8091-154d5cdad891"},{"id":"d69e373a-d779-4368-92e2-f19f053f502b"},{"id":"29a47593-81f9-41fd-967a-8810f4675bc9"},{"id":"6326efd7-cc78-4d6d-b22f-8cc01032ee30"},{"id":"55da6c5e-0854-4b6d-b3d1-5c2ab6a7c1ec"},{"id":"be58e581-0133-4877-bbba-52bc6d3acc85"},{"id":"2af1f6a7-7562-497e-8342-fd24cbe1da50"},{"id":"5326d053-d62f-4769-a30f-d58eef1083cc"},{"id":"99389d54-85ba-40b7-a78d-af271c4dcdda"},{"id":"7e85dd6e-4790-4f96-b8ef-d241cac848ae"},{"id":"77235128-6f07-4480-bb8a-a3c63b65f6ba"},{"id":"2030dca5-4706-4fd8-8209-322d4106e8a6"},{"id":"7f4c97b0-dd30-4f99-b090-e4b8b0ce0c1e"},{"id":"d4dfb751-de09-4dc1-96e2-847010011824"},{"id":"d155c821-9cdf-46b5-a4c3-16e7d62eeb67"},{"id":"f955c39e-5123-433c-b9b3-f6b68f76fb9b"},{"id":"d0888842-2cb9-4e41-84d2-02c52f2b4fe1"},{"id":"80e914a1-dbcb-4507-aa35-421f28d40ac7"},{"id":"f5734e6b-e141-4c05-88ea-fcb10f0615bf"},{"id":"a5024172-9d84-4556-a54c-e46b7a66e405"},{"id":"abeb4c2e-123a-41ab-9705-6a544aad7ad6"},{"id":"4db93a71-dab5-4a5d-b4b6-f5b430874a16"},{"id":"f0ec59b5-66db-4863-80f7-a5113bfeabb3"},{"id":"c2cbe143-886c-4dda-8557-6bac9dff2567"},{"id":"9d4c1286-1436-4531-8068-059ccd842e3f"},{"id":"18b71bb6-7c6a-4547-962c-b4e485f78365"}]}]}