Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DAP] 47 Solicitar ressarcimento de contrapartida de plano de saúde","publishDate":"16/09/2021 10:20:18","pages":[{"id":"a8ac970b-1373-4c05-999b-d492b3a8882e","name":"[DAP] 47 Solicitar ressarcimento de contrapartida de plano de saúde","version":"1.0","author":"mauriciostuani","image":"files\\diagrams\\DAP]_47_Solicitar_ressarcimento_de_contrapartida_de_plano_de_saude.png","isSubprocessPage":false,"elements":[{"id":"e5fa6017-3d43-468c-bd50-0f9f4d5bb1b6","name":"[DAP] 47 Solicitar ressarcimento de contrapartida de plano de saúde","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1129.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"c84cb29d-f0bf-48f7-98ca-b0743e5baaa5","name":"Nenhum início","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Entrada: C&oacute;pia do contrato do plano de sa&uacute;de e comprovante da &uacute;ltima fatura paga</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;-Caso possua filhos como dependentes precisa anexar certid&atilde;o de nascimento e CPF &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Caso possua como dependente c&ocirc;njuge precisa anexar certid&atilde;o de casamento ou declara&ccedil;&atilde;o de uni&atilde;o est&aacute;vel (emitida por cart&oacute;rio)</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":141.0,"y":67.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"c8d3c867-b88c-4952-a6bc-1703b2f3ca52","name":"Abrir processo de ressarcimento de contrapartida de plano de saúde ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":226.0,"y":45.0}],"radius":0.0,"height":74.0,"width":119.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5a299282-ff31-4259-80eb-0244ea448500","name":"Incluir documento 871 - Formulário de ressarcimento plano de saúde","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":234.0,"y":159.0}],"radius":0.0,"height":81.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6d431cb2-b525-4983-aa25-e90495374ef8","name":"Incluir em PDF  documentos comprobatórios","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":233.0,"y":296.0}],"radius":0.0,"height":78.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5358de97-a929-424b-8379-cc904d96e225","name":"Analisar  processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":237.0,"y":460.0}],"radius":0.0,"height":60.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"23e53fac-0292-41f6-86a9-1363396f0f8e","name":" Incluir documento 872 - Despacho simples ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":380.0,"y":458.0}],"radius":0.0,"height":65.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"266b31c5-bd5b-46fa-be99-d1225330c0cd","name":"Parecer favorável?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":414.0,"y":652.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"63261cda-1e44-4f03-9aac-cf7631500543","name":"Registar no SIAPE ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":561.0,"y":642.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d2e24b76-76d5-4b07-83c5-985989970a2f","name":"Comunicar interessado ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":385.0,"y":760.0}],"radius":0.0,"height":60.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7f73bf13-bab3-4de6-b8da-b29ac3e9b1d7","name":"[DAP] 08 Incluir documentos no AFD","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":389.0,"y":877.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/DAP/%5bDAP%5d%2008%20Incluir%20documentos%20no%20AFD/#list","type":"url"}},{"id":"983bdf0f-bb82-458c-86f3-e7d4a9eb437a","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":389.0,"y":1045.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"34fda1ac-7e55-4d09-9f84-9e474315d163","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":551.0,"y":1060.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"d55df8a9-d888-4603-b413-0e3c47a217d7","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":403.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0743fcfa-1ea4-4b3c-bfee-115ee9ee9e65","name":"DAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":423.0}],"radius":0.0,"height":570.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"727287d2-6c03-4b6b-9a90-fecb5110be7e","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":993.0}],"radius":0.0,"height":156.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"a8ac970b-1373-4c05-999b-d492b3a8882e","containerName":"[DAP] 47 Solicitar ressarcimento de contrapartida de plano de saúde","isSubprocess":false,"elements":[{"id":"e5fa6017-3d43-468c-bd50-0f9f4d5bb1b6","value":"[DAP] 47 Solicitar ressarcimento de contrapartida de plano de saúde"},{"id":"d55df8a9-d888-4603-b413-0e3c47a217d7","value":"Interessado"},{"id":"0743fcfa-1ea4-4b3c-bfee-115ee9ee9e65","value":"DAP"},{"id":"727287d2-6c03-4b6b-9a90-fecb5110be7e","value":"DIARQ"},{"id":"c84cb29d-f0bf-48f7-98ca-b0743e5baaa5","value":""},{"id":"c8d3c867-b88c-4952-a6bc-1703b2f3ca52","value":"Abrir processo de ressarcimento de contrapartida de plano de saúde "},{"id":"5a299282-ff31-4259-80eb-0244ea448500","value":"Incluir documento 871 - Formulário de ressarcimento plano de saúde"},{"id":"6d431cb2-b525-4983-aa25-e90495374ef8","value":"Incluir em PDF  documentos comprobatórios"},{"id":"5358de97-a929-424b-8379-cc904d96e225","value":"Analisar  processo"},{"id":"266b31c5-bd5b-46fa-be99-d1225330c0cd","value":"Parecer favorável?"},{"id":"d2e24b76-76d5-4b07-83c5-985989970a2f","value":"Comunicar interessado "},{"id":"63261cda-1e44-4f03-9aac-cf7631500543","value":"Registar no SIAPE "},{"id":"34fda1ac-7e55-4d09-9f84-9e474315d163","value":""},{"id":"23e53fac-0292-41f6-86a9-1363396f0f8e","value":" Incluir documento 872 - Despacho simples "},{"id":"7f73bf13-bab3-4de6-b8da-b29ac3e9b1d7","value":"[DAP] 08 Incluir documentos no AFD"},{"id":"983bdf0f-bb82-458c-86f3-e7d4a9eb437a","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"cb69f608-ce0c-44d1-b325-80b533c7e552"},{"id":"ffc130ad-2efc-482c-a9fb-f59e772270cc"},{"id":"d93d481c-b294-409a-9834-2effb3eb7d98"},{"id":"74d7f64b-6454-4c46-a8f7-92cb75f27681"},{"id":"4e63111a-db31-40aa-9485-af4e5fa0bf53"},{"id":"00534e71-7bce-4ec6-8279-ec314748235a"},{"id":"45c966d2-008e-4c4b-ba46-122a3912cdf7"},{"id":"f2ddd688-3da8-4b0f-a94d-619dd20eb40a"},{"id":"26b4528b-fee4-4192-9f12-22596786d6b3"},{"id":"ba059f73-54e8-411c-8367-6e8b19ea8625"}]}]}