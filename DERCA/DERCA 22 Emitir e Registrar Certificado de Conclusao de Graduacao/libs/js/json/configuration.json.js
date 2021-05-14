Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DERCA] 22 Emitir e Registrar Certificado de Conclusão de Graduação","publishDate":"16/04/2021 09:47:57","pages":[{"id":"8a4c0eea-1cdb-470b-936f-0b0d9f3e6386","name":"[DERCA] 22 Emitir e Registrar Certificado de Conclusão de Graduação","version":"1.0","author":"rene","image":"files\\diagrams\\DERCA]_22_Emitir_e_Registrar_Certificado_de_Conclusao_de_Graduacao.png","isSubprocessPage":false,"elements":[{"id":"01489ed8-34c3-4faa-807f-bab0b367f8d5","name":"[DERCA] 22 Emitir e Registrar Certificado de Conclusão de Graduação","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1585.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"a8e366f9-cdff-43fa-ae7f-6f552bce6b9f","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":170.0,"y":93.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"847d1a7e-d340-4cf6-8b7d-69622567a228","name":"Abrir processo de solicitação de  atestado de matrícula, histórico escolar e outros documentos da graduação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":284.0,"y":57.5}],"radius":0.0,"height":101.0,"width":135.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b88a1fad-fb58-4fbf-9d6f-461c31422350","name":"Incluir documento 006 - Requerimento de documentos da graduação ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":512.5,"y":73.5}],"radius":0.0,"height":69.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ee2bdb3f-cd61-4bcc-ad33-868be138b1cc","name":"Incluir em PDF documento de identificação com foto","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":519.5,"y":201.0}],"radius":0.0,"height":69.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d1a9e9a5-ffc2-49fe-aac6-3f801ab2ac61","name":"Liberar acesso externo para o interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":523.0,"y":355.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f23d7da4-a26c-4f29-9e61-1c4e20e3cd86","name":"Colher informações para confecção do certificado de conclusão de graduação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":258.0,"y":560.0}],"radius":0.0,"height":60.0,"width":163.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"79d7264f-e6e7-40a4-8aed-f1e64fb4ac85","name":"Será necessário solicitar documentos da Divisão de Arquivo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":319.5,"y":738.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"1b2131a8-153f-443e-80fa-0151bfd5c4c6","name":"[DSG] 10 Emprestar documentos","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":463.0,"y":728.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/DSG/%5bDSG%5d%2010%20Emprestar%20documentos/#diagram/6ae08946-5145-4737-8d92-b1c03ba62330","type":"url"}},{"id":"53e50133-c4e3-4feb-8eec-bacaebe1c7c5","name":"Verificar informações colhidas para confecção do certificado de conclusão de graduação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":252.0,"y":845.0}],"radius":0.0,"height":60.0,"width":175.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1ee35882-1419-4217-8816-ba0b1e8658da","name":"Informações conferem com os dados do interessado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":319.0,"y":1004.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"92588309-a54e-4554-8eed-2b062ce869b0","name":"Corrigir informações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":294.0,"y":1124.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5ce0edbc-aa5b-4f15-8822-d5f112535e58","name":"Necessário entrar em contato com o interessado para corrigir informações?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":319.0,"y":1233.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"e431a843-2c8f-4274-9a7b-6ef0bf09cb5c","name":"Entrar em contato com o interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":140.0,"y":1223.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9c88cfea-b9a3-424b-8070-fe381d9036f9","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":476.0,"y":1233.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Problema resolvidos?","elementType":"SequenceFlow","properties":[]}]},{"id":"e71f53a0-2936-42a7-96a5-29afdcb9c6a6","name":"Problema resolvidos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":612.0,"y":1233.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"246d5cf8-8cfc-4e06-99ee-95ea98f40852","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":849.0,"y":1216.0}],"radius":0.0,"height":74.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5db68296-c6c1-427d-b16f-154f8010b25f","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1030.0,"y":1223.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ba5cfc53-a2fc-4ef0-8c9c-d85e482a8959","name":"Incluir documento 146 - Certificado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":568.0,"y":994.0}],"radius":0.0,"height":60.0,"width":128.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4ba9fea1-795d-4cf6-936a-cba4a10bd6f4","name":"Registrar emissão do certificado de conclusão de graduação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":932.0,"y":994.0}],"radius":0.0,"height":60.0,"width":167.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c41eb235-6e62-4a30-a80b-8636cadb386d","name":"Guardar certificado de conclusão de graduação em local designado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":911.0,"y":853.0}],"radius":0.0,"height":60.0,"width":209.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5c5ad264-a632-45f2-aeb7-b6e4ea51f7a7","name":"Notificar interessado para retirar documento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":955.0,"y":744.0}],"radius":0.0,"height":60.0,"width":120.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"286cc4ce-d771-448e-8646-534779918f4e","name":"Incluir documento 171 - Declaração de retirada de documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":934.5,"y":605.0}],"radius":0.0,"height":87.0,"width":161.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b8b59a8d-109f-4ddd-b9d2-a48f70f0c6e7","name":"Aguardar retirada do certificado de conclusão de graduação pelo Interessado","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1000.5,"y":515.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"d5707b55-1791-4aa3-9ce6-3ab522779cbf","name":"Retirar certificado de conclusão de graduação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":952.0,"y":179.5}],"radius":0.0,"height":62.0,"width":127.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6a38a7f6-e8dd-40f5-9e95-1069b2585c77","name":"Assinar documento 171 - Declaração de retirada de documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1187.5,"y":172.0}],"radius":0.0,"height":77.0,"width":142.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f1b3f6cc-1088-46d3-b267-55a59897ce4b","name":"Enviar processo para a Divisão de Arquivo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1212.0,"y":1214.0}],"radius":0.0,"height":78.0,"width":93.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"38e5b7cd-9078-4fca-a749-4bdcbba54311","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1213.5,"y":1491.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c10ed6af-200e-405a-a297-6af38a6c09ac","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1374.0,"y":1506.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"82be3d87-1ec7-4278-8e8f-bc86758efd68","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":284.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"58ba636c-1790-4c4d-9ef6-229c502181fe","name":"DIPROT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":304.0}],"radius":0.0,"height":154.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c8bf10ce-2a54-4964-99ef-3ba6f4b37e34","name":"DIRD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":458.0}],"radius":0.0,"height":986.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c33b8fb2-8a10-4b8d-94de-85881aab7c55","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1444.0}],"radius":0.0,"height":161.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"8a4c0eea-1cdb-470b-936f-0b0d9f3e6386","containerName":"[DERCA] 22 Emitir e Registrar Certificado de Conclusão de Graduação","isSubprocess":false,"elements":[{"id":"01489ed8-34c3-4faa-807f-bab0b367f8d5","value":"[DERCA] 22 Emitir e Registrar Certificado de Conclusão de Graduação"},{"id":"82be3d87-1ec7-4278-8e8f-bc86758efd68","value":"Interessado"},{"id":"58ba636c-1790-4c4d-9ef6-229c502181fe","value":"DIPROT"},{"id":"c8bf10ce-2a54-4964-99ef-3ba6f4b37e34","value":"DIRD"},{"id":"c33b8fb2-8a10-4b8d-94de-85881aab7c55","value":"DIARQ"},{"id":"f23d7da4-a26c-4f29-9e61-1c4e20e3cd86","value":"Colher informações para confecção do certificado de conclusão de graduação"},{"id":"1ee35882-1419-4217-8816-ba0b1e8658da","value":"Informações conferem com os dados do interessado?"},{"id":"ba5cfc53-a2fc-4ef0-8c9c-d85e482a8959","value":"Incluir documento 146 - Certificado"},{"id":"e71f53a0-2936-42a7-96a5-29afdcb9c6a6","value":"Problema resolvidos?"},{"id":"c41eb235-6e62-4a30-a80b-8636cadb386d","value":"Guardar certificado de conclusão de graduação em local designado"},{"id":"4ba9fea1-795d-4cf6-936a-cba4a10bd6f4","value":"Registrar emissão do certificado de conclusão de graduação"},{"id":"b8b59a8d-109f-4ddd-b9d2-a48f70f0c6e7","value":"Aguardar retirada do certificado de conclusão de graduação pelo Interessado"},{"id":"79d7264f-e6e7-40a4-8aed-f1e64fb4ac85","value":"Será necessário solicitar documentos da Divisão de Arquivo?"},{"id":"53e50133-c4e3-4feb-8eec-bacaebe1c7c5","value":"Verificar informações colhidas para confecção do certificado de conclusão de graduação"},{"id":"1b2131a8-153f-443e-80fa-0151bfd5c4c6","value":"[DSG] 10 Emprestar documentos"},{"id":"a8e366f9-cdff-43fa-ae7f-6f552bce6b9f","value":""},{"id":"d1a9e9a5-ffc2-49fe-aac6-3f801ab2ac61","value":"Liberar acesso externo para o interessado"},{"id":"246d5cf8-8cfc-4e06-99ee-95ea98f40852","value":"Incluir documento 872 - Despacho simples"},{"id":"5db68296-c6c1-427d-b16f-154f8010b25f","value":"Comunicar interessado"},{"id":"f1b3f6cc-1088-46d3-b267-55a59897ce4b","value":"Enviar processo para a Divisão de Arquivo"},{"id":"38e5b7cd-9078-4fca-a749-4bdcbba54311","value":"Realizar tratamento arquivístico"},{"id":"c10ed6af-200e-405a-a297-6af38a6c09ac","value":""},{"id":"e431a843-2c8f-4274-9a7b-6ef0bf09cb5c","value":"Entrar em contato com o interessado"},{"id":"92588309-a54e-4554-8eed-2b062ce869b0","value":"Corrigir informações"},{"id":"5ce0edbc-aa5b-4f15-8822-d5f112535e58","value":"Necessário entrar em contato com o interessado para corrigir informações?"},{"id":"286cc4ce-d771-448e-8646-534779918f4e","value":"Incluir documento 171 - Declaração de retirada de documentos"},{"id":"5c5ad264-a632-45f2-aeb7-b6e4ea51f7a7","value":"Notificar interessado para retirar documento"},{"id":"d5707b55-1791-4aa3-9ce6-3ab522779cbf","value":"Retirar certificado de conclusão de graduação"},{"id":"6a38a7f6-e8dd-40f5-9e95-1069b2585c77","value":"Assinar documento 171 - Declaração de retirada de documentos"},{"id":"ee2bdb3f-cd61-4bcc-ad33-868be138b1cc","value":"Incluir em PDF documento de identificação com foto"},{"id":"847d1a7e-d340-4cf6-8b7d-69622567a228","value":"Abrir processo de solicitação de  atestado de matrícula, histórico escolar e outros documentos da graduação"},{"id":"b88a1fad-fb58-4fbf-9d6f-461c31422350","value":"Incluir documento 006 - Requerimento de documentos da graduação "},{"id":"9c88cfea-b9a3-424b-8070-fe381d9036f9","value":""},{"id":"ad299d99-7e29-4c56-adca-52108f351b1e"},{"id":"eed52f27-6588-49c8-bf5c-89505c38449c"},{"id":"2aeda9ac-d2b5-49db-84f9-ecbd847a0e9e"},{"id":"333c082e-d1b3-4424-b83f-3b586541ebd1"},{"id":"c2230194-ae19-46e6-a0d9-4aec6bdf1153"},{"id":"bb2d0e0b-9749-49ce-83e8-3a2d65faee0e"},{"id":"8297f555-2157-4c19-8832-142559fe6e95"},{"id":"bab238d0-6544-4cb5-a142-324ff2aa66d9"},{"id":"128202de-fa1c-470e-9edc-8c578a18af61"},{"id":"c4bc015e-2fe1-4521-bdb7-78abf516e573"},{"id":"962ff777-6c9a-4e3a-9ac1-86784eb02a76"},{"id":"a6eee096-4d7d-4f59-8daf-93fec0609f3b"},{"id":"8b7bec29-13f8-46af-825e-6574b04a6457"},{"id":"d687a082-49f6-4b5f-974c-f1f4cb19bde9"},{"id":"fa860f61-8cc1-4eee-bdd3-953cf5d8f182"},{"id":"6de8bb95-1629-4c63-a79c-429e5265530d"},{"id":"b04a0bed-3b33-4625-a463-2de82dcee566"},{"id":"4ae27904-90ba-4ee0-8af8-c4c51f5ce4a1"},{"id":"8330fc3a-68f7-4da0-96d9-aa9c61811c84"},{"id":"573a2014-2f56-4c50-b40e-ccfde7b44039"}]}]}