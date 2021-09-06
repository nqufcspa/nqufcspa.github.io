Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DERCA] 76 Solicitar Transferência Ex Officio","publishDate":"27/08/2021 09:34:41","pages":[{"id":"8a4c0eea-1cdb-470b-936f-0b0d9f3e6386","name":"[DERCA] 76 Solicitar Transferência Ex Officio","version":"1.0","author":"rene","image":"files\\diagrams\\DERCA]_76_Solicitar_Transferencia_Ex_Officio.png","isSubprocessPage":false,"elements":[{"id":"01489ed8-34c3-4faa-807f-bab0b367f8d5","name":"[DERCA] 76 Solicitar Transferência Ex Officio","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":2228.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"837f6604-ac6e-47e7-9699-b2a0cd686df3","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":149.0,"y":161.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"4e634196-a4ea-465d-95d4-3cc49bfba6c1","name":"Abrir processo de solicitação de transferência ex officio","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":245.0,"y":146.0}],"radius":0.0,"height":60.0,"width":128.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c370749c-5533-4ff5-a66a-914c337b5676","name":"Incluir documento 267 - Transferência ex officio alunos da graduação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":465.0,"y":133.0}],"radius":0.0,"height":86.0,"width":127.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"282d659f-36bf-4560-9912-20d4199fe7d4","name":"Anexar em PDF documentos necessários para solicitação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":728.0,"y":135.0}],"radius":0.0,"height":82.0,"width":123.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e0e7ec54-55cd-4f9c-81b0-0e18e890662a","name":"Liberar o processo para acesso externo ao candidato","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":731.0,"y":477.0}],"radius":0.0,"height":63.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e0c82490-71b7-4a64-8119-0a6cb2ceb7a7","name":"Analisar documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":745.0,"y":608.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a85f144a-cf16-440e-b520-d7255defc7ac","name":"Documentos enviados corretamente?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":770.0,"y":726.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"b51d68a1-d2c6-46fe-9b90-f6889a250345","name":"Incluir documento 872 - Despacho Simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":564.0,"y":709.0}],"radius":0.0,"height":75.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d95c560f-635e-4a38-921c-42a891bf7429","name":"Resolver problemas encontrados na documentação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":565.0,"y":316.0}],"radius":0.0,"height":60.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"98f19c77-2d6e-461b-bf29-93a6a1b961b3","name":"Anexar em PDF documentos com problemas resolvidos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":267.0,"y":302.0}],"radius":0.0,"height":89.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"73a1311c-8716-40c8-bcdf-e436e7a76f9b","name":"Aguardar resposta do candidato","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":306.0,"y":657.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"ee6b8d92-fe25-4ce4-9e2a-d3e47a9ce7cc","name":"Documentos enviados dentro do prazo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":301.0,"y":841.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"c30a5abc-207c-465d-8968-f233918d3af7","name":"Analisar documentos reenviados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":469.0,"y":831.0}],"radius":0.0,"height":60.0,"width":124.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"dd5b5142-a4c1-4ba4-8403-359d997c19c4","name":"Problemas com documentação resolvidos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":511.0,"y":954.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"aa7b6d45-c5a2-4812-b78f-7a268cd3b257","name":"Incluir documento 860 - Despacho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":264.0,"y":1046.0}],"radius":0.0,"height":75.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"83f05ec4-b6d7-4522-84cd-706cc448540b","name":"Comunicar candidato","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":276.0,"y":1172.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8e695eb4-90a5-4cf0-8a9a-e93fd753b690","name":"Aguardar ciência do candidato","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":306.0,"y":1316.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"eee22fa4-f64b-4389-8ae7-a314f5614a3c","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":770.0,"y":954.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Deliberar sobre deferimento ou não do requerimento","elementType":"SequenceFlow","properties":[]}]},{"id":"a6dcb52d-9bc4-4779-9627-f7517600910b","name":"Deliberar sobre deferimento ou não do requerimento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":726.0,"y":1437.0}],"radius":0.0,"height":81.0,"width":129.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d4818c53-7599-4cf4-8f3f-78a2eea173da","name":"Requerimento deferido?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":770.5,"y":1577.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"6c5009d2-1bfa-49c4-b07a-f638ce72bdf0","name":"Incluir documento 860 - Despacho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":953.0,"y":1559.0}],"radius":0.0,"height":76.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9e433876-7429-4521-9eab-8f5f92f9b45f","name":"Incluir documento 860 - Despacho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":485.0,"y":1560.0}],"radius":0.0,"height":75.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e4727535-e847-4473-99f8-afdae94960ee","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":770.0,"y":1694.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Portão","elementType":"SequenceFlow","properties":[]}]},{"id":"8bb37d4a-6138-4ac0-b0fd-019bc8ac8a72","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":770.0,"y":1786.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"f6af0c94-67ce-4dd4-9e96-0ba730552e0e","name":"Comunicar candidato","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":599.0,"y":1776.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"56c68622-1bfc-4c7b-8d90-939ee0dc19a0","name":"Aguardar ciência do candidato","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":629.0,"y":1899.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"c4145f9b-68f8-4835-a07e-32a23a53e17d","name":"Comuncar à DISEC da deliberação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":856.0,"y":1852.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"55e7f221-4d21-4120-8b21-3ad890f77122","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":771.0,"y":1955.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"898a9a70-8a25-4fb3-977e-4695bb7f8f30","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":746.0,"y":2113.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"c1519242-a482-4de4-bf2c-e5e8c65f2245","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":879.0,"y":2128.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"88f3d118-838d-4724-b5e3-005f63f22648","name":"Candidato","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":394.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"86d7b4c5-2bab-4d61-9a45-e452feec7e90","name":"DISEC","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":414.0}],"radius":0.0,"height":974.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"e19fa1f7-59de-4142-9e46-c04537de2c4b","name":"PROGRAD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1388.0}],"radius":0.0,"height":659.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"58f3d2dd-c268-4b0a-9031-218efe79d084","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2047.0}],"radius":0.0,"height":201.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"8a4c0eea-1cdb-470b-936f-0b0d9f3e6386","containerName":"[DERCA] 76 Solicitar Transferência Ex Officio","isSubprocess":false,"elements":[{"id":"01489ed8-34c3-4faa-807f-bab0b367f8d5","value":"[DERCA] 76 Solicitar Transferência Ex Officio"},{"id":"88f3d118-838d-4724-b5e3-005f63f22648","value":"Candidato"},{"id":"86d7b4c5-2bab-4d61-9a45-e452feec7e90","value":"DISEC"},{"id":"e19fa1f7-59de-4142-9e46-c04537de2c4b","value":"PROGRAD"},{"id":"58f3d2dd-c268-4b0a-9031-218efe79d084","value":"DIARQ"},{"id":"837f6604-ac6e-47e7-9699-b2a0cd686df3","value":""},{"id":"4e634196-a4ea-465d-95d4-3cc49bfba6c1","value":"Abrir processo de solicitação de transferência ex officio"},{"id":"c370749c-5533-4ff5-a66a-914c337b5676","value":"Incluir documento 267 - Transferência ex officio alunos da graduação"},{"id":"282d659f-36bf-4560-9912-20d4199fe7d4","value":"Anexar em PDF documentos necessários para solicitação"},{"id":"e0c82490-71b7-4a64-8119-0a6cb2ceb7a7","value":"Analisar documentos"},{"id":"a85f144a-cf16-440e-b520-d7255defc7ac","value":"Documentos enviados corretamente?"},{"id":"e0e7ec54-55cd-4f9c-81b0-0e18e890662a","value":"Liberar o processo para acesso externo ao candidato"},{"id":"b51d68a1-d2c6-46fe-9b90-f6889a250345","value":"Incluir documento 872 - Despacho Simples"},{"id":"c1519242-a482-4de4-bf2c-e5e8c65f2245","value":""},{"id":"a6dcb52d-9bc4-4779-9627-f7517600910b","value":"Deliberar sobre deferimento ou não do requerimento"},{"id":"d4818c53-7599-4cf4-8f3f-78a2eea173da","value":"Requerimento deferido?"},{"id":"83f05ec4-b6d7-4522-84cd-706cc448540b","value":"Comunicar candidato"},{"id":"56c68622-1bfc-4c7b-8d90-939ee0dc19a0","value":"Aguardar ciência do candidato"},{"id":"8e695eb4-90a5-4cf0-8a9a-e93fd753b690","value":"Aguardar ciência do candidato"},{"id":"898a9a70-8a25-4fb3-977e-4695bb7f8f30","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"6c5009d2-1bfa-49c4-b07a-f638ce72bdf0","value":"Incluir documento 860 - Despacho"},{"id":"9e433876-7429-4521-9eab-8f5f92f9b45f","value":"Incluir documento 860 - Despacho"},{"id":"d95c560f-635e-4a38-921c-42a891bf7429","value":"Resolver problemas encontrados na documentação"},{"id":"98f19c77-2d6e-461b-bf29-93a6a1b961b3","value":"Anexar em PDF documentos com problemas resolvidos"},{"id":"73a1311c-8716-40c8-bcdf-e436e7a76f9b","value":"Aguardar resposta do candidato"},{"id":"ee6b8d92-fe25-4ce4-9e2a-d3e47a9ce7cc","value":"Documentos enviados dentro do prazo?"},{"id":"dd5b5142-a4c1-4ba4-8403-359d997c19c4","value":"Problemas com documentação resolvidos?"},{"id":"aa7b6d45-c5a2-4812-b78f-7a268cd3b257","value":"Incluir documento 860 - Despacho"},{"id":"c30a5abc-207c-465d-8968-f233918d3af7","value":"Analisar documentos reenviados"},{"id":"eee22fa4-f64b-4389-8ae7-a314f5614a3c","value":""},{"id":"f6af0c94-67ce-4dd4-9e96-0ba730552e0e","value":"Comunicar candidato"},{"id":"c4145f9b-68f8-4835-a07e-32a23a53e17d","value":"Comuncar à DISEC da deliberação"},{"id":"55e7f221-4d21-4120-8b21-3ad890f77122","value":""},{"id":"e4727535-e847-4473-99f8-afdae94960ee","value":""},{"id":"8bb37d4a-6138-4ac0-b0fd-019bc8ac8a72","value":""},{"id":"d7dbf677-df75-4053-9f97-577488181258"},{"id":"1011c929-3e08-4acf-ae00-53b6834f65d2"},{"id":"a400cbc9-3698-41d8-959e-4e21e9dcf6f6"},{"id":"629b5776-4bc0-48f8-a58e-920e417c37ce"},{"id":"153ee7c5-d753-46e1-a5a8-60eeacb954a3"},{"id":"75bcb788-d44f-412c-89b6-2ab45a583b62"},{"id":"ebef9c1a-137e-4b14-96c1-930181f806ea"},{"id":"a2340b3e-de00-4b86-8514-e3ae15fae1f2"},{"id":"4dfd0e54-051e-43ad-bab3-7cf26f893c56"},{"id":"0c04075b-b189-4004-99b0-a102ba6d0799"},{"id":"94fc7bbd-d88b-4fde-a450-193b8897cf22"},{"id":"5e9f1cd8-53d7-4434-a660-3e59472e8492"},{"id":"61a2a2e0-a3ce-4d59-9eff-df66e8c384d2"},{"id":"b95e33c4-2865-4fab-8a88-acb63fd8ca11"},{"id":"f46a8dcc-1345-43c8-8d18-1901bcbe99ff"},{"id":"74991c57-1034-4c23-a864-db9188ed2b69"},{"id":"36945551-5748-4929-bef8-cc9c55e7ca0e"},{"id":"d03afed4-2c4c-47e2-9638-0bdb3c83867e"},{"id":"5be56939-9adc-434f-a658-1d579f439021"},{"id":"016f98da-4580-4aa8-887e-e858e6910129"},{"id":"80839a62-c445-4320-a9a7-8d6d8af0a239"},{"id":"aee59f13-e2ad-4dd6-b44a-eec35259a421"},{"id":"a5785584-1fb5-4f11-a708-4177ed6e9d24"},{"id":"c7dd90be-a15c-4706-8a50-27381f079fa9"},{"id":"17801eba-a8c7-4fba-b060-ca4e2662afe9"},{"id":"71329a98-e0cf-4267-ab3e-5ee7efdb8902"},{"id":"4699f4ad-7294-46c4-9fbb-ba9b46f9464e"},{"id":"f3794c96-7c2c-4382-be68-d55853027ce4"},{"id":"0a0a4a32-8e54-46df-a62f-a58646f9fd06"},{"id":"46617d0e-df42-46b2-8f9e-f12e4432ba7f"}]}]}