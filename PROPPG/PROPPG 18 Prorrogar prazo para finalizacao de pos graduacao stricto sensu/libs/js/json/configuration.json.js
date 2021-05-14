Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[PROPPG] 18 Prorrogar prazo para finalização de pós-graduação stricto sensu","publishDate":"14/05/2021 12:32:07","pages":[{"id":"942bb555-3b5a-4e71-94a8-f29223b99a19","name":"[PROPPG] 18 Prorrogar prazo para finalização de pós-graduação stricto sensu","version":"1.0","author":"ariel","image":"files\\diagrams\\PROPPG]_18_Prorrogar_prazo_para_finalizacao_de_pos_graduacao_stricto_sensu.png","isSubprocessPage":false,"elements":[{"id":"32b90242-4c05-4aee-a86f-f41f88595a04","name":"[PROPPG] 18 Prorrogar prazo para finalização de pós-graduação stricto sensu","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1065.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"0522169e-b80b-491b-befc-7b9f8ae50c64","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":161.0,"y":146.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"824f6ba1-032e-4679-96f6-fb2f8231ae1e","name":"Abrir processo de prorrogação de prazo para finalização de pós-graduação stricto sensu","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":257.0,"y":119.0}],"radius":0.0,"height":84.0,"width":126.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c23f99e3-9a46-41b7-937d-8af7716c0c30","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":448.0,"y":131.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"eae51046-bead-4d33-a852-63ac4cf23559","name":"Incluir documento 374 - Cronograma de prorrogação pós-graduação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":608.5,"y":119.5}],"radius":0.0,"height":85.0,"width":121.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"be4592f5-4670-4004-81f7-aee7dcb2ffad","name":"Analisar pedido","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":623.0,"y":629.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0d01616e-bb33-417b-bc98-6483263cf123","name":"Incluir documento 860 - Despacho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":781.0,"y":626.0}],"radius":0.0,"height":66.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cfd37071-9192-4494-9da7-742d82c4c3da","name":"Pedido deferido?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":963.0,"y":639.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"0328bc53-ad3f-4893-a073-c07b6a4e2240","name":"Aluno é bolsista CAPES?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1113.0,"y":639.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"3a80cb00-f52e-4342-8c33-4d97ab2caa3b","name":"Alterar bolsa no sistema CAPES","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1088.0,"y":437.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"73218583-1c46-4ed4-8924-4a1f4c5ba2d1","name":"Incluir em PDF Comprovante do sistema CAPES","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1243.0,"y":433.5}],"radius":0.0,"height":69.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8b0a8417-a640-4b26-8c96-cb90dd6d18b8","name":"Registrar prorrogação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1255.0,"y":629.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e75e8ae7-6fce-47d5-9d71-4a12ae594756","name":"Comunicar aluno e professor orientador","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":935.5,"y":770.0}],"radius":0.0,"height":66.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e1ade407-da29-4217-a596-921b8d0a1757","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":938.0,"y":951.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"04ffd4f2-2204-4d51-b2c2-4eb50879fbc9","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1100.0,"y":966.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"136a3a25-69d4-424a-bcd6-da0451f684fc","name":"Professor orientador","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":350.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"80a4e4a4-a716-4e0f-b8d0-b0d3d8146ba1","name":"CPGS","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":370.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"994f9c08-7135-4b13-9a94-4a3218feb9eb","name":"PPG","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":570.0}],"radius":0.0,"height":315.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"7a329802-b489-4ec2-a163-6121d6d362c6","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":885.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"942bb555-3b5a-4e71-94a8-f29223b99a19","containerName":"[PROPPG] 18 Prorrogar prazo para finalização de pós-graduação stricto sensu","isSubprocess":false,"elements":[{"id":"32b90242-4c05-4aee-a86f-f41f88595a04","value":"[PROPPG] 18 Prorrogar prazo para finalização de pós-graduação stricto sensu"},{"id":"136a3a25-69d4-424a-bcd6-da0451f684fc","value":"Professor orientador"},{"id":"80a4e4a4-a716-4e0f-b8d0-b0d3d8146ba1","value":"CPGS"},{"id":"994f9c08-7135-4b13-9a94-4a3218feb9eb","value":"PPG"},{"id":"7a329802-b489-4ec2-a163-6121d6d362c6","value":"DIARQ"},{"id":"0522169e-b80b-491b-befc-7b9f8ae50c64","value":""},{"id":"824f6ba1-032e-4679-96f6-fb2f8231ae1e","value":"Abrir processo de prorrogação de prazo para finalização de pós-graduação stricto sensu"},{"id":"c23f99e3-9a46-41b7-937d-8af7716c0c30","value":"Incluir documento 011 - Ofício"},{"id":"eae51046-bead-4d33-a852-63ac4cf23559","value":"Incluir documento 374 - Cronograma de prorrogação pós-graduação"},{"id":"be4592f5-4670-4004-81f7-aee7dcb2ffad","value":"Analisar pedido"},{"id":"0d01616e-bb33-417b-bc98-6483263cf123","value":"Incluir documento 860 - Despacho"},{"id":"cfd37071-9192-4494-9da7-742d82c4c3da","value":"Pedido deferido?"},{"id":"e75e8ae7-6fce-47d5-9d71-4a12ae594756","value":"Comunicar aluno e professor orientador"},{"id":"0328bc53-ad3f-4893-a073-c07b6a4e2240","value":"Aluno é bolsista CAPES?"},{"id":"3a80cb00-f52e-4342-8c33-4d97ab2caa3b","value":"Alterar bolsa no sistema CAPES"},{"id":"73218583-1c46-4ed4-8924-4a1f4c5ba2d1","value":"Incluir em PDF Comprovante do sistema CAPES"},{"id":"8b0a8417-a640-4b26-8c96-cb90dd6d18b8","value":"Registrar prorrogação"},{"id":"e1ade407-da29-4217-a596-921b8d0a1757","value":"Realizar tratamento arquivístico"},{"id":"04ffd4f2-2204-4d51-b2c2-4eb50879fbc9","value":""},{"id":"103dc7df-7968-4f71-8530-2c81e59d71df"},{"id":"537ecc0d-ee23-4660-9de2-76fadacf23a0"},{"id":"900177bd-0f2c-4526-85a1-8ae0697a24d5"},{"id":"3837dc6c-51b7-45d3-a009-cae3a9a7d3eb"},{"id":"e1755cb2-cf18-4dcd-a6ec-98debd07d839"},{"id":"90b858a7-def9-44a1-9e6d-fe67c63880a6"}]}]}