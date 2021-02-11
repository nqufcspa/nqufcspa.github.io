Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DCC] 09 Contratar serviços por inexigibilidade de licitação","publishDate":"11/02/2021 17:37:17","pages":[{"id":"469c598b-7fa0-4ea3-b7f8-24bcc66c0702","name":"[DCC] 09 Contratar serviços por inexigibilidade de licitação abaixo de R$ 17.600,00","version":"1.0","author":"tiagof","image":"files\\diagrams\\DCC]_09_Contratar_servicos_por_inexigibilidade_de_licitacao_abaixo_de_R_17600,00.png","isSubprocessPage":false,"elements":[{"id":"105f4eb0-abf5-44f4-a6dc-6a0f7afaef3c","name":"[DCC] 09 Contratar serviços por inexigibilidade de licitação abaixo de R$ 17.600,00","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":95.0,"y":20.0}],"radius":0.0,"height":3850.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"7174de01-611f-4c62-8bb5-f4d022b910f2","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":195.0,"y":102.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"98cecfe0-01af-4f37-a514-47d1ca2d5cd7","name":"Abrir processo de contratação de serviço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":275.0,"y":80.0}],"radius":0.0,"height":74.0,"width":122.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"78a1b53f-660f-400f-bcbc-319108d0cbd8","name":"Incluir documento 113 - Oficialização da demanda","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":510.0,"y":83.0}],"radius":0.0,"height":68.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0de8514c-f9ee-46d4-8a97-c6ad69a33aaf","name":"Incluir em PDF Proposta comercial do fornecedor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":706.0,"y":87.0}],"radius":0.0,"height":60.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"74c62071-b045-4a70-b0f8-5166841e5ff8","name":"Incluir documento 104 - Termo de referência","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":706.0,"y":194.0}],"radius":0.0,"height":65.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fb4ef98f-6d63-4329-9ca2-745bed23f8d6","name":"Incluir documento 935 - Justificativa de preço escolha de fornecedor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":706.0,"y":310.0}],"radius":0.0,"height":69.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2c975c1c-97b3-4b73-8d54-fec2b02f4ce4","name":"Fornecedor possui carta de exclusividade?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":521.0,"y":324.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"f93f6fe2-7e63-46fd-b695-8ee6e8ddbf9c","name":"Incluir em PDF carta de exclusividade do fornecedor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":350.0,"y":422.0}],"radius":0.0,"height":72.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"098b9531-4f69-4513-90cd-1079d80eb672","name":"Incluir em PDF ou ZIP orçamentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":496.0,"y":428.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"dff0be3d-8fcc-4ef8-b56c-155a50f94d5e","name":"Incluir em PDF ou ZIP notas fiscais comparativas ou documentos correlatos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":490.0,"y":522.0}],"radius":0.0,"height":86.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5a6b9f85-80c2-412b-a8ee-e0ad8c69c1a7","name":"Analisar conformidade dos documentos encaminhados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":376.0,"y":831.0}],"radius":0.0,"height":76.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8978d7ee-3bd0-48bc-900a-02bd9df10772","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":563.0,"y":849.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"d87f02e2-efa7-473f-8904-afd1592c8e38","name":"Incluir documento 191 - Parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":702.5,"y":820.3}],"radius":0.0,"height":70.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d877bc4f-ec3d-4b75-a98c-64e6d62cf984","name":"Realizar adequações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":710.0,"y":636.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9acc9a8e-13ca-4da4-9100-fc7c562777d3","name":"Fornecedor possui regularidade?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":563.0,"y":1004.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"6ba77e7c-1e75-4305-a082-4ee51eccdbfa","name":"Incluir documento 133- Notificação fornecedores","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":692.0,"y":992.0}],"radius":0.0,"height":64.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a972d3b3-3660-447a-b657-e4febedb1502","name":"Aguardando regularização do fornecedor","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":726.0,"y":1137.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"52970fe1-9a7e-47e2-87a6-18fc6e2f88a5","name":"Incluir em PDF comprovantes de regularidade e de habilitação ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":531.5,"y":1107.0}],"radius":0.0,"height":90.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3471d480-f89a-4571-9e07-4897115b61d4","name":"Analisar pertinência da aquisição","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":407.0,"y":2156.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fe7e352e-7162-44b2-b1a9-5128ac865e7e","name":"Incluir documento 036 - Análise e deliberação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":546.0,"y":2154.5}],"radius":0.0,"height":65.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9592a2a8-28b6-4f8b-b7d9-c0fed986fa12","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":582.0,"y":2246.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"e783c1ea-1ee3-4808-9808-085b118272eb","name":"Analisar e deliberar   acerca da aprovação da despesa","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":217.0,"y":2386.8}],"radius":0.0,"height":72.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"adae86f4-3be2-4dc3-9799-83139763ce14","name":"Despesa aprovada?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":417.0,"y":2402.8}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"b9298b8d-49df-49cf-8801-d3f29a7d2279","name":"Incluir documento  112 - Aprovação despesa, projeto básico e TR","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":385.0,"y":2567.8}],"radius":0.0,"height":77.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"12463dae-575e-4995-b3a1-25d76e2a12a9","name":"Incluir em PDF portaria de delegação de competências","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":392.0,"y":2705.8}],"radius":0.0,"height":68.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a4cc29de-a7d9-45a3-b734-95fe808ee1ef","name":"Incluir documento 830 - Classificação contábil","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":379.0,"y":2875.8}],"radius":0.0,"height":68.0,"width":116.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"70b56d8f-044a-433c-9fd2-0a7d027407d5","name":"Incluir documento 836 -  Disponibilidade orçamentária","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":378.0,"y":3091.0}],"radius":0.0,"height":80.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"84dae0e6-652f-44a4-bd3d-e815684e9ea6","name":"Dar ciência no processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":764.0,"y":1275.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0fcdeee5-1e6c-403f-a62b-a1f43bc11639","name":"Haverá formalização de Contrato?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":900.0,"y":1285.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Incluir documento 130 - check list AGU ","elementType":"SequenceFlow","properties":[]}]},{"id":"c1ae9651-4c1f-4758-8d23-5d9f3f7b3e63","name":"Incluir documento 108 - Minuta de contrato","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":876.0,"y":1443.0}],"radius":0.0,"height":66.0,"width":88.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"74607d6e-6a80-4587-80f5-3ed283a99f89","name":"Incluir documento 130 - check list AGU ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1100.0,"y":1275.0}],"radius":0.0,"height":60.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f74876ff-0234-4779-8f3a-02af0c779993","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1280.0,"y":1272.0}],"radius":0.0,"height":66.0,"width":93.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"39369e06-7bc8-4604-97f8-300b530d8df6","name":"Incluir documento 940 - Termo de autorização ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1275.5,"y":2448.8}],"radius":0.0,"height":66.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"25740f94-f251-446b-a6f8-b3498b728a03","name":"Incluir Documento 998 - Despacho de ratificação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1274.0,"y":3582.8}],"radius":0.0,"height":67.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"13ba84a5-8867-451b-ac18-dcac9d2568ae","name":"Incluir em PDF comprovante de divulgação no Comprasnet","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1538.0,"y":1222.0}],"radius":0.0,"height":70.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"97f8b7b6-64ee-47d1-bf10-9984b2a74985","name":" Incluir documento 986 - Nota de empenho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1811.0,"y":3239.8}],"radius":0.0,"height":60.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2882dd4c-2922-47c1-96d7-01c165dc46ef","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":2068.0,"y":3249.8}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"496d92cf-ea4c-45ea-977b-6601423252d5","name":"Nenhum evento","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":2073.0,"y":2721.8}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"a4f46b8b-f11b-42a8-9f5f-208e5b3a2dce","name":"Nenhum evento","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":2135.0,"y":2907.8}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"9c8fc963-0dac-41f4-8f46-e02773c051da","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":2337.0,"y":3249.8}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"dc46ce33-57fb-4b6d-beb4-f23c683238f7","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2557.0,"y":994.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"d699ad09-c3d8-4718-81e6-4d33e8dc11a1","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2525.5,"y":1178.0}],"radius":0.0,"height":64.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"440702c9-260f-4cab-8312-c394a48f3221","name":"[DCC] 11 Formalizar contrato para prestação de serviços","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2532.0,"y":1435.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DCC/DCC%2011%20Formalizar%20contrato%20para%20presta%C3%A7%C3%A3o%20de%20servi%C3%A7os/#list","type":"url"}},{"id":"cda9fb96-13f2-455e-81df-edca17b66385","name":"Contrato será de execução  continuada?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2687.0,"y":1445.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"9036b63c-d48e-4e40-b228-1fcd1cbd58dc","name":"[DCC] 12 Fiscalizar prestação de serviços continuados","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2662.0,"y":1745.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/DCC/%5bDCC%5d%2012%20Fiscalizar%20presta%c3%a7%c3%a3o%20de%20servi%c3%a7os%20continuados%20%20%20%20%20%20/#list","type":"url"}},{"id":"72fafa83-13a1-46b3-9876-91bf9bcf7169","name":"Será necessária alteração contratual?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2808.0,"y":1755.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"9f552a80-adfd-414f-9d04-ef289d54fbdd","name":"Anexar processo de fiscalização","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2778.0,"y":1857.0}],"radius":0.0,"height":63.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2a8fd1d7-26d8-46e9-9139-e9df3d158459","name":"Contrato vigente?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2808.0,"y":1956.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"2ebd4ac5-ce14-4dd3-bfbf-166c6590447e","name":"Incluir documento 036 - Análise e deliberação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2966.0,"y":1743.0}],"radius":0.0,"height":64.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3e895ed2-36c5-436b-84d3-fe1e258cf450","name":"Incluir em PDF demais documentos necessários","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3291.5,"y":1739.5}],"radius":0.0,"height":73.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9353d555-53b7-4aee-b332-2b17c394b6f1","name":"[ DCC] 30 Formalizar aditivos e apostilamentos","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":3298.0,"y":1435.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[]},{"id":"0192ad5e-3151-4111-beee-5e1dc21b09f9","name":"Contrato de execução  continuada?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":3009.0,"y":1445.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"2d434f89-890c-48d6-ae07-e693c85df6b5","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2819.0,"y":1433.0}],"radius":0.0,"height":64.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"75d064ec-6b25-4e50-b163-1ce351fb83b4","name":"[DCC] 28 Fiscalizar prestação de serviços simplificado","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2903.0,"y":502.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/DCC/%5bDCC%5d%2028%20Fiscalizar%20presta%c3%a7%c3%a3o%20de%20servi%c3%a7os%20simplificados/#list","type":"url"}},{"id":"1c835d4f-c1e5-41c3-b93e-3a318adecaae","name":"Será necessária alteração contratual?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":3076.0,"y":512.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"b019a283-cea3-4e7a-9cc1-17911ab813aa","name":"Incluir documento 036 - Análise e deliberação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3176.0,"y":500.0}],"radius":0.0,"height":64.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5f2829d6-6c96-499d-8c31-7c0ff8a3240c","name":"Incluir em PDF demais documentos necessários","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3319.0,"y":494.5}],"radius":0.0,"height":77.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fd018831-af13-41dc-b661-99cfaad0b832","name":"Anexar processo de fiscalização","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3046.0,"y":615.0}],"radius":0.0,"height":63.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"670f4fbd-1b73-4096-9273-761211f64f6a","name":"Enviar  documentos pertinentes  ao fornecedor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2518.0,"y":815.0}],"radius":0.0,"height":74.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3574c24e-b897-4a5a-9658-92c4a996095a","name":"Incluir em PDF comprovantes de recebimento de e-mail","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2713.0,"y":812.0}],"radius":0.0,"height":80.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6d1e9317-32f4-4503-93bd-013bf54b0872","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":584.0,"y":2389.8}],"radius":0.0,"height":66.0,"width":93.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8b44c212-5378-4e14-8216-6cf18c351b67","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3036.0,"y":3771.49976}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a6d8c1cd-fc6b-43c3-8bce-da21c78c051a","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":3186.0,"y":3786.49976}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"77a63e51-d22e-4fe0-93f8-64ffe26cefe7","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":145.0,"y":20.0}],"radius":0.0,"height":696.6,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"ca93b1b0-2150-4304-b3b6-fbd014ac6545","name":"DCC","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":145.0,"y":716.6}],"radius":0.0,"height":645.8,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6179f889-8fa3-4e13-bc4e-e1fa22647f7c","name":"DICONT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":145.0,"y":1362.3999}],"radius":0.0,"height":244.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"9555b580-21ff-4bd7-991e-314b617bb723","name":"GESTOR DE EXECUÇÃO","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":145.0,"y":1606.3999}],"radius":0.0,"height":499.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"b23337bf-5fd7-4f00-8eeb-23ecee15cfeb","name":"Pró-Reitoria Competente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":145.0,"y":2105.4}],"radius":0.0,"height":240.6,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"088fa2d1-9b99-4cda-badb-355b5f25643f","name":"PROAD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":145.0,"y":2346.0}],"radius":0.0,"height":485.7,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"3b5c0737-4caf-4853-bc74-0575e51351d6","name":"DCF","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":145.0,"y":2831.7}],"radius":0.0,"height":198.8,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"4aacde64-c2d8-45d1-a6e9-258a4e158da8","name":"DEO","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":145.0,"y":3030.5}],"radius":0.0,"height":496.1,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"ab70534d-affc-42f9-9d78-d81ad0138b09","name":"REITORIA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":145.0,"y":3526.6}],"radius":0.0,"height":167.4,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0c863bee-79ac-4bc5-827f-423c39cc706c","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":145.0,"y":3694.0}],"radius":0.0,"height":176.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"469c598b-7fa0-4ea3-b7f8-24bcc66c0702","containerName":"[DCC] 09 Contratar serviços por inexigibilidade de licitação abaixo de R$ 17.600,00","isSubprocess":false,"elements":[{"id":"105f4eb0-abf5-44f4-a6dc-6a0f7afaef3c","value":"[DCC] 09 Contratar serviços por inexigibilidade de licitação abaixo de R$ 17.600,00"},{"id":"77a63e51-d22e-4fe0-93f8-64ffe26cefe7","value":"Interessado"},{"id":"ca93b1b0-2150-4304-b3b6-fbd014ac6545","value":"DCC"},{"id":"6179f889-8fa3-4e13-bc4e-e1fa22647f7c","value":"DICONT"},{"id":"9555b580-21ff-4bd7-991e-314b617bb723","value":"GESTOR DE EXECUÇÃO"},{"id":"b23337bf-5fd7-4f00-8eeb-23ecee15cfeb","value":"Pró-Reitoria Competente"},{"id":"088fa2d1-9b99-4cda-badb-355b5f25643f","value":"PROAD"},{"id":"3b5c0737-4caf-4853-bc74-0575e51351d6","value":"DCF"},{"id":"4aacde64-c2d8-45d1-a6e9-258a4e158da8","value":"DEO"},{"id":"ab70534d-affc-42f9-9d78-d81ad0138b09","value":"REITORIA"},{"id":"0c863bee-79ac-4bc5-827f-423c39cc706c","value":"DIARQ"},{"id":"7174de01-611f-4c62-8bb5-f4d022b910f2","value":""},{"id":"98cecfe0-01af-4f37-a514-47d1ca2d5cd7","value":"Abrir processo de contratação de serviço"},{"id":"78a1b53f-660f-400f-bcbc-319108d0cbd8","value":"Incluir documento 113 - Oficialização da demanda"},{"id":"74c62071-b045-4a70-b0f8-5166841e5ff8","value":"Incluir documento 104 - Termo de referência"},{"id":"5a6b9f85-80c2-412b-a8ee-e0ad8c69c1a7","value":"Analisar conformidade dos documentos encaminhados"},{"id":"8978d7ee-3bd0-48bc-900a-02bd9df10772","value":""},{"id":"d877bc4f-ec3d-4b75-a98c-64e6d62cf984","value":"Realizar adequações"},{"id":"3471d480-f89a-4571-9e07-4897115b61d4","value":"Analisar pertinência da aquisição"},{"id":"9592a2a8-28b6-4f8b-b7d9-c0fed986fa12","value":""},{"id":"fe7e352e-7162-44b2-b1a9-5128ac865e7e","value":"Incluir documento 036 - Análise e deliberação"},{"id":"a4cc29de-a7d9-45a3-b734-95fe808ee1ef","value":"Incluir documento 830 - Classificação contábil"},{"id":"70b56d8f-044a-433c-9fd2-0a7d027407d5","value":"Incluir documento 836 -  Disponibilidade orçamentária"},{"id":"e783c1ea-1ee3-4808-9808-085b118272eb","value":"Analisar e deliberar   acerca da aprovação da despesa"},{"id":"84dae0e6-652f-44a4-bd3d-e815684e9ea6","value":"Dar ciência no processo"},{"id":"97f8b7b6-64ee-47d1-bf10-9984b2a74985","value":" Incluir documento 986 - Nota de empenho"},{"id":"2882dd4c-2922-47c1-96d7-01c165dc46ef","value":""},{"id":"496d92cf-ea4c-45ea-977b-6601423252d5","value":""},{"id":"a4f46b8b-f11b-42a8-9f5f-208e5b3a2dce","value":""},{"id":"3574c24e-b897-4a5a-9658-92c4a996095a","value":"Incluir em PDF comprovantes de recebimento de e-mail"},{"id":"adae86f4-3be2-4dc3-9799-83139763ce14","value":"Despesa aprovada?"},{"id":"6d1e9317-32f4-4503-93bd-013bf54b0872","value":"Incluir documento 872 - Despacho simples"},{"id":"b9298b8d-49df-49cf-8801-d3f29a7d2279","value":"Incluir documento  112 - Aprovação despesa, projeto básico e TR"},{"id":"0fcdeee5-1e6c-403f-a62b-a1f43bc11639","value":"Haverá formalização de Contrato?"},{"id":"c1ae9651-4c1f-4758-8d23-5d9f3f7b3e63","value":"Incluir documento 108 - Minuta de contrato"},{"id":"fb4ef98f-6d63-4329-9ca2-745bed23f8d6","value":"Incluir documento 935 - Justificativa de preço escolha de fornecedor"},{"id":"f93f6fe2-7e63-46fd-b695-8ee6e8ddbf9c","value":"Incluir em PDF carta de exclusividade do fornecedor"},{"id":"74607d6e-6a80-4587-80f5-3ed283a99f89","value":"Incluir documento 130 - check list AGU "},{"id":"39369e06-7bc8-4604-97f8-300b530d8df6","value":"Incluir documento 940 - Termo de autorização "},{"id":"25740f94-f251-446b-a6f8-b3498b728a03","value":"Incluir Documento 998 - Despacho de ratificação"},{"id":"9c8fc963-0dac-41f4-8f46-e02773c051da","value":""},{"id":"670f4fbd-1b73-4096-9273-761211f64f6a","value":"Enviar  documentos pertinentes  ao fornecedor"},{"id":"13ba84a5-8867-451b-ac18-dcac9d2568ae","value":"Incluir em PDF comprovante de divulgação no Comprasnet"},{"id":"dc46ce33-57fb-4b6d-beb4-f23c683238f7","value":""},{"id":"440702c9-260f-4cab-8312-c394a48f3221","value":"[DCC] 11 Formalizar contrato para prestação de serviços"},{"id":"75d064ec-6b25-4e50-b163-1ce351fb83b4","value":"[DCC] 28 Fiscalizar prestação de serviços simplificado"},{"id":"dff0be3d-8fcc-4ef8-b56c-155a50f94d5e","value":"Incluir em PDF ou ZIP notas fiscais comparativas ou documentos correlatos"},{"id":"d87f02e2-efa7-473f-8904-afd1592c8e38","value":"Incluir documento 191 - Parecer"},{"id":"8b44c212-5378-4e14-8216-6cf18c351b67","value":"Realizar tratamento arquivístico"},{"id":"a6d8c1cd-fc6b-43c3-8bce-da21c78c051a","value":""},{"id":"0de8514c-f9ee-46d4-8a97-c6ad69a33aaf","value":"Incluir em PDF Proposta comercial do fornecedor"},{"id":"098b9531-4f69-4513-90cd-1079d80eb672","value":"Incluir em PDF ou ZIP orçamentos"},{"id":"12463dae-575e-4995-b3a1-25d76e2a12a9","value":"Incluir em PDF portaria de delegação de competências"},{"id":"6ba77e7c-1e75-4305-a082-4ee51eccdbfa","value":"Incluir documento 133- Notificação fornecedores"},{"id":"52970fe1-9a7e-47e2-87a6-18fc6e2f88a5","value":"Incluir em PDF comprovantes de regularidade e de habilitação "},{"id":"9acc9a8e-13ca-4da4-9100-fc7c562777d3","value":"Fornecedor possui regularidade?"},{"id":"a972d3b3-3660-447a-b657-e4febedb1502","value":"Aguardando regularização do fornecedor"},{"id":"fd018831-af13-41dc-b661-99cfaad0b832","value":"Anexar processo de fiscalização"},{"id":"5f2829d6-6c96-499d-8c31-7c0ff8a3240c","value":"Incluir em PDF demais documentos necessários"},{"id":"b019a283-cea3-4e7a-9cc1-17911ab813aa","value":"Incluir documento 036 - Análise e deliberação"},{"id":"1c835d4f-c1e5-41c3-b93e-3a318adecaae","value":"Será necessária alteração contratual?"},{"id":"72fafa83-13a1-46b3-9876-91bf9bcf7169","value":"Será necessária alteração contratual?"},{"id":"2ebd4ac5-ce14-4dd3-bfbf-166c6590447e","value":"Incluir documento 036 - Análise e deliberação"},{"id":"2a8fd1d7-26d8-46e9-9139-e9df3d158459","value":"Contrato vigente?"},{"id":"9f552a80-adfd-414f-9d04-ef289d54fbdd","value":"Anexar processo de fiscalização"},{"id":"0192ad5e-3151-4111-beee-5e1dc21b09f9","value":"Contrato de execução  continuada?"},{"id":"cda9fb96-13f2-455e-81df-edca17b66385","value":"Contrato será de execução  continuada?"},{"id":"9036b63c-d48e-4e40-b228-1fcd1cbd58dc","value":"[DCC] 12 Fiscalizar prestação de serviços continuados"},{"id":"9353d555-53b7-4aee-b332-2b17c394b6f1","value":"[ DCC] 30 Formalizar aditivos e apostilamentos"},{"id":"3e895ed2-36c5-436b-84d3-fe1e258cf450","value":"Incluir em PDF demais documentos necessários"},{"id":"2d434f89-890c-48d6-ae07-e693c85df6b5","value":"Incluir documento 872 - Despacho simples"},{"id":"d699ad09-c3d8-4718-81e6-4d33e8dc11a1","value":"Incluir documento 872 - Despacho simples"},{"id":"f74876ff-0234-4779-8f3a-02af0c779993","value":"Incluir documento 872 - Despacho simples"},{"id":"2c975c1c-97b3-4b73-8d54-fec2b02f4ce4","value":"Fornecedor possui carta de exclusividade?"},{"id":"d88f9127-8f0e-4489-9c5c-555330ebec71"},{"id":"cf85a97f-fb0e-4f14-8d28-c0efdd02b77d"},{"id":"0b33d04f-a6c5-4b81-aafc-b1910ed68716"},{"id":"6e089b4a-a5ac-400a-ae5c-2297551e8c2c"},{"id":"beba76ac-baae-416a-a6cb-c5807f59a447"},{"id":"26d58fa0-fac6-47ab-be20-debab30aa9d5"},{"id":"64db3f94-06ee-4443-907d-78c360f07412"},{"id":"affd77e8-0d87-4de8-8415-9741b69ca2c7"},{"id":"a1231d70-d09d-48c5-b539-6c8e624d2411"},{"id":"2a6af8fb-e4a5-4e20-96f4-9c7f3d993669"},{"id":"a4c3cdb3-5ded-4a39-9f71-105cc76272ce"},{"id":"2fc3b302-46a1-4e11-9228-0fc7e3d2b25b"},{"id":"27fbaad9-2b0e-4ede-a9e4-5b886b3982fc"},{"id":"9347016e-379d-4751-a547-630687635b4e"},{"id":"4cf2f1af-dba4-4cb8-8997-2acd6c94e563"},{"id":"0e1620cf-84b9-48c5-a920-6763eabab3c9"},{"id":"dbbb0e97-a772-4c81-aa9b-d6ca4f5c07d1"},{"id":"e9ddbc5e-d8d8-4a1c-8735-f2e7b4f2e3ae"},{"id":"578d5dd8-7b1f-4765-8750-94b64f0b9152"},{"id":"88ff31a4-cb10-4694-b908-6b27cf839fb9"},{"id":"8635df94-f652-4286-a4f1-3eedc2c2964f"},{"id":"d4ef1abe-bba4-4322-a90c-14749bda6e96"},{"id":"a1e23d58-56af-452b-b35e-6ab50553cbe2"},{"id":"67148bd1-0ebf-463f-9983-97c6aa662987"},{"id":"90fe3d5c-cf7b-4443-b9f9-6ba66ca4e2ae"},{"id":"587d4380-4bf8-4835-a7f3-035380f92494"},{"id":"9569ab0a-9812-41b7-b9c8-74026d65f43c"},{"id":"338972fe-b071-4e86-9285-99fcdd534366"},{"id":"43aaf041-92db-4e5d-a0fa-3cc92d92d1e1"},{"id":"ee4fc2ae-6cc6-4194-ac0d-b2f0e1b6f781"},{"id":"581ee61c-75bd-47c4-81cc-5847c47a5bea"},{"id":"9f4bf2b4-8ea8-4a91-a63b-9f2e1093d832"},{"id":"baf82755-872f-49b8-baa3-c82d71d3017b"},{"id":"d1f3a0c5-86dc-463f-adba-d54c690cd4c2"},{"id":"00a5f68a-a8ad-4e52-a17a-6d72c00a5410"}]}]}