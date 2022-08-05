Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DAP] 90 Solicitar pagamento de resíduos remuneratórios","publishDate":"05/08/2022 08:23:11","pages":[{"id":"0f5238cd-197d-4907-afba-adad8e3184eb","name":"[DAP] 90 Solicitar pagamento de resíduos remuneratórios","version":"1.0","author":"alinebrancher","image":"files\\diagrams\\DAP]_90_Solicitar_pagamento_de_residuos_remuneratorios.png","isSubprocessPage":false,"elements":[{"id":"d4bec27a-1ef7-4e52-ae21-e5d4e665f76c","name":"[DAP] 90 Solicitar pagamento de resíduos remuneratórios","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":2730.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"71322f1d-8a09-4a3b-b038-2d41fce947a4","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":115.0,"y":75.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"239b0fc0-9e28-4436-b9cc-ef6350f6bf47","name":"Abrir processo de solicitação de pagamento de resíduos remuneratórios","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":189.0,"y":55.0}],"radius":0.0,"height":70.0,"width":128.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"49ef571a-fa46-4c84-b36d-929414c29caa","name":"Incluir documento 383 - Requerimento pgto de resíduos remuneratórios","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":368.0,"y":55.0}],"radius":0.0,"height":70.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d53aefbe-710c-493e-b30e-4e0206ce7fdc","name":"Incluir em PDF documentos comprobatórios","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":375.0,"y":170.0}],"radius":0.0,"height":67.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a84ee284-89cf-4764-947b-2abad2b7571a","name":"Liberar acesso externo para o interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":379.0,"y":292.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9c76b19f-eb53-434b-b13e-97ac57d851a4","name":"Analisar requerimento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":379.0,"y":388.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3816500a-cbf7-4117-ba85-cc9ba6063251","name":"Pagamento concedido?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":404.0,"y":480.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"ddc1316e-5cd4-4ae5-a1d9-414661332e25","name":"Incluir documento 860 - Despacho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1054.0,"y":563.0}],"radius":0.0,"height":60.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"38f135f2-7947-49cf-ac8f-c750627c1562","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1195.0,"y":563.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"24b22c7d-19c5-4505-ba19-3d08df72bbea","name":"Interessado já interpôs recurso?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1220.0,"y":472.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"e683c998-1dd3-4972-869a-5f776d4f4d13","name":"Aguardar 10 dias para recurso","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1225.0,"y":388.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"65bfe417-8f29-40c5-9462-0610c26b2dd6","name":"Interessado irá interpor recurso?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1220.0,"y":312.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"ef7cde20-69a0-461d-8944-d0e447a78428","name":"Incluir em PDF documentos comprobatórios","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1190.0,"y":125.0}],"radius":0.0,"height":66.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e5f23145-345d-4de8-88c9-20c99415e352","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1515.5,"y":313.8}],"radius":0.0,"height":60.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2336b851-6b7e-47af-b96a-8799dc4736b2","name":"Anexar documentos comprobatórios","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":377.5,"y":560.0}],"radius":0.0,"height":62.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"087328ec-8987-4884-b3a3-499e9d72600e","name":"Incluir documento 877 - Nota técnica","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":376.0,"y":656.0}],"radius":0.0,"height":61.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"11c28c47-816e-409f-b35e-5fe37be99568","name":"Valor para pagamento acima de R$ 70.000?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":404.0,"y":769.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"e1da6de7-e610-4161-8499-6e382ca9b33f","name":"Incluir documento 860 - Despacho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":533.0,"y":1202.0}],"radius":0.0,"height":60.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2cfcd7aa-b3d3-4b74-aa00-320b6c0e8f8a","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":736.0,"y":716.0}],"radius":0.0,"height":60.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3971b282-6a72-48d9-9063-edfd5f07818c","name":"Encaminhar processo ao ME","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":982.0,"y":1872.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"56e9f52b-fdf1-4cae-99f2-13b1d24daae7","name":"Analisar processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":982.0,"y":2047.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"eba56cc8-97b0-440d-aed1-849491c65bb0","name":"Emitir parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1152.0,"y":2047.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"633b9a15-ae0b-4f0c-9b07-8a3ecb051686","name":"Enviar processo ao DAP","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1152.0,"y":1873.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"eb28aca0-4a79-456d-99ca-59c7171ed3cb","name":"Analisar parecer CGPJU – ME","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1152.0,"y":1046.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"34adb783-87eb-45d9-874b-b2fac4491b49","name":"Pagamento autorizado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1177.0,"y":921.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"d330c6c7-a305-4706-833e-012cb905d34d","name":"Incluir  documento 860 - Despacho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1289.0,"y":911.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bd405f0b-aaa7-426f-a674-687a7148a7c4","name":"Realizar o pagamento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1289.0,"y":2216.4707}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bb838807-8159-4945-ad66-3a105b8736a0","name":"Incluir em PDF comprovantes de pagamento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1289.0,"y":2334.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"94c8ce9d-9787-4afb-98dc-173d5adcad89","name":"Comunicar interessado sobre crédito na conta bancária","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1426.0,"y":2330.0}],"radius":0.0,"height":68.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3d3b7ce4-744f-4d83-a2b2-27eadc458015","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1422.0,"y":2464.0}],"radius":0.0,"height":60.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"de303e39-c999-4660-ae70-bae04af86ead","name":"[DIARQ] 01 Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1524.0,"y":2641.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"e780ff1f-d9bc-49e9-afd7-20c6fc43adee","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1657.0,"y":2656.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"42988ac0-c48d-4a20-8178-c7901b15ddd2","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":257.0,"y":860.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ff6aa4ae-1dbb-4b23-8fa5-aa92c49dde06","name":"Incluir documento 860 - Despacho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":257.0,"y":1234.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d44e478c-bf7f-452b-9ca2-1df5d2f1e6c7","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":247.0,"y":1472.0}],"radius":0.0,"height":60.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9938ac72-2ac9-4c3d-b3b4-0fbe6059e4d3","name":"Analisar solicitação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":257.0,"y":1607.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3c746587-f4d3-4e85-b9ec-dd584e004615","name":"Incluir documento 056 - Parecer procuradoria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":254.5,"y":1725.0}],"radius":0.0,"height":64.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4da7ddc4-2d05-4b21-9904-9ca3f3adc0c1","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":739.0002,"y":1472.0}],"radius":0.0,"height":64.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"51695311-5b2b-4a70-9426-88ee4d0f13d5","name":"Incluir documento 860 - Despacho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":737.0002,"y":1234.0}],"radius":0.0,"height":60.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8692d1da-5154-45a4-bb16-03292c37a40c","name":"Analisar parecer procuradoria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":744.0,"y":1044.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"049c43ff-0609-4eba-b773-ebb81df88d1d","name":"Pagamento autorizado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":769.0,"y":949.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"979383b6-83ac-4028-81d2-ccf39dd583c5","name":"Incluir documento 860 - Despacho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":734.0,"y":849.0}],"radius":0.0,"height":60.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7110cbbf-227e-426e-8290-0c6ba4b1fb14","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":240.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"b0533b2d-1f59-4bba-a555-078d12713a96","name":"DAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":260.0}],"radius":0.0,"height":879.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"ec047fd9-e073-41b7-b7a5-ba5de8a64ea3","name":"PROGESP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1139.0}],"radius":0.0,"height":293.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0f676a33-bf0b-4b38-8aaa-780cef2f868f","name":"Reitoria","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1432.0}],"radius":0.0,"height":138.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"a31f894f-9c32-4fef-87d7-2cc2f84e53cb","name":"PFUFCSPA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1570.0}],"radius":0.0,"height":243.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"db4cb49d-d0c6-455a-a0a7-de4e32978d7c","name":"DIPROT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1813.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"59109911-b9c5-4ccc-a2c6-978faae66162","name":"CGPJU – ME","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2013.0}],"radius":0.0,"height":153.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"1b4a96ca-06cd-4a53-a741-ce2d10c9dd4b","name":"DCF","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2166.0}],"radius":0.0,"height":431.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"5ae839cb-de71-4cb7-a502-7379e22f1e20","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2597.0}],"radius":0.0,"height":153.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"0f5238cd-197d-4907-afba-adad8e3184eb","containerName":"[DAP] 90 Solicitar pagamento de resíduos remuneratórios","isSubprocess":false,"elements":[{"id":"d4bec27a-1ef7-4e52-ae21-e5d4e665f76c","value":"[DAP] 90 Solicitar pagamento de resíduos remuneratórios"},{"id":"7110cbbf-227e-426e-8290-0c6ba4b1fb14","value":"Interessado"},{"id":"b0533b2d-1f59-4bba-a555-078d12713a96","value":"DAP"},{"id":"ec047fd9-e073-41b7-b7a5-ba5de8a64ea3","value":"PROGESP"},{"id":"0f676a33-bf0b-4b38-8aaa-780cef2f868f","value":"Reitoria"},{"id":"a31f894f-9c32-4fef-87d7-2cc2f84e53cb","value":"PFUFCSPA"},{"id":"db4cb49d-d0c6-455a-a0a7-de4e32978d7c","value":"DIPROT"},{"id":"59109911-b9c5-4ccc-a2c6-978faae66162","value":"CGPJU – ME"},{"id":"1b4a96ca-06cd-4a53-a741-ce2d10c9dd4b","value":"DCF"},{"id":"5ae839cb-de71-4cb7-a502-7379e22f1e20","value":"DIARQ"},{"id":"71322f1d-8a09-4a3b-b038-2d41fce947a4","value":""},{"id":"d53aefbe-710c-493e-b30e-4e0206ce7fdc","value":"Incluir em PDF documentos comprobatórios"},{"id":"49ef571a-fa46-4c84-b36d-929414c29caa","value":"Incluir documento 383 - Requerimento pgto de resíduos remuneratórios"},{"id":"239b0fc0-9e28-4436-b9cc-ef6350f6bf47","value":"Abrir processo de solicitação de pagamento de resíduos remuneratórios"},{"id":"a84ee284-89cf-4764-947b-2abad2b7571a","value":"Liberar acesso externo para o interessado"},{"id":"9c76b19f-eb53-434b-b13e-97ac57d851a4","value":"Analisar requerimento"},{"id":"3816500a-cbf7-4117-ba85-cc9ba6063251","value":"Pagamento concedido?"},{"id":"ddc1316e-5cd4-4ae5-a1d9-414661332e25","value":"Incluir documento 860 - Despacho"},{"id":"2336b851-6b7e-47af-b96a-8799dc4736b2","value":"Anexar documentos comprobatórios"},{"id":"11c28c47-816e-409f-b35e-5fe37be99568","value":"Valor para pagamento acima de R$ 70.000?"},{"id":"087328ec-8987-4884-b3a3-499e9d72600e","value":"Incluir documento 877 - Nota técnica"},{"id":"ff6aa4ae-1dbb-4b23-8fa5-aa92c49dde06","value":"Incluir documento 860 - Despacho"},{"id":"d44e478c-bf7f-452b-9ca2-1df5d2f1e6c7","value":"Incluir documento 872 - Despacho simples"},{"id":"9938ac72-2ac9-4c3d-b3b4-0fbe6059e4d3","value":"Analisar solicitação"},{"id":"3c746587-f4d3-4e85-b9ec-dd584e004615","value":"Incluir documento 056 - Parecer procuradoria"},{"id":"4da7ddc4-2d05-4b21-9904-9ca3f3adc0c1","value":"Incluir documento 872 - Despacho simples"},{"id":"51695311-5b2b-4a70-9426-88ee4d0f13d5","value":"Incluir documento 860 - Despacho"},{"id":"8692d1da-5154-45a4-bb16-03292c37a40c","value":"Analisar parecer procuradoria"},{"id":"e1da6de7-e610-4161-8499-6e382ca9b33f","value":"Incluir documento 860 - Despacho"},{"id":"979383b6-83ac-4028-81d2-ccf39dd583c5","value":"Incluir documento 860 - Despacho"},{"id":"2cfcd7aa-b3d3-4b74-aa00-320b6c0e8f8a","value":"Incluir documento 872 - Despacho simples"},{"id":"3971b282-6a72-48d9-9063-edfd5f07818c","value":"Encaminhar processo ao ME"},{"id":"049c43ff-0609-4eba-b773-ebb81df88d1d","value":"Pagamento autorizado?"},{"id":"38f135f2-7947-49cf-ac8f-c750627c1562","value":"Comunicar interessado"},{"id":"56e9f52b-fdf1-4cae-99f2-13b1d24daae7","value":"Analisar processo"},{"id":"eba56cc8-97b0-440d-aed1-849491c65bb0","value":"Emitir parecer"},{"id":"633b9a15-ae0b-4f0c-9b07-8a3ecb051686","value":"Enviar processo ao DAP"},{"id":"eb28aca0-4a79-456d-99ca-59c7171ed3cb","value":"Analisar parecer CGPJU – ME"},{"id":"ef7cde20-69a0-461d-8944-d0e447a78428","value":"Incluir em PDF documentos comprobatórios"},{"id":"34adb783-87eb-45d9-874b-b2fac4491b49","value":"Pagamento autorizado?"},{"id":"d330c6c7-a305-4706-833e-012cb905d34d","value":"Incluir  documento 860 - Despacho"},{"id":"bb838807-8159-4945-ad66-3a105b8736a0","value":"Incluir em PDF comprovantes de pagamento"},{"id":"e683c998-1dd3-4972-869a-5f776d4f4d13","value":"Aguardar 10 dias para recurso"},{"id":"65bfe417-8f29-40c5-9462-0610c26b2dd6","value":"Interessado irá interpor recurso?"},{"id":"e5f23145-345d-4de8-88c9-20c99415e352","value":"Incluir documento 872 - Despacho simples"},{"id":"e780ff1f-d9bc-49e9-afd7-20c6fc43adee","value":""},{"id":"de303e39-c999-4660-ae70-bae04af86ead","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"94c8ce9d-9787-4afb-98dc-173d5adcad89","value":"Comunicar interessado sobre crédito na conta bancária"},{"id":"42988ac0-c48d-4a20-8178-c7901b15ddd2","value":"Incluir documento 011 - Ofício"},{"id":"bd405f0b-aaa7-426f-a674-687a7148a7c4","value":"Realizar o pagamento"},{"id":"24b22c7d-19c5-4505-ba19-3d08df72bbea","value":"Interessado já interpôs recurso?"},{"id":"3d3b7ce4-744f-4d83-a2b2-27eadc458015","value":"Incluir documento 872 - Despacho simples"},{"id":"9e3aa765-6a25-4730-b65e-80405b1819a5"},{"id":"ffe4d053-b717-4f81-b3ca-df3877d7303e"},{"id":"b23ffaa2-dbfb-4341-a914-8596960858fe"},{"id":"955376c4-84db-4bae-832c-7c849e6f43e4"},{"id":"33300a55-c094-4068-82b8-4c86b353a16d"},{"id":"b90978dc-1d8d-4ff3-9890-b8ddee75af2e"},{"id":"6ee73b7c-90ba-433b-84ae-dc5ac5c8a2e8"},{"id":"2ed462a1-fa2d-4adf-8f7d-6f7e2ecab20e"},{"id":"989db01d-0401-483f-ad47-fba23b457e99"},{"id":"6b80204e-197c-4251-813c-d0988b11f8cf"},{"id":"6028580f-210e-453f-94a0-d74fefb0ae78"},{"id":"cae051b0-96e1-445f-a229-723784efaa1b"},{"id":"1d9d9756-3b58-47d1-afd3-3f32a26e9cac"},{"id":"c687404c-47da-470d-9a52-278b9baa2b38"},{"id":"1eea2d09-0f6b-4b95-9351-49d6d11ebb6e"},{"id":"04e0c45b-cbef-4ce0-8571-2cca015af1bc"},{"id":"9ed182a0-7d7f-485a-a3c8-4c3999ba8d58"},{"id":"aa194504-7a74-4b36-8720-5aa2074e9470"},{"id":"8c7c9852-435b-46ff-9a31-0aa00a2594cd"},{"id":"2eabdf77-4e77-4644-935d-6d87427528ce"},{"id":"9e1c3b32-1e2c-48aa-9993-218403dff5ab"},{"id":"39369c13-33d4-4ce2-8046-e8567b32c9a5"},{"id":"7603b0bb-df2e-4295-996b-a6b63f9d62d3"},{"id":"365fb8ad-b5a8-4637-8634-92666ec999a3"},{"id":"22b99a73-b4bf-40e1-b4e7-44bfb72fd2d0"},{"id":"d1383302-d09a-494a-88a1-96ea69f7b019"},{"id":"41d87989-2d1f-43cb-9675-91d4ba2ebe1d"},{"id":"1d44caf0-1792-4c76-af29-ecf7ee898b90"},{"id":"96434196-8e26-4274-a75e-48ab06852d6c"},{"id":"d736e670-81e5-4561-9744-5063e2a3fa54"},{"id":"39793fa1-eea2-4df9-8d91-04de2bcff791"},{"id":"8a505f1b-c428-46ea-9a88-bd19396a3e15"},{"id":"8e6c9b64-9ae1-4d65-96c2-d2318a887a0f"},{"id":"c0176e85-6435-4a62-a5d0-ca5554c4dc1e"},{"id":"860167da-8c58-4c60-a306-7e9fd4ef6c29"},{"id":"d179edf0-cca7-43f4-9e4a-348baf0db396"}]}]}